import { skills } from "@/content/skills";
import { SectionHeading } from "@/components/section-heading";
export function Skills() {
  return (
    <section id="skills" className="section container">
      <SectionHeading
        number="03"
        title="Technical toolkit"
        description="Languages and tools used across my projects, coursework, and internship. Explore the case studies to see them in context."
      />
      <div className="skills-grid">
        {skills.map((group, i) => (
          <div key={group.category} className="skill-group">
            <span className="mono skill-index">0{i + 1}</span>
            <h3>{group.category}</h3>
            <ul className="tags">
              {group.skills.map((s) => (
                <li key={s}>{s}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
