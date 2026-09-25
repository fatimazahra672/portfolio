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
            I'm <strong className="text-white">Fatima Zohra</strong>, a 5th year Computer Engineering student at ENSA Al Hoceima. Passionate about software development, I combine scientific rigor and creativity to design innovative digital solutions.
          </p>
          <p>
            My expertise covers <strong className="text-cyan-400">Full Stack development</strong>, <strong>Artificial Intelligence</strong> and automation of complex processes, from building modern interfaces with <strong>React & Angular</strong> to creating robust backends in <strong>Node.js, Python or Java</strong>.
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
                <p className="text-violet-300 text-sm font-medium">National School of Applied Sciences (ENSA Al Hoceima)</p>
                <p className="text-gray-400 text-sm mt-1">5th year · Specialization in software development, AI and distributed systems.</p>
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

        <div className="space-y-8">

          {/* === EXPÉRIENCE 1 : ONCF === */}
          <motion.div
            whileHover={{ scale: 1.005 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="relative rounded-2xl overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-violet-900/30 via-[#0d0d1a] to-cyan-900/20 rounded-2xl" />
            <div className="absolute inset-0 border border-violet-500/20 rounded-2xl" />
            <div className="absolute -top-10 -left-10 w-52 h-52 bg-violet-600/20 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute -bottom-10 -right-10 w-52 h-52 bg-cyan-600/15 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10 p-6 md:p-10">
              {/* Header */}
              <div className="flex flex-col sm:flex-row sm:items-start gap-6 mb-8">
                <div className="flex-shrink-0 w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center shadow-lg">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-violet-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                  </svg>
                </div>
                <div className="flex-1">
                  <div className="flex flex-wrap items-center gap-3 mb-1">
                    <h3 className="text-white font-bold text-xl">Développeur Full Stack & IA</h3>
                    <span className="px-3 py-0.5 rounded-full text-xs font-semibold bg-violet-500/20 text-violet-300 border border-violet-500/30">
                      Stage 
                    </span>
                  </div>
                  <p className="text-cyan-400 font-semibold text-sm">ONCF –Etablissement de Maintenance Fès</p>
                  <p className="text-gray-500 text-xs mt-0.5">Plateforme de Maintenance Prédictive · Instruments de mesure & contrôle (EMF)</p>
                </div>
                <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white/5 border border-white/10 self-start">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  <span className="text-gray-300 text-xs font-medium whitespace-nowrap">Août – Sept. 2026</span>
                </div>
              </div>

              <div className="w-full h-px bg-gradient-to-r from-violet-500/30 via-white/5 to-transparent mb-6" />

              {/* Description projet */}
              <p className="text-gray-400 text-sm leading-relaxed mb-8">
                Plateforme centralisant le suivi des instruments de mesure et de contrôle (multimètres, pinces ampérométriques, pieds à coulisse, clés dynamométriques, thermomètres, manomètres...) utilisés dans les technicentres. Elle assure le suivi métrologique (étalonnage, conformité) et anticipe, grâce à un modèle prédictif, le risque qu'un instrument devienne non conforme ou tombe en panne avant son prochain contrôle — afin de prioriser les vérifications par niveau de risque plutôt que par date fixe.
              </p>

              {/* Stack */}
              <div className="flex flex-wrap gap-2 mb-8">
                {['React.js', 'Node.js/Express', 'PostgreSQL', 'Python', 'FastAPI', 'scikit-learn', 'JWT', 'Nodemailer'].map((tech) => (
                  <span key={tech} className="px-3 py-1 text-xs font-medium rounded-full bg-white/5 border border-white/10 text-gray-300 hover:border-violet-500/40 hover:text-violet-300 transition-colors cursor-default">
                    {tech}
                  </span>
                ))}
              </div>

              {/* Missions détaillées */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  {
                    icon: (
                      <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.6}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                      </svg>
                    ),
                    title: "Gestion de l'inventaire des instruments",
                    text: "Fiche instrument (établissement, technicentre, unité de production, type, référence), quantités totale/utilisable, fréquence d'utilisation et domaine associé."
                  },
                  {
                    icon: (
                      <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.6}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                      </svg>
                    ),
                    title: "Suivi métrologique",
                    text: "Dates d'acquisition, dernier étalonnage et expiration, état (conforme / non conforme / avarié avec motif) et historique complet des contrôles par instrument."
                  },
                  {
                    icon: (
                      <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.6}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                      </svg>
                    ),
                    title: "Moteur de prédiction du risque",
                    text: "Modèle de classification (scikit-learn) estimant la probabilité de non-conformité/panne à partir de l'ancienneté, la fréquence d'utilisation, le délai depuis le dernier étalonnage et le type d'instrument. Réentraînement continu."
                  },
                  {
                    icon: (
                      <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.6}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                      </svg>
                    ),
                    title: "Alertes & priorisation",
                    text: "Alertes automatiques sur les étalonnages expirants, liste des instruments à risque élevé générée automatiquement, notification au responsable qualité en cas de seuil critique."
                  },
                  {
                    icon: (
                      <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.6}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                      </svg>
                    ),
                    title: "Rôles & dashboard",
                    text: "Rôles Technicien / Responsable qualité / Administrateur, dashboard par technicentre (répartition par état, instruments à risque, étalonnages à venir) et rapports exportables PDF/Excel."
                  },
                  {
                    icon: (
                      <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.6}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
                      </svg>
                    ),
                    title: "Données & architecture",
                    text: "Inventaire EMF/ESM fourni comme base de départ (type, référence, quantité, fréquence, dates, conformité). Architecture React.js + Node/Express + PostgreSQL + microservice IA Python."
                  }
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 8 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 + i * 0.07 }}
                    className="flex gap-4 p-4 rounded-xl bg-white/[0.03] border border-white/5 hover:bg-white/[0.07] hover:border-violet-500/20 transition-all"
                  >
                    <span className="flex-shrink-0 w-10 h-10 rounded-lg bg-gradient-to-br from-violet-500/20 to-cyan-500/20 border border-white/10 flex items-center justify-center text-violet-300">
                      {item.icon}
                    </span>
                    <div>
                      <h5 className="text-white font-semibold text-sm mb-1">{item.title}</h5>
                      <p className="text-gray-400 text-xs leading-relaxed">{item.text}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* === EXPÉRIENCE 2 : IZEMX === */}
                   {/* === EXPÉRIENCE 2 : IZEMX === */}
          <motion.div
            whileHover={{ scale: 1.005 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="relative rounded-2xl overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-900/30 via-[#0d0d1a] to-violet-900/20 rounded-2xl" />
            <div className="absolute inset-0 border border-cyan-500/20 rounded-2xl" />
            <div className="absolute -top-10 -right-10 w-52 h-52 bg-cyan-600/20 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute -bottom-10 -left-10 w-52 h-52 bg-violet-600/15 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10 p-6 md:p-10">
              {/* Header */}
              <div className="flex flex-col sm:flex-row sm:items-start gap-6 mb-8">
                <div className="flex-shrink-0 w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center shadow-lg">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                  </svg>
                </div>
                <div className="flex-1">
                  <div className="flex flex-wrap items-center gap-3 mb-1">
                    <h3 className="text-white font-bold text-xl">Software Engineering Intern</h3>
                    <span className="px-3 py-0.5 rounded-full text-xs font-semibold bg-cyan-500/20 text-cyan-300 border border-cyan-500/30">
                      Stage PFA
                    </span>
                  </div>
                  <p className="text-violet-400 font-semibold text-sm">IZEMX</p>
                  <p className="text-gray-500 text-xs mt-0.5">Odoo ERP · Automatisation avancée de workflows avec n8n</p>
                </div>
                <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white/5 border border-white/10 self-start">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-violet-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  <span className="text-gray-300 text-xs font-medium whitespace-nowrap">2 mois · 2026</span>
                </div>
              </div>

              <div className="w-full h-px bg-gradient-to-r from-cyan-500/30 via-white/5 to-transparent mb-6" />

              {/* Description projet */}
              <p className="text-gray-400 text-sm leading-relaxed mb-8">
                Stage de deux mois centré sur <strong className="text-cyan-300">Odoo ERP</strong> et l'automatisation avancée de workflows via <strong className="text-violet-300">n8n</strong>, pour interconnecter les systèmes et fluidifier des opérations métier complexes. Objectif : transformer des tâches manuelles et répétitives en processus digitaux de bout en bout, en connectant Odoo à des APIs tierces (Gmail, Slack, Google Drive, WhatsApp, Shopify, WordPress, Meta).
              </p>

              {/* Stack */}
              <div className="flex flex-wrap gap-2 mb-8">
                {['Odoo ERP', 'n8n', 'Gmail API', 'Slack API', 'WhatsApp API', 'Google Drive', 'Shopify', 'WordPress', 'Meta API'].map((tech) => (
                  <span key={tech} className="px-3 py-1 text-xs font-medium rounded-full bg-white/5 border border-white/10 text-gray-300 hover:border-cyan-500/40 hover:text-cyan-300 transition-colors cursor-default">
                    {tech}
                  </span>
                ))}
              </div>

              {/* Workflows détaillés */}
              <h5 className="text-white font-semibold text-sm uppercase tracking-widest mb-4 flex items-center gap-3">
                <span className="w-6 h-0.5 bg-gradient-to-r from-cyan-500 to-violet-500 rounded-full" />
                Workflows d'automatisation déployés
              </h5>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  {
                    icon: (
                      <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.6}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 14l6-6m-5.5.5h.01m4.99 5h.01M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16l3.5-2 3.5 2 3.5-2 3.5 2z" />
                      </svg>
                    ),
                    title: "Gestion des factures impayées",
                    text: "Pipeline de 4 workflows : détection des factures en retard, escalade du statut de risque client, blocage automatique des nouvelles commandes pour les clients à risque, et déblocage à la régularisation du paiement — avec relances Gmail et alertes Slack à l'équipe finance."
                  },
                  {
                    icon: (
                      <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.6}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 17V7m0 10a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2h2a2 2 0 012 2m0 10a2 2 0 002 2h2a2 2 0 002-2M9 7a2 2 0 012-2h2a2 2 0 012 2m0 10V7m0 10a2 2 0 002 2h2a2 2 0 002-2V7a2 2 0 00-2-2h-2a2 2 0 00-2 2" />
                      </svg>
                    ),
                    title: "Suivi des devis & appels d'offres",
                    text: "Automatisation du cycle de vie complet des devis compétitifs : déclencheurs de décision CRM avec raisons win/loss obligatoires, versioning des devis avec historique complet, archivage des documents d'appel d'offres sur Google Drive et conversion automatique en commande lors d'une opportunité gagnée."
                  },
                  {
                    icon: (
                      <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.6}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                      </svg>
                    ),
                    title: "Automatisation du support WhatsApp",
                    text: "Pont de ticketing qui route les messages WhatsApp entrants vers des tâches Odoo : vérification/création automatique des contacts clients, génération des tickets et clôture de la boucle par notifications Gmail automatiques une fois résolus."
                  },
                  {
                    icon: (
                      <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.6}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
                      </svg>
                    ),
                    title: "Qualification & routage des leads",
                    text: "Système automatisé pour qualifier et router les leads entrants vers le bon pipeline, réduisant drastiquement le tri manuel."
                  },
                  {
                    icon: (
                      <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.6}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                      </svg>
                    ),
                    title: "Alertes achats",
                    text: "Notifications d'achat automatisées pour les nouvelles demandes de prix et les commandes à préparer, tenant l'équipe informée en temps réel."
                  },
                  {
                    icon: (
                      <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.6}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                      </svg>
                    ),
                    title: "Recherche d'intégrations tierces",
                    text: "Exploration et validation d'intégrations avec Shopify, WordPress et Meta (Instagram/Facebook) pour étendre les capacités d'automatisation d'Odoo au-delà du cœur ERP."
                  }
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 8 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 + i * 0.07 }}
                    className="flex gap-4 p-4 rounded-xl bg-white/[0.03] border border-white/5 hover:bg-white/[0.07] hover:border-cyan-500/20 transition-all"
                  >
                    <span className="flex-shrink-0 w-10 h-10 rounded-lg bg-gradient-to-br from-cyan-500/20 to-violet-500/20 border border-white/10 flex items-center justify-center text-cyan-300">
                      {item.icon}
                    </span>
                    <div>
                      <h5 className="text-white font-semibold text-sm mb-1">{item.title}</h5>
                      <p className="text-gray-400 text-xs leading-relaxed">{item.text}</p>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Impact / Résultat */}
              <div className="mt-8 p-4 rounded-xl bg-gradient-to-r from-cyan-500/10 to-violet-500/10 border border-cyan-500/20">
                <div className="flex items-start gap-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    <strong className="text-white">Impact :</strong> Transformation de tâches manuelles et répétitives en processus digitaux fluides de bout en bout, avec interconnexion d'Odoo à Gmail, Slack, Google Drive, WhatsApp et APIs tierces — réduisant les interventions manuelles et accélérant les opérations commerciales, financières et du support client.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* === EXPÉRIENCE 3 : Asment Temara === */}
          <motion.div
            whileHover={{ scale: 1.005 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="relative rounded-2xl overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-violet-900/30 via-[#0d0d1a] to-cyan-900/20 rounded-2xl" />
            <div className="absolute inset-0 border border-violet-500/20 rounded-2xl" />
            <div className="absolute -top-10 -left-10 w-52 h-52 bg-violet-600/20 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute -bottom-10 -right-10 w-52 h-52 bg-cyan-600/15 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10 p-6 md:p-10">
              <div className="flex flex-col sm:flex-row sm:items-start gap-6 mb-8">
                <div className="flex-shrink-0 w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center shadow-lg">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-violet-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
                  </svg>
                </div>
                <div className="flex-1">
                  <div className="flex flex-wrap items-center gap-3 mb-1">
                    <h3 className="text-white font-bold text-xl">Développeur Full Stack</h3>
                    <span className="px-3 py-0.5 rounded-full text-xs font-semibold bg-violet-500/20 text-violet-300 border border-violet-500/30">
                      Stage d'initiation
                    </span>
                  </div>
                  <p className="text-cyan-400 font-semibold text-sm">Asment Temara</p>
                  <p className="text-gray-500 text-xs mt-0.5">Gestion centralisée du parc informatique</p>
                </div>
                <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white/5 border border-white/10 self-start">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  <span className="text-gray-300 text-xs font-medium whitespace-nowrap">Juillet 2025</span>
                </div>
              </div>

              <div className="w-full h-px bg-gradient-to-r from-violet-500/30 via-white/5 to-transparent mb-6" />

              <p className="text-gray-400 text-sm leading-relaxed mb-8">
                Conception et développement d'une application web pour la gestion centralisée du parc informatique, avec une API RESTful sécurisée et une modélisation de base de données robuste. Mise en place de l'authentification et de la gestion dynamique des équipements, ainsi que participation aux tests unitaires et à la correction des anomalies avant mise en production.
              </p>

              <div className="flex flex-wrap gap-2 mb-8">
                {['React.js', 'Spring Boot', 'MySQL', 'Spring Data JPA'].map((tech) => (
                  <span key={tech} className="px-3 py-1 text-xs font-medium rounded-full bg-white/5 border border-white/10 text-gray-300 hover:border-violet-500/40 hover:text-violet-300 transition-colors cursor-default">
                    {tech}
                  </span>
                ))}
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  {
                    icon: (
                      <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.6}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
                      </svg>
                    ),
                    title: "Application de gestion du parc",
                    text: "Conception d'une application web pour la gestion centralisée du parc informatique."
                  },
                  {
                    icon: (
                      <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.6}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                    ),
                    title: "API RESTful sécurisée",
                    text: "Développement d'une API RESTful et modélisation de base de données (Spring Boot, MySQL)."
                  },
                  {
                    icon: (
                      <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.6}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                      </svg>
                    ),
                    title: "Authentification & gestion des équipements",
                    text: "Mise en place de l'authentification et de la gestion dynamique des équipements (Spring Data JPA)."
                  },
                  {
                    icon: (
                      <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.6}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    ),
                    title: "Tests & qualité",
                    text: "Participation aux tests unitaires et correction des anomalies avant mise en production."
                  }
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 8 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 + i * 0.07 }}
                    className="flex gap-4 p-4 rounded-xl bg-white/[0.03] border border-white/5 hover:bg-white/[0.07] hover:border-violet-500/20 transition-all"
                  >
                    <span className="flex-shrink-0 w-10 h-10 rounded-lg bg-gradient-to-br from-violet-500/20 to-cyan-500/20 border border-white/10 flex items-center justify-center text-violet-300">
                      {item.icon}
                    </span>
                    <div>
                      <h5 className="text-white font-semibold text-sm mb-1">{item.title}</h5>
                      <p className="text-gray-400 text-xs leading-relaxed">{item.text}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

        </div>
      </motion.div>

    </section>
  )
}

export default About