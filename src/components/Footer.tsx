import React from 'react'
import { ArrowUp } from 'lucide-react'
import { GithubIcon, LinkedinIcon } from './Icons'
import { portfolioData } from '../data/portfolio'

export const Footer: React.FC = () => {
  const { personal, navLinks } = portfolioData
  const currentYear = new Date().getFullYear()

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const handleNavClick = (href: string) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <footer className="border-t border-[#232924]/70 bg-transparent py-12 relative z-10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-[#232924]">
          {/* Brand & Monogram */}
          <div className="flex items-center gap-3">
            <div className="flex items-center justify-center w-10 h-10 rounded-full bg-[#171A18] border border-[#232924]">
              <span className="font-mono font-bold text-xs text-[#67F59A]">
                {personal.monogram}
              </span>
            </div>
            <div>
              <div className="text-sm font-bold text-[#F7F8F6] tracking-tight">
                {personal.name}
              </div>
              <div className="text-xs text-[#A8AEA9]">
                {personal.title}
              </div>
            </div>
          </div>

          {/* Quick Nav Links */}
          <nav className="flex flex-wrap justify-center gap-4 text-xs text-[#A8AEA9]">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault()
                  handleNavClick(link.href)
                }}
                className="hover:text-[#67F59A] transition-colors"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Back to top button */}
          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-mono text-[#A8AEA9] hover:text-[#F7F8F6] bg-[#171A18] hover:bg-[#202722] border border-[#232924] transition-colors cursor-pointer"
            aria-label="Back to top"
          >
            <span>Top</span>
            <ArrowUp className="w-3.5 h-3.5 text-[#67F59A]" />
          </button>
        </div>

        {/* Bottom Credits & Social */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 text-xs text-[#A8AEA9]">
          <div>
            <span>&copy; {currentYear} {personal.name}. Verified credentials &amp; portfolio.</span>
          </div>

          <div className="flex items-center gap-4">
            <a
              href={personal.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-[#A8AEA9] hover:text-[#67F59A] transition-colors"
            >
              <LinkedinIcon className="w-3.5 h-3.5 text-[#67F59A]" />
              <span>LinkedIn</span>
            </a>

            <a
              href={personal.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-[#A8AEA9] hover:text-[#F7F8F6] transition-colors"
            >
              <GithubIcon className="w-3.5 h-3.5" />
              <span>GitHub</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
