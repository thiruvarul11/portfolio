import React, { useState } from 'react'
import { Navbar } from './components/Navbar'
import { Hero } from './sections/Hero'
import { About } from './sections/About'
import { Skills } from './sections/Skills'
import { Projects } from './sections/Projects'
import { Achievements } from './sections/Achievements'
import { WhyWorkWithMe } from './sections/WhyWorkWithMe'
import { Certifications } from './sections/Certifications'
import { Leadership } from './sections/Leadership'
import { Contact } from './sections/Contact'
import { Footer } from './components/Footer'
import { ResumeModal } from './components/ResumeModal'
import { EngineeringBackground } from './components/EngineeringBackground'
import { portfolioData } from './data/portfolio'

export const App: React.FC = () => {
  const [resumeModalOpen, setResumeModalOpen] = useState(false)

  return (
    <div className="relative min-h-screen bg-[#101311] text-[#F7F8F6] flex flex-col font-sans selection:bg-[#67F59A]/30 selection:text-[#A0FFC0]">
      {/* Subtle AI/ML Engineering Neural Network Animation */}
      <EngineeringBackground />

      {/* Sticky Navigation */}
      <Navbar onOpenResume={() => setResumeModalOpen(true)} />

      {/* Main Sections */}
      <main className="flex-1 relative z-10">
        <Hero onOpenResume={() => setResumeModalOpen(true)} />
        <About />
        <Skills />
        <Projects />
        <Achievements />
        <WhyWorkWithMe />
        <Certifications />
        <Leadership />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />

      {/* Resume Modal */}
      <ResumeModal
        isOpen={resumeModalOpen}
        onClose={() => setResumeModalOpen(false)}
        resumeUrl={portfolioData.personal.resumeUrl}
        isAvailable={portfolioData.personal.resumeAvailable}
      />
    </div>
  )
}

export default App
