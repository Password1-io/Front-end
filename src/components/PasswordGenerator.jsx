import { useState, useEffect, useRef } from 'react'
import { generatePassword } from '../lib/generatePassword'
import { LockClosedIcon, GlobeAltIcon, KeyIcon } from './icons'
import PasswordOutput from './PasswordOutput'

const SETTINGS_KEY = 'password1_settings'

// Load settings from localStorage
function loadSettings() {
  try {
    const saved = localStorage.getItem(SETTINGS_KEY)
    if (saved) {
      return JSON.parse(saved)
    }
  } catch (e) {
    console.error('Failed to load settings:', e)
  }
  return null
}

// Save settings to localStorage
function saveSettings(settings) {
  try {
    localStorage.setItem(SETTINGS_KEY, JSON.stringify(settings))
  } catch (e) {
    console.error('Failed to save settings:', e)
  }
}

export default function PasswordGenerator({ isDark }) {
  const [masterPassword, setMasterPassword] = useState('')
  const [website, setWebsite] = useState('')
  const [generatedPassword, setGeneratedPassword] = useState('')
  const [isGenerating, setIsGenerating] = useState(false)
  const [showMasterPassword, setShowMasterPassword] = useState(false)
  const [passwordLength, setPasswordLength] = useState(() => {
    const saved = loadSettings()
    return saved?.passwordLength ?? 16
  })
  const [includeSpecialChars, setIncludeSpecialChars] = useState(() => {
    const saved = loadSettings()
    return saved?.includeSpecialChars ?? true
  })
  const debounceRef = useRef(null)

  // Save settings when they change
  useEffect(() => {
    saveSettings({ passwordLength, includeSpecialChars })
  }, [passwordLength, includeSpecialChars])

  // Auto-generate password when inputs change
  useEffect(() => {
    if (!masterPassword || !website) {
      setGeneratedPassword('')
      return
    }

    // Debounce to avoid too many generations while typing
    if (debounceRef.current) {
      clearTimeout(debounceRef.current)
    }

    debounceRef.current = setTimeout(async () => {
      setIsGenerating(true)
      try {
        const password = await generatePassword(masterPassword, website, {
          length: passwordLength,
          includeSpecialChars,
          includeCaps: true,
        })
        setGeneratedPassword(password)
      } catch (error) {
        console.error('Password generation failed:', error)
      } finally {
        setIsGenerating(false)
      }
    }, 150)

    return () => {
      if (debounceRef.current) {
        clearTimeout(debounceRef.current)
      }
    }
  }, [masterPassword, website, passwordLength, includeSpecialChars])

  return (
    <div className="w-full max-w-lg">
      {/* Hero Text */}
      <div className="text-center mb-8">
        <h1 className="text-3xl sm:text-4xl font-bold mb-3" style={{ color: 'var(--text-primary)' }}>
          One Password,
          <span style={{ color: 'var(--accent)' }}> Infinite Security</span>
        </h1>
        <p className="text-lg" style={{ color: 'var(--text-secondary)' }}>
          Generate unique, secure passwords for every website using just one master password.
        </p>
      </div>

      {/* Main Card */}
      <div 
        className="rounded-2xl shadow-xl p-6 sm:p-8 transition-colors duration-300"
        style={{ 
          backgroundColor: 'var(--bg-card)', 
          borderColor: 'var(--border-color)',
          borderWidth: '1px',
          borderStyle: 'solid'
        }}
      >
        {/* Master Password Input */}
        <div className="mb-5">
          <label className="block text-sm font-medium mb-2" style={{ color: 'var(--text-label)' }}>
            <LockClosedIcon className="w-4 h-4 inline mr-1.5 -mt-0.5" />
            Master Password
          </label>
          <div className="relative">
            <input
              type={showMasterPassword ? 'text' : 'password'}
              value={masterPassword}
              onChange={(e) => setMasterPassword(e.target.value)}
              placeholder="Enter your master password"
              className="input-field pr-12"
            />
            <button
              type="button"
              onClick={() => setShowMasterPassword(!showMasterPassword)}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 dark:hover:text-slate-300 transition-colors"
            >
              {showMasterPassword ? (
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88" />
                </svg>
              ) : (
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Website Input */}
        <div className="mb-5">
          <label className="block text-sm font-medium mb-2" style={{ color: 'var(--text-label)' }}>
            <GlobeAltIcon className="w-4 h-4 inline mr-1.5 -mt-0.5" />
            Website
          </label>
          <input
            type="text"
            value={website}
            onChange={(e) => setWebsite(e.target.value)}
            placeholder="e.g., google.com, amazon, netflix"
            className="input-field"
          />
        </div>

        {/* Options */}
        <div 
          className="mb-6 p-4 rounded-xl transition-colors duration-300"
          style={{ backgroundColor: 'var(--bg-secondary)' }}
        >
          <div className="flex items-center justify-between mb-3">
            <label className="text-sm font-medium" style={{ color: 'var(--text-label)' }}>
              Password Length: <span className="font-semibold" style={{ color: 'var(--accent)' }}>{passwordLength}</span>
            </label>
          </div>
          <input
            type="range"
            min="8"
            max="32"
            value={passwordLength}
            onChange={(e) => setPasswordLength(parseInt(e.target.value))}
            className="w-full h-2 rounded-lg appearance-none cursor-pointer"
            style={{ backgroundColor: 'var(--border-color)', accentColor: 'var(--accent)' }}
          />
          <div className="flex justify-between text-xs mt-1" style={{ color: 'var(--text-muted)' }}>
            <span>8</span>
            <span>32</span>
          </div>
          
          <label className="flex items-center gap-2 mt-4 cursor-pointer">
            <input
              type="checkbox"
              checked={includeSpecialChars}
              onChange={(e) => setIncludeSpecialChars(e.target.checked)}
              className="w-4 h-4 rounded focus:ring-2"
              style={{ accentColor: 'var(--accent)' }}
            />
            <span className="text-sm" style={{ color: 'var(--text-label)' }}>Include special characters (!@#$%)</span>
          </label>
        </div>

        {/* Output */}
        <PasswordOutput password={generatedPassword} isGenerating={isGenerating} />
      </div>

      {/* Trust Badges */}
      <div className="mt-8 flex flex-wrap items-center justify-center gap-4 text-sm" style={{ color: 'var(--text-muted)' }}>
        <div className="flex items-center gap-1.5">
          <KeyIcon className="w-4 h-4" style={{ color: 'var(--text-muted)' }} />
          <span>SHA-512 Encryption</span>
        </div>
        <div className="w-1 h-1 rounded-full" style={{ backgroundColor: 'var(--text-muted)' }} />
        <div className="flex items-center gap-1.5">
          <LockClosedIcon className="w-4 h-4" style={{ color: 'var(--text-muted)' }} />
          <span>Zero Storage</span>
        </div>
        <div className="w-1 h-1 rounded-full" style={{ backgroundColor: 'var(--text-muted)' }} />
        <div className="flex items-center gap-1.5">
          <svg className="w-4 h-4" style={{ color: 'var(--text-muted)' }} fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <span>Open Source</span>
        </div>
      </div>
    </div>
  )
}

