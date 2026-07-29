'use client';

import { socialLinks } from '@/content/social';
import { profile } from '@/content/profile';
import { Mail } from 'lucide-react';
import { GitHubIcon, LinkedInIcon } from '@/components/icons';
import type { ComponentType, SVGProps } from 'react';

type IconComponent = ComponentType<{ size?: number } & SVGProps<SVGSVGElement>>;

const iconMap: Record<string, IconComponent> = {
  github: ({ size = 18, ...props }) => <GitHubIcon width={size} height={size} {...props} />,
  linkedin: ({ size = 18, ...props }) => <LinkedInIcon width={size} height={size} {...props} />,
  mail: Mail as unknown as IconComponent,
};

export function Footer() {
  return (
    <footer className="border-t border-white/5 bg-zinc-950 py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex flex-col items-center md:items-start gap-2">
          <p className="text-zinc-50 font-medium">{profile.name}</p>
          <p className="text-zinc-400 text-sm">© {new Date().getFullYear()} All rights reserved.</p>
        </div>
        
        <div className="flex items-center gap-4">
          {socialLinks.map((link) => {
            const Icon = iconMap[link.icon as keyof typeof iconMap];
            if (!Icon) return null;
            return (
              <a
                key={link.platform}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-zinc-900 border border-white/5 flex items-center justify-center text-zinc-400 hover:text-blue-500 hover:border-blue-500/30 transition-all hover:-translate-y-1"
                aria-label={link.platform}
              >
                <Icon size={18} />
              </a>
            );
          })}
        </div>
        
        <div className="text-sm text-zinc-500">
          Built with <span className="text-zinc-300">Next.js</span> & <span className="text-zinc-300">Tailwind CSS</span>
        </div>
      </div>
    </footer>
  );
}
