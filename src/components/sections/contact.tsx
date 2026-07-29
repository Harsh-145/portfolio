'use client';

import { motion } from 'framer-motion';
import { Send, MapPin, Phone, Mail } from 'lucide-react';
import { GitHubIcon, LinkedInIcon } from '@/components/icons';
import { profile } from '@/content/profile';
import { socialLinks } from '@/content/social';
import type { ComponentType, SVGProps } from 'react';

type IconComponent = ComponentType<{ size?: number } & SVGProps<SVGSVGElement>>;

const iconMap: Record<string, IconComponent> = {
  github: ({ size = 20, ...props }) => <GitHubIcon width={size} height={size} {...props} />,
  linkedin: ({ size = 20, ...props }) => <LinkedInIcon width={size} height={size} {...props} />,
  mail: Mail as unknown as IconComponent,
};

export function Contact() {
  return (
    <section id="contact" className="py-20 md:py-32 bg-zinc-950 relative overflow-hidden">
      {/* Decorative gradient */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-500/5 rounded-full blur-[100px] pointer-events-none" />
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-zinc-50 mb-6">Let&apos;s Work Together</h2>
          <p className="text-zinc-400 text-lg max-w-2xl mx-auto">
            I am currently open to new opportunities. Whether you have a question or just want to say hi, I&apos;ll try my best to get back to you!
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          className="bg-zinc-900/50 border border-white/[0.06] rounded-3xl p-8 md:p-12 text-center flex flex-col items-center"
        >
          <a
            href={`mailto:${profile.email}`}
            className="group inline-flex items-center gap-3 text-2xl md:text-4xl font-bold text-zinc-50 hover:text-blue-400 transition-colors mb-12 break-all"
          >
            {profile.email}
            <Send className="text-blue-500 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" size={32} />
          </a>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-2xl mb-12">
            <div className="flex flex-col items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-zinc-800/50 border border-white/5 flex items-center justify-center text-zinc-400">
                <MapPin size={20} />
              </div>
              <div>
                <h4 className="text-sm font-medium text-zinc-50 mb-1">Location</h4>
                <p className="text-sm text-zinc-400">{profile.location}</p>
              </div>
            </div>
            <div className="flex flex-col items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-zinc-800/50 border border-white/5 flex items-center justify-center text-zinc-400">
                <Phone size={20} />
              </div>
              <div>
                <h4 className="text-sm font-medium text-zinc-50 mb-1">Phone</h4>
                <p className="text-sm text-zinc-400">{profile.phone}</p>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-4 justify-center pt-8 border-t border-white/5 w-full">
            {socialLinks.map((link) => {
              const Icon = iconMap[link.icon as keyof typeof iconMap];
              if (!Icon) return null;
              return (
                <a
                  key={link.platform}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-xl bg-zinc-800/50 border border-white/5 flex items-center justify-center text-zinc-400 hover:text-blue-400 hover:border-blue-500/30 hover:bg-zinc-800 transition-all hover:-translate-y-1"
                  aria-label={link.platform}
                >
                  <Icon size={20} />
                </a>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
