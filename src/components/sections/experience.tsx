'use client';

import { motion } from 'framer-motion';
import { Briefcase, Calendar } from 'lucide-react';
import { experience } from '@/content/experience';

export function Experience() {
  return (
    <section id="experience" className="py-20 md:py-32 bg-zinc-950">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="flex items-center gap-3 mb-4">
            <Briefcase className="text-blue-500" size={28} />
            <h2 className="text-3xl md:text-4xl font-bold text-zinc-50">Experience</h2>
          </div>
          <p className="text-zinc-400 text-lg">
            My professional journey and work history.
          </p>
        </motion.div>

        <div className="space-y-12">
          {experience.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative pl-8 md:pl-0"
            >
              <div className="md:grid md:grid-cols-4 gap-6 items-start">
                <div className="md:col-span-1 mb-4 md:mb-0 relative">
                  <div className="hidden md:block absolute right-[-29px] top-1.5 w-3 h-3 rounded-full bg-blue-500 ring-4 ring-zinc-950"></div>
                  <div className="flex items-center gap-2 text-zinc-400 text-sm font-medium">
                    <Calendar size={14} />
                    <span>{exp.startDate} - {exp.endDate}</span>
                  </div>
                </div>
                
                <div className="md:col-span-3 bg-zinc-900/50 border border-white/[0.06] rounded-2xl p-6 hover:border-blue-500/20 transition-colors relative before:absolute before:left-[-33px] md:before:hidden before:top-6 before:w-3 before:h-3 before:rounded-full before:bg-blue-500 before:ring-4 before:ring-zinc-950">
                  <h3 className="text-xl font-bold text-zinc-50 mb-1">{exp.role}</h3>
                  <h4 className="text-blue-400 font-medium mb-4">{exp.company}</h4>
                  
                  <ul className="space-y-3">
                    {exp.highlights.map((highlight, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <span className="w-1.5 h-1.5 rounded-full bg-zinc-700 mt-2 flex-shrink-0"></span>
                        <span className="text-zinc-400 text-sm leading-relaxed">{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
          
          <div className="hidden md:block absolute left-[25%] top-0 bottom-0 w-px bg-white/5 -z-10 transform -translate-x-1/2 ml-[2px]"></div>
          <div className="md:hidden absolute left-[15px] top-0 bottom-0 w-px bg-white/5 -z-10"></div>
        </div>
      </div>
    </section>
  );
}
