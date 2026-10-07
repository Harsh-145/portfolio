# Portfolio validation — 7 October 2026

The upgraded portfolio is in the chat's working copy. The original external-volume project was read and audited but was not modified: filesystem requests did not grant write access. The delivered source archive and binary patch contain the completed changes. Publishing is separate.

## Verified results

- Reviewed all 10 public GitHub repositories and relevant implementation files. Five featured projects, two supporting projects/contributions, three excluded from selected work. Decisions, evidence links, and reviewed commit IDs are in CONTENT_AUDIT.md.
- Correct education: BE Computer Science & Engineering, Government Engineering College Patan, GTU; user-confirmed Semester 7; CGPA 8.37/10 through Semester 6. No portrait is displayed.
- Clean locked dependency installation, lint, TypeScript, nine academic-calendar tests, and Next.js 16.3.6 production build pass. Fourteen route outputs generated; homepage uses daily ISR.
- Thirteen production HTTP tests pass: pages, seven case studies, headings/landmarks, internal anchors, metadata, canonical URLs, JSON-LD, headers, real 404s, resume/images, crawler files, and legacy redirects.
- 37 browser route/viewport combinations: homepage, seven case studies, unknown-route page at 1440, 768, 390, and 320 pixels, plus homepage at 1280. Axe WCAG 2 A/AA, 2.1 AA, and 2.2 AA checks returned zero violations and zero incomplete findings. No horizontal overflow, missing image alt, or invisible headings. Automated checks are not a complete accessibility certification.
- Mobile menu verified with expanded state, Escape closure/focus return, and section navigation. Screenshots visually reviewed at desktop and phone sizes. All primary content is present in server HTML, without JavaScript-dependent entrance animations; reduced-motion styles disable smooth scrolling.
- Live GTU index/PDF integration returned the verified BE Semester 7 dates. Calendar tests exercise real OCR output, irrelevant program rows, newer amendments, malformed/offline upstream data, byte limits, future starts, India-midnight boundaries, expiry, and a synthetic December Semester 8 start. Synthetic dates are not published dates.
- Generated resume is one text-based page, has a coherent reading order and ten working PDF link annotations, and was rendered and visually inspected. It has no photo or personal demographic/declaration fields. The resume remains a dated snapshot rather than an automatically regenerated credential.

## Dependency audit

The production dependency audit reports zero known vulnerabilities. Next.js was upgraded from 16.2.12 to 16.3.6; affected PostCSS, sharp, nanoid, source-map-js, brace-expansion, and js-yaml packages were pinned to patched releases.

The full dependency audit reports five high findings in one development-only chain: eslint-config-next → @next/eslint-plugin-next → fast-glob → micromatch → braces. These propagate the unpatched braces stack-exhaustion advisory [GHSA-vfj7-8cjw-p6xm](https://github.com/advisories/GHSA-vfj7-8cjw-p6xm). The latest published braces is 3.0.3, which remains affected. npm suggests downgrading the Next ESLint configuration to major 14; this was not applied to the Next 16 project. This tooling processes local lint globs, not visitor input. Recheck the advisory when a compatible fix is published. Audit results are point-in-time and do not prove the absence of unknown vulnerabilities.

## Performance evidence

Prerendered content, local build-time fonts, CSS illustrations, no visible portrait request, and removal of unused motion/theme packages reduce unnecessary client work. The homepage currently references eight JavaScript assets: 579,885 raw bytes / approximately 178,391 gzip bytes; CSS is 32,063 raw / approximately 7,579 gzip; two preloaded WOFF2 fonts total 88,912 bytes. The asset-budget JSON lists the files and method. Gzip values are local compression estimates, not actual production network transfer.

A native Chromium/Lighthouse run could not start under this computer's sandbox. Browser validation succeeded in the Codex in-app browser. No Lighthouse, ATS, accessibility percentage, or Core Web Vitals score is fabricated. Live production performance should be measured after deployment using Lighthouse and field data.

## Delivery and deployment limits

Use Node 22 or later, a supported Next.js server/hosting adapter with ISR, and outbound HTTPS to GTU. Set SITE_URL to the real deployment origin before building. It defaults to the supplied resume's https://harshaydv.netlify.app. The site is not a static out/ export.

Calendar updates are demand-driven daily revalidation. A visit can briefly receive the preceding cached page. Semester 8 takes effect only after a valid GTU notice supplies its start date. The reviewed GTU index has no 2026–27 even-term notice yet. University calendars establish scheduled terms, not individual exam results, enrollment changes, or graduation. If upstream format changes or the archived index stops updating, the site safely falls back; after the known term expires it uses a cohort label. CGPA never updates without a confirmed result.

Original-folder write requests returned no grant. Automatic review also rejected parent-folder cleanup/check commands earlier; cleanup was left out and checks were corrected to the working project. No original files were deleted, no GitHub repository was changed, and nothing was deployed.
