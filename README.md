# Harsh Yadav — Portfolio

A recruiter-facing portfolio built with Next.js 16, React 19, TypeScript, and Tailwind CSS 4. It presents five selected projects, two supporting projects, internship experience, education, and skills. Content is prerendered; the homepage refreshes its academic status daily. Only the mobile navigation needs client-side state.

## Run locally

Requires Node.js 22 or later and npm (`.nvmrc` selects Node 22). Install the locked dependencies, then run the checks:

```sh
npm ci
npm run lint
npm run typecheck
npm run test:academic
npm run build
npm start
```

With the production server running on port 3100, `npm test` checks HTTP status, internal routes, metadata, structured data, security headers, crawler files, assets, and legacy redirects. Pass a different origin with `npm test -- http://localhost:3000`.

For development, run `npm run dev`. The default URL is http://localhost:3000.

## Content & evidence

- `src/content/` holds personal details, projects, skills, navigation, and metadata.
- Each project includes implementation highlights, evaluation context, limitations, and links to supporting code.
- `docs/CONTENT_AUDIT.md` records the repository-by-repository selection and factual corrections.
- The homepage prioritizes engineering focus and project links. The supplied portrait is preserved as a local asset, without displaying it on the site.
- `public/resume/Harsh_Yadav_Resume.pdf` is a single-column, text-based resume aligned with the reviewed project evidence.
- `src/app/projects/[slug]/page.tsx` generates seven static case studies.
- `src/app/robots.ts`, `sitemap.ts`, and `opengraph-image.tsx` supply crawler and sharing assets.

No user counts, business impact, benchmark superiority, ATS score, or model accuracy percentage is claimed. The regression score is labeled repository-reported. See the case studies for its evaluation limitations.

## Deploy

The project uses Next.js server output, including image optimization and an Open Graph image route. It does **not** generate an `out/` static export. Use a Next.js-compatible host with the supported adapter (for example Vercel or Netlify), or run `npm run build` followed by `npm start` on a Node server.

Set `SITE_URL` to the exact public origin **before the build**. It defaults to `https://harshaydv.netlify.app`, the address listed in the supplied resume. Canonicals, structured data, and sitemap entries use this origin. Do not point production metadata at a preview deployment. A host should configure preview deployments with an `X-Robots-Tag: noindex` header.

The Google font files are downloaded at build time through `next/font` and served locally. Production visitors do not need a Google Fonts connection. A first build requires network access for those font downloads.

Publishing a new build is a separate action. The local audit does not establish live production performance or field Core Web Vitals.

## Checks

`npm run lint`, `npm run typecheck`, `npm run test:academic`, and `npm run build` are required before shipping. Browser checks should cover the homepage, all project pages, unknown-route 404s, mobile navigation (including Escape and focus return), local assets, metadata, JSON-LD, overflow at narrow widths, no-JavaScript content visibility, and reduced motion. Use Lighthouse against the production server and axe for automated accessibility checks; manually check keyboard navigation and readable layouts as well.

## Maintaining the resume

The downloadable PDF is a reviewed snapshot, dated 7 October 2026. Update it when changing education, experience, or project content. Keep it text-based, with a single reading order and real links. The campus-format Word document is retained as source in the repository at `docs/source/Harsh_Yadav_Resume.docx`; it is not served as a public download.

## Automatic academic-term updates

The homepage checks GTU's official academic-calendar index and its linked official PDFs, with a daily server cache and daily homepage revalidation. It selects valid BE Semester 7/8 rows for the 2026–27 final-year cohort. Dates use Asia/Kolkata; a future published term takes effect only on its start date. The current verified snapshot is Semester 7 starting 3 July 2026. The 10 June amendment concerns Semester 5 and does not change the Semester 7 row.

Semester 8 dates were not published in the reviewed index on 7 October 2026. No January start date is guessed. Newer valid amendments take priority. Only GTU's calendar index and the official circular bucket are fetched, with redirect, byte, page, and date-validation limits. This adds no browser-side polling or PDF parsing.

A Next.js server/hosting adapter with ISR and outbound HTTPS is required. Refresh is demand-driven: the first visit after the daily cache interval triggers revalidation, so a visitor can briefly see the previous cached page. If GTU is unavailable or changes its PDF format, the reviewed local snapshot keeps the page usable. After the known term's tentative result date, the fallback shows “BE · 2027 cohort” instead of a stale current-semester or unverified graduation claim. Review this integration if GTU replaces its archived index or stops updating it.

Calendar progression describes the scheduled academic term, not proof of individual enrollment, exam results, or degree completion. CGPA remains 8.37/10 through Semester 6 until the user supplies a new result. The downloadable resume is a dated snapshot and does not automatically regenerate. `npm run test:academic` checks actual GTU OCR text, competing program rows, amendments, offline/malformed sources, India-midnight transitions, future starts, and expired status; future dates in tests are explicitly synthetic.
