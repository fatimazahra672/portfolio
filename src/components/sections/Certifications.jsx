import { useRef, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import cert1 from '../../assets/My certification/ACFrOgAIlR9ScUz98rnL_CPUESGiLaXsX7-aTRcBd8yui_uiyOLCuzu3QgzXYGANepX9Cxv90xmI2JtFo0xvn0Z-qlcznQkPsenVZDHUIPS7A1wGUoMxouiDpKaOKz-Ww6l9QcmE86FbJ2PzMijJGNTmD-mId-D0kdMboGRdMQ==_page-0001.jpg'
import cert2 from '../../assets/My certification/git udemy certification.jpg'
import cert3 from '../../assets/My certification/Introduction_to_Modern_AI_certificate_elhamdanifatimazahra71-gmail-com_789c57f7-dfa1-46c9-840b-85854cc09916-1.png'
import cert4 from '../../assets/My certification/java certification.jpg'
import cert5 from '../../assets/My certification/udemy certification.jpg'
import cert6 from '../../assets/My certification/16ed7b87-cd5a-417d-92c1-42051a4ff1b2.jpg'
import cert7 from '../../assets/My certification/1726955197578.jpg'
import cert8 from '../../assets/My certification/WhatsApp Image 2026-03-07 at 23.15.37.jpeg'
import cert9 from '../../assets/My certification/WhatsApp Image 2026-03-07 at 23.33.33.jpeg'
import cert10 from '../../assets/My certification/WhatsApp Image 2026-03-07 at 23.33.56.jpeg'

const certificates =[
  {
    id: 1,
    title: "Introduction to Modern AI",
    issuer: "ENSET through the cisco Networking Academy Program",
    image: cert3,
    accent: '#00d4ff',
    category: "Artificial Intelligence",
  },
  {
    id: 2,
    title: "Git for beginners",
    issuer: "Udemy",
    image: cert2,
    accent: '#f97316',
    category: "DevOps & Tools",
  },
  {
    id: 3,
    title: "Complete Java Programming",
    issuer: "Udemy",
    image: cert4,
    accent: '#ef4444',
    category: "Programming",
    tags: ["Java", "OOP"],
  },
  {
    id: 4,
    title: "Learn PHP and MySql for Web Application",
    issuer: "Udemy",
    image: cert5,
    accent: '#a855f7',
    category: "Development",
  },
  {
    id: 5,
    title: "Participation in Workshop on Power BI and Data Visualization",
    issuer: "N7Geeks club at ENSET",
    image: cert1,
    accent: '#10b981',
    category: "Power BI & Data Visualization",
  },
  {
    id: 6,
    title: "AWS Cloud Practitioner CLF-C02",
    issuer: "KodeKloud",
    image: cert6,
    accent: '#ff9900',
    category: "Cloud Computing",
  },
  {
    id: 7,
    title: "Certificate of Completion of the web Development projects competition",
    issuer: "01club at ENSAH",
    image: cert7,
    accent: '#3b82f6',
    category: "Web Development",
  },
  {
    id: 8,
    title: "JavaScript Algorithms and Data Structures",
    issuer: "freeCodeCamp",
    image: cert8,
    accent: '#006400',
    category: "Programming",
    tags: ["JavaScript", "Algorithms", "Data Structures"],
  },
  {
    id: 9,
    title: "Hult Prize Competition 2023",
    issuer: "Hult Prize ENSAH",
    image: cert9,
    accent: '#8b5cf6',
    category: "Entrepreneurship & Innovation",
    tags: ["Competition", "Social Impact", "Teamwork"],
  },
  {
    id: 10,
    title: "Hult Prize Competition 2023",
    issuer: "Enactus ENSAH",
    image: cert10,
    accent: '#ec4899',
    category: "Leadership & Volunteering",
    tags: ["Entrepreneurship", "Soft Skills", "Volunteering"],
  },
]

/* Lightbox */
const Lightbox = ({ cert, onClose }) => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    className="fixed inset-0 z-50 flex items-center justify-center p-6"
    style={{ background: 'rgba(0,0,0,0.92)', backdropFilter: 'blur(12px)' }}
    onClick={onClose}
  >
    <motion.div
      initial={{ scale: 0.85, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      exit={{ scale: 0.85, opacity: 0 }}
      transition={{ type: 'spring', stiffness: 300, damping: 28 }}
      className="relative max-w-4xl w-full rounded-2xl overflow-hidden shadow-2xl max-h-[90vh]"
      onClick={e => e.stopPropagation()}
      style={{ border: `2px solid ${cert.accent}66` }}
    >
      <img src={cert.image} alt={cert.title} className="w-full h-auto block" />
      <button
        onClick={onClose}
        className="absolute top-3 right-3 w-9 h-9 rounded-full flex items-center justify-center text-white text-lg font-bold transition-all z-10"
        style={{ background: 'rgba(0,0,0,0.6)', border: '1px solid rgba(255,255,255,0.2)' }}
      >
        ×
      </button>
      <div
        className="absolute bottom-0 left-0 right-0 px-5 py-3 flex items-center justify-between"
        style={{ background: 'rgba(0,0,0,0.75)', backdropFilter: 'blur(8px)' }}
      >
        <span className="text-white font-semibold text-sm">{cert.title}</span>
        <span className="text-xs" style={{ color: cert.accent }}>{cert.issuer}</span>
      </div>
    </motion.div>
  </motion.div>
)

/* Card like Projects */
const CertCard = ({ cert, index, onExpand }) => {
  const cardRef = useRef(null)

  const handleMouseMove = (e) => {
    const card = cardRef.current
    if (!card) return
    const rect = card.getBoundingClientRect()
    const rotateX = ((e.clientY - rect.top - rect.height / 2) / rect.height) * -10
    const rotateY = ((e.clientX - rect.left - rect.width / 2) / rect.width) * 10
    card.style.transform = `perspective(900px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.03)`
  }

  const handleMouseLeave = () => {
    if (cardRef.current) {
      cardRef.current.style.transform = 'perspective(900px) rotateX(0deg) rotateY(0deg) scale(1)'
    }
  }

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="group relative rounded-2xl border border-white/10 aspect-[3/2] overflow-hidden cursor-pointer"
      style={{ transform: 'perspective(900px)', transition: 'transform 0.2s ease' }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={() => onExpand(cert)}
    >
      <img
        src={cert.image}
        alt={cert.title}
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
      <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      
      {/* Default view - title at bottom */}
      <div className="absolute bottom-0 left-0 right-0 p-4 group-hover:opacity-0 transition-opacity duration-200 pointer-events-none">
        <span className="text-white font-bold text-lg leading-tight">{cert.title}</span>
      </div>
      
      {/* Hover view - details */}
      <div className="absolute inset-0 flex flex-col justify-end p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <div className="absolute top-0 left-0 right-0 p-4 bg-gradient-to-b from-black/60 to-transparent">
          <h3 className="text-white font-bold text-base leading-tight">{cert.title}</h3>
        </div>
        <p className="text-gray-200 text-xs leading-relaxed mb-2 mt-8">{cert.issuer}</p>
        <p className="text-xs mb-2" style={{ color: cert.accent }}>{cert.category}</p>
        
        <div className="flex flex-wrap gap-1.5 mb-3">
          {cert.tags?.map(tag => (
            <span
              key={tag}
              className="text-[10px] px-2.5 py-0.5 rounded-full text-white font-semibold"
              style={{ background: `${cert.accent}` }}
            >
              {tag}
            </span>
          ))}
        </div>
      </div> {/* <--- LA BALISE MANQUANTE ÉTAIT ICI */}

      {/* Hover border */}
      <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-violet-500/60 transition-all duration-300 pointer-events-none" />
    </motion.div>
  )
}

/* Main */
const Certifications = () => {
  const[lightbox, setLightbox] = useState(null)

  return (
    <>
      <AnimatePresence>
        {lightbox && <Lightbox cert={lightbox} onClose={() => setLightbox(null)} />}
      </AnimatePresence>

      <section id="certifs" className="relative min-h-screen py-24 px-6 md:px-12 lg:px-20 overflow-hidden">
        <div className="absolute top-20 right-20 w-80 h-80 rounded-full pointer-events-none" style={{ background: 'radial-gradient(circle, #a855f7, transparent)', opacity: 0.06, filter: 'blur(80px)' }} />
        <div className="absolute bottom-20 left-10 w-96 h-96 rounded-full pointer-events-none" style={{ background: 'radial-gradient(circle, #00d4ff, transparent)', opacity: 0.05, filter: 'blur(90px)' }} />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-10"
        >
          <h2 className="text-white text-4xl md:text-5xl font-extrabold mb-4">
            My <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-cyan-400">Certifications</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-violet-500 to-cyan-500 mx-auto rounded-full mb-5" />
          <p className="text-gray-400 text-sm leading-relaxed mb-6">
            Professional certifications validating my expertise and commitment<br />to continuous learning.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-[1200px] mx-auto">
          {certificates.map((cert, index) => (
            <CertCard key={cert.id} cert={cert} index={index} onExpand={setLightbox} />
          ))}
        </div>
      </section>
    </>
  )
}

export default Certifications