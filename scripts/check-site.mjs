import assert from "node:assert/strict";
import { test } from "node:test";
const origin = process.argv[2] || "http://localhost:3100";
const publicOrigin = process.env.SITE_URL || "https://harshaydv.netlify.app";
const homeResponse = await fetch(origin);
const home = await homeResponse.text();
const routes = [
  ...new Set(
    [...home.matchAll(/href="(\/projects\/[^"#?]+)"/g)].map(
      (match) => match[1],
    ),
  ),
];
await test("homepage succeeds and exposes the reviewed project set", () => {
  assert.equal(homeResponse.status, 200);
  assert.equal(routes.length, 7);
  assert.match(home, /8\.37\/10/);
  assert.match(home, /17 July 2026/);
  assert.match(home, /through Semester 6/);
  assert.match(
    home,
    /Currently in Semester 7|Semester 8 · GTU academic term|BE · 2027 cohort/,
  );
  assert.doesNotMatch(home, /<img[^>]+harsh-yadav/);
  assert.doesNotMatch(home, /Technologies Mastered|8\.65\/10|R² of 0\.8/);
});
for (const route of ["/", ...routes]) {
  await test(`rendered content, metadata, and structured data: ${route}`, async () => {
    const response = await fetch(origin + route);
    assert.equal(response.status, 200);
    const html = await response.text();
    assert.equal([...html.matchAll(/<h1(?:\s|>)/g)].length, 1);
    assert.equal([...html.matchAll(/<main(?:\s|>)/g)].length, 1);
    assert.match(html, /id="main-content"/);
    assert.match(html, /Skip to main content/);
    const canonical = html.match(/<link rel="canonical" href="([^"]+)"/);
    assert.ok(canonical);
    assert.equal(new URL(canonical[1]).href, new URL(route, publicOrigin).href);
    assert.match(html, /name="description" content="[^"]+"/);
    assert.match(html, /property="og:image" content="https:\/\//);
    assert.match(html, /name="twitter:card" content="summary_large_image"/);
    const structured = [
      ...html.matchAll(
        /<script type="application\/ld\+json">([^<]+)<\/script>/g,
      ),
    ].map((match) => JSON.parse(match[1]));
    assert.equal(structured.length, 1);
    assert.equal(structured[0]["@context"], "https://schema.org");
    if (route === "/") assert.equal(structured[0]["@type"], "ProfilePage");
    else
      assert.equal(structured[0]["@graph"][0]["@type"], "SoftwareSourceCode");
    assert.equal(response.headers.get("x-content-type-options"), "nosniff");
    assert.equal(response.headers.get("x-frame-options"), "DENY");
    assert.equal(response.headers.get("x-powered-by"), null);
    for (const match of html.matchAll(/<a[^>]+href="#[^"]+"/g)) {
      const id = match[0].match(/href="#([^"]+)"/)[1];
      assert.ok(html.includes(`id="${id}"`), `Missing anchor target ${id}`);
    }
  });
}
await test("unknown pages return a real 404 with recovery navigation", async () => {
  for (const path of ["/this-page-does-not-exist", "/projects/missing"]) {
    const response = await fetch(origin + path);
    assert.equal(response.status, 404);
    const html = await response.text();
    assert.match(html, /Back to home/);
    assert.match(html, /noindex/);
  }
});
await test("crawler files list all case studies and the correct origin", async () => {
  const sitemap = await fetch(origin + "/sitemap.xml");
  assert.equal(sitemap.status, 200);
  const xml = await sitemap.text();
  assert.equal([...xml.matchAll(/<loc>/g)].length, 8);
  for (const route of routes) assert.ok(xml.includes(publicOrigin + route));
  const robots = await fetch(origin + "/robots.txt");
  assert.equal(robots.status, 200);
  assert.match(await robots.text(), /Sitemap: https:\/\/.+\/sitemap.xml/);
});
await test("resume, portrait, favicon, and share image are usable", async () => {
  const pdf = await fetch(origin + "/resume/Harsh_Yadav_Resume.pdf");
  assert.equal(pdf.status, 200);
  assert.match(pdf.headers.get("content-type"), /pdf/);
  assert.equal(
    new TextDecoder().decode(
      new Uint8Array(await pdf.arrayBuffer()).slice(0, 5),
    ),
    "%PDF-",
  );
  for (const path of [
    "/images/harsh-yadav.webp",
    "/icon.svg",
    "/opengraph-image",
  ]) {
    const r = await fetch(origin + path);
    assert.equal(r.status, 200);
    assert.match(r.headers.get("content-type"), /image/);
    assert.ok((await r.arrayBuffer()).byteLength > 100);
  }
});
await test("old project URLs redirect to maintained content", async () => {
  for (const [path, target] of [
    ["/projects/web-project", "/projects/php-hostel-management"],
    ["/projects/crop-yield-prediction", "/#projects"],
  ]) {
    const r = await fetch(origin + path, { redirect: "manual" });
    assert.equal(r.status, 308);
    assert.equal(r.headers.get("location"), target);
  }
});
