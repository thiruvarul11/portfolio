import React, { useState, useEffect } from 'react'
import { Menu, X, FileText, ArrowUpRight } from 'lucide-react'
import { GithubIcon, LinkedinIcon } from './Icons'
import { portfolioData } from '../data/portfolio'

interface NavbarProps {
  onOpenResume: () => void
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenResume }) => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('hero')

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)

      const sections = ['hero', 'about', 'skills', 'projects', 'achievements', 'why-work-with-me', 'certifications', 'contact']
      const scrollPosition = window.scrollY + 140

      for (const sectionId of sections) {
        const element = document.getElementById(sectionId)
        if (element) {
          const top = element.offsetTop
          const height = element.offsetHeight
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId)
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false)
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#0C0806]/90 backdrop-blur-md border-b border-orange-500/15 shadow-xl shadow-black/40 py-3'
          : 'bg-transparent py-4 sm:py-5'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo / Monogram */}
          <a
            href="#hero"
            onClick={(e) => {
              e.preventDefault()
              handleNavClick('#hero')
            }}
            className="flex items-center gap-3 group focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-400 rounded-xl"
          >
            <div className="relative flex items-center justify-center w-10 h-10 rounded-2xl bg-[#1A120E] border border-orange-500/30 group-hover:border-orange-500/60 transition-colors shadow-sm shadow-orange-950/40">
              <span className="font-mono font-extrabold text-sm tracking-wider text-gradient-orange">
                {portfolioData.personal.monogram}
              </span>
            </div>
            <div className="flex flex-col">
              <span className="text-sm font-bold tracking-tight text-[#F7F3EF] group-hover:text-orange-300 transition-colors">
                {portfolioData.personal.name}
              </span>
              <span className="text-[10px] font-mono tracking-wider text-orange-400/80 uppercase">
                Portfolio
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 bg-[#17100D]/90 border border-orange-500/15 px-3 py-1.5 rounded-full backdrop-blur-md shadow-inner">
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
                      ? 'text-white bg-orange-500/20 text-orange-300 border border-orange-500/35 shadow-xs'
                      : 'text-[#A99C94] hover:text-[#F7F3EF] hover:bg-[#251A15]'
                  }`}
                >
                  {link.name}
                </a>
              )
            })}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden sm:flex items-center gap-2.5">
            <button
              onClick={onOpenResume}
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-semibold text-[#F7F3EF] bg-[#221712] hover:bg-[#2B1D16] border border-orange-500/25 hover:border-orange-500/40 rounded-xl transition-all shadow-xs cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-400"
              title="Download official resume"
            >
              <FileText className="w-3.5 h-3.5 text-orange-400" />
              <span>Resume</span>
            </button>

            <a
              href={portfolioData.personal.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 px-3 py-1.5 text-xs font-medium text-[#A99C94] hover:text-[#F7F3EF] bg-[#17100D] hover:bg-[#221712] border border-orange-500/15 hover:border-orange-500/30 rounded-xl transition-colors"
              aria-label="LinkedIn Profile"
            >
              <LinkedinIcon className="w-3.5 h-3.5 text-orange-400" />
              <span className="hidden md:inline">LinkedIn</span>
            </a>

            <a
              href={portfolioData.personal.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-[#A99C94] hover:text-[#F7F3EF] bg-[#17100D] hover:bg-[#221712] border border-orange-500/15 hover:border-orange-500/30 rounded-xl transition-colors"
              aria-label="GitHub Profile"
            >
              <GithubIcon className="w-3.5 h-3.5" />
              <span className="hidden md:inline">GitHub</span>
              <ArrowUpRight className="w-3 h-3 text-[#A99C94]/60" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex lg:hidden items-center gap-2">
            <button
              onClick={onOpenResume}
              className="sm:hidden inline-flex items-center gap-1 px-2.5 py-1.5 text-xs font-medium text-orange-300 bg-orange-950/40 border border-orange-500/25 rounded-lg"
            >
              <FileText className="w-3.5 h-3.5" />
              <span>CV</span>
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-[#A99C94] hover:text-white bg-[#17100D] border border-orange-500/20 rounded-xl transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-400 cursor-pointer"
              aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-5 h-5 text-orange-400" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-[60px] bg-[#0C0806]/98 border-b border-orange-500/20 backdrop-blur-2xl px-5 py-6 shadow-2xl transition-all">
          <nav className="flex flex-col gap-1.5 mb-5">
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
                  className={`px-4 py-2.5 text-sm font-medium rounded-xl transition-colors flex items-center justify-between ${
                    isActive
                      ? 'text-white bg-orange-500/20 text-orange-300 border border-orange-500/30'
                      : 'text-[#A99C94] hover:text-[#F7F3EF] hover:bg-[#1A120E]'
                  }`}
                >
                  <span>{link.name}</span>
                  {isActive && <div className="w-1.5 h-1.5 rounded-full bg-orange-400" />}
                </a>
              )
            })}
          </nav>

          <div className="flex flex-col gap-2.5 pt-4 border-t border-orange-500/15">
            <button
              onClick={() => {
                setMobileMenuOpen(false)
                onOpenResume()
              }}
              className="flex items-center justify-center gap-2 w-full py-2.5 text-sm font-semibold text-white bg-gradient-orange rounded-xl shadow-md shadow-orange-600/30 cursor-pointer"
            >
              <FileText className="w-4 h-4" />
              <span>Download Official Resume</span>
            </button>

            <div className="grid grid-cols-2 gap-2 mt-1">
              <a
                href={portfolioData.personal.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-1.5 py-2.5 text-xs font-medium text-[#E6DDD5] bg-[#17100D] border border-orange-500/20 rounded-xl"
              >
                <LinkedinIcon className="w-3.5 h-3.5 text-orange-400" />
                <span>LinkedIn</span>
              </a>

              <a
                href={portfolioData.personal.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-1.5 py-2.5 text-xs font-medium text-[#E6DDD5] bg-[#17100D] border border-orange-500/20 rounded-xl"
              >
                <GithubIcon className="w-3.5 h-3.5" />
                <span>GitHub</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
