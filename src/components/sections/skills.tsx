'use client';

import { motion } from 'framer-motion';
import { Terminal, Database, Globe, Wrench, Code } from 'lucide-react';
import { skills } from '@/content/skills';

const categoryIcons: Record<string, React.ReactNode> = {
  'Languages': <Code size={20} />,
  'Data & ML': <Database size={20} />,
  'Web & Frameworks': <Globe size={20} />,
  'Tools': <Wrench size={20} />,
  'Databases': <Database size={20} />
};

export function Skills() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4 } }
  };

  return (
    <section id="skills" className="py-20 md:py-32 bg-zinc-950">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <div className="inline-flex items-center gap-3 mb-4 justify-center">
            <Terminal className="text-blue-500" size={28} />
            <h2 className="text-3xl md:text-4xl font-bold text-zinc-50">Technical Skills</h2>
          </div>
          <p className="text-zinc-400 text-lg max-w-2xl mx-auto">
            Tools and technologies I use to build solutions.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((categoryGroup, index) => (
            <motion.div
              key={categoryGroup.category}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-zinc-900/50 border border-white/[0.06] rounded-2xl p-6"
            >
              <div className="flex items-center gap-3 mb-6 pb-4 border-b border-white/5 text-zinc-50">
                <span className="text-blue-500">
                  {categoryIcons[categoryGroup.category] || <Terminal size={20} />}
                </span>
                <h3 className="text-lg font-semibold">{categoryGroup.category}</h3>
              </div>
              
              <motion.div 
                className="flex flex-wrap gap-2"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                {categoryGroup.skills.map((skill) => (
                  <motion.span
                    key={skill}
                    variants={itemVariants}
                    className="text-sm font-medium text-zinc-300 bg-zinc-800/80 px-3 py-1.5 rounded-lg border border-white/5 hover:border-blue-500/30 hover:bg-zinc-800 transition-colors cursor-default"
                  >
                    {skill}
                  </motion.span>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
