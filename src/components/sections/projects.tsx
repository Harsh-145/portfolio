'use client';

import { motion } from 'framer-motion';
import { ExternalLink, FolderGit2 } from 'lucide-react';
import { GitHubIcon } from '@/components/icons';
import Link from 'next/link';
import { projects } from '@/content/projects';

export function Projects() {
  return (
    <section id="projects" className="py-20 md:py-32 bg-zinc-950">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="flex items-center gap-3 mb-4">
            <FolderGit2 className="text-blue-500" size={28} />
            <h2 className="text-3xl md:text-4xl font-bold text-zinc-50">Projects</h2>
          </div>
          <p className="text-zinc-400 text-lg max-w-2xl">
            A curated selection of projects that showcase my engineering approach — from ML pipelines to full-stack applications.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.slug}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group bg-zinc-900/50 border border-white/[0.06] rounded-2xl p-6 hover:border-blue-500/20 hover:bg-zinc-900/80 transition-all flex flex-col"
            >
              {/* Header */}
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  {project.featured && (
                    <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/20">
                      Featured
                    </span>
                  )}
                  <span className={`text-[10px] font-medium uppercase tracking-wider px-2 py-0.5 rounded-full ${
                    project.status === 'completed'
                      ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20'
                      : 'bg-amber-500/10 text-amber-400 border border-amber-500/20'
                  }`}>
                    {project.status}
                  </span>
                </div>
                <span className="text-xs text-zinc-500 font-mono">{project.date}</span>
              </div>

              {/* Title & Description */}
              <Link href={`/projects/${project.slug}`} className="group/link">
                <h3 className="text-xl font-bold text-zinc-50 mb-2 group-hover/link:text-blue-400 transition-colors">
                  {project.title}
                </h3>
              </Link>
              <p className="text-sm text-zinc-400 mb-4 leading-relaxed flex-grow">
                {project.description}
              </p>

              {/* Category */}
              <p className="text-xs text-zinc-500 mb-4 font-medium uppercase tracking-wider">
                {project.category}
              </p>

              {/* Technologies */}
              <div className="flex flex-wrap gap-1.5 mb-6">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="text-xs font-medium text-zinc-300 bg-zinc-800/80 px-2 py-1 rounded border border-white/5"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Links */}
              <div className="flex items-center gap-4 pt-4 border-t border-white/5 mt-auto">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm text-zinc-400 hover:text-blue-400 transition-colors"
                  >
                    <GitHubIcon className="w-4 h-4" />
                    Source Code
                  </a>
                )}
                {project.liveDemo && (
                  <a
                    href={project.liveDemo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm text-zinc-400 hover:text-blue-400 transition-colors"
                  >
                    <ExternalLink size={14} />
                    Live Demo
                  </a>
                )}
                <Link
                  href={`/projects/${project.slug}`}
                  className="ml-auto text-sm font-medium text-blue-500 hover:text-blue-400 transition-colors"
                >
                  Read More →
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
