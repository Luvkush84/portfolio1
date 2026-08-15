import { Github, Linkedin, Instagram, Mail, Phone, MapPin } from 'lucide-react';
import { personalInfo, socialLinks, navLinks } from '@/data/portfolio';

const iconMap = {
  github: Github,
  linkedin: Linkedin,
  instagram: Instagram,
};

export default function Footer() {
  return (
    <footer className="relative border-t border-white/10 bg-base-900/50">
      <div className="mx-auto max-w-7xl px-4 py-12 md:px-8">
        <div className="grid gap-8 md:grid-cols-3">
          {/* Brand */}
          <div>
            <h3 className="text-xl font-bold text-white">{personalInfo.name}</h3>
            <p className="mt-1 text-sm text-slate-400">{personalInfo.role}</p>
            <p className="mt-3 max-w-xs text-sm text-slate-500">{personalInfo.tagline}</p>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-slate-300">
              Quick Links
            </h4>
            <ul className="grid grid-cols-2 gap-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-slate-400 transition hover:text-cyan-400"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact + social */}
          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-slate-300">
              Get in Touch
            </h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-cyan-400" />
                <span className="break-all">{personalInfo.email}</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-cyan-400" />
                <span>{personalInfo.phone}</span>
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-cyan-400" />
                <span>{personalInfo.location}</span>
              </li>
            </ul>
            <div className="mt-4 flex gap-3">
              {socialLinks.map((social) => {
                const Icon = iconMap[social.icon];
                return (
                  <a
                    key={social.label}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="rounded-lg border border-white/10 bg-white/[0.03] p-2.5 text-slate-400 transition-all hover:border-cyan-400/40 hover:text-cyan-400 hover:shadow-[0_0_15px_rgba(34,211,238,0.15)]"
                  >
                    <Icon className="h-5 w-5" />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-white/10 pt-6 text-center">
          <p className="text-sm text-slate-500">
            &copy; 2026 {personalInfo.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
