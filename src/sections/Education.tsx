import { motion } from 'framer-motion';
import { GraduationCap, MapPin, Calendar } from 'lucide-react';
import SectionWrapper from '@/components/SectionWrapper';
import { education } from '@/data/portfolio';

export default function Education() {
  return (
    <SectionWrapper
      id="education"
      title="Education"
      subtitle="Academic background and qualifications."
    >
      <div className="relative mx-auto max-w-3xl">
        {/* Vertical line */}
        <div className="absolute left-4 top-0 h-full w-px bg-gradient-to-b from-cyan-400/40 via-electric-500/30 to-transparent md:left-1/2" />

        <div className="space-y-8">
          {education.map((item, i) => (
            <motion.div
              key={item.degree + i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="relative pl-12 md:pl-0"
            >
              {/* Dot */}
              <div className="absolute left-0 top-2 flex h-8 w-8 items-center justify-center rounded-full border border-cyan-400/30 bg-base-900 text-cyan-400 md:left-1/2 md:-translate-x-1/2">
                <GraduationCap className="h-4 w-4" />
              </div>

              {/* Card */}
              <div className="glass-card neon-border p-6 md:ml-16">
                <h3 className="text-lg font-semibold text-white">{item.degree}</h3>
                <p className="mt-1 text-sm font-medium text-cyan-400">{item.field}</p>

                <div className="mt-3 flex flex-wrap gap-4 text-sm text-slate-400">
                  <span className="flex items-center gap-2">
                    <MapPin className="h-4 w-4" />
                    {item.institution}
                  </span>
                  <span className="flex items-center gap-2">
                    <Calendar className="h-4 w-4" />
                    {item.year}
                  </span>
                </div>

                <p className="mt-4 text-sm leading-relaxed text-slate-400">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
