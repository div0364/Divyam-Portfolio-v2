import { motion } from 'framer-motion'
import { Github, Linkedin, Mail, FileText, MapPin, ArrowDown, Code2 } from 'lucide-react'
import { profile, contact, heroStats } from '../data'
import { stagger, staggerItem } from './ui'

function RotatingRoles() {
  return (
    <span className="text-gradient animate-gradient-pan">
      {profile.roles.join(' · ')}
    </span>
  )
}

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-32 pb-20 sm:pt-40 sm:pb-28">
      {/* ambient background */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-0 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-accent/10 blur-[120px] dark:bg-accent/15" />
        <div className="absolute right-0 top-40 h-72 w-72 rounded-full bg-teal2/10 blur-[100px]" />
        <div className="bg-grid absolute inset-0 text-ink-700/[0.07] dark:text-paper-100/[0.05]" />
      </div>

      <div className="container-page">
        <motion.div variants={stagger} initial="hidden" animate="show" className="max-w-3xl">
          <motion.div
            variants={staggerItem}
            className="mb-5 inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/[0.07] px-3.5 py-1.5 text-xs font-medium text-accent"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-pulse-ring rounded-full bg-accent" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
            </span>
            Open to Software Engineer roles · 2026
          </motion.div>

          <motion.h1
            variants={staggerItem}
            className="font-display text-4xl font-bold leading-[1.05] tracking-tight sm:text-6xl"
          >
            {profile.name}
          </motion.h1>

          <motion.p
            variants={staggerItem}
            className="mt-4 font-display text-xl font-semibold sm:text-2xl"
          >
            <RotatingRoles />
          </motion.p>

          <motion.p
            variants={staggerItem}
            className="mt-5 max-w-2xl text-base leading-relaxed text-ink-800/80 dark:text-paper-100/70 sm:text-lg"
          >
            {profile.pitch}
          </motion.p>

          <motion.div
            variants={staggerItem}
            className="mt-4 flex items-center gap-2 text-sm text-ink-800/60 dark:text-paper-100/50"
          >
            <MapPin size={15} className="text-accent" /> {profile.location}
          </motion.div>

          {/* CTAs */}
          <motion.div variants={staggerItem} className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href={contact.resume}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 rounded-xl bg-accent px-5 py-3 text-sm font-semibold text-ink-950 shadow-glow transition-transform hover:-translate-y-0.5"
            >
              <FileText size={17} /> Resume
            </a>
            <a
              href={contact.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl border border-paper-200 px-5 py-3 text-sm font-semibold transition-all hover:-translate-y-0.5 hover:border-accent/50 hover:text-accent dark:border-ink-700"
            >
              <Github size={17} /> GitHub
            </a>
            <a
              href={contact.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl border border-paper-200 px-5 py-3 text-sm font-semibold transition-all hover:-translate-y-0.5 hover:border-accent/50 hover:text-accent dark:border-ink-700"
            >
              <Linkedin size={17} /> LinkedIn
            </a>
            <a
              href={`mailto:${contact.email}`}
              className="inline-flex items-center gap-2 rounded-xl border border-paper-200 px-5 py-3 text-sm font-semibold transition-all hover:-translate-y-0.5 hover:border-accent/50 hover:text-accent dark:border-ink-700"
            >
              <Mail size={17} /> Email
            </a>
          </motion.div>
        </motion.div>

        {/* Headline metrics — big and skimmable */}
        <motion.div
          variants={stagger}
          initial="hidden"
          animate="show"
          className="mt-16 grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-4"
        >
          {heroStats.map((s) => (
            <motion.div
              key={s.label}
              variants={staggerItem}
              whileHover={{ y: -4 }}
              className="card group p-5 hover:shadow-card"
            >
              <div className="font-mono text-2xl font-bold text-gradient sm:text-3xl">
                {s.value}
              </div>
              <div className="mt-1.5 text-xs leading-snug text-ink-800/70 dark:text-paper-100/60">
                {s.label}
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.a
          href="#about"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="mt-16 inline-flex items-center gap-2 text-xs font-medium uppercase tracking-widest text-ink-800/50 transition-colors hover:text-accent dark:text-paper-100/40"
        >
          <span className="grid h-8 w-8 place-items-center rounded-full border border-current">
            <ArrowDown size={14} className="animate-bounce" />
          </span>
          Scroll
        </motion.a>
      </div>
    </section>
  )
}
