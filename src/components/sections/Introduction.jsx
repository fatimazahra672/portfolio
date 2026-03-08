import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import avatar from '../../assets/avatar.png'

const Introduction = () => {
  // Typing effect
  const texts =[
    "Full Stack Web Developer",
    "Student in 4th year Computer Engineering",
    "Specialized in React & Node.js",
    "Backend Developer (Java & Python)",
    "Passionate about modern interfaces",
    "Always ready for new challenges",
  ]
  const[displayedText, setDisplayedText] = useState('')
  const[textIndex, setTextIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)
  const [isPaused, setIsPaused] = useState(true)

  useEffect(() => {
    const init = setTimeout(() => setIsPaused(false), 1200)
    return () => clearTimeout(init)
  },[])

  useEffect(() => {
    if (isPaused) return
    const currentText = texts[textIndex]
    const speed = isDeleting ? 25 : 55

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        const next = currentText.slice(0, displayedText.length + 1)
        setDisplayedText(next)
        if (next === currentText) {
          setIsPaused(true)
          setTimeout(() => { setIsPaused(false); setIsDeleting(true) }, 1800)
        }
      } else {
        const next = currentText.slice(0, displayedText.length - 1)
        setDisplayedText(next)
        if (next === '') {
          setIsDeleting(false)
          setTextIndex(prev => (prev + 1) % texts.length)
        }
      }
    }, speed)

    return () => clearTimeout(timeout)
  },[displayedText, isDeleting, textIndex, isPaused])

  const containerVariants = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.2, delayChildren: 0.3 } }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  }

  return (
    <section className="relative h-screen w-full grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-20 items-center px-10 md:px-20 pointer-events-none">

      {/* Texte à gauche */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="show"
        className="pointer-events-auto flex flex-col"
      >
        <motion.p variants={itemVariants} className="text-violet-400 text-lg md:text-xl font-medium tracking-widest uppercase mb-3">
          Hello, I am
        </motion.p>

        <motion.h1 variants={itemVariants} className="text-white text-5xl md:text-7xl font-extrabold mb-4 leading-tight tracking-tighter">
          Fatima Zohra <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-cyan-400">El Hamdani</span>
        </motion.h1>

        {/* Typing effect */}
        <motion.p variants={itemVariants} className="text-gray-300 text-xl md:text-2xl font-light mb-10 max-w-lg min-h-[4rem]">
          {displayedText}<span className="animate-pulse text-violet-400">|</span>
        </motion.p>

        {/* === SECTION BOUTONS & RESEAUX SOCIAUX (Compact et sur 1 ligne) === */}
        <motion.div 
          variants={itemVariants} 
          // Suppression du scroll (overflow-x-auto/w-max)
          // Ajout de flex-row pour forcer la disposition horizontale avec un gap plus petit
          className="flex flex-row items-center gap-2 sm:gap-3 w-full"
        >
          {/* Bouton Primaire : Projets */}
          <motion.a
            href="#projects"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            // Taille réduite : h-10/12, px-4/5, text-xs/sm
            className="group relative flex shrink-0 h-10 sm:h-12 items-center justify-center gap-1.5 overflow-hidden rounded-full bg-gradient-to-r from-violet-600 to-cyan-500 px-4 sm:px-5 text-xs sm:text-sm font-bold text-white shadow-lg shadow-violet-500/30 transition-all whitespace-nowrap"
          >
            <span className="relative z-10">See projects</span>
            <svg xmlns="http://www.w3.org/2000/svg" className="relative z-10 w-3.5 h-3.5 sm:w-4 sm:h-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
            <div className="absolute inset-0 z-0 h-full w-full bg-gradient-to-r from-cyan-500 to-violet-600 opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
          </motion.a>

          {/* Bouton Secondaire : Contact */}
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            // Taille réduite : h-10/12, px-4/5, text-xs/sm
            className="group flex shrink-0 h-10 sm:h-12 items-center justify-center gap-1.5 rounded-full border border-white/20 bg-white/5 px-4 sm:px-5 text-xs sm:text-sm font-semibold text-gray-200 backdrop-blur-sm transition-all hover:bg-white/10 hover:border-white/40 hover:text-white whitespace-nowrap"
          >
            <span>Contact</span>
            <svg xmlns="http://www.w3.org/2000/svg" className="w-3.5 h-3.5 sm:w-4 sm:h-4 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
            </svg>
          </motion.a>

          {/* Ligne de séparation affinée */}
          <div className="hidden sm:block h-6 w-px bg-white/20 rounded-full mx-0.5 shrink-0"></div>

          {/* GitHub (Taille réduite : h-10 w-10 au lieu de 14) */}
          <motion.a
            href="https://github.com/fatimazahra672" target="_blank" rel="noreferrer"
            whileHover={{ scale: 1.15, rotate: 5 }} whileTap={{ scale: 0.9 }}
            className="flex shrink-0 h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-full bg-white/5 border border-white/10 text-gray-300 hover:text-white hover:border-violet-500 hover:bg-violet-500/20 hover:shadow-lg hover:shadow-violet-500/30 transition-all duration-300"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 sm:w-5 sm:h-5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
            </svg>
          </motion.a>

          {/* LinkedIn (Taille réduite : h-10 w-10 au lieu de 14) */}
          <motion.a
            href="https://www.linkedin.com/in/fatima-zahra-el-hamdani-5ab54a296/" target="_blank" rel="noreferrer"
            whileHover={{ scale: 1.15, rotate: -5 }} whileTap={{ scale: 0.9 }}
            className="flex shrink-0 h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-full bg-white/5 border border-white/10 text-gray-300 hover:text-white hover:border-cyan-500 hover:bg-cyan-500/20 hover:shadow-lg hover:shadow-cyan-500/30 transition-all duration-300"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 sm:w-5 sm:h-5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
            </svg>
          </motion.a>

        </motion.div>

      </motion.div>

      {/* Avatar à droite */}
      <motion.div
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 0.6, ease: "easeOut" }}
        className="pointer-events-auto hidden md:flex items-center justify-end"
      >
        <motion.div
          animate={{ y:[-15, 15, -15] }}
          transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
          whileHover={{ scale: 1.05 }}
          className="relative cursor-pointer"
        >
          {/* Cercle glow derrière l'avatar */}
          <motion.div
            animate={{ opacity:[0.3, 0.6, 0.3], scale:[1, 1.15, 1] }}
            transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
            className="absolute inset-0 rounded-full bg-gradient-to-br from-violet-500 to-cyan-500 blur-2xl"
          />

          {/* Image avatar */}
          <img
            src={avatar}
            alt="Avatar"
            className="relative w-64 h-64 md:w-80 md:h-80 rounded-full object-cover border-4 border-violet-500 shadow-lg shadow-violet-500/50"
          />
        </motion.div>
      </motion.div>

    </section>
  )
}
 
export default Introduction