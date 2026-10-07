import { extractText, getDocumentProxy } from "unpdf";

export const calendarIndex = "https://old26.gtu.ac.in/AcademicCal.aspx";
const snapshot = {
  semester: 7,
  start: "2026-07-03",
  end: "2026-10-14",
  examEnd: "2026-12-21",
  result: "2027-02-16",
  source:
    "https://s3-ap-southeast-1.amazonaws.com/gtusitecirculars/uploads/Final-Academic%20Calendar%20AY%202026-27%20-%20Odd%20Term_224213.pdf",
  published: "2026-05-21",
};
const dateToken = "[0-9ltIroOsS]{2}[-.][0-9ltIroOsS]{2}[-.][0-9]{4}";

function isoDate(value) {
  const corrected = value
    .replace(/[ltIr]/g, "1")
    .replace(/[oO]/g, "0")
    .replace(/[sS]/g, "5");
  const [day, month, year] = corrected.split(/[-.]/).map(Number);
  const iso = `${year}-${String(month).padStart(2, "0")}-${String(day).padStart(2, "0")}`;
  const date = new Date(iso + "T00:00:00Z");
  return Number.isFinite(date.getTime()) &&
    date.toISOString().slice(0, 10) === iso
    ? iso
    : null;
}

export function calendarLinks(html) {
  const links = [];
  const pattern =
    /<a\b[^>]*href=['"](https:\/\/s3-ap-southeast-1\.amazonaws\.com\/gtusitecirculars\/uploads\/[^'"]+)['"][^>]*>([^<]+)<\/a>/gi;
  for (const match of html.matchAll(pattern)) {
    const title = match[2].replace(/&amp;/g, "&").trim();
    if (!/academic\s+calend[ae]r/i.test(title) || !/2026\s*-\s*27/.test(title))
      continue;
    if (/semester\s*-?\s*[12]\b|bi-annual|part\s*time|PDDC|pharm/i.test(title))
      continue;
    if (
      /Diploma|MBA|Architecture/i.test(title) &&
      !/Bachelor of Engineering/i.test(title)
    )
      continue;
    const tail = html.slice(
      match.index + match[0].length,
      match.index + match[0].length + 220,
    );
    const stamp = tail.match(/(\d{2})-([A-Za-z]{3})-(\d{4})/);
    if (!stamp) continue;
    const published = new Date(`${stamp[2]} ${stamp[1]}, ${stamp[3]} UTC`);
    if (!Number.isFinite(published.getTime())) continue;
    const url = new URL(match[1].replace(/&amp;/g, "&")).href;
    if (!url.toLowerCase().endsWith(".pdf")) continue;
    links.push({ url, title, published: published.toISOString().slice(0, 10) });
  }
  return links
    .sort((a, b) => b.published.localeCompare(a.published))
    .slice(0, 8);
}

export function parseEngineeringTerms(text, source, published) {
  if (!/2026\s*-\s*27/.test(text)) return [];
  const pattern = new RegExp(
    `Bachelor\\s+of\\s+Engineering([\\s\\S]{0,140}?)\\s([78])\\s+(${dateToken})\\s+(${dateToken})\\s+(${dateToken})\\s+(${dateToken})\\s+(${dateToken})`,
    "gi",
  );
  const terms = [];
  for (const match of text.matchAll(pattern)) {
    if (/Bachelor|Master|Diploma|PDDC/i.test(match[1])) continue;
    const semester = Number(match[2]);
    const [start, end, examStart, examEnd, result] = match
      .slice(3)
      .map(isoDate);
    if (![start, end, examStart, examEnd, result].every(Boolean)) continue;
    // Only this student's final-year cohort, with sane ordered dates.
    const validStart =
      semester === 7
        ? start.startsWith("2026")
        : /^(2026|2027)-/.test(start) && start > snapshot.end;
    if (
      !validStart ||
      !(
        start < end &&
        end <= examStart &&
        examStart <= examEnd &&
        examEnd <= result
      )
    )
      continue;
    if ((new Date(result) - new Date(start)) / 86400000 > 370) continue;
    terms.push({ semester, start, end, examEnd, result, source, published });
  }
  return terms;
}

export function resolveAcademicStatus(terms, now = new Date()) {
  const today = new Intl.DateTimeFormat("en-CA", {
    timeZone: "Asia/Kolkata",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  }).format(now);
  const latest = new Map([[7, snapshot]]);
  for (const term of terms) {
    if (term.semester !== 7 && term.semester !== 8) continue;
    if (
      !latest.has(term.semester) ||
      term.published >= latest.get(term.semester).published
    )
      latest.set(term.semester, term);
  }
  const active = [...latest.values()]
    .filter((term) => term.start <= today && today <= term.result)
    .sort((a, b) => b.semester - a.semester)[0];
  if (active) {
    const confirmed = active.semester === 7;
    return {
      semester: active.semester,
      label: confirmed
        ? "Currently in Semester 7"
        : "Semester 8 · GTU academic term",
      intro: confirmed
        ? "I’m a seventh-semester Computer Science & Engineering student at GEC Patan (GTU)."
        : "I study Computer Science & Engineering at GEC Patan (GTU), in the Semester 8 academic term.",
      source: active.source,
    };
  }
  return {
    semester: null,
    label: "BE · 2027 cohort",
    intro:
      "My academic background is Computer Science & Engineering at GEC Patan (GTU), in the 2027 cohort.",
    source: calendarIndex,
  };
}

async function boundedFetch(url, limit, fetcher) {
  const response = await fetcher(url, {
    redirect: "error",
    signal: AbortSignal.timeout(8000),
  });
  if (!response.ok || !response.body) throw new Error("Calendar unavailable");
  const reader = response.body.getReader();
  let size = 0;
  const chunks = [];
  try {
    for (;;) {
      const { value, done } = await reader.read();
      if (done) break;
      size += value.byteLength;
      if (size > limit) throw new Error("Calendar exceeds size limit");
      chunks.push(value);
    }
  } finally {
    await reader.cancel();
  }
  const bytes = new Uint8Array(size);
  let offset = 0;
  for (const chunk of chunks) {
    bytes.set(chunk, offset);
    offset += chunk.byteLength;
  }
  return bytes;
}

export async function loadEngineeringTerms(fetcher = fetch) {
  const html = new TextDecoder().decode(
    await boundedFetch(calendarIndex, 1_000_000, fetcher),
  );
  const terms = [];
  for (const link of calendarLinks(html)) {
    try {
      const bytes = await boundedFetch(link.url, 4_000_000, fetcher);
      if (new TextDecoder().decode(bytes.slice(0, 5)) !== "%PDF-") continue;
      const pdf = await getDocumentProxy(bytes, {
        isEvalSupported: false,
        maxImageSize: 1_000_000,
      });
      try {
        if (pdf.numPages > 10) continue;
        const { text } = await extractText(pdf, { mergePages: true });
        terms.push(...parseEngineeringTerms(text, link.url, link.published));
      } finally {
        await pdf.loadingTask.destroy();
      }
    } catch {
      /* A malformed or unrelated notice must not overwrite a valid term. */
    }
  }
  if (!terms.length) throw new Error("No verified BE final-year term found");
  return terms;
}
