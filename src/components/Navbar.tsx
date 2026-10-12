import React, { useState, useEffect } from 'react'
import { Menu, X, ArrowUpRight, Download } from 'lucide-react'
import { GithubIcon, LinkedinIcon } from './Icons'
import { portfolioData } from '../data/portfolio'

interface NavbarProps {
  onOpenResume?: () => void
}

export const Navbar: React.FC<NavbarProps> = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('hero')

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 120)

      const sections = ['hero', 'about', 'skills', 'projects', 'achievements', 'why-work-with-me', 'certifications', 'contact']
      const scrollPosition = window.scrollY + 180

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId)
        if (el) {
          const top = el.offsetTop
          const height = el.offsetHeight
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId)
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false)
    const targetId = href.replace('#', '')
    const el = document.getElementById(targetId)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#101311]/90 backdrop-blur-md border-b border-[#232924] py-3 shadow-lg shadow-black/50 opacity-100 pointer-events-auto'
          : 'opacity-0 pointer-events-none -translate-y-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo / Monogram */}
          <a
            href="#hero"
            onClick={(e) => {
              e.preventDefault()
              handleNavClick('#hero')
            }}
            className="flex items-center gap-2.5 group pointer-events-auto"
            aria-label="Thiruvarul K — Home"
          >
            <div className="w-8 h-8 rounded-full bg-[#171A18] border border-[#232924] flex items-center justify-center text-xs font-mono font-bold text-[#67F59A] group-hover:border-[#67F59A]/50 transition-colors">
              TK
            </div>
            <div className="flex flex-col">
              <span className="text-xs font-bold tracking-wider text-[#F7F8F6] uppercase">
                {portfolioData.personal.name}
              </span>
              <span className="text-[10px] font-mono tracking-wider text-[#A8AEA9]">
                Portfolio
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 bg-[#171A18]/90 border border-[#232924] px-3 py-1.5 rounded-full backdrop-blur-md pointer-events-auto">
            {portfolioData.navLinks.map((link) => {
              const targetId = link.href.replace('#', '')
              const isActive = activeSection === targetId

              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault()
                    handleNavClick(link.href)
                  }}
                  className={`px-3 py-1 text-xs font-medium rounded-full transition-all duration-200 ${
                    isActive
                      ? 'text-[#101311] bg-[#67F59A] font-bold shadow-xs'
                      : 'text-[#A8AEA9] hover:text-[#F7F8F6] hover:bg-[#202722]'
                  }`}
                >
                  {link.name}
                </a>
              )
            })}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden sm:flex items-center gap-2.5 pointer-events-auto">
            <a
              href={`${import.meta.env.BASE_URL}resume.pdf`}
              download="Thiruvarul_K_Resume.pdf"
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-semibold text-[#101311] bg-[#67F59A] hover:bg-[#A0FFC0] rounded-full transition-all shadow-xs cursor-pointer"
              title="Download official resume"
            >
              <Download className="w-3.5 h-3.5" aria-hidden="true" />
              <span>Resume</span>
            </a>

            <a
              href={portfolioData.personal.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 px-3 py-1.5 text-xs font-medium text-[#A8AEA9] hover:text-[#F7F8F6] bg-[#171A18] hover:bg-[#202722] border border-[#232924] rounded-full transition-colors"
              aria-label="LinkedIn Profile"
            >
              <LinkedinIcon className="w-3.5 h-3.5 text-[#67F59A]" />
              <span className="hidden md:inline">LinkedIn</span>
            </a>

            <a
              href={portfolioData.personal.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-[#A8AEA9] hover:text-[#F7F8F6] bg-[#171A18] hover:bg-[#202722] border border-[#232924] rounded-full transition-colors"
              aria-label="GitHub Profile"
            >
              <GithubIcon className="w-3.5 h-3.5" />
              <span className="hidden md:inline">GitHub</span>
              <ArrowUpRight className="w-3 h-3 text-[#A8AEA9]/60" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex lg:hidden items-center gap-2 pointer-events-auto">
            <a
              href={`${import.meta.env.BASE_URL}resume.pdf`}
              download="Thiruvarul_K_Resume.pdf"
              className="sm:hidden inline-flex items-center gap-1 px-2.5 py-1.5 text-xs font-semibold text-[#101311] bg-[#67F59A] rounded-full"
              title="Download resume"
            >
              <Download className="w-3 h-3" aria-hidden="true" />
              <span>CV</span>
            </a>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-[#A8AEA9] hover:text-[#F7F8F6] bg-[#171A18] border border-[#232924] rounded-full transition-colors cursor-pointer"
              aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-4 h-4 text-[#67F59A]" /> : <Menu className="w-4 h-4" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden mt-3 p-4 bg-[#171A18] border border-[#232924] rounded-2xl shadow-xl animate-in fade-in duration-200 pointer-events-auto">
            <nav className="flex flex-col gap-1">
              {portfolioData.navLinks.map((link) => {
                const targetId = link.href.replace('#', '')
                const isActive = activeSection === targetId

                return (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault()
                      handleNavClick(link.href)
                    }}
                    className={`px-3 py-2 text-xs font-medium rounded-xl transition-colors flex items-center justify-between ${
                      isActive
                        ? 'text-[#101311] bg-[#67F59A] font-bold'
                        : 'text-[#A8AEA9] hover:text-[#F7F8F6] hover:bg-[#202722]'
                    }`}
                  >
                    <span>{link.name}</span>
                    <ArrowUpRight className="w-3.5 h-3.5 opacity-50" />
                  </a>
                )
              })}
            </nav>

            <div className="flex flex-col gap-2.5 pt-3 mt-3 border-t border-[#232924]">
              <a
                href={`${import.meta.env.BASE_URL}resume.pdf`}
                download="Thiruvarul_K_Resume.pdf"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-center gap-2 w-full py-2.5 text-xs font-bold text-[#101311] bg-[#67F59A] rounded-full shadow-md cursor-pointer"
              >
                <Download className="w-4 h-4" aria-hidden="true" />
                <span>Download Official Resume</span>
              </a>

              <div className="grid grid-cols-2 gap-2 mt-1">
                <a
                  href={portfolioData.personal.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-1.5 py-2 text-xs font-medium text-[#F7F8F6] bg-[#141715] border border-[#232924] rounded-xl"
                >
                  <LinkedinIcon className="w-3.5 h-3.5 text-[#67F59A]" />
                  <span>LinkedIn</span>
                </a>
                <a
                  href={portfolioData.personal.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-1.5 py-2 text-xs font-medium text-[#F7F8F6] bg-[#141715] border border-[#232924] rounded-xl"
                >
                  <GithubIcon className="w-3.5 h-3.5 text-[#A8AEA9]" />
                  <span>GitHub</span>
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
