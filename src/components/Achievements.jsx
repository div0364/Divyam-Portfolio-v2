import { motion } from 'framer-motion'
import { Award, Trophy, Medal, Rocket, Star } from 'lucide-react'
import { Section, SectionHeading, stagger, staggerItem } from './ui'
import { achievements } from '../data'

const ICONS = { Award, Trophy, Medal, Rocket, Star }

// Emphasize numeric/ranking tokens so they pop while skimming.
const SPLITTER = /(top 5%|top 4%|2nd Place|2000\+|900\+|180\+|1926|1427|24-hour|3-month)/gi
const IS_METRIC = /top 5%|top 4%|2nd Place|2000\+|900\+|180\+|1926|1427|24-hour|3-month/i

function Highlighted({ text }) {
  return (
    <>
      {text.split(SPLITTER).map((part, i) =>
        IS_METRIC.test(part) ? (
          <span key={i} className="font-semibold text-accent">
            {part}
          </span>
        ) : (
          <span key={i}>{part}</span>
        )
      )}
    </>
  )
}

export default function Achievements() {
  return (
    <Section id="achievements">
      <SectionHeading index="05" eyebrow="Achievements" title="Recognition & milestones" />

      <motion.div
        variants={stagger}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: '-60px' }}
        className="grid gap-4 md:grid-cols-2"
      >
        {achievements.map((a, i) => {
          const Icon = ICONS[a.icon] || Star
          // Make the first (headline) award span both columns on desktop.
          const wide = i === 0 ? 'md:col-span-2' : ''
          return (
            <motion.div
              key={a.title}
              variants={staggerItem}
              whileHover={{ y: -4 }}
              className={`card flex gap-4 p-5 hover:shadow-card sm:p-6 ${wide}`}
            >
              <span className="grid h-11 w-11 flex-shrink-0 place-items-center rounded-xl border border-accent/30 bg-accent/10 text-accent">
                <Icon size={20} />
              </span>
              <div>
                <h3 className="font-display text-base font-bold leading-snug">{a.title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-ink-800/80 dark:text-paper-100/70">
                  <Highlighted text={a.detail} />
                </p>
              </div>
            </motion.div>
          )
        })}
      </motion.div>
    </Section>
  )
}
