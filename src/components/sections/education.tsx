'use client';

import { motion } from 'framer-motion';
import { GraduationCap, Award } from 'lucide-react';
import { education } from '@/content/education';

export function Education() {
  return (
    <section id="education" className="py-20 md:py-32 bg-zinc-950">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <div className="flex items-center gap-3 mb-4">
            <GraduationCap className="text-blue-500" size={28} />
            <h2 className="text-3xl md:text-4xl font-bold text-zinc-50">Education</h2>
          </div>
          <p className="text-zinc-400 text-lg">
            My academic background and qualifications.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-6">
          {education.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-zinc-900/50 border border-white/[0.06] rounded-2xl p-6 md:p-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-6 hover:border-blue-500/20 hover:bg-zinc-900/80 transition-all"
            >
              <div>
                <h3 className="text-xl font-bold text-zinc-50 mb-1">{edu.degree} in {edu.field}</h3>
                <p className="text-zinc-400 font-medium mb-3">{edu.institution}</p>
                {edu.cgpa && (
                  <div className="inline-flex items-center gap-2 bg-blue-500/10 text-blue-400 text-sm font-medium px-3 py-1 rounded-lg border border-blue-500/20">
                    <Award size={14} />
                    CGPA: {edu.cgpa}
                  </div>
                )}
              </div>
              <div className="text-zinc-500 font-medium text-sm whitespace-nowrap bg-zinc-950 px-4 py-2 rounded-xl border border-white/5">
                {edu.graduationDate}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
