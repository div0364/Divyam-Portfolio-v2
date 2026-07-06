import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Moon, Sun, Menu, X, FileText } from 'lucide-react'
import { navSections, contact, profile } from '../data'

export default function Navbar({ theme, toggleTheme }) {
  const [scrolled, setScrolled] = useState(false)
  const [active, setActive] = useState('')
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Scroll-spy: highlight the section currently in view.
  useEffect(() => {
    const ids = navSections.map((s) => s.id)
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id)
        })
      },
      { rootMargin: '-45% 0px -50% 0px', threshold: 0 }
    )
    ids.forEach((id) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })
    return () => observer.disconnect()
  }, [])

  const initials = profile.name
    .split(' ')
    .map((n) => n[0])
    .join('')

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'border-b border-paper-200/70 bg-paper-50/80 backdrop-blur-lg dark:border-ink-700/50 dark:bg-ink-950/70'
          : 'border-b border-transparent bg-transparent'
      }`}
    >
      <nav className="container-page flex h-16 items-center justify-between">
        <a
          href="#top"
          className="group flex items-center gap-2 font-display text-lg font-bold"
          aria-label="Back to top"
        >
          <span className="grid h-9 w-9 place-items-center rounded-lg border border-accent/40 bg-accent/10 font-mono text-sm text-accent transition-transform group-hover:scale-105">
            {initials}
          </span>
          <span className="hidden sm:inline">{profile.name}</span>
        </a>

        <div className="hidden items-center gap-1 md:flex">
          {navSections.map((s) => (
            <a
              key={s.id}
              href={`#${s.id}`}
              className={`relative rounded-lg px-3.5 py-2 text-sm font-medium transition-colors ${
                active === s.id
                  ? 'text-accent'
                  : 'text-ink-800/70 hover:text-ink-900 dark:text-paper-100/60 dark:hover:text-paper-50'
              }`}
            >
              {s.label}
              {active === s.id && (
                <motion.span
                  layoutId="nav-active"
                  className="absolute inset-x-2 -bottom-0.5 h-0.5 rounded-full bg-accent"
                  transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                />
              )}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <a
            href={contact.resume}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden items-center gap-1.5 rounded-lg border border-accent/40 bg-accent/10 px-3 py-2 text-sm font-semibold text-accent transition-all hover:bg-accent/20 sm:inline-flex"
          >
            <FileText size={15} /> Resume
          </a>

          <button
            onClick={toggleTheme}
            aria-label="Toggle color theme"
            className="grid h-9 w-9 place-items-center rounded-lg border border-paper-200 text-ink-800 transition-colors hover:border-accent/50 hover:text-accent dark:border-ink-700 dark:text-paper-100"
          >
            <AnimatePresence mode="wait" initial={false}>
              <motion.span
                key={theme}
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                {theme === 'dark' ? <Sun size={17} /> : <Moon size={17} />}
              </motion.span>
            </AnimatePresence>
          </button>

          <button
            onClick={() => setMenuOpen((o) => !o)}
            aria-label="Toggle menu"
            className="grid h-9 w-9 place-items-center rounded-lg border border-paper-200 text-ink-800 dark:border-ink-700 dark:text-paper-100 md:hidden"
          >
            {menuOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="overflow-hidden border-t border-paper-200/70 bg-paper-50/95 backdrop-blur-lg dark:border-ink-700/50 dark:bg-ink-950/95 md:hidden"
          >
            <div className="container-page flex flex-col py-3">
              {navSections.map((s) => (
                <a
                  key={s.id}
                  href={`#${s.id}`}
                  onClick={() => setMenuOpen(false)}
                  className={`rounded-lg px-3 py-3 text-sm font-medium ${
                    active === s.id ? 'text-accent' : 'text-ink-800 dark:text-paper-100/80'
                  }`}
                >
                  {s.label}
                </a>
              ))}
              <a
                href={contact.resume}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMenuOpen(false)}
                className="mt-1 inline-flex items-center gap-1.5 rounded-lg border border-accent/40 bg-accent/10 px-3 py-3 text-sm font-semibold text-accent"
              >
                <FileText size={15} /> Resume
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
