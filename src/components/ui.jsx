import { motion } from 'framer-motion'

// Reusable scroll-in reveal wrapper.
export function Reveal({ children, delay = 0, y = 24, className = '', once = true }) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once, margin: '-80px' }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  )
}

// Staggered container + item helpers.
export const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08, delayChildren: 0.05 } },
}
export const staggerItem = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
}

// Section wrapper with an anchor id and consistent vertical rhythm.
export function Section({ id, children, className = '' }) {
  return (
    <section id={id} className={`scroll-mt-24 py-20 sm:py-28 ${className}`}>
      <div className="container-page">{children}</div>
    </section>
  )
}

// Numbered, monospace section eyebrow + heading.
export function SectionHeading({ index, eyebrow, title }) {
  return (
    <Reveal className="mb-12">
      <div className="flex items-center gap-3 font-mono text-sm text-accent">
        {index != null && <span className="opacity-70">{index}</span>}
        <span className="tracking-widest uppercase">{eyebrow}</span>
        <span className="h-px flex-1 bg-gradient-to-r from-accent/40 to-transparent" />
      </div>
      <h2 className="mt-3 font-display text-3xl font-bold sm:text-4xl">{title}</h2>
    </Reveal>
  )
}

// Prominent metric chip so recruiters catch the numbers while skimming.
export function MetricBadge({ value, label }) {
  return (
    <div className="flex flex-col rounded-xl border border-accent/30 bg-accent/[0.07] px-4 py-2.5">
      <span className="font-mono text-lg font-bold leading-tight text-accent sm:text-xl">
        {value}
      </span>
      <span className="mt-0.5 text-[11px] leading-tight text-ink-800/70 dark:text-paper-100/60">
        {label}
      </span>
    </div>
  )
}
