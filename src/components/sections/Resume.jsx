import { motion } from 'framer-motion'

const Resume = () => {
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
      </motion.div>

      {/* Main Glassmorphism Card */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="relative z-10 w-full max-w-5xl bg-white/5 border border-white/10 backdrop-blur-xl rounded-3xl p-8 md:p-16 flex flex-col md:flex-row items-center justify-between gap-12 shadow-2xl"
      >
        
{/* Left Side: Animated Document Icon - Clickable */}
        <a 
          href="/El Hamdani FatimaZohra.pdf"
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

        {/* Right Side: Text and Button */}
        <div className="text-center md:text-left flex-1">
          <p className="text-gray-300 text-base md:text-lg leading-relaxed mb-8 max-w-lg mx-auto md:mx-0">
            Find all the details of my academic background, my technical skills and my experiences in a concise way in my resume.
          </p>
          
          {/* Download button */}
          <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4">
            <a
              href="El Hamdani FatimaZohra.pdf"
              download="CV_FatimaZohra_ElHamdani.pdf"
              className="group relative flex items-center gap-3 overflow-hidden rounded-full bg-gradient-to-r from-violet-600 to-cyan-500 px-8 py-4 font-bold text-white shadow-lg shadow-violet-500/30 transition-all hover:scale-105 hover:shadow-cyan-500/30"
            >
              <span className="relative z-10">Download Resume (PDF)</span>
              {/* Icon that descends on hover */}
              <svg xmlns="http://www.w3.org/2000/svg" className="relative z-10 w-5 h-5 transition-transform duration-300 group-hover:translate-y-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
              {/* Glossy overlay on hover */}
              <div className="absolute inset-0 z-0 h-full w-full bg-gradient-to-r from-cyan-500 to-violet-600 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            </a>
          </div>
        </div>

      </motion.div>
    </section>
  )
}

export default Resume