import { motion } from 'framer-motion';
import { GraduationCap, Target, BrainCircuit } from 'lucide-react';
import SectionWrapper from '@/components/SectionWrapper';
import { personalInfo, education } from '@/data/portfolio';

const cards = [
  {
    icon: GraduationCap,
    title: 'Education',
    body: education[0]
      ? `${education[0].degree} — ${education[0].institution}`
      : 'Add your education details.',
  },
  {
    icon: Target,
    title: 'Career Goal',
    body: personalInfo.careerGoal,
  },
  {
    icon: BrainCircuit,
    title: 'Analytics Mindset',
    body: 'I approach problems by asking the right questions, exploring the data, and letting evidence guide decisions — not assumptions.',
  },
];

export default function About() {
  return (
    <SectionWrapper id="about" title="About Me">
      <div className="grid items-center gap-10 lg:grid-cols-2">
        {/* Text */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-base leading-relaxed text-slate-300 md:text-lg">
            {personalInfo.about}
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid gap-4">
          {cards.map((card, i) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="glass-card neon-border group flex items-start gap-4 p-5"
            >
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-cyan-400/20 bg-cyan-400/5 text-cyan-400 transition-all group-hover:scale-110 group-hover:shadow-[0_0_15px_rgba(34,211,238,0.2)]">
                <card.icon className="h-6 w-6" />
              </div>
              <div>
                <h3 className="font-semibold text-white">{card.title}</h3>
                <p className="mt-1 text-sm leading-relaxed text-slate-400">{card.body}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
