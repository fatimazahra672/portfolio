import { motion } from 'framer-motion'

const Resume = () => {
  const documents = [
    {
      id: 'cv-en',
      label: 'Resume (English)',
      sublabel: 'English version · PDF',
      href: '/CV_FatimaZohra_English.pdf',
      downloadName: 'CV_FatimaZohra_ElHamdani_English.pdf',
      accent: 'from-violet-600 to-cyan-500',
      accentHover: 'from-cyan-500 to-violet-600',
      shadow: 'shadow-violet-500/30',
      shadowHover: 'hover:shadow-cyan-500/30',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      ),
    },
    {
      id: 'cv-fr',
      label: 'CV (Français)',
      sublabel: 'Version française · PDF',
      href: '/CV_FatimaZohra_Francais.pdf',
      downloadName: 'CV_FatimaZohra_ElHamdani_Francais.pdf',
      accent: 'from-cyan-500 to-violet-600',
      accentHover: 'from-violet-600 to-cyan-500',
      shadow: 'shadow-cyan-500/30',
      shadowHover: 'hover:shadow-violet-500/30',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      ),
    },
    {
      id: 'cover-letter',
      label: 'Cover Letter',
      sublabel: 'Lettre de motivation · PDF',
      href: '/Lettre_Motivation_FatimaZohra.pdf',
      downloadName: 'Lettre_Motivation_FatimaZohra_ElHamdani.pdf',
      accent: 'from-pink-500 to-violet-600',
      accentHover: 'from-violet-600 to-pink-500',
      shadow: 'shadow-pink-500/30',
      shadowHover: 'hover:shadow-violet-500/30',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
    },
  ]

  return (
    <section id="resume" className="relative min-h-[70vh] py-24 px-6 md:px-12 lg:px-20 flex flex-col items-center justify-center overflow-hidden">

      {/* Background light effect */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-gradient-to-br from-violet-600/10 to-cyan-600/10 blur-[100px] pointer-events-none" />

      {/* Title - Outside the card */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="text-center mb-10"
      >
        <h2 className="text-white text-4xl md:text-5xl font-extrabold mb-4">
          My <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-cyan-400">Resume</span>
        </h2>
        <div className="w-16 h-1 bg-gradient-to-r from-violet-500 to-cyan-500 mx-auto rounded-full mb-5" />
        <p className="text-gray-400 text-sm max-w-lg mx-auto">
          Choose the format that fits your needs — English, French, or my cover letter.
        </p>
      </motion.div>

      {/* Main Glassmorphism Card */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="relative z-10 w-full max-w-5xl bg-white/5 border border-white/10 backdrop-blur-xl rounded-3xl p-8 md:p-16 flex flex-col md:flex-row items-center justify-between gap-12 shadow-2xl"
      >

        {/* Left Side: Animated Document Icon - Clickable (opens English CV by default) */}
        <a
          href={documents[0].href}
          target="_blank"
          rel="noopener noreferrer"
          className="w-48 h-48 md:w-64 md:h-64 flex-shrink-0 relative flex items-center justify-center mx-auto md:mx-0 cursor-pointer"
        >
          {/* Decorative rotating circles */}
          <div className="absolute inset-0 border-2 border-dashed border-violet-500/30 rounded-full animate-[spin_10s_linear_infinite]" />
          <div className="absolute inset-4 border-2 border-cyan-500/30 rounded-full animate-[spin_15s_linear_infinite_reverse]" />

          {/* Central Icon */}
          <div className="bg-gradient-to-br from-violet-500/20 to-cyan-500/20 p-8 rounded-3xl backdrop-blur-sm border border-white/10 shadow-[0_0_30px_rgba(168,85,247,0.2)] hover:scale-110 transition-transform duration-300">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-16 h-16 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
          </div>
        </a>

        {/* Right Side: Text and Buttons */}
        <div className="text-center md:text-left flex-1 w-full">
          <p className="text-gray-300 text-base md:text-lg leading-relaxed mb-8 max-w-lg mx-auto md:mx-0">
            Find all the details of my academic background, my technical skills and my experiences — available in both English and French, with my cover letter.
          </p>

          {/* 3 Buttons */}
          <div className="flex flex-col gap-4 w-full max-w-md mx-auto md:mx-0">

            {documents.map((doc) => (
              <motion.a
                key={doc.id}
                href={doc.href}
                download={doc.downloadName}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className={`group relative flex items-center gap-4 overflow-hidden rounded-2xl bg-gradient-to-r ${doc.accent} px-5 py-4 font-semibold text-white shadow-lg ${doc.shadow} transition-all`}
              >
                {/* Icon container */}
                <span className="relative z-10 flex items-center justify-center w-10 h-10 rounded-xl bg-white/15 border border-white/20 flex-shrink-0">
                  {doc.icon}
                </span>

                {/* Text */}
                <span className="relative z-10 flex flex-col text-left flex-1">
                  <span className="text-sm md:text-base font-bold leading-tight">{doc.label}</span>
                  <span className="text-[11px] md:text-xs text-white/80 font-normal">{doc.sublabel}</span>
                </span>

                {/* Download arrow */}
                <svg xmlns="http://www.w3.org/2000/svg" className="relative z-10 w-5 h-5 transition-transform duration-300 group-hover:translate-y-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>

                {/* Glossy overlay on hover */}
                <div className={`absolute inset-0 z-0 h-full w-full bg-gradient-to-r ${doc.accentHover} opacity-0 transition-opacity duration-300 group-hover:opacity-100`} />
              </motion.a>
            ))}

          </div>
        </div>

      </motion.div>
    </section>
  )
}

export default Resume