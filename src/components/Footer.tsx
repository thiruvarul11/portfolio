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
    <footer className="border-t border-orange-500/15 bg-[#080504] py-12 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-orange-500/10">
          {/* Brand & Monogram */}
          <div className="flex items-center gap-3">
            <div className="flex items-center justify-center w-10 h-10 rounded-2xl bg-[#1A120E] border border-orange-500/25">
              <span className="font-mono font-bold text-xs text-gradient-orange">
                {personal.monogram}
              </span>
            </div>
            <div>
              <div className="text-sm font-bold text-[#F7F3EF] tracking-tight">
                {personal.name}
              </div>
              <div className="text-xs text-[#A99C94]">
                {personal.title}
              </div>
            </div>
          </div>

          {/* Quick Nav Links */}
          <nav className="flex flex-wrap justify-center gap-4 text-xs text-[#A99C94]">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault()
                  handleNavClick(link.href)
                }}
                className="hover:text-orange-400 transition-colors"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Back to top button */}
          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-mono text-[#A99C94] hover:text-[#F7F3EF] bg-[#17100D] hover:bg-[#221712] border border-orange-500/20 transition-colors cursor-pointer"
            aria-label="Back to top"
          >
            <span>Top</span>
            <ArrowUp className="w-3.5 h-3.5 text-orange-400" />
          </button>
        </div>

        {/* Bottom Credits & Social */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 text-xs text-[#A99C94]">
          <div>
            <span>&copy; {currentYear} {personal.name}. Verified credentials &amp; portfolio.</span>
          </div>

          <div className="flex items-center gap-4">
            <a
              href={personal.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-[#A99C94] hover:text-orange-300 transition-colors"
            >
              <LinkedinIcon className="w-3.5 h-3.5 text-orange-400" />
              <span>LinkedIn</span>
            </a>

            <a
              href={personal.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-[#A99C94] hover:text-white transition-colors"
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
