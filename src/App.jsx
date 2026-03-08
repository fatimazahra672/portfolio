import Experiences from './components/Experiences'
import Navbar from './components/Navbar'
import Introduction from './components/sections/Introduction'
import Projects from './components/sections/Projects'
import About from './components/sections/About'
import Skills from './components/sections/skills'
import Certifications from './components/sections/Certifications'
import Resume from './components/sections/Resume'
import Contact from './components/sections/contact'

function App() {
  return (
    <div style={{ position: 'relative', minHeight: '400vh' }}>
      {/* Canvas 3D en arrière-plan */}
      <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%' }}>
        <Experiences />
      </div>

      {/* Sections HTML par-dessus */}
      <div style={{ position: 'relative', zIndex: 1 }}>
        <Navbar />
        <Introduction />
        <About />
        <Projects />
        <Skills />
        <Certifications />
        <Resume />
        <Contact />
      </div>
    </div>
  )
}


export default App
