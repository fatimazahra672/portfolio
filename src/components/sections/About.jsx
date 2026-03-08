import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const About = () => {
  const [activeTab, setActiveTab] = useState('presentation')

  const tabsInfo = {
    presentation: {
      title: "About Me",
      content: (
        <>
          <p className="mb-4">
            I'm <strong className="text-white">Fatima Zohra</strong>, a 4th year Computer Engineering student at the National School of Applied Sciences. Passionate about software development, I combine scientific rigor and creativity to design innovative digital solutions.
          </p>
          <p>
            My expertise covers <strong className="text-cyan-400">Full Stack development</strong>, from building modern interfaces with <strong>React & Three.js</strong> to creating robust backends in <strong>Node.js, Python or Java</strong>, enhanced by Artificial Intelligence integration.
          </p>
        </>
      )
    },
    parcours: {
      title: "Education",
      content: (
        <div className="space-y-6">
          <div className="relative pl-6 border-l-2 border-violet-500/30">
            <motion.div
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 }}
              className="mb-8 relative"
            >
              <div className="absolute -left-[29px] top-1 w-4 h-4 rounded-full bg-gradient-to-br from-violet-500 to-cyan-500 shadow-lg shadow-violet-500/50" />
              <div className="bg-white/5 border border-white/10 rounded-xl p-4 hover:bg-white/10 transition-colors">
                <span className="text-xs font-semibold text-cyan-400 uppercase tracking-widest">2022 – Present</span>
                <h4 className="text-white font-bold text-base mt-1">Engineering Cycle – Computer Science</h4>
                <p className="text-violet-300 text-sm font-medium">National School of Applied Sciences (ENSA)</p>
                <p className="text-gray-400 text-sm mt-1">4th year · Specialization in software development, AI and distributed systems.</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="relative"
            >
              <div className="absolute -left-[29px] top-1 w-4 h-4 rounded-full bg-gradient-to-br from-violet-400 to-pink-500 shadow-lg shadow-violet-500/40" />
              <div className="bg-white/5 border border-white/10 rounded-xl p-4 hover:bg-white/10 transition-colors">
                <span className="text-xs font-semibold text-violet-400 uppercase tracking-widest">2021 – 2022</span>
                <h4 className="text-white font-bold text-base mt-1">Baccalaureate in Mathematical Sciences</h4>
                <p className="text-cyan-300 text-sm font-medium">Al Wahda High School</p>
                <p className="text-gray-400 text-sm mt-1">Graduated with honors · Mathematical Sciences option.</p>
              </div>
            </motion.div>
          </div>
        </div>
      )
    }
  }

  const contactItems = [
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      label: "Taounate, Maroc",
      href: null,
      color: "text-violet-400"
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
      ),
      label: "+212 720078689",
      href: "https://wa.me/212720078689",
      color: "text-cyan-400"
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      label: "elhamdanifatimazahra71@gmail.com",
       href: "https://mail.google.com/mail/?view=cm&fs=1&to=elhamdanifatimazahra71@gmail.com",
      color: "text-violet-400"
    },
    {
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
        </svg>
      ),
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/fatima-zahra-el-hamdani-5ab54a296/",
      color: "text-cyan-400"
    },
    {
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
        </svg>
      ),
      label: "GitHub",
      href: "https://github.com/fatimazahra672",
      color: "text-violet-400"
    },
  ]

  return (
    <section id="about" className="relative min-h-screen py-24 px-6 md:px-12 lg:px-20 flex flex-col justify-center overflow-hidden">

      {/* === HEADER === */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="text-center mb-16"
      >
        <h2 className="text-white text-4xl md:text-5xl font-extrabold mb-4">
          About <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-cyan-400">Me</span>
        </h2>
        <div className="w-16 h-1 bg-gradient-to-r from-violet-500 to-cyan-500 mx-auto rounded-full" />
      </motion.div>

      {/* === GRILLE PRINCIPALE === */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center max-w-7xl mx-auto w-full">

        {/* --- COLONNE GAUCHE : ONGLETS --- */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="flex flex-col"
        >
          {/* Navigation onglets */}
          <div className="flex gap-4 md:gap-6 mb-8 border-b border-white/10 pb-4 justify-center">
            {Object.keys(tabsInfo).map((key) => (
              <button
                key={key}
                onClick={() => setActiveTab(key)}
                className={`px-5 py-2 rounded-full font-semibold transition-all duration-300 focus:outline-none border-2 
                  ${activeTab === key
                    ? 'bg-gradient-to-r from-violet-500 to-cyan-500 text-white border-transparent shadow-lg scale-105'
                    : 'bg-white/5 text-violet-400 border-violet-500/30 hover:bg-violet-500/20 hover:text-white hover:border-violet-500'}
                `}
              >
                {tabsInfo[key].title}
              </button>
            ))}
          </div>

          {/* Contenu onglet */}
          <div className="min-h-[240px] text-gray-300 text-base leading-relaxed">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
              >
                {tabsInfo[activeTab].content}
              </motion.div>
            </AnimatePresence>
          </div>
        </motion.div>

        {/* --- COLONNE DROITE : CARTE CONTACT --- */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="relative flex flex-col justify-center gap-6 h-full"
        >
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-gradient-to-br from-violet-600/20 to-cyan-600/20 rounded-full blur-3xl pointer-events-none" />

          <motion.div
            whileHover={{ y: -4 }}
            className="relative w-full p-6 lg:p-8 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md shadow-xl z-10"
          >
            <h4 className="text-white font-semibold text-sm uppercase tracking-widest mb-6 flex items-center gap-3">
              <span className="w-6 h-0.5 bg-gradient-to-r from-violet-500 to-cyan-500 rounded-full" />
              Contact & Networks
            </h4>

            <div className="space-y-3">
              {contactItems.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.07 }}
                >
                  {item.href ? (
                    <a
                      href={item.href}
                      target={item.href.startsWith('http') ? '_blank' : undefined}
                      rel="noreferrer"
                      className={`flex items-center gap-4 p-3 rounded-xl hover:bg-white/5 border border-transparent hover:border-white/10 transition-all group ${item.color}`}
                    >
                      <span className={`${item.color} transition-transform group-hover:scale-110`}>{item.icon}</span>
                      <span className="text-gray-300 group-hover:text-white text-[15px] transition-colors">{item.label}</span>
                      <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 ml-auto text-gray-600 group-hover:text-gray-400 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </a>
                  ) : (
                    <div className={`flex items-center gap-4 p-3 rounded-xl border border-transparent ${item.color}`}>
                      <span>{item.icon}</span>
                      <span className="text-gray-300 text-[15px]">{item.label}</span>
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* === EXPÉRIENCE PROFESSIONNELLE (pleine largeur) === */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.3 }}
        className="max-w-7xl mx-auto mt-16 w-full"
      >
        {/* Titre section */}
        <div className="flex items-center gap-3 w-full mb-8">
          <svg className="w-7 h-7 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 17v-6a2 2 0 012-2h2a2 2 0 012 2v6m-6 0h6" />
          </svg>
          <h2 className="text-3xl md:text-4xl font-extrabold bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent">
            Experience
          </h2>
          <div className="flex-1 h-1 bg-gradient-to-r from-violet-500/30 via-white/5 to-transparent rounded-full" />
        </div>

        {/* Carte expérience */}
        <motion.div
          whileHover={{ scale: 1.005 }}
          transition={{ type: "spring", stiffness: 300 }}
          className="relative rounded-2xl overflow-hidden"
        >
          {/* Fonds lumineux */}
          <div className="absolute inset-0 bg-gradient-to-br from-violet-900/30 via-[#0d0d1a] to-cyan-900/20 rounded-2xl" />
          <div className="absolute inset-0 border border-violet-500/20 rounded-2xl" />
          <div className="absolute -top-10 -left-10 w-52 h-52 bg-violet-600/20 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-10 -right-10 w-52 h-52 bg-cyan-600/15 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 p-6 md:p-10">

            {/* Header */}
            <div className="flex flex-col sm:flex-row sm:items-start gap-6 mb-8">

              {/* Icône entreprise */}
              <div className="flex-shrink-0 w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center shadow-lg">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-violet-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>

              {/* Titre & Entreprise */}
              <div className="flex-1">
                <div className="flex flex-wrap items-center gap-3 mb-1">
                  <h3 className="text-white font-bold text-xl">Full Stack Developer</h3>
                  <span className="px-3 py-0.5 rounded-full text-xs font-semibold bg-violet-500/20 text-violet-300 border border-violet-500/30">
                    Internship
                  </span>
                </div>
                <p className="text-cyan-400 font-semibold text-sm">Asment Temara · Votorantim Cimentos</p>
                <p className="text-gray-500 text-xs mt-0.5">IT Department</p>
              </div>

              {/* Badge date */}
              <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white/5 border border-white/10 self-start">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                <span className="text-gray-300 text-xs font-medium whitespace-nowrap">July 2025</span>
              </div>
            </div>

            {/* Séparateur */}
            <div className="w-full h-px bg-gradient-to-r from-violet-500/30 via-white/5 to-transparent mb-8" />

            {/* Stack technique */}
            <div className="flex flex-wrap gap-2 mb-8">
              {['Spring Boot', 'Java', 'React.js', 'REST API', 'MySQL'].map((tech) => (
                <span key={tech} className="px-3 py-1 text-xs font-medium rounded-full bg-white/5 border border-white/10 text-gray-300 hover:border-violet-500/40 hover:text-violet-300 transition-colors cursor-default">
                  {tech}
                </span>
              ))}
            </div>

            {/* Missions en grille */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                { icon: "🗄️", text: "Designed a web app for IT asset management" },
                { icon: "⚙️", text: "Developed a RESTful API with Spring Boot (Java)" },
                { icon: "🎨", text: "Built an interactive user interface with React.js" },
                { icon: "📐", text: "Requirements analysis and database modeling" }
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 8 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 + i * 0.07 }}
                  className="flex flex-col gap-3 p-4 rounded-xl bg-white/[0.03] border border-white/5 hover:bg-white/[0.07] hover:border-violet-500/20 transition-all"
                >
                  <span className="text-2xl">{item.icon}</span>
                  <p className="text-gray-300 text-sm leading-snug">{item.text}</p>
                </motion.div>
              ))}
            </div>

          </div>
        </motion.div>
      </motion.div>

    </section>
  )
}

export default About