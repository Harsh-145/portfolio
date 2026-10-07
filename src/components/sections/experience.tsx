import Link from "next/link";
import { experience } from "@/content/experience";
import { SectionHeading } from "@/components/section-heading";
export function Experience() {
  return (
    <section id="experience" className="section section-tinted">
      <div className="container">
        <SectionHeading
          number="02"
          title="Experience"
          description="Hands-on exposure to data preparation, regression modeling, APIs, and analytics during a focused internship."
        />
        {experience.map((exp) => (
          <article key={exp.company} className="experience-card">
            <div className="experience-meta">
              <span className="eyebrow">Internship</span>
              <p>
                <time dateTime="2026-07-03">{exp.startDate}</time>
                <br />— <time dateTime="2026-07-17">{exp.endDate}</time>
              </p>
              <Link className="text-link" href="/projects/medi-insurance">
                Related project ↗
              </Link>
            </div>
            <div>
              <h3>{exp.role}</h3>
              <p className="company">{exp.company}</p>
              <ul className="bullet-list">
                {exp.highlights.map((h) => (
                  <li key={h}>{h}</li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
