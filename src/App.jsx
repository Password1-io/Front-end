import Header from './components/Header'
import PasswordGenerator from './components/PasswordGenerator'
import Footer from './components/Footer'
import FloatingElements from './components/FloatingElements'
import { useDarkMode } from './components/DarkModeToggle'

function App() {
  const [isDark, toggleDark] = useDarkMode()

  return (
    <div className="min-h-screen flex flex-col relative overflow-hidden transition-colors duration-300"
         style={{ backgroundColor: 'var(--bg-primary)', color: 'var(--text-primary)' }}>
      <FloatingElements isDark={isDark} />
      
      <Header isDark={isDark} toggleDark={toggleDark} />
      <main className="flex-1 flex items-center justify-center px-4 py-12 relative z-10">
        <PasswordGenerator isDark={isDark} />
      </main>
      <Footer isDark={isDark} />
    </div>
  )
}

export default App

