# Portfolio content audit

Reviewed on 7 October 2026. Sources: the attached `HarshYadavResume.pdf`, attached `gatepic.png`, local portfolio source, GitHub repository inventory and implementation files. GitHub was retrieved through its public API and raw source endpoints when the web browsing tool could not fetch the profile.

This is a portfolio curation and evidence review, not an execution or security audit of every repository. The portfolio was built and tested separately. No public GitHub project was changed, and no application user data was accessed.

## What deserves inclusion

Selection weighs a clear problem, coherent application scope, implementation depth, inspectable source, distinction from the other projects, and ability to explain tradeoffs. Repository names and size alone are not quality measures. No arbitrary project score is assigned.

| Repository                                                                           | Decision                                               | Evidence and rationale                                                                                                                                                                                                                                                                                                                                           |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [MediInsurance](https://github.com/Harsh-145/Yadav_Harsh_Baljeetsingh.MediInsurance) | Feature first for data/ML or full-stack roles          | Modular ML pipeline, regression artifact and recorded evaluation, FastAPI auth/role checks, SQLite/SQLAlchemy, React analytics. Shows an end-to-end workflow. Evaluation must disclose preprocessing before the split.                                                                                                                                           |
| [ImgEnhancement](https://github.com/Harsh-145/ImgEnhancement)                        | Feature for computer vision/data roles                 | 14 classical/hybrid OpenCV methods, four quality measures, composite ranking, tables/plots, Flask/React interface. 28 comparison rows cover two input images. Scope is research prototype; no GAN/CNN/diffusion/LPIPS/FID claim.                                                                                                                                 |
| [LearningWeb](https://github.com/Harsh-145/LearningWeb)                              | Feature as “My Insta” for web/backend roles            | This is a real Node/Express application, not merely learning notes: auth, multipart uploads, posts, feeds, follows, saved posts, comments, search, profiles, stories, and JSON-file storage. Explain persistence and concurrency tradeoffs.                                                                                                                      |
| [profexphostelmanagement2](https://github.com/Harsh-145/profexphostelmanagement2)    | Feature for Java/backend roles                         | Servlet endpoints, JDBC/MySQL, authentication filter, student records, room numbers, semester update, Maven WAR. Describe the web implementation; no fee or room-optimization claims.                                                                                                                                                                            |
| [My-Website](https://github.com/Harsh-145/My-Website)                                | Feature for frontend roles                             | Wizarding Hub interfaces and Firebase integration, live chat, blog/video/meme/admin UI, themes, canvas effects, audio, manifest/service worker. Supplied live URL returned HTTP 200; no user or uptime claims.                                                                                                                                                   |
| [Project](https://github.com/Harsh-145/Project)                                      | Supporting project                                     | PHP/MySQL hostel app with registration/login and student CRUD pages. Strong enough to mention, but overlaps with the Java project. Promote it for PHP-specific roles rather than duplicating it on a short general resume.                                                                                                                                       |
| [music-exp](https://github.com/Harsh-145/music-exp)                                  | Supporting contribution, with upstream attribution     | Fork of Rajaraman Iyer’s collection. Comparison identifies six Harsh-authored commits, a new `webflute.html`, instrument interface/index changes, and service-worker edits. Credit inherited functionality/assets; do not claim the entire collection. The new flute page shows sampled audio, keyboard controls, transpose logic, and optional Web MIDI access. |
| [portfolio](https://github.com/Harsh-145/portfolio)                                  | Technical background/footer, not a featured case study | The website itself demonstrates Next.js/React/TypeScript. Listing the portfolio inside itself would displace more distinct work. Could be a resume project if frontend architecture and test evidence are particularly relevant.                                                                                                                                 |
| [LearningJS](https://github.com/Harsh-145/LearningJS)                                | Keep on GitHub; omit from selected work                | Four basic JavaScript exercise files and a brief README. Useful learning history, without a distinct application/problem to demonstrate.                                                                                                                                                                                                                         |
| [PythonLearning](https://github.com/Harsh-145/PythonLearning)                        | Omit                                                   | Current public tree contains a README only; no inspectable implementation.                                                                                                                                                                                                                                                                                       |

For a one-page resume, choose the top three or four for the target role. The downloadable general resume includes five compact projects. The website can carry the larger set with explicit scope and attribution.

## Factual corrections

- Internship: 03 July 2026 to 17 July 2026, from the attached resume. Removed assumed “Present” and unverified deployment claims.
- Education: CGPA 8.37/10 through Semester 6, currently in Semester 7 at GEC Patan (GTU), confirmed directly by the user. Expected graduation May 2027 is from the attached resume. Removed unsupported 8.65/10.
- Student positioning: Computer Science & Engineering student, rather than an already-qualified engineer. Availability aligns with internships and 2027 graduate roles.
- MediInsurance: public code uses SQLite, not the resume’s MySQL claim. Recorded metrics are R² 0.8211, MAE 3151.597, MSE 20905443.4705, RMSE 4572.2471. They are reported artifacts, not independently rerun benchmark results. `pipeline.py` calls `processor.process()` before an 80/20 split (`random_state=42`); preprocessing/outlier handling can leak information. Do not convert R² to an accuracy percentage.
- ImgEnhancement: reviewed implementation is classical image enhancement. Removed unsupported CNN/GAN/diffusion, LPIPS and FID claims. Four metrics are entropy, PSNR, SSIM, contrast. PSNR/SSIM reference the original input rather than clean target images. Composite ranking is experiment-specific; two images are not a generalization benchmark.
- Hostel: reviewed public repository is Java Servlets/JDBC/MySQL, not Swing. Room numbers are stored, but no verified occupancy optimization or fee-management workflow is claimed.
- PHP “Web Project”: identified as a hostel application, given a concrete title and workflow.
- Crop Yield Prediction: removed. It is present in the old portfolio only, without supporting resume or repository evidence. Its claimed R² 0.8 and deployment cannot be verified.
- Removed “23+ Technologies Mastered” and unverifiable scalable/secure/robust labels. Skills are tools used, not mastery ratings.
- Updated professional download to a text-based, single-column PDF. Personal demographic fields, declaration/signature, enrollment number, and street address are omitted. The supplied portrait is retained as an asset but is not displayed, following the user’s preference; the resume prioritizes text extraction.
- Default site origin uses the address in the attached resume, `https://harshaydv.netlify.app`; the invented Vercel placeholder is removed. `SITE_URL` must match the eventual production origin before build.

## Main sources

- [MediInsurance metrics](https://github.com/Harsh-145/Yadav_Harsh_Baljeetsingh.MediInsurance/blob/main/ml_pipeline/metrics.json) and [pipeline](https://github.com/Harsh-145/Yadav_Harsh_Baljeetsingh.MediInsurance/blob/main/ml_pipeline/pipeline.py)
- [ImgEnhancement method registry](https://github.com/Harsh-145/ImgEnhancement/blob/main/main.py), [comparison data](https://github.com/Harsh-145/ImgEnhancement/blob/main/results/comparison_tables/detailed_metrics.csv), [composite scoring](https://github.com/Harsh-145/ImgEnhancement/blob/main/src/scoring/composite_score.py)
- [My Insta routes](https://github.com/Harsh-145/LearningWeb/tree/main/backend/routes), [persistence/expiry](https://github.com/Harsh-145/LearningWeb/blob/main/backend/database.js)
- [Java hostel servlets](https://github.com/Harsh-145/profexphostelmanagement2/tree/main/src/main/java/com/gecpian/profexphostelmanagement2)
- [Wizarding Hub implementation](https://github.com/Harsh-145/My-Website/blob/main/js/script.js) and [live site](https://blogbyharsh.netlify.app/)
- [PHP hostel application](https://github.com/Harsh-145/Project)
- [Music fork comparison](https://github.com/rajaramaniyer/rajaramaniyer.github.io/compare/master...Harsh-145:music-exp:master) and [upstream](https://github.com/rajaramaniyer/rajaramaniyer.github.io)

## Reviewed snapshot identifiers

These are the public branch-head commits retrieved during the review. Source links on the site follow the active branch so readers can explore the latest implementation. This audit records the reviewed snapshot; subsequent repository changes require re-review.

| Repository                             | Commit                                     |
| -------------------------------------- | ------------------------------------------ |
| ImgEnhancement                         | `7467cafe92f7a487809d73ae1698a5dceb95e5ff` |
| LearningJS                             | `8627aaa8ef33e21652c9dfaaea5c431f95564748` |
| LearningWeb                            | `4a98b3289d5046e347548ecf487fff2e3b06aaac` |
| music-exp                              | `9a297017942111dd4fe5f61fb594740da97d0a8d` |
| My-Website                             | `106fced612eae8b5d3f492e96e63c10ca520bad6` |
| portfolio                              | `f55c5543299d9109e968d6c2fa8ff917976a860e` |
| profexphostelmanagement2               | `6403244f9053dc96467d0a7d70e19f671947cdc0` |
| Project                                | `1a95b3293e6f2586f85d87e4b8aacdf88c3d2868` |
| PythonLearning                         | `38a2718c3d5d0019cd4a2819b61fe461bf6e57aa` |
| Yadav_Harsh_Baljeetsingh.MediInsurance | `0c2272eae159473919c7973a0859ed03c57c3195` |

## Automatic semester display

The user requested automatic updates against the latest GTU BE calendar. The reviewed [2026–27 odd-term calendar](https://s3-ap-southeast-1.amazonaws.com/gtusitecirculars/uploads/Final-Academic%20Calendar%20AY%202026-27%20-%20Odd%20Term_224213.pdf) lists BE Semester 7 starting 3 July 2026, teaching ending 14 October 2026, tentative exams through 21 December 2026, and tentative result on 16 February 2027. The [10 June amendment](https://s3-ap-southeast-1.amazonaws.com/gtusitecirculars/uploads/Revised%20Academic%20Calendar_706689.pdf) affects Semester 5 only. No 2026–27 even-term calendar appeared in the reviewed GTU index.

The site now refreshes the [official calendar index](https://old26.gtu.ac.in/AcademicCal.aspx) daily, parses validated BE final-year rows, and changes the scheduled term on published start dates. It does not infer new CGPA, passed exams, or graduation. The PDF resume remains a dated snapshot. See README for caching, fallback, and upstream-format limitations.
