import { motion } from 'framer-motion';
import { ArrowRight, Download, Sparkles } from 'lucide-react';
import { lazy, Suspense } from 'react';
import { personalInfo, heroStats } from '@/data/portfolio';

const HeroScene = lazy(() => import('@/components/HeroScene'));

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden pt-24"
    >
      {/* Grid background */}
      <div className="pointer-events-none absolute inset-0 bg-grid-pattern bg-[size:50px_50px] opacity-30" />

      {/* Radial glow */}
      <div className="pointer-events-none absolute left-1/2 top-1/3 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-cyan-500/10 blur-[120px]" />
      <div className="pointer-events-none absolute right-1/4 top-1/2 h-[400px] w-[400px] rounded-full bg-electric-500/10 blur-[100px]" />

      {/* 3D scene — absolute, behind text on mobile, beside on desktop */}
      <div className="pointer-events-none absolute inset-0 z-0">
        <Suspense fallback={null}>
          <HeroScene />
        </Suspense>
      </div>

      {/* Content */}
<div className="relative z-10 mx-auto w-full max-w-7xl px-4 md:px-8">

  {/* Profile Image */}
  <div className="absolute right-10 top-1/2 hidden -translate-y-1/2 lg:block">
    <img
      src="/luvkush.jpg"
      alt="Luvkush Profile"
      className="h-80 w-80 rounded-full object-cover border-2 border-cyan-400 shadow-lg"
    />
  </div>

  <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/5 px-4 py-1.5 text-sm text-cyan-400"
          >
            <Sparkles className="h-4 w-4" />
            Available for opportunities
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-4xl font-extrabold leading-tight text-white sm:text-5xl md:text-6xl lg:text-7xl"
          >
            {personalInfo.name}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="mt-3 text-xl font-medium text-slate-300 md:text-2xl"
          >
            {personalInfo.role}
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="mt-2 text-lg font-medium gradient-text md:text-xl"
          >
            {personalInfo.tagline}
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.45 }}
            className="mt-6 max-w-2xl text-base leading-relaxed text-slate-400 md:text-lg"
          >
            {personalInfo.aboutLong}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.55 }}
            className="mt-8 flex flex-col gap-4 sm:flex-row"
          >
            <a href="#projects" className="btn-glow text-cyan-400">
              View My Projects
              <ArrowRight className="h-4 w-4" />
            </a>
            <a href={personalInfo.resume} download className="btn-outline text-slate-200">
              <Download className="h-4 w-4" />
              Download Resume
            </a>
          </motion.div>

          {/* Animated stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.65 }}
            className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-5"
          >
            {heroStats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: 0.7 + i * 0.08 }}
                className="glass-card neon-border p-3 text-center"
              >
                <p className="text-xs font-medium uppercase tracking-wider text-slate-500">
                  {stat.label}
                </p>
                <p className="mt-1 text-lg font-bold text-cyan-400">{stat.value}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <div className="flex h-10 w-6 items-start justify-center rounded-full border border-white/20 p-1">
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="h-2 w-1 rounded-full bg-cyan-400"
          />
        </div>
      </motion.div>
    </section>
  );
}
