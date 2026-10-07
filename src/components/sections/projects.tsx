import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { projects } from "@/content/projects";
import { SectionHeading } from "@/components/section-heading";
import { ProjectVisual } from "@/components/project-visual";
export function Projects() {
  const selected = projects.filter((project) => project.featured);
  return (
    <section id="projects" className="section container">
      <SectionHeading
        number="01"
        title="Selected work"
        description="Practical applications, explicit evaluation, and code you can explore. Each case study connects the implementation to its evidence."
      />
      <div className="project-grid">
        {selected.map((project, i) => (
          <article
            key={project.slug}
            className={`project-card ${i === 0 ? "featured-project" : ""}`}
          >
            <ProjectVisual project={project} />
            <div className="project-body">
              <div className="project-overline">
                <span className="mono">
                  0{i + 1} / {project.category}
                </span>
                <span className="project-label">{project.label}</span>
              </div>
              <h3>
                <Link href={`/projects/${project.slug}`}>{project.title}</Link>
              </h3>
              <p>{project.description}</p>
              {project.metric && (
                <div className="project-metric">
                  <strong>{project.metric.value}</strong>
                  <span>
                    {project.metric.label}
                    <small>{project.metric.source}</small>
                  </span>
                </div>
              )}
              <ul className="tags" aria-label={`${project.title} technologies`}>
                {project.technologies.map((tech) => (
                  <li key={tech}>{tech}</li>
                ))}
              </ul>
              <div className="project-links">
                <Link
                  href={`/projects/${project.slug}`}
                  aria-label={`Read ${project.title} case study`}
                >
                  Case study <ArrowRight size={16} aria-hidden="true" />
                </Link>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${project.title} source on GitHub (opens in a new tab)`}
                >
                  Source <ArrowUpRight size={16} aria-hidden="true" />
                </a>
                {project.liveDemo && (
                  <a
                    href={project.liveDemo}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Live site <ArrowUpRight size={16} aria-hidden="true" />
                    <span className="sr-only"> (opens in a new tab)</span>
                  </a>
                )}
              </div>
            </div>
          </article>
        ))}
      </div>
      <div className="supporting-work">
        <span className="eyebrow">Also built</span>
        <div>
          {projects
            .filter((p) => !p.featured)
            .map((p) => (
              <Link key={p.slug} href={`/projects/${p.slug}`}>
                <strong>{p.title}</strong>
                <span>{p.description}</span>
                <ArrowUpRight size={20} aria-hidden="true" />
              </Link>
            ))}
        </div>
      </div>
      <a
        href="https://github.com/Harsh-145"
        className="text-link"
        target="_blank"
        rel="noopener noreferrer"
      >
        Explore my GitHub <ArrowUpRight size={16} aria-hidden="true" />
        <span className="sr-only"> (opens in a new tab)</span>
      </a>
    </section>
  );
}
