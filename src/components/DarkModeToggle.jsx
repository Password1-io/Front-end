import { useEffect, useState, useCallback } from 'react'

const DARK_MODE_KEY = 'password1_darkMode'

function getInitialDarkMode() {
  if (typeof window === 'undefined') return false
  
  const saved = localStorage.getItem(DARK_MODE_KEY)
  if (saved !== null) {
    return saved === 'true'
  }
  return window.matchMedia('(prefers-color-scheme: dark)').matches
}

export function useDarkMode() {
  const [isDark, setIsDark] = useState(() => {
    const initial = getInitialDarkMode()
    // Apply immediately
    if (typeof window !== 'undefined') {
      if (initial) {
        document.documentElement.classList.add('dark')
      } else {
        document.documentElement.classList.remove('dark')
      }
    }
    return initial
  })

  // Apply dark mode class whenever isDark changes
  useEffect(() => {
    const root = document.documentElement
    if (isDark) {
      root.classList.add('dark')
    } else {
      root.classList.remove('dark')
    }
    localStorage.setItem(DARK_MODE_KEY, String(isDark))
  }, [isDark])

  // Toggle handler
  const toggleDark = useCallback(() => {
    setIsDark(prev => !prev)
  }, [])

  return [isDark, toggleDark]
}

export default function DarkModeToggle({ isDark, toggleDark }) {
  return (
    <button
      onClick={toggleDark}
      className="p-2.5 rounded-xl transition-all duration-300 hover:scale-105"
      style={{ 
        backgroundColor: isDark ? '#334155' : '#f1f5f9',
        color: isDark ? '#fbbf24' : '#475569'
      }}
      aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
    >
      {isDark ? (
        // Sun icon for switching to light mode
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
        </svg>
      ) : (
        // Moon icon for switching to dark mode
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z" />
        </svg>
      )}
    </button>
  )
}

