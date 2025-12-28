import { useState } from 'react'
import { ClipboardDocumentIcon, CheckIcon, EyeIcon, EyeSlashIcon } from './icons'

export default function PasswordOutput({ password, isGenerating }) {
  const [copied, setCopied] = useState(false)
  const [showPassword, setShowPassword] = useState(false)

  const handleCopy = async () => {
    if (!password) return
    
    try {
      await navigator.clipboard.writeText(password)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (err) {
      console.error('Failed to copy:', err)
    }
  }

  const displayPassword = showPassword ? password : password.replace(/./g, '•')

  return (
    <div className="mt-6">
      <label className="block text-sm font-medium mb-2" style={{ color: 'var(--text-label)' }}>
        Generated Password
      </label>
      
      <div className="relative">
        <div 
          className={`
            w-full px-4 py-4 border-2 rounded-xl
            font-mono text-lg tracking-wider
            flex items-center justify-between gap-3
            transition-all duration-300
            ${isGenerating ? 'animate-pulse' : ''}
          `}
          style={{ 
            backgroundColor: password ? 'var(--bg-secondary)' : 'var(--bg-secondary)',
            borderColor: password ? 'var(--accent)' : 'var(--border-color)',
            color: 'var(--text-primary)'
          }}
        >
          <span className="flex-1" style={{ color: password ? 'var(--text-primary)' : 'var(--text-muted)' }}>
            {isGenerating ? 'Generating...' : (password ? displayPassword : 'Your password will appear here')}
          </span>
          
          {password && (
            <div className="flex items-center gap-1">
              <button
                onClick={() => setShowPassword(!showPassword)}
                className="p-2 rounded-lg transition-colors hover:opacity-80"
                style={{ color: 'var(--text-muted)' }}
                title={showPassword ? 'Hide password' : 'Show password'}
              >
                {showPassword ? (
                  <EyeSlashIcon className="w-5 h-5" />
                ) : (
                  <EyeIcon className="w-5 h-5" />
                )}
              </button>
              
              <button
                onClick={handleCopy}
                className="p-2 rounded-lg transition-all duration-200"
                style={{ 
                  color: copied ? '#16a34a' : 'var(--text-muted)',
                  backgroundColor: copied ? '#dcfce7' : 'transparent'
                }}
                title={copied ? 'Copied!' : 'Copy to clipboard'}
              >
                {copied ? (
                  <CheckIcon className="w-5 h-5" />
                ) : (
                  <ClipboardDocumentIcon className="w-5 h-5" />
                )}
              </button>
            </div>
          )}
        </div>
        
        {copied && (
          <div 
            className="absolute -top-10 right-0 text-white text-sm px-3 py-1.5 rounded-lg shadow-lg animate-fade-in"
            style={{ backgroundColor: '#1e293b' }}
          >
            Copied to clipboard!
          </div>
        )}
      </div>
      
      {password && (
        <p className="mt-3 text-sm text-center" style={{ color: 'var(--text-muted)' }}>
          Use this password to register or login to your website
        </p>
      )}
    </div>
  )
}

