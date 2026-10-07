import type { Project } from "@/types";

// Facts reviewed against the supplied resume and public GitHub sources on 7 October 2026.
export const projects: Project[] = [
  {
    slug: "medi-insurance",
    title: "MediInsurance",
    description:
      "From health data to insurance cost estimates: an ML pipeline, authenticated API, and interactive analytics dashboard.",
    longDescription:
      "A full-stack internship project that predicts medical insurance charges from age, BMI, smoking status, and other inputs. The repository connects a Scikit-learn Linear Regression model to a FastAPI backend and a React dashboard, with persisted prediction history and separate user and administrator views.",
    technologies: [
      "Python",
      "Scikit-learn",
      "FastAPI",
      "React",
      "SQLAlchemy",
      "SQLite",
      "Recharts",
    ],
    github:
      "https://github.com/Harsh-145/Yadav_Harsh_Baljeetsingh.MediInsurance",
    category: "Machine learning · Full stack",
    role: "Developer",
    label: "Internship project",
    featured: true,
    visual: "pipeline",
    highlights: [
      "Built a modular data pipeline for ingestion, cleaning, IQR outlier removal, one-hot encoding, StandardScaler, and model persistence with joblib.",
      "Connected predictions, dashboard data, and history to REST endpoints protected by JWT authentication and role checks.",
      "Implemented React dashboard views for BMI versus charges, charge distribution, model metrics, and prediction activity.",
    ],
    evaluation:
      "The committed metrics.json records R² 0.8211, MAE 3,151.597, MSE 20,905,443.4705, and RMSE 4,572.2471. The code uses an 80/20 train/test split with random_state=42. These are repository-reported results; the training run was not independently reproduced for this portfolio.",
    limitations:
      "Preprocessing and outlier removal occur before the train/test split. This can introduce leakage and affect the reported evaluation. A stronger validation would split first, fit preprocessing on training data only, and repeat evaluation. This is an educational cost-estimation prototype, with no verified production usage or real-world insurance accuracy.",
    references: [
      {
        label: "Recorded regression metrics",
        url: "https://github.com/Harsh-145/Yadav_Harsh_Baljeetsingh.MediInsurance/blob/main/ml_pipeline/metrics.json",
      },
      {
        label: "Pipeline & evaluation protocol",
        url: "https://github.com/Harsh-145/Yadav_Harsh_Baljeetsingh.MediInsurance/blob/main/ml_pipeline/pipeline.py",
      },
      {
        label: "API implementation",
        url: "https://github.com/Harsh-145/Yadav_Harsh_Baljeetsingh.MediInsurance/blob/main/backend/app/api/routes.py",
      },
    ],
    metric: {
      value: "0.8211",
      label: "Repository-reported R²",
      source: "Committed model evaluation",
    },
  },
  {
    slug: "image-enhancement",
    title: "ImgEnhancement",
    description:
      "A reproducible computer vision experiment comparing classical and hybrid enhancement methods with explicit quality metrics.",
    longDescription:
      "An image-enhancement research prototype built with Python, OpenCV, and Scikit-image. It compares histogram equalization, CLAHE, gamma correction, bilateral filtering, sharpening, and hybrid combinations, then ranks outputs using normalized image-quality measures. A Flask API and React interface provide an interactive workflow.",
    technologies: [
      "Python",
      "OpenCV",
      "Scikit-image",
      "NumPy",
      "Flask",
      "React",
    ],
    github: "https://github.com/Harsh-145/ImgEnhancement",
    category: "Computer vision · Research",
    role: "Developer / researcher",
    label: "Research prototype",
    featured: true,
    visual: "vision",
    highlights: [
      "Implemented a pipeline registering 14 classical and hybrid enhancement methods.",
      "Measured entropy, PSNR, SSIM, and contrast; combined normalized metrics using fixed or image-adaptive weights.",
      "Exported per-image comparison tables, ranked outputs, and visual comparison plots.",
    ],
    evaluation:
      "The committed detailed_metrics.csv contains 28 rows: 14 methods evaluated on two input images. PSNR and SSIM use the original input as the reference. The composite score ranks methods within an experiment; it is not a universal image-quality benchmark.",
    limitations:
      "The public implementation uses classical image processing, not trained CNN, GAN, or diffusion models. The two-image sample is too small for general performance claims. Similarity to the input does not establish restoration quality against clean ground truth. LPIPS and FID are not implemented in the reviewed metric modules.",
    references: [
      {
        label: "Enhancement methods & evaluation",
        url: "https://github.com/Harsh-145/ImgEnhancement/blob/main/main.py",
      },
      {
        label: "Committed comparison table",
        url: "https://github.com/Harsh-145/ImgEnhancement/blob/main/results/comparison_tables/detailed_metrics.csv",
      },
      {
        label: "Composite scoring implementation",
        url: "https://github.com/Harsh-145/ImgEnhancement/blob/main/src/scoring/composite_score.py",
      },
    ],
    metric: {
      value: "14",
      label: "Enhancement methods",
      source: "Method registry in main.py",
    },
  },
  {
    slug: "social-web-app",
    title: "My Insta",
    description:
      "A social web app with image uploads, personalized feeds, profiles, follows, comments, and stories that expire after 24 hours.",
    longDescription:
      "Despite its LearningWeb repository name, this is a substantial Node.js and Express application. It separates authentication, posts, users, and stories into route modules, uses a JSON-file persistence layer, and provides browser interfaces for creating posts, exploring content, and managing profiles.",
    technologies: [
      "JavaScript",
      "Node.js",
      "Express",
      "JWT",
      "bcrypt",
      "Multer",
      "JSON storage",
    ],
    github: "https://github.com/Harsh-145/LearningWeb",
    category: "Full stack · Social platform",
    role: "Developer",
    label: "Application prototype",
    featured: true,
    visual: "social",
    highlights: [
      "Implemented signup and login with bcrypt password hashing and JWT authentication.",
      "Built post creation, image uploads, comments, likes, saved posts, search, and follow relationships.",
      "Implemented feed selection from followed users and filtering of expired stories, with 24-hour expiry stored on creation.",
    ],
    evaluation:
      "Feature scope is verifiable in the auth, posts, users, and stories route modules. The database implementation stores seven collections in JSON files. No validated latency, load-test, user-count, or engagement measurements are published.",
    limitations:
      "This is a local prototype using synchronous JSON-file storage, not a verified production social network. Concurrency, scalable persistence, cookie security, secret management, upload validation, and automated integration testing would need further work before public production use.",
    references: [
      {
        label: "Application & dependencies",
        url: "https://github.com/Harsh-145/LearningWeb/blob/main/package.json",
      },
      {
        label: "Posts API",
        url: "https://github.com/Harsh-145/LearningWeb/blob/main/backend/routes/posts.js",
      },
      {
        label: "Storage & story expiry",
        url: "https://github.com/Harsh-145/LearningWeb/blob/main/backend/database.js",
      },
    ],
  },
  {
    slug: "hostel-management",
    title: "Hostel Management System",
    description:
      "A Java web application for administrators to register students, assign room numbers, update semesters, and manage records.",
    longDescription:
      "A Java servlet application packaged as a Maven WAR. The repository uses JDBC and MySQL for student records, servlet endpoints for administrative workflows, and session-based authentication with a request filter. This describes the public web implementation rather than the Swing desktop application named in the older resume.",
    technologies: [
      "Java",
      "Java Servlets",
      "JDBC",
      "MySQL",
      "Maven",
      "HTML",
      "CSS",
    ],
    github: "https://github.com/Harsh-145/profexphostelmanagement2",
    category: "Java · Database application",
    role: "Developer",
    label: "Academic project",
    featured: true,
    visual: "hostel",
    highlights: [
      "Built servlet workflows for adding, viewing, deleting, and updating student records.",
      "Persisted enrollment, contact, room number, and semester data through JDBC-backed MySQL queries.",
      "Added administrator registration, login/logout, session checks, and Maven WAR packaging.",
    ],
    evaluation:
      "The public servlet sources demonstrate CRUD workflows, session authentication, and database integration. No verified deployment usage, transaction throughput, automated test coverage, or operational time savings are published.",
    limitations:
      "The reviewed repository does not substantiate Swing, fee management, or room-occupancy optimization. Database configuration, password handling, input validation, and HTML output escaping require hardening before real student data is used.",
    references: [
      {
        label: "Maven project configuration",
        url: "https://github.com/Harsh-145/profexphostelmanagement2/blob/main/pom.xml",
      },
      {
        label: "Student records servlet",
        url: "https://github.com/Harsh-145/profexphostelmanagement2/blob/main/src/main/java/com/gecpian/profexphostelmanagement2/ViewStudentsServlet.java",
      },
      {
        label: "Authentication filter",
        url: "https://github.com/Harsh-145/profexphostelmanagement2/blob/main/src/main/java/com/gecpian/profexphostelmanagement2/AuthenticationFilter.java",
      },
    ],
  },
  {
    slug: "wizarding-hub",
    title: "The Wizarding Hub",
    description:
      "A Harry Potter fan community combining live chat, blog publishing, video sharing, a meme gallery, and an admin interface.",
    longDescription:
      "A browser-based fan community built with HTML, CSS, JavaScript, and Firebase. The interface brings several content types together with real-time chat, authoring tools, a dark/light theme, canvas snow effects, and optional background music. The Netlify address is linked from the supplied resume and responded successfully during review.",
    technologies: [
      "JavaScript",
      "HTML",
      "CSS",
      "Firebase",
      "Canvas",
      "Netlify",
    ],
    github: "https://github.com/Harsh-145/My-Website",
    liveDemo: "https://blogbyharsh.netlify.app/",
    category: "Frontend · Community",
    role: "Developer",
    label: "Live website",
    featured: true,
    visual: "community",
    highlights: [
      "Built distinct blog, video, meme, chat, and administrator interfaces.",
      "Integrated Firebase Authentication and Realtime Database for account and community interactions.",
      "Added theme switching, canvas snow effects, background audio controls, a manifest, and a service worker.",
    ],
    evaluation:
      "The repository and live page demonstrate the interface and integration scope. The live URL returned HTTP 200 during the audit. No active-user, engagement, moderation-quality, or uptime metrics have been independently verified.",
    limitations:
      "A reachable frontend does not establish backend security or service reliability. Firebase access rules, administrator authorization, user-generated content sanitization, accessibility, and cache behavior need separate review before claiming production robustness.",
    references: [
      {
        label: "Community interfaces",
        url: "https://github.com/Harsh-145/My-Website/blob/main/index.html",
      },
      {
        label: "Firebase & interaction logic",
        url: "https://github.com/Harsh-145/My-Website/blob/main/js/script.js",
      },
    ],
  },
  {
    slug: "php-hostel-management",
    title: "Hostel Management · PHP",
    description:
      "A second implementation of hostel record workflows using server-rendered PHP, MySQL, and session-based administrator login.",
    longDescription:
      "A PHP and MySQL hostel management application containing administrator registration and login, a dashboard, and student CRUD pages. It complements the Java implementation by showing the same administrative domain implemented with a different backend stack.",
    technologies: ["PHP", "MySQL", "JavaScript", "HTML", "CSS"],
    github: "https://github.com/Harsh-145/Project",
    category: "PHP · Database application",
    role: "Developer",
    label: "Supporting project",
    featured: false,
    visual: "php",
    highlights: [
      "Implemented administrator registration, login, logout, and session-controlled dashboard access.",
      "Built student add, view, update, and delete workflows backed by a SQL schema.",
      "Added browser-side validation and student-list scripting.",
    ],
    evaluation:
      "The PHP pages and committed schema establish the feature scope. No verified usage, security audit, or performance metrics are published.",
    limitations:
      "This overlaps with the featured Java hostel project, so it is presented as a supporting build. Public deployment should follow a review of database configuration, authorization, validation, and output escaping.",
    references: [
      {
        label: "Application overview",
        url: "https://github.com/Harsh-145/Project",
      },
      {
        label: "Administrator login",
        url: "https://github.com/Harsh-145/Project/blob/main/pages/login.php",
      },
    ],
  },
  {
    slug: "web-music-contributions",
    title: "Web Music Tools · Contributions",
    description:
      "Contributions to a fork of Rajaraman Iyer’s web music tools: a web flute page, refreshed instrument interfaces, and service-worker updates.",
    longDescription:
      "A contribution project that extends an existing browser music-tool collection. The fork comparison shows six commits authored by Harsh, including a newly added webflute.html page, changes to the harmonium and tambura interfaces, a redesigned index, and service-worker updates. The inherited collection is credited to Rajaraman Iyer.",
    technologies: [
      "JavaScript",
      "HTML",
      "CSS",
      "Web Audio API",
      "Web MIDI API",
      "Service Worker",
    ],
    github: "https://github.com/Harsh-145/music-exp",
    category: "Browser audio · Contribution",
    role: "Contributor to a fork",
    label: "Fork contribution",
    featured: false,
    visual: "music",
    highlights: [
      "Added a web flute page using sampled audio, keyboard input, transposition, and optional MIDI access.",
      "Refreshed navigation and interface styling across the index, harmonium, and tambura pages.",
      "Updated the service worker and corrected a script literal issue in the fork.",
    ],
    evaluation:
      "The GitHub comparison against the upstream repository identifies the added and modified files and the six fork commits. This establishes contribution scope; it does not establish authorship of the inherited music-tool collection or verified audio latency and browser compatibility.",
    limitations:
      "This is a contribution to an existing project by Rajaraman Iyer. Inherited harmonium, tambura, audio assets, and other utilities are not presented as original work. Broad device compatibility, audio fidelity, latency, and reliable offline behavior have not been independently measured.",
    references: [
      {
        label: "Upstream project by Rajaraman Iyer",
        url: "https://github.com/rajaramaniyer/rajaramaniyer.github.io",
      },
      {
        label: "Contribution comparison",
        url: "https://github.com/rajaramaniyer/rajaramaniyer.github.io/compare/master...Harsh-145:music-exp:master",
      },
      {
        label: "Web flute implementation",
        url: "https://github.com/Harsh-145/music-exp/blob/master/webflute.html",
      },
    ],
  },
];
