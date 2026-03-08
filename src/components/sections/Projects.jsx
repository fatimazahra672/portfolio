import { useRef } from 'react'
import { motion } from 'framer-motion'
import mongoImg from '../../assets/mongo.jpg'

const projects = [
  { 
    title: "Weather Globe 3D", 
    desc: "Interactive weather app with 3D globe, immersive sound effects and real-time search.", 
    tags: ["React 18", "Three.js", "Redux", "OpenWeather"], 
    color: "from-cyan-500 to-blue-700", 
    github: "https://github.com/fatimazahra672/weather-globe-3d",
    demo: "https://weather-globe-3d.vercel.app/",
    category: "Full-Stack",
    image: "https://images.unsplash.com/photo-1614730321146-b6fa6a46bcb4?w=800&q=80"
  },
  { 
    title: "VisioShop AI", 
    desc: "Next-gen e-commerce with AI visual search (ResNet50) to identify products from an image.", 
    tags: ["React.js", "Python", "Flask", "Machine Learning"], 
    color: "from-violet-600 to-purple-800", 
    github: "https://github.com/fatimazahra672/visioshop-ai-ecommerce",
    demo: "https://www.linkedin.com/posts/fatima-zahra-el-hamdani-5ab54a296_fullstack-reactjs-python-ugcPost-7430064133368086529-7590?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEegptMBxA2FfAHaAP_OVnkgTF9NXHsnCSY",
    category: "Machine Learning",
    image: "https://images.unsplash.com/photo-1472851294608-062f824d29cc?w=800&q=80"
  },
  { 
    title: "AeroCast", 
    desc: "Air quality prediction (PM2.5) using Machine Learning and real-time weather data.", 
    tags: ["FastAPI", "Python", "React.js", "Random Forest"], 
    color: "from-emerald-500 to-teal-700", 
    github: "https://github.com/fatimazahra672/AeroCast-Air-Pollution-Prediction",
    demo: "https://www.linkedin.com/posts/fatima-zahra-el-hamdani-5ab54a296_machinelearning-artificialintelligence-predictivemodeling-ugcPost-7422050432732155905-9wWz?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEegptMBxA2FfAHaAP_OVnkgTF9NXHsnCSY",
    category: "Machine Learning",
    image: "https://images.unsplash.com/photo-1611273426858-450d8e3c9fce?w=800&q=80"
  },
  { 
    title: "CryptoAnalyzer", 
    desc: "Desktop tool for AI-assisted decryption (Gemini) and automatic analysis of encryption formats.", 
    tags: ["Java", "JavaFX", "API Gemini", "SQLite"], 
    color: "from-amber-500 to-orange-700", 
    github: "https://github.com/fatimazahra672/cryptoanalyzer-desktop",
    demo: "https://www.linkedin.com/posts/fatima-zahra-el-hamdani-5ab54a296_really-proud-of-this-collaboration-withfatima-ugcPost-7435542834189037568-h2jF?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEegptMBxA2FfAHaAP_OVnkgTF9NXHsnCSY",
    category: "Full-Stack",
    image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=800&q=80"
  },
  { 
    title: "MongoDB Sharded Cluster", 
    desc: "Implementation of a production-grade sharded MongoDB cluster with replica sets, config servers, and mongos routers for horizontal scaling across distributed NoSQL nodes.", 
    tags: ["MongoDB", "NoSQL", "Distributed Systems", "Sharding"], 
    color: "from-green-500 to-emerald-700", 
    github: "#",
    demo: null,
    category: "Distributed Systems",
    image: mongoImg
  },
  { 
    title: "Light-Following Robot", 
    desc: "Autonomous robot that detects and follows a light source using LDR sensors — like a sunflower! Built with Arduino as the brain, LDR sensors as eyes, and an L298N motor driver for movement.", 
    tags: ["Arduino", "C++", "Electronics", "LDR Sensors"], 
    color: "from-yellow-400 to-orange-600", 
    github: "#",
    demo: "https://www.linkedin.com/posts/fatima-zahra-el-hamdani-5ab54a296_robotique-arduino-engineering-activity-7416581422976708609-SyBa?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEegptMBxA2FfAHaAP_OVnkgTF9NXHsnCSY",
    category: "Robotics",
    image: "https://images.unsplash.com/photo-1561557944-6e7860d1a7eb?w=800&q=80"
  },
  { 
    title: "HR Management (C++)", 
    desc: "High-performance desktop app for employee and human resources management.", 
    tags: ["C++", "Qt", "Management"], 
    color: "from-indigo-500 to-violet-700", 
    github: "https://github.com/fatimazahra672/gestion_employes_qt",
    demo: null,
    category: "Full-Stack",
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80"
  },
  { 
    title: "Teacher Assignment", 
    desc: "Web platform automating balanced distribution of teachers' workload.", 
    tags: ["PHP5", "MySQL", "HTML/CSS"], 
    color: "from-pink-500 to-rose-700", 
    github: "https://github.com/fatimazahra672/gestion-d-affectation-des-professeurs-",
    demo: "https://www.linkedin.com/posts/fatima-zahra-el-hamdani-5ab54a296_projetweb-daezveloppementphp-gestionenseignement-activity-7348042176007729153-WJBs?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEegptMBxA2FfAHaAP_OVnkgTF9NXHsnCSY",
    category: "Full-Stack",
    image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=800&q=80"
  },
  { 
    title: "Explore Tourism", 
    desc: "Interactive website to discover destinations, plan and book trips.", 
    tags: ["JavaScript", "HTML5", "CSS3"], 
    color: "from-orange-500 to-red-700", 
    github: "#",
    demo: null,
    category: "Full-Stack",
    image: "https://images.unsplash.com/photo-1488085061387-422e29b40080?w=800&q=80"
  },
  { 
    title: "Electricity Billing", 
    desc: "Algorithmic system for automated billing and tracking of electricity consumption.", 
    tags: ["C Language", "Algorithmics", "Console"], 
    color: "from-yellow-500 to-amber-700", 
    github: "https://github.com/fatimazahra672/Gestion-de-facturation-d-electricite",
    demo: null,
    category: "Backend",
    image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=800&q=80"
  },
]

const GitHubIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-3.5 h-3.5">
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
  </svg>
)

const ExternalIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-3.5 h-3.5">
    <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6M10 14L21 3"/>
  </svg>
)

const TiltCard = ({ project, index }) => {
  const cardRef = useRef(null)

  const handleMouseMove = (e) => {
    const card = cardRef.current
    const rect = card.getBoundingClientRect()
    const rotateX = ((e.clientY - rect.top - rect.height / 2) / rect.height) * -10
    const rotateY = ((e.clientX - rect.left - rect.width / 2) / rect.width) * 10
    card.style.transform = `perspective(900px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.03)`
  }

  const handleMouseLeave = () => {
    cardRef.current.style.transform = 'perspective(900px) rotateX(0deg) rotateY(0deg) scale(1)'
  }

  const hasDemo = project.demo && project.demo !== "#"
  const hasGithub = project.github && project.github !== "#"

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="group relative rounded-2xl border border-white/10 aspect-[3/2] overflow-hidden"
      style={{ transform: 'perspective(900px)', transition: 'transform 0.2s ease' }}
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {/* Image */}
      <img
        src={project.image}
        alt={project.title}
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
      />

      {/* Dark gradient always */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />

      {/* Darker overlay on hover */}
      <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      {/* Title — visible by default at bottom */}
      <div className="absolute bottom-0 left-0 right-0 p-4 group-hover:opacity-0 transition-opacity duration-200 pointer-events-none">
        <h3 className="text-white font-bold text-lg leading-tight">{project.title}</h3>
      </div>

      {/* Hover content — fades in */}
      <div className="absolute inset-0 flex flex-col justify-end p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        {/* Title at top on hover */}
        <div className="absolute top-0 left-0 right-0 p-4 bg-gradient-to-b from-black/60 to-transparent">
          <h3 className="text-white font-bold text-base leading-tight">{project.title}</h3>
        </div>

        {/* Description */}
        <p className="text-gray-200 text-xs leading-relaxed mb-2 mt-8">{project.desc}</p>

        {/* Tags */}
        <div className="flex flex-wrap gap-1.5 mb-3">
          {project.tags.map(tag => (
            <span
              key={tag}
              className={`text-[10px] px-2.5 py-0.5 rounded-full bg-gradient-to-r ${project.color} text-white font-semibold`}
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Buttons */}
        <div className="flex gap-2">
          {hasGithub && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              onClick={e => e.stopPropagation()}
              style={{ pointerEvents: 'all' }}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold text-white bg-white/15 border border-white/25 hover:bg-white/25 transition-all duration-200"
            >
              <GitHubIcon />
              GitHub
            </a>
          )}

          {hasDemo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              onClick={e => e.stopPropagation()}
              style={{ pointerEvents: 'all' }}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold text-white bg-gradient-to-r ${project.color} hover:opacity-90 transition-all duration-200 shadow-lg`}
            >
              <ExternalIcon />
              Live Demo
            </a>
          )}
        </div>
      </div>

      {/* Hover border */}
      <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-violet-500/60 transition-all duration-300 pointer-events-none" />
    </motion.div>
  )
}

const Projects = () => {
  return (
    <section id="projects" className="relative min-h-screen py-24 px-6 md:px-12 lg:px-20">

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="text-center mb-10"
      >
        <h2 className="text-white text-4xl md:text-5xl font-extrabold mb-4">
          My <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-cyan-400">Projects</span>
        </h2>
        <div className="w-16 h-1 bg-gradient-to-r from-violet-500 to-cyan-500 mx-auto rounded-full mb-5" />
        <p className="text-gray-400 text-sm leading-relaxed mb-6">
          A curated selection of projects highlighting modern web development,<br />
          artificial intelligence integration, and robust full-stack solutions.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-[1200px] mx-auto">
        {projects.map((project, index) => (
          <TiltCard key={project.title} project={project} index={index} />
        ))}
      </div>
    </section>
  )
}

export default Projects