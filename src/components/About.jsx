import { GraduationCap, Cpu, Terminal, Boxes } from 'lucide-react'
import { Section, SectionHeading, Reveal } from './ui'
import { summary, education } from '../data'

const focusAreas = [
  { icon: Terminal, label: 'Systems Programming', note: 'OS concepts, DSA & algorithms' },
  { icon: Boxes, label: 'Distributed Systems', note: 'Scalable backend in Go & Python' },
  { icon: Cpu, label: 'AI / ML', note: 'RAG, LLMs, real-time pipelines' },
]

export default function About() {
  return (
    <Section id="about">
      <SectionHeading index="01" eyebrow="About" title="Profile" />

      <div className="grid gap-8 lg:grid-cols-[1.6fr_1fr]">
        <Reveal>
          <p className="text-lg leading-relaxed text-ink-800/85 dark:text-paper-100/75">
            {summary}
          </p>

          <div className="mt-8 grid gap-3 sm:grid-cols-3">
            {focusAreas.map((f) => (
              <div
                key={f.label}
                className="card p-4 transition-transform hover:-translate-y-1"
              >
                <f.icon className="mb-3 text-accent" size={22} />
                <div className="font-display text-sm font-semibold">{f.label}</div>
                <div className="mt-0.5 text-xs text-ink-800/60 dark:text-paper-100/50">
                  {f.note}
                </div>
              </div>
            ))}
          </div>
        </Reveal>

        {/* Education */}
        <Reveal delay={0.1}>
          <div className="card h-full p-6">
            <div className="mb-4 flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-accent">
              <GraduationCap size={16} /> Education
            </div>
            {education.map((e) => (
              <div key={e.institution}>
                <h3 className="font-display text-lg font-bold leading-snug">{e.institution}</h3>
                <p className="mt-1 text-sm text-ink-800/75 dark:text-paper-100/70">{e.degree}</p>
                <div className="mt-4 flex flex-wrap items-center gap-2">
                  <span className="chip border-accent/30 !bg-accent/10 font-mono !text-accent">
                    {e.grade}
                  </span>
                  <span className="chip">{e.location}</span>
                </div>
                <p className="mt-3 font-mono text-xs text-ink-800/55 dark:text-paper-100/45">
                  {e.dates}
                </p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </Section>
  )
}
