export default function Footer() {
  return (
    <footer className="w-full py-6 px-4 border-t border-slate-100 dark:border-slate-800 relative z-10 bg-white dark:bg-slate-900">
      <div className="max-w-4xl mx-auto text-center">
        <p className="text-sm text-slate-500 dark:text-slate-400">
          © {new Date().getFullYear()} Password1. Your password never leaves your device.
        </p>
        <p className="text-xs text-slate-400 dark:text-slate-500 mt-2">
          Built with security in mind. 
          <a 
            href="https://github.com/Password1-io" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-primary-600 hover:text-primary-700 dark:text-primary-400 dark:hover:text-primary-300 ml-1"
          >
            View on GitHub
          </a>
        </p>
      </div>
    </footer>
  )
}

