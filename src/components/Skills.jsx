import {
  Code2,
  BookOpen,
  Server,
  Network,
  Layout,
  Boxes,
  Cloud,
  Database,
  Activity,
  Wrench,
} from 'lucide-react'
import { motion } from 'framer-motion'
import { Section, SectionHeading, stagger, staggerItem } from './ui'
import { skills } from '../data'

const ICONS = {
  Languages: Code2,
  'CS Fundamentals': BookOpen,
  'Systems & Platform': Server,
  'Protocols & Networking': Network,
  Frontend: Layout,
  'Backend & APIs': Boxes,
  'Cloud & DevOps': Cloud,
  'Data & Storage': Database,
  'Testing & Observability': Activity,
  Tools: Wrench,
}

export default function Skills() {
  return (
    <Section id="skills">
      <SectionHeading index="04" eyebrow="Skills" title="Technical toolkit" />

      <motion.div
        variants={stagger}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: '-60px' }}
        className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
      >
        {skills.map((group) => {
          const Icon = ICONS[group.category] || Wrench
          return (
            <motion.div
              key={group.category}
              variants={staggerItem}
              className="card p-5 transition-colors hover:border-accent/40"
            >
              <div className="mb-4 flex items-center gap-2">
                <span className="grid h-8 w-8 place-items-center rounded-lg bg-accent/10 text-accent">
                  <Icon size={16} />
                </span>
                <h3 className="font-display text-sm font-semibold">{group.category}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="chip font-mono transition-all hover:-translate-y-0.5 hover:border-accent/50 hover:text-accent"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          )
        })}
      </motion.div>
    </Section>
  )
}
