import { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'

const categories = [
  {
    id: 'languages',
    label: 'Languages',
    icon: '⟨/⟩',
    accent: '#00d4ff',
    skills: ['Java', 'PHP', 'Python', 'C++', 'C', 'HTML', 'JavaScript', 'CSS', 'PL/SQL'],
  },
  {
    id: 'frameworks',
    label: 'Frameworks & Libs',
    icon: '⬡',
    accent: '#a855f7',
    skills: ['Spring Boot', 'Laravel', 'Flask', 'React', 'Node.js', 'Express.js', 'Bootstrap', 'Ajax', 'JavaFX', 'Swing', 'Qt'],
  },
  {
    id: 'databases',
    label: 'Databases',
    icon: '◈',
    accent: '#10b981',
    skills: ['MySQL', 'Oracle', 'MongoDB', 'SQL', 'NoSQL'],
  },
  {
    id: 'ml',
    label: 'Data Science & ML',
    icon: '◉',
    accent: '#f59e0b',
    skills: ['NumPy', 'Pandas', 'Scikit-learn', 'Matplotlib', 'TensorFlow', 'Keras', 'Web Scraping'],
  },
  {
    id: 'tools',
    label: 'Tools & Environments',
    icon: '⚙',
    accent: '#ec4899',
    skills: ['VS Code', 'IntelliJ IDEA', 'Jupyter Notebook', 'Linux', 'Excel', 'Git'],
  },
  {
    id: 'soft',
    label: 'Soft Skills',
    icon: '✦',
    accent: '#6366f1',
    skills: ['Report Writing', 'Stakeholder Management', 'Communication', 'Project Management', 'Teamwork', 'Marketing Basics', 'Cost Control'],
  },
]

const SkillBadge = ({ skill, accent, delay }) => {
  const [hovered, setHovered] = useState(false)
  return (
    <motion.span
      initial={{ opacity: 0, scale: 0.7 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.35, delay }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="px-3 py-1.5 rounded-full text-xs font-semibold tracking-wide whitespace-nowrap cursor-default"
      style={{
        border: `1px solid ${hovered ? accent : 'rgba(255,255,255,0.1)'}`,
        color: hovered ? accent : 'rgba(255,255,255,0.75)',
        boxShadow: hovered ? `0 0 14px ${accent}55, inset 0 0 8px ${accent}22` : 'none',
        background: hovered ? `${accent}18` : 'rgba(255,255,255,0.04)',
        transition: 'all 0.25s ease',
      }}
    >
      {skill}
    </motion.span>
  )
}

const CategoryCard = ({ cat, index }) => {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })
  const [hovered, setHovered] = useState(false)

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="relative rounded-2xl p-6 overflow-hidden"
      style={{
        background: hovered
          ? `linear-gradient(135deg, rgba(255,255,255,0.06) 0%, ${cat.accent}15 100%)`
          : 'linear-gradient(135deg, rgba(255,255,255,0.03) 0%, rgba(255,255,255,0.01) 100%)',
        border: `1px solid ${hovered ? cat.accent + '66' : 'rgba(255,255,255,0.07)'}`,
        boxShadow: hovered
          ? `0 0 40px ${cat.accent}26, 0 20px 60px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.08)`
          : '0 4px 30px rgba(0,0,0,0.3)',
        backdropFilter: 'blur(20px)',
        transition: 'all 0.4s ease',
      }}
    >
      {/* Top accent line */}
      <div
        className="absolute top-0 left-0 right-0 h-[2px] rounded-t-2xl"
        style={{
          background: `linear-gradient(90deg, transparent, ${cat.accent}, transparent)`,
          opacity: hovered ? 1 : 0.4,
          transition: 'opacity 0.4s ease',
        }}
      />

      {/* Header */}
      <div className="flex items-center gap-3 mb-5">
        <div
          className="w-9 h-9 rounded-xl flex items-center justify-center text-sm font-bold flex-shrink-0"
          style={{
            background: `${cat.accent}22`,
            border: `1px solid ${cat.accent}44`,
            color: cat.accent,
            fontFamily: 'monospace',
          }}
        >
          {cat.icon}
        </div>
        <h3 className="text-white font-bold text-base tracking-wide">
          {cat.label}
        </h3>
        <div
          className="ml-auto text-xs font-mono px-2 py-0.5 rounded-full"
          style={{
            color: cat.accent,
            background: `${cat.accent}18`,
            border: `1px solid ${cat.accent}33`,
          }}
        >
          {cat.skills.length}
        </div>
      </div>

      {/* Skills */}
      <div className="flex flex-wrap gap-2">
        {cat.skills.map((skill, i) => (
          <SkillBadge
            key={skill}
            skill={skill}
            accent={cat.accent}
            delay={0.05 * i}
          />
        ))}
      </div>
    </motion.div>
  )
}

const Skills = () => {
  return (
    <section id="skills" className="relative min-h-screen py-24 px-6 md:px-12 lg:px-20">

      {/* Header - Same style as Projects and About */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="text-center mb-16"
      >
        <h2 className="text-white text-4xl md:text-5xl font-extrabold mb-4">
          My <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-cyan-400">Skills</span>
        </h2>
        <div className="w-16 h-1 bg-gradient-to-r from-violet-500 to-cyan-500 mx-auto rounded-full mb-5" />
        <p className="text-gray-400 text-sm leading-relaxed max-w-lg mx-auto">
          A comprehensive toolkit spanning full-stack development,
          machine learning, and system design.
        </p>
      </motion.div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-[1200px] mx-auto">
        {categories.map((cat, i) => (
          <CategoryCard key={cat.id} cat={cat} index={i} />
        ))}
      </div>

    </section>
  )
}

export default Skills

