import {
  ArrowRight,
  Database,
  ScanLine,
  Users,
  MessageSquare,
  Code2,
} from "lucide-react";
import type { Project } from "@/types";
export function ProjectVisual({ project }: { project: Project }) {
  const iconProps = {
    size: 28,
    strokeWidth: 1.4,
    "aria-hidden": true as const,
  };
  if (project.visual === "pipeline")
    return (
      <div
        role="group"
        className="project-visual pipeline-visual"
        aria-label="Architecture: data preparation, Linear Regression, FastAPI, and React dashboard"
      >
        <span className="visual-label">System architecture</span>
        <div className="pipeline-nodes">
          {["Data", "Model", "API", "Interface"].map((item, i) => (
            <div key={item} className="pipeline-node">
              <span className="node-number">0{i + 1}</span>
              <strong>{item}</strong>
              <span>
                {
                  [
                    "Pandas · Scikit-learn",
                    "Linear Regression",
                    "FastAPI · SQLite",
                    "React · Recharts",
                  ][i]
                }
              </span>
              {i < 3 && (
                <ArrowRight
                  className="node-arrow"
                  size={18}
                  aria-hidden="true"
                />
              )}
            </div>
          ))}
        </div>
        <p className="visual-caption">
          One workflow, from preparation to prediction.
        </p>
      </div>
    );
  const details = {
    vision: {
      icon: <ScanLine {...iconProps} />,
      title: "Measure. Compare. Enhance.",
      lines: [
        "CLAHE + gamma correction",
        "Bilateral filtering + sharpening",
        "Entropy · PSNR · SSIM · Contrast",
      ],
      code: "14 methods / 4 quality measures",
    },
    social: {
      icon: <Users {...iconProps} />,
      title: "A connected application.",
      lines: [
        "Auth → profiles → personalized feed",
        "Posts · comments · likes · follows",
        "Image uploads · 24-hour stories",
      ],
      code: "Node.js + Express / JSON persistence",
    },
    hostel: {
      icon: <Database {...iconProps} />,
      title: "Records, with structure.",
      lines: [
        "Administrator → servlet → JDBC",
        "Student records · rooms · semesters",
        "MySQL-backed CRUD workflows",
      ],
      code: "Java / Maven WAR",
    },
    community: {
      icon: <MessageSquare {...iconProps} />,
      title: "A place for the community.",
      lines: [
        "Blogs · videos · memes",
        "Firebase-powered live chat",
        "Themes · canvas effects · audio",
      ],
      code: "JavaScript / Firebase / Netlify",
    },
    music: {
      icon: <Code2 {...iconProps} />,
      title: "Music, in the browser.",
      lines: [
        "Sampled flute audio · keyboard input",
        "Transposition · optional MIDI access",
        "A contribution to Rajaraman Iyer’s tools",
      ],
      code: "JavaScript / Web Audio / Web MIDI",
    },
    php: {
      icon: <Code2 {...iconProps} />,
      title: "A different backend approach.",
      lines: [
        "PHP → MySQL",
        "Administrator sessions",
        "Student CRUD workflows",
      ],
      code: "PHP / MySQL",
    },
  }[project.visual];
  return (
    <div className={`project-visual ${project.visual}-visual`}>
      <span className="visual-label">Implementation overview</span>
      <div className="visual-content">
        {details.icon}
        <strong>{details.title}</strong>
        <ul>
          {details.lines.map((line) => (
            <li key={line}>{line}</li>
          ))}
        </ul>
      </div>
      <p className="visual-caption mono">{details.code}</p>
    </div>
  );
}
