import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  MapPin,
  Database,
  Braces,
  PanelsTopLeft,
} from "lucide-react";
import { profile } from "@/content/profile";
import { education } from "@/content/education";
import type { AcademicStatus } from "@/lib/academic-calendar.mjs";
const focus = [
  {
    number: "01",
    title: "Data & machine learning",
    detail: "Python · Scikit-learn · OpenCV",
    project: "MediInsurance & ImgEnhancement",
    href: "/projects/medi-insurance",
    icon: Database,
  },
  {
    number: "02",
    title: "Backend engineering",
    detail: "FastAPI · Express · Java · SQL",
    project: "APIs, authentication, and records",
    href: "/projects/hostel-management",
    icon: Braces,
  },
  {
    number: "03",
    title: "Web applications",
    detail: "React · Next.js · JavaScript",
    project: "Interfaces people can explore",
    href: "/projects/social-web-app",
    icon: PanelsTopLeft,
  },
];
export function Hero({ academic }: { academic: AcademicStatus }) {
  return (
    <section className="hero container" aria-labelledby="hero-title">
      <div className="hero-copy">
        <p className="availability">
          <span aria-hidden="true" />
          {profile.availability}
        </p>
        <p className="eyebrow">Software development / Machine learning</p>
        <h1 id="hero-title">
          Harsh
          <br />
          Yadav<span>.</span>
        </h1>
        <p className="hero-intro">
          Turning data into
          <br />
          <em>useful applications.</em>
        </p>
        <p className="hero-about">
          {academic.intro} {profile.about}
        </p>
        <div className="hero-actions">
          <a href="#projects" className="button button-primary">
            Explore my work <ArrowRight size={18} aria-hidden="true" />
          </a>
          <a
            href={profile.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="button button-secondary"
          >
            Resume PDF <ArrowUpRight size={18} aria-hidden="true" />
            <span className="sr-only"> (opens in a new tab)</span>
          </a>
        </div>
        <p className="hero-location">
          <MapPin size={16} aria-hidden="true" />
          {profile.location}
        </p>
      </div>
      <div className="hero-profile">
        <div className="focus-board">
          <div className="focus-board-top">
            <p className="eyebrow">Engineering focus</p>
            <span className="focus-dot" aria-hidden="true" />
          </div>
          <p className="focus-board-title">
            The whole workflow.
            <br />
            <span>One connected build.</span>
          </p>
          <div className="focus-rows">
            {focus.map((item) => (
              <Link href={item.href} key={item.number} className="focus-row">
                <span className="focus-number mono">{item.number}</span>
                <div>
                  <item.icon size={20} strokeWidth={1.4} aria-hidden="true" />
                  <strong>{item.title}</strong>
                  <span>{item.detail}</span>
                  <small>{item.project}</small>
                </div>
                <ArrowUpRight size={16} aria-hidden="true" />
              </Link>
            ))}
          </div>
          <a
            href="https://github.com/Harsh-145"
            className="focus-source"
            target="_blank"
            rel="noopener noreferrer"
          >
            Code you can explore <ArrowUpRight size={16} aria-hidden="true" />
            <span className="sr-only"> (opens in a new tab)</span>
          </a>
        </div>
        <div className="education-strip">
          <div>
            <strong>2027</strong>
            <span>Expected graduation</span>
          </div>
          <div>
            <strong>{education[0].cgpa}</strong>
            <span>CGPA · through Semester 6</span>
          </div>
        </div>
      </div>
    </section>
  );
}
