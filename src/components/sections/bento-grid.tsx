'use client';

import { motion } from 'framer-motion';
import { MapPin, Code2, GraduationCap, Briefcase, Award, ExternalLink } from 'lucide-react';
import { profile } from '@/content/profile';
import { projects } from '@/content/projects';
import { experience } from '@/content/experience';
import { education } from '@/content/education';
import { skills } from '@/content/skills';

export function BentoGrid() {
  const featuredProject = projects.find(p => p.featured) || projects[0];
  const recentExp = experience[0];
  const mainEdu = education[0];
  
  const totalTech = skills.reduce((acc, cat) => acc + cat.skills.length, 0);

  const cardClass = "bg-zinc-900/50 border border-white/[0.06] rounded-2xl p-6 hover:border-blue-500/20 hover:bg-zinc-900/80 transition-all hover:scale-[1.01] relative overflow-hidden flex flex-col";

  return (
    <section className="py-20 md:py-32 bg-zinc-950">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-zinc-50 mb-4">Highlights</h2>
        <p className="text-zinc-400 text-lg mb-10">A quick glimpse into my background and best work.</p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          
          {/* Card 1: Featured Project (spans 2 cols) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className={`${cardClass} md:col-span-2 lg:col-span-2`}
          >
            <div className="flex justify-between items-start mb-4">
              <div className="bg-blue-500/10 p-3 rounded-xl border border-blue-500/20 text-blue-500">
                <Code2 size={24} />
              </div>
              <span className="text-xs font-medium px-3 py-1 rounded-full bg-zinc-800 text-zinc-300 border border-white/5">Featured Project</span>
            </div>
            <h3 className="text-2xl font-bold text-zinc-50 mb-2">{featuredProject.title}</h3>
            <p className="text-zinc-400 mb-6 flex-grow">{featuredProject.description}</p>
            
            <div className="flex flex-wrap gap-2 mb-6">
              {featuredProject.technologies.slice(0, 5).map(tech => (
                <span key={tech} className="text-xs font-medium text-zinc-300 bg-zinc-800/50 px-2 py-1 rounded border border-white/5">
                  {tech}
                </span>
              ))}
              {featuredProject.technologies.length > 5 && (
                <span className="text-xs font-medium text-zinc-500 px-2 py-1">+{featuredProject.technologies.length - 5} more</span>
              )}
            </div>

            {featuredProject.github && (
              <a 
                href={featuredProject.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-medium text-zinc-300 hover:text-blue-400 transition-colors mt-auto"
              >
                View on GitHub <ExternalLink size={14} />
              </a>
            )}
          </motion.div>

          {/* Card 2: About/Bio */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className={`${cardClass} justify-between`}
          >
            <div>
              <h3 className="text-xl font-bold text-zinc-50 mb-4">About Me</h3>
              <p className="text-zinc-400 text-sm leading-relaxed mb-6">
                Passionate about building scalable applications and predictive models to solve real-world problems.
              </p>
            </div>
            <div className="flex items-center gap-2 text-zinc-300 text-sm mt-auto bg-zinc-950/50 p-3 rounded-xl border border-white/5">
              <MapPin size={16} className="text-blue-500" />
              {profile.location}
            </div>
          </motion.div>

          {/* Card 3: Tech Stack Count */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className={`${cardClass} items-center justify-center text-center`}
          >
            <div className="text-5xl font-black text-transparent bg-clip-text bg-gradient-to-br from-blue-400 to-blue-600 mb-2">
              {totalTech}+
            </div>
            <div className="text-zinc-400 font-medium">Technologies Mastered</div>
          </motion.div>

          {/* Card 4: Education */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className={cardClass}
          >
            <div className="bg-zinc-800/50 w-12 h-12 rounded-xl flex items-center justify-center text-zinc-300 border border-white/5 mb-4">
              <GraduationCap size={20} />
            </div>
            <h3 className="text-lg font-bold text-zinc-50 mb-1">Education</h3>
            <p className="text-sm text-zinc-300 font-medium">{mainEdu.institution}</p>
            <p className="text-xs text-blue-400 mt-2 font-mono">CGPA: {mainEdu.cgpa}</p>
          </motion.div>

          {/* Card 5: Experience */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className={cardClass}
          >
            <div className="bg-zinc-800/50 w-12 h-12 rounded-xl flex items-center justify-center text-zinc-300 border border-white/5 mb-4">
              <Briefcase size={20} />
            </div>
            <h3 className="text-lg font-bold text-zinc-50 mb-1">Experience</h3>
            <p className="text-sm text-zinc-300 font-medium">{recentExp.role}</p>
            <p className="text-xs text-zinc-500 mt-1">{recentExp.company}</p>
          </motion.div>

          {/* Card 6: Certifications (spans 2 cols on lg) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className={`${cardClass} md:col-span-2 lg:col-span-1`}
          >
            <div className="bg-zinc-800/50 w-12 h-12 rounded-xl flex items-center justify-center text-zinc-300 border border-white/5 mb-4">
              <Award size={20} />
            </div>
            <h3 className="text-lg font-bold text-zinc-50 mb-3">Certifications</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-1.5"></div>
                <p className="text-sm text-zinc-400">Geodata Processing & ML (ISRO/IIRS)</p>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-1.5"></div>
                <p className="text-sm text-zinc-400">Green Skills & AI (AICTE & Shell India)</p>
              </li>
            </ul>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
