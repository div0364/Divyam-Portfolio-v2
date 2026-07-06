import { useCallback, useEffect, useState } from 'react'

// Dark by default. Persisted to localStorage and reflected on <html class="dark">.
export function useTheme() {
  const [theme, setTheme] = useState(() => {
    if (typeof document === 'undefined') return 'dark'
    return document.documentElement.classList.contains('dark') ? 'dark' : 'light'
  })

  useEffect(() => {
    const isDark = theme === 'dark'
    document.documentElement.classList.toggle('dark', isDark)
    try {
      localStorage.setItem('theme', theme)
    } catch (e) {
      /* ignore */
    }
  }, [theme])

  const toggle = useCallback(() => {
    setTheme((t) => (t === 'dark' ? 'light' : 'dark'))
  }, [])

  return { theme, toggle }
}
