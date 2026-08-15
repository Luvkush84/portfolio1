import { motion } from 'framer-motion';
import { Award, ExternalLink, ShieldCheck, Calendar } from 'lucide-react';
import SectionWrapper from '@/components/SectionWrapper';
import { certifications, type Certification } from '@/data/portfolio';

function CertCard({ cert, index }: { cert: Certification; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5, delay: (index % 3) * 0.1 }}
      className="glass-card neon-border group flex flex-col overflow-hidden"
    >
      {/* Certificate image */}
      <div className="relative aspect-[4/3] overflow-hidden border-b border-white/10 bg-base-800">
        <img
          src={cert.image}
          alt={`${cert.title} certificate`}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          onError={(e) => {
            (e.target as HTMLImageElement).style.display = 'none';
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-base-900/70 to-transparent" />
        <div className="absolute left-4 top-4 flex items-center gap-2 rounded-full border border-cyan-400/20 bg-base-900/80 px-3 py-1 text-xs font-medium text-cyan-400 backdrop-blur-sm">
          <Award className="h-3.5 w-3.5" />
          Certificate
        </div>
      </div>

      {/* Body */}
      <div className="flex flex-1 flex-col p-6">
        <h3 className="text-lg font-semibold text-white">{cert.title}</h3>
        <p className="mt-1 text-sm text-slate-400">{cert.organization}</p>

        <div className="mt-3 flex items-center gap-2 text-sm text-slate-500">
          <Calendar className="h-4 w-4" />
          {cert.date}
        </div>

        {/* Buttons */}
        <div className="mt-6 flex flex-wrap gap-3 pt-2">
          <a
            href={cert.credentialUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 rounded-lg border border-cyan-400/20 bg-cyan-400/5 px-4 py-2.5 text-sm font-medium text-cyan-400 transition-all hover:border-cyan-400/50 hover:shadow-[0_0_15px_rgba(34,211,238,0.2)]"
          >
            <ExternalLink className="h-4 w-4" />
            View Certificate
          </a>
          <a
            href={cert.verifyUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 rounded-lg border border-white/10 bg-white/[0.03] px-4 py-2.5 text-sm font-medium text-slate-300 transition-all hover:border-white/25 hover:text-white"
          >
            <ShieldCheck className="h-4 w-4" />
            Verify
          </a>
        </div>
      </div>
    </motion.div>
  );
}

export default function Certifications() {
  return (
    <SectionWrapper
      id="certifications"
      title="Certifications"
      subtitle="Professional credentials and completed courses in data analytics."
    >
      {certifications.length === 0 ? (
        <p className="text-center text-slate-500">No certifications added yet.</p>
      ) : (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {certifications.map((cert, i) => (
            <CertCard key={cert.title + i} cert={cert} index={i} />
          ))}
        </div>
      )}
    </SectionWrapper>
  );
}
