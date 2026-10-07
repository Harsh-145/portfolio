import { education } from "@/content/education";
import { certifications } from "@/content/certifications";
import { SectionHeading } from "@/components/section-heading";
import type { AcademicStatus } from "@/lib/academic-calendar.mjs";
export function Education({ academic }: { academic: AcademicStatus }) {
  return (
    <section id="education" className="section section-tinted">
      <div className="container">
        <SectionHeading
          number="04"
          title="Education & learning"
          description="A foundation in computer science, complemented by training in geospatial data, machine learning, and AI."
        />
        <div className="education-grid">
          <div>
            {education.map((edu, index) => (
              <article key={edu.institution} className="education-card">
                <p className="eyebrow">{edu.graduationDate}</p>
                <h3>
                  {edu.degree}
                  {edu.field && <> in {edu.field}</>}
                </h3>
                <p>{edu.institution}</p>
                <p className="muted">{edu.details}</p>
                {index === 0 && (
                  <p className="muted">
                    {academic.label} ·{" "}
                    <a
                      href={academic.source}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      GTU calendar
                      <span className="sr-only"> (opens in a new tab)</span>
                    </a>
                  </p>
                )}
                {edu.cgpa && (
                  <p className="grade">
                    CGPA {edu.cgpa} {edu.cgpaContext && `(${edu.cgpaContext})`}
                  </p>
                )}
              </article>
            ))}
          </div>
          <div className="learning-card">
            <h3>Certifications & training</h3>
            {certifications.map((cert) => (
              <article key={cert.name}>
                <p className="eyebrow">{cert.date}</p>
                <h4>{cert.name}</h4>
                <p>{cert.issuer}</p>
              </article>
            ))}
            <p className="learning-note">
              Outside code: music, cycling, and public speaking.
              <br />
              Languages: English, Hindi, and Gujarati.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
