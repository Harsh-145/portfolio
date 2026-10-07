import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";
import { projects } from "@/content/projects";
import { siteConfig } from "@/content/site";
import { profile } from "@/content/profile";
import { ProjectVisual } from "@/components/project-visual";
import { JsonLd } from "@/components/json-ld";
type Props = { params: Promise<{ slug: string }> };
export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) notFound();
  const url = `/projects/${project.slug}`;
  return {
    title: project.title,
    description: project.description,
    alternates: { canonical: url },
    openGraph: {
      title: `${project.title} | Harsh Yadav`,
      description: project.description,
      url,
      type: "website",
      siteName: siteConfig.siteName,
      images: ["/opengraph-image"],
    },
    twitter: {
      card: "summary_large_image",
      title: `${project.title} | Harsh Yadav`,
      description: project.description,
      images: ["/opengraph-image"],
    },
  };
}
export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;
  const index = projects.findIndex((p) => p.slug === slug);
  if (index < 0) notFound();
  const project = projects[index];
  const next = projects[(index + 1) % projects.length];
  const url = `${siteConfig.siteUrl}/projects/${slug}`;
  const data = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "SoftwareSourceCode",
        name: project.title,
        description: project.description,
        url,
        creator: {
          "@type": "Person",
          name: profile.name,
          "@id": `${siteConfig.siteUrl}/#person`,
        },
        codeRepository: project.github,
        keywords: project.technologies.join(", "),
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: siteConfig.siteUrl,
          },
          { "@type": "ListItem", position: 2, name: project.title, item: url },
        ],
      },
    ],
  };
  return (
    <main id="main-content" tabIndex={-1} className="case-study container">
      <JsonLd data={data} />
      <Link href="/#projects" className="text-link">
        <ArrowLeft size={16} aria-hidden="true" />
        Back to selected work
      </Link>
      <article>
        <header className="case-header">
          <p className="eyebrow">
            {project.category} / {project.label}
          </p>
          <h1>
            {project.title}
            <span>.</span>
          </h1>
          <p className="case-intro">{project.description}</p>
          <div className="case-actions">
            <a
              className="button button-primary"
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
            >
              Explore source
              <ArrowUpRight size={17} aria-hidden="true" />
              <span className="sr-only"> (opens in a new tab)</span>
            </a>
            {project.liveDemo && (
              <a
                className="button button-secondary"
                href={project.liveDemo}
                target="_blank"
                rel="noopener noreferrer"
              >
                Visit live site
                <ArrowUpRight size={17} aria-hidden="true" />
                <span className="sr-only"> (opens in a new tab)</span>
              </a>
            )}
          </div>
        </header>
        <ProjectVisual project={project} />
        <div className="case-grid">
          <aside className="case-sidebar">
            <p className="eyebrow">My role</p>
            <p>{project.role}</p>
            <p className="eyebrow">Technology</p>
            <ul className="tags">
              {project.technologies.map((t) => (
                <li key={t}>{t}</li>
              ))}
            </ul>
            <p className="eyebrow">Source review</p>
            <p>7 October 2026</p>
          </aside>
          <div className="case-content">
            <section>
              <h2>The project</h2>
              <p>{project.longDescription}</p>
            </section>
            <section>
              <h2>What I built</h2>
              <ul className="bullet-list">
                {project.highlights.map((h) => (
                  <li key={h}>{h}</li>
                ))}
              </ul>
            </section>
            <section className="evaluation-panel">
              <p className="eyebrow">Evidence, with context</p>
              <h2>Evaluation</h2>
              <p>{project.evaluation}</p>
            </section>
            <section>
              <h2>Scope & next steps</h2>
              <p>{project.limitations}</p>
            </section>
            <section>
              <h2>Explore the evidence</h2>
              <ul className="evidence-list">
                {project.references.map((r) => (
                  <li key={r.url}>
                    <a href={r.url} target="_blank" rel="noopener noreferrer">
                      {r.label}
                      <ArrowUpRight size={16} aria-hidden="true" />
                      <span className="sr-only"> (opens in a new tab)</span>
                    </a>
                  </li>
                ))}
              </ul>
            </section>
          </div>
        </div>
      </article>
      <Link className="next-project" href={`/projects/${next.slug}`}>
        <span>
          <small className="eyebrow">Next project</small>
          <strong>{next.title}</strong>
        </span>
        <ArrowRight size={28} aria-hidden="true" />
      </Link>
    </main>
  );
}
