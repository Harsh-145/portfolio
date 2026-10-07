import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import { test } from "node:test";
import {
  calendarLinks,
  parseEngineeringTerms,
  resolveAcademicStatus,
  loadEngineeringTerms,
} from "../src/lib/academic-calendar.mjs";

const oddText = await readFile(
  new URL("./fixtures/gtu-odd-2026.txt", import.meta.url),
  "utf8",
);
const index = await readFile(
  new URL("./fixtures/gtu-index.html", import.meta.url),
  "utf8",
);
const odd = parseEngineeringTerms(oddText, "official-odd-pdf", "2026-05-21");
const evenText =
  "ACADEMIC CALENDAR 2026-27 EVEN TERM\nBachelor of Engineering / BE (Working Professionals) 8 04-01-2027 30-04-2027 10-05-2027 20-06-2027 20-07-2027";
// Synthetic future dates test transitions; they are NOT a GTU-published calendar.
const even = parseEngineeringTerms(evenText, "synthetic-fixture", "2026-12-01");

test("official index finds the general calendar and BE amendment, newest first", () => {
  const links = calendarLinks(index);
  assert.equal(links.length, 2);
  assert.equal(links[0].published, "2026-06-10");
  assert.ok(links[1].url.endsWith("Odd%20Term_224213.pdf"));
  assert.equal(
    calendarLinks(index.replaceAll("gtusitecirculars", "untrusted-bucket"))
      .length,
    0,
  );
});
test("actual OCR output selects BE Semester 7, excluding diploma and other semesters", () => {
  assert.equal(odd.length, 1);
  assert.equal(odd[0].semester, 7);
  assert.equal(odd[0].start, "2026-07-03");
  assert.equal(odd[0].end, "2026-10-14");
  assert.equal(odd[0].result, "2027-02-16");
});
test("malformed, unrelated, wrongly ordered and wrong-year dates cannot advance the term", () => {
  for (const invalid of [
    evenText.replace("04-01-2027", "40-01-2027"),
    evenText.replace("04-01-2027", "04-01-2028"),
    evenText.replace("30-04-2027", "30-12-2027"),
    evenText.replace("Bachelor of Engineering", "Diploma in Engineering"),
    evenText.replace("2026-27", "2025-26"),
  ]) {
    assert.equal(
      parseEngineeringTerms(invalid, "fixture", "2026-12-01").length,
      0,
    );
  }
});
test("semester stays 7 through exams and does not advance before a published start", () => {
  assert.equal(
    resolveAcademicStatus([...odd, ...even], new Date("2026-12-31T12:00:00Z"))
      .semester,
    7,
  );
  assert.equal(
    resolveAcademicStatus([...odd, ...even], new Date("2027-01-03T18:29:59Z"))
      .semester,
    7,
  );
});
test("transition uses India date at midnight and labels scheduled status", () => {
  const next = resolveAcademicStatus(
    [...odd, ...even],
    new Date("2027-01-03T18:30:00Z"),
  );
  assert.equal(next.semester, 8);
  assert.equal(next.label, "Semester 8 · GTU academic term");
  assert.equal(next.source, "synthetic-fixture");
});
test("newer valid amendment wins without unrelated notices changing the semester", () => {
  const revised = { ...even[0], start: "2027-01-18", published: "2027-01-01" };
  assert.equal(
    resolveAcademicStatus(
      [...odd, revised, ...even],
      new Date("2027-01-10T12:00:00Z"),
    ).semester,
    7,
  );
});
test("offline fallback expires and never invents graduation or Semester 9", () => {
  assert.equal(
    resolveAcademicStatus([], new Date("2026-10-07T12:00:00Z")).semester,
    7,
  );
  const expired = resolveAcademicStatus([], new Date("2027-02-17T12:00:00Z"));
  assert.equal(expired.semester, null);
  assert.equal(expired.label, "BE · 2027 cohort");
  assert.equal(
    resolveAcademicStatus(even, new Date("2028-01-01T12:00:00Z")).semester,
    null,
  );
});
test("failed or changed upstream data rejects to the caller's safe fallback", async () => {
  await assert.rejects(
    loadEngineeringTerms(async () => new Response("offline", { status: 503 })),
  );
  await assert.rejects(
    loadEngineeringTerms(async () => new Response("new layout")),
  );
  await assert.rejects(
    loadEngineeringTerms(async () => new Response("x".repeat(1_000_001))),
  );
});

test("a general even-term title and December start remain eligible without a guessed January boundary", () => {
  const simple = `<a href="https://s3-ap-southeast-1.amazonaws.com/gtusitecirculars/uploads/even.pdf">Academic Calendar for A.Y. 2026-27 (Even Term)</a><p>01-Dec-2026</p>`;
  assert.equal(calendarLinks(simple).length, 1);
  const december = parseEngineeringTerms(
    evenText.replace("04-01-2027", "23-12-2026"),
    "synthetic-fixture",
    "2026-12-01",
  );
  assert.equal(december.length, 1);
  assert.equal(
    resolveAcademicStatus(december, new Date("2026-12-23T12:00:00Z")).semester,
    8,
  );
});
