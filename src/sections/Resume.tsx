import { motion } from 'framer-motion';
import { Download, Eye, FileText } from 'lucide-react';
import SectionWrapper from '@/components/SectionWrapper';
import { personalInfo } from '@/data/portfolio';

export default function Resume() {
  return (
    <SectionWrapper id="resume" title="My Resume">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{ duration: 0.5 }}
        className="glass-card neon-border mx-auto flex max-w-2xl flex-col items-center p-8 text-center md:p-12"
      >
        <div className="flex h-20 w-20 items-center justify-center rounded-2xl border border-cyan-400/20 bg-cyan-400/5 text-cyan-400 shadow-[0_0_25px_rgba(34,211,238,0.1)]">
          <FileText className="h-10 w-10" />
        </div>

        <h3 className="mt-6 text-2xl font-bold text-white">{personalInfo.name}</h3>
        <p className="mt-1 text-slate-400">{personalInfo.role}</p>

        <p className="mt-4 max-w-md text-sm leading-relaxed text-slate-500">
          Download my full resume to learn more about my education, skills and projects.
        </p>

        <div className="mt-8 flex flex-col gap-4 sm:flex-row">
          <a href={personalInfo.resume} download className="btn-glow text-cyan-400">
            <Download className="h-4 w-4" />
            Download Resume
          </a>
          <a
            href={personalInfo.resume}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline text-slate-200"
          >
            <Eye className="h-4 w-4" />
            View Resume
          </a>
        </div>
      </motion.div>
    </SectionWrapper>
  );
}
