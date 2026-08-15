import { motion } from 'framer-motion';
import * as Icons from 'lucide-react';
import SectionWrapper from '@/components/SectionWrapper';
import { skills, type Skill } from '@/data/portfolio';

function SkillCard({ skill, index }: { skill: Skill; index: number }) {
  const IconComponent = (Icons as unknown as Record<string, Icons.LucideIcon>)[skill.icon];
  const Icon = IconComponent ?? Icons.Code2;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.4, delay: (index % 4) * 0.08 }}
      whileHover={{ y: -6 }}
      className="glass-card neon-border group p-5"
    >
      <div className="flex items-center justify-between">
        <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-cyan-400/20 bg-cyan-400/5 text-cyan-400 transition-all group-hover:scale-110 group-hover:shadow-[0_0_15px_rgba(34,211,238,0.25)]">
          <Icon className="h-6 w-6" />
        </div>
        <span className="text-sm font-bold text-cyan-400">{skill.proficiency}%</span>
      </div>

      <h3 className="mt-4 font-semibold text-white">{skill.name}</h3>
      <p className="mt-1 text-sm leading-relaxed text-slate-400">{skill.description}</p>

      {/* Proficiency bar */}
      <div className="mt-4 h-1.5 w-full overflow-hidden rounded-full bg-white/5">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${skill.proficiency}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.2, ease: 'easeOut' }}
          className="h-full rounded-full bg-gradient-to-r from-cyan-400 to-electric-500"
        />
      </div>
    </motion.div>
  );
}

export default function Skills() {
  return (
    <SectionWrapper
      id="skills"
      title="Technical Skills"
      subtitle="A toolkit built for turning raw data into clear, actionable insights."
    >
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {skills.map((skill, i) => (
          <SkillCard key={skill.name} skill={skill} index={i} />
        ))}
      </div>
    </SectionWrapper>
  );
}
