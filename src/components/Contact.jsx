import { motion } from 'framer-motion'
import {
  Mail,
  Phone,
  Github,
  Linkedin,
  FileText,
  MapPin,
  Code2,
  Binary,
  ArrowUpRight,
} from 'lucide-react'
import { Section, SectionHeading, Reveal } from './ui'
import { contact, profile } from '../data'

const links = [
  { icon: Github, label: 'GitHub', value: 'github.com', href: contact.github, ext: true },
  { icon: Linkedin, label: 'LinkedIn', value: 'linkedin.com', href: contact.linkedin, ext: true },
  { icon: Code2, label: 'LeetCode', value: 'Knight · 1926', href: contact.leetcode, ext: true },
  {
    icon: Binary,
    label: 'Codeforces',
    value: 'Specialist · 1427',
    href: contact.codeforces,
    ext: true,
  },
  { icon: Phone, label: 'Phone', value: contact.phone, href: `tel:${contact.phone}`, ext: false },
  { icon: Mail, label: 'Email', value: contact.email, href: `mailto:${contact.email}`, ext: false },
]

export default function Contact() {
  return (
    <Section id="contact" className="pb-0">
      <SectionHeading index="06" eyebrow="Contact" title="Let's build something" />

      <div className="grid gap-8 lg:grid-cols-[1fr_1.1fr]">
        <Reveal>
          <p className="text-lg leading-relaxed text-ink-800/85 dark:text-paper-100/75">
            I'm open to Software Engineer, Backend, Distributed Systems, and AI/ML
            opportunities. Whether it's a role, a collaboration, or a technical conversation —
            my inbox is open.
          </p>
          <p className="mt-3 flex items-center gap-2 text-sm text-ink-800/60 dark:text-paper-100/50">
            <MapPin size={15} className="text-accent" /> {profile.location}
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href={`mailto:${contact.email}`}
              className="inline-flex items-center gap-2 rounded-xl bg-accent px-5 py-3 text-sm font-semibold text-ink-950 shadow-glow transition-transform hover:-translate-y-0.5"
            >
              <Mail size={17} /> Email me
            </a>
            <a
              href={contact.resume}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl border border-paper-200 px-5 py-3 text-sm font-semibold transition-all hover:-translate-y-0.5 hover:border-accent/50 hover:text-accent dark:border-ink-700"
            >
              <FileText size={17} /> Download Resume
            </a>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="grid gap-3 sm:grid-cols-2">
            {links.map((l) => (
              <motion.a
                key={l.label}
                href={l.href}
                target={l.ext ? '_blank' : undefined}
                rel={l.ext ? 'noopener noreferrer' : undefined}
                whileHover={{ y: -3 }}
                className="card group flex items-center gap-3 p-4 hover:border-accent/40"
              >
                <span className="grid h-10 w-10 flex-shrink-0 place-items-center rounded-lg bg-accent/10 text-accent">
                  <l.icon size={18} />
                </span>
                <span className="min-w-0">
                  <span className="block text-xs text-ink-800/55 dark:text-paper-100/45">
                    {l.label}
                  </span>
                  <span className="block truncate text-sm font-medium">{l.value}</span>
                </span>
                {l.ext && (
                  <ArrowUpRight
                    size={16}
                    className="ml-auto flex-shrink-0 text-ink-800/30 transition-colors group-hover:text-accent dark:text-paper-100/30"
                  />
                )}
              </motion.a>
            ))}
          </div>
        </Reveal>
      </div>

      {/* Footer */}
      <footer className="mt-24 border-t border-paper-200/70 py-8 dark:border-ink-700/50">
        <div className="flex flex-col items-center justify-between gap-3 text-sm text-ink-800/55 dark:text-paper-100/45 sm:flex-row">
          <span className="font-mono">© {profile.name} · 2026</span>
          <span className="flex items-center gap-1.5">
            Built with React, Tailwind &amp; Framer Motion
          </span>
        </div>
      </footer>
    </Section>
  )
}
