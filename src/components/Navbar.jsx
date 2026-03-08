import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'

const Navbar = () => {
  const [activeSection, setActiveSection] = useState('')

  useEffect(() => {
    const sectionIds = ['about', 'projects', 'skills', 'certifs', 'resume', 'contact']
    const observers = []

    sectionIds.forEach((id) => {
      const el = document.getElementById(id)
      if (!el) return
      const observer = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActiveSection(id) },
        { threshold: 0.4 }
      )
      observer.observe(el)
      observers.push(observer)
    })

    return () => observers.forEach(o => o.disconnect())
  }, [])

  const links = [
    { name: 'About', id: 'about' },
    { name: 'Projects', id: 'projects' },
    { name: 'Skills', id: 'skills' },
    { name: 'Certificates', id: 'certifs' },
    { name: 'Resume', id: 'resume' },
    { name: 'Contact', id: 'contact' },
  ]

  const scrollTo = (id) => {
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <motion.nav
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="fixed top-0 left-0 w-full z-50 flex justify-between items-center px-10 py-5"
      style={{ background: 'linear-gradient(to bottom, rgba(10,10,15,0.95), transparent)' }}
    >
      {/* Logo */}
      <motion.a
        href="#"
        whileHover={{ scale: 1.05 }}
        className="flex items-center gap-3 cursor-pointer"
      >
        <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-violet-600 to-cyan-500 flex items-center justify-center shadow-lg shadow-violet-500/40">
          <span className="text-white font-black text-sm tracking-tight">FZ</span>
        </div>
        <div className="flex flex-col leading-none">
          <span className="text-white font-bold text-base tracking-[0.2em] uppercase">Fatima</span>
          <span
            className="font-light text-xs tracking-[0.35em] uppercase"
            style={{
              background: 'linear-gradient(90deg, #a78bfa, #06b6d4)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            Zohra
          </span>
        </div>
      </motion.a>

      {/* Liens */}
      <ul className="flex gap-8">
        {links.map((link) => (
          <li key={link.name}>
            <button
              onClick={() => scrollTo(link.id)}
              onFocus={(e) => e.target.blur()}
              className={`bg-transparent border-none outline-none cursor-pointer transition-colors duration-300 font-medium relative focus:outline-none ${
                activeSection === link.id
                  ? 'text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-cyan-400'
                  : 'text-gray-300 hover:text-cyan-400'
              }`}
            >
              {link.name}
              {activeSection === link.id && (
                <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-violet-400 to-cyan-400 rounded-full" />
              )}
            </button>
          </li>
        ))}
      </ul>
    </motion.nav>
  )
}

export default Navbar
