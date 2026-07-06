import { motion } from 'framer-motion'
import { ExternalLink, Radio, FolderGit2, ArrowUpRight } from 'lucide-react'
import { Section, SectionHeading, Reveal, stagger, staggerItem } from './ui'
import { projects } from '../data'

export default function Projects() {
  return (
    <Section id="projects">
      <SectionHeading index="03" eyebrow="Projects" title="Things I've built" />

      <motion.div
        variants={stagger}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: '-60px' }}
        className="grid gap-6 md:grid-cols-2"
      >
        {projects.map((p) => (
          <motion.article
            key={p.name}
            variants={staggerItem}
            whileHover={{ y: -6 }}
            className="card group flex flex-col p-6 hover:shadow-card sm:p-7"
          >
            <div className="flex items-start justify-between gap-3">
              <div className="flex items-center gap-2.5">
                <span className="grid h-10 w-10 place-items-center rounded-xl border border-accent/30 bg-accent/10 text-accent">
                  <FolderGit2 size={19} />
                </span>
                <div>
                  <h3 className="font-display text-xl font-bold leading-tight">{p.name}</h3>
                  <span className="font-mono text-xs text-ink-800/50 dark:text-paper-100/40">
                    {p.year}
                  </span>
                </div>
              </div>

              {p.links?.live && (
                <span className="inline-flex items-center gap-1.5 rounded-full border border-teal2/40 bg-teal2/10 px-2.5 py-1 text-[11px] font-semibold text-teal2-deep dark:text-teal2">
                  <Radio size={12} className="animate-pulse" /> Live
                </span>
              )}
            </div>

            {/* headline metric */}
            {p.metric && (
              <div className="mt-5 inline-flex w-fit items-baseline gap-2 rounded-lg bg-accent/[0.07] px-3 py-1.5">
                <span className="font-mono text-lg font-bold text-accent">{p.metric.value}</span>
                <span className="text-xs text-ink-800/60 dark:text-paper-100/50">
                  {p.metric.label}
                </span>
              </div>
            )}

            <ul className="mt-5 flex-1 space-y-3">
              {p.highlights.map((h, i) => (
                <li
                  key={i}
                  className="flex gap-2.5 text-sm leading-relaxed text-ink-800/85 dark:text-paper-100/75"
                >
                  <ArrowUpRight size={15} className="mt-0.5 flex-shrink-0 text-accent/70" />
                  <span>{h}</span>
                </li>
              ))}
            </ul>

            <div className="mt-6 flex flex-wrap gap-2">
              {p.stack.map((t) => (
                <span key={t} className="chip font-mono">
                  {t}
                </span>
              ))}
            </div>
          </motion.article>
        ))}
      </motion.div>

      <Reveal delay={0.1} className="mt-6">
        <p className="text-center text-xs text-ink-800/50 dark:text-paper-100/40">
          <ExternalLink size={12} className="mr-1 inline" />
          Live demo &amp; source links available on request / GitHub.
        </p>
      </Reveal>
    </Section>
  )
}
