import { Briefcase, MapPin, Zap } from 'lucide-react'
import { Section, SectionHeading, Reveal, MetricBadge } from './ui'
import { experience } from '../data'

// Highlights numbers / key metric tokens inside a bullet so recruiters catch them.
// Capturing group so split() keeps the matched tokens; a fresh non-global regex is
// used for testing each part (avoids the stateful-lastIndex trap of global regexes).
const SPLITTER = /(550M\+|900\+|3\+|100\+|sub-100ms|under 2 minutes|zero-downtime|200-resume|8\.27\/10|\bunder few seconds\b)/gi
const IS_METRIC = /550M\+|900\+|3\+|100\+|sub-100ms|under 2 minutes|zero-downtime|200-resume|8\.27\/10|under few seconds/i

function Highlighted({ text }) {
  const parts = text.split(SPLITTER)
  return (
    <>
      {parts.map((part, i) =>
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

export default function Experience() {
  return (
    <Section id="experience">
      <SectionHeading index="02" eyebrow="Experience" title="Where I've shipped" />

      <div className="relative">
        {/* vertical timeline rail */}
        <div className="absolute left-[15px] top-2 bottom-2 hidden w-px bg-gradient-to-b from-accent/60 via-accent/20 to-transparent sm:block" />

        {experience.map((job, ji) => (
          <Reveal key={job.company} className="relative sm:pl-14">
            {/* timeline node */}
            <span className="absolute left-0 top-1.5 hidden h-8 w-8 place-items-center rounded-full border border-accent/40 bg-accent/10 text-accent sm:grid">
              <Briefcase size={15} />
            </span>

            <div className="card p-6 sm:p-8">
              <div className="flex flex-col justify-between gap-2 sm:flex-row sm:items-start">
                <div>
                  <h3 className="font-display text-xl font-bold sm:text-2xl">{job.company}</h3>
                  <p className="mt-0.5 text-base font-medium text-accent">{job.title}</p>
                  <p className="mt-1 flex items-center gap-1.5 text-xs text-ink-800/60 dark:text-paper-100/50">
                    <MapPin size={13} /> {job.location}
                  </p>
                </div>
                <span className="chip whitespace-nowrap font-mono">{job.dates}</span>
              </div>

              {/* metric badges row */}
              <div className="mt-6 flex flex-wrap gap-3">
                {job.highlights
                  .filter((h) => h.metric)
                  .map((h) => (
                    <MetricBadge key={h.metric.label} value={h.metric.value} label={h.metric.label} />
                  ))}
              </div>

              <ul className="mt-6 space-y-3.5">
                {job.highlights.map((h, i) => (
                  <li key={i} className="flex gap-3 text-sm leading-relaxed">
                    <Zap
                      size={15}
                      className="mt-1 flex-shrink-0 text-accent/70"
                      aria-hidden
                    />
                    <span className="text-ink-800/85 dark:text-paper-100/75">
                      <Highlighted text={h.text} />
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  )
}
