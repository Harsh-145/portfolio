import { notFound } from 'next/navigation';
import Link from 'next/link';
import { ArrowLeft, ExternalLink } from 'lucide-react';
import { GitHubIcon } from '@/components/icons';
import { projects } from '@/content/projects';
import type { Metadata } from 'next';

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  
  if (!project) {
    return {
      title: 'Project Not Found',
    };
  }

  return {
    title: project.title,
    description: project.description,
  };
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-24 sm:px-6">
      <Link
        href="/#projects"
        className="inline-flex items-center text-sm font-medium text-zinc-400 hover:text-zinc-50 mb-8 transition-colors"
      >
        <ArrowLeft className="mr-2 h-4 w-4" />
        Back to Projects
      </Link>
      
      <article className="card-glow bg-zinc-900/50 rounded-3xl p-8 sm:p-12 border border-white/[0.06]">
        <header className="mb-10">
          <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-6 mb-6">
            <div>
              <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-zinc-50 mb-3">
                {project.title}
              </h1>
              <div className="flex items-center gap-3">
                <span className="text-sm text-zinc-400">{project.category}</span>
                <span className="text-zinc-600">•</span>
                <span className="text-sm text-zinc-400">{project.date}</span>
                <span className="text-zinc-600">•</span>
                <span className={`text-xs px-2 py-0.5 rounded-full ${
                  project.status === 'completed' 
                    ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20' 
                    : 'bg-amber-500/10 text-amber-400 border border-amber-500/20'
                }`}>
                  {project.status}
                </span>
              </div>
            </div>
            <div className="flex flex-wrap gap-3">
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-zinc-800 text-zinc-300 hover:bg-zinc-700 transition-colors text-sm font-medium border border-white/5"
                >
                  <GitHubIcon className="h-4 w-4" />
                  Source Code
                </a>
              )}
              {project.liveDemo && (
                <a
                  href={project.liveDemo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-600 text-white hover:bg-blue-500 transition-colors text-sm font-medium"
                >
                  <ExternalLink className="h-4 w-4" />
                  Live Demo
                </a>
              )}
            </div>
          </div>
          
          <p className="text-xl text-zinc-400">
            {project.description}
          </p>
        </header>

        <div className="space-y-8">
          <div>
            <h2 className="text-2xl font-bold mb-4 text-zinc-50">About the Project</h2>
            <p className="text-zinc-400 leading-relaxed whitespace-pre-wrap">
              {project.longDescription}
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-4 text-zinc-50">Technologies Used</h2>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 rounded-md bg-zinc-800 border border-white/5 text-sm font-mono text-zinc-300"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </article>
    </div>
  );
}
