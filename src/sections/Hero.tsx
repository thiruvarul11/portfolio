import React, { useState } from 'react'
import {
  Download,
  Mail,
  Phone,
  MapPin,
  ArrowUpRight,
  X,
} from 'lucide-react'
import { GithubIcon, LinkedinIcon } from '../components/Icons'
import { portfolioData } from '../data/portfolio'

interface HeroProps {
  onOpenResume?: () => void
}

export const Hero: React.FC<HeroProps> = () => {
  const { personal } = portfolioData
  const [menuOpen, setMenuOpen] = useState(false)

  const navLinks = [
    { name: 'Home', href: '#hero' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Achievements', href: '#achievements' },
    { name: 'Why Work With Me', href: '#why-work-with-me' },
    { name: 'Certifications', href: '#certifications' },
    { name: 'Contact', href: '#contact' },
  ]

  const scrollTo = (id: string) => {
    setMenuOpen(false)
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="hero" className="relative min-h-screen py-4 sm:py-6 lg:py-8 px-3 sm:px-6 lg:px-8 max-w-[1440px] mx-auto flex flex-col justify-center">
      {/* ── CINEMATIC FRAMED CONTAINER ── */}
      <div className="relative rounded-3xl border border-[#232924] bg-[#141715]/90 backdrop-blur-md p-6 sm:p-10 lg:p-12 overflow-hidden flex flex-col justify-between min-h-[88vh] shadow-2xl">

        {/* Ambient green lighting behind the frame */}
        <div
          className="absolute -top-32 -right-32 w-[550px] h-[550px] rounded-full pointer-events-none"
          style={{
            background: 'radial-gradient(circle, rgba(103, 245, 154, 0.12) 0%, rgba(103, 245, 154, 0.03) 50%, transparent 70%)',
          }}
        />
        <div
          className="absolute bottom-0 left-1/3 w-[450px] h-[450px] rounded-full pointer-events-none"
          style={{
            background: 'radial-gradient(circle, rgba(103, 245, 154, 0.08) 0%, transparent 65%)',
          }}
        />

        {/* ── TOP NAVIGATION (INSIDE FRAME) ── */}
        <header className="relative z-30 flex items-center justify-between pb-6 border-b border-[#232924]">
          <div className="flex items-center gap-3">
            <span className="font-extrabold text-sm sm:text-base tracking-widest text-[#F7F8F6] uppercase">
              {personal.name}.
            </span>
            <div className="hidden sm:inline-flex items-center gap-2 px-2.5 py-1 rounded-full bg-[#1A201C] border border-[#263329] text-[11px] font-mono text-[#A8AEA9]">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#67F59A] opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#67F59A]" />
              </span>
              <span>Available for Internships</span>
            </div>
          </div>

          <div className="flex items-center gap-3">
            {/* Quick Resume Direct Download */}
            <a
              href={`${import.meta.env.BASE_URL}resume.pdf`}
              download="Thiruvarul_K_Resume.pdf"
              className="hidden md:inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-semibold text-[#A8AEA9] hover:text-[#F7F8F6] bg-[#1A201C] hover:bg-[#222B24] border border-[#232924] transition-all cursor-pointer"
              title="Download official resume"
            >
              <Download className="w-3.5 h-3.5 text-[#67F59A]" aria-hidden="true" />
              <span>Resume PDF</span>
            </a>

            {/* Minimalist White Pill-Shaped Menu Button */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="bg-[#F7F8F6] hover:bg-[#67F59A] text-[#101311] px-4 py-1.5 rounded-full text-xs font-bold transition-all flex items-center gap-1.5 cursor-pointer shadow-sm select-none"
              aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
              aria-expanded={menuOpen}
            >
              <span>Menu</span>
              {menuOpen ? (
                <X className="w-3.5 h-3.5 text-[#101311]" />
              ) : (
                <ArrowUpRight className="w-3.5 h-3.5 text-[#101311]" />
              )}
            </button>
          </div>
        </header>

        {/* ── SLIDE-DOWN NAVIGATION DRAWER ── */}
        {menuOpen && (
          <div
            className="absolute top-20 right-6 sm:right-10 z-40 w-72 sm:w-80 rounded-2xl bg-[#171A18] border border-[#2E3831] shadow-2xl p-5 animate-in fade-in slide-in-from-top-4 duration-200"
            role="menu"
          >
            <div className="flex items-center justify-between pb-3 mb-3 border-b border-[#232924] text-xs font-mono text-[#A8AEA9]">
              <span>NAVIGATION</span>
              <button
                onClick={() => setMenuOpen(false)}
                className="text-[#A8AEA9] hover:text-[#F7F8F6] cursor-pointer"
                aria-label="Close menu"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <nav className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault()
                    scrollTo(link.href.replace('#', ''))
                  }}
                  className="px-3 py-2 rounded-xl text-sm font-medium text-[#A8AEA9] hover:text-[#F7F8F6] hover:bg-[#202722] transition-colors flex items-center justify-between"
                  role="menuitem"
                >
                  <span>{link.name}</span>
                  <ArrowUpRight className="w-3.5 h-3.5 opacity-50" />
                </a>
              ))}
            </nav>

            <div className="mt-4 pt-4 border-t border-[#232924] flex flex-col gap-2">
              <a
                href={`${import.meta.env.BASE_URL}resume.pdf`}
                download="Thiruvarul_K_Resume.pdf"
                onClick={() => setMenuOpen(false)}
                className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-xs font-semibold text-[#101311] bg-[#67F59A] hover:bg-[#A0FFC0] transition-colors cursor-pointer"
              >
                <Download className="w-3.5 h-3.5" aria-hidden="true" />
                <span>Download Resume (PDF)</span>
              </a>

              <div className="grid grid-cols-2 gap-2 mt-1">
                <a
                  href={personal.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-2 rounded-xl text-xs font-medium text-[#A8AEA9] hover:text-[#F7F8F6] bg-[#141715] hover:bg-[#1E2320] border border-[#232924] flex items-center justify-center gap-1.5"
                >
                  <LinkedinIcon className="w-3 h-3 text-[#67F59A]" />
                  <span>LinkedIn</span>
                </a>
                <a
                  href={personal.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-2 rounded-xl text-xs font-medium text-[#A8AEA9] hover:text-[#F7F8F6] bg-[#141715] hover:bg-[#1E2320] border border-[#232924] flex items-center justify-center gap-1.5"
                >
                  <GithubIcon className="w-3 h-3 text-[#A8AEA9]" />
                  <span>GitHub</span>
                </a>
              </div>
            </div>
          </div>
        )}

        {/* ── MAIN EDITORIAL HERO BODY ── */}
        <div className="relative z-10 py-8 sm:py-12 lg:py-14 my-auto">
          {/* Greeting */}
          <div className="mb-2 sm:mb-4">
            <span className="text-xs sm:text-sm font-mono tracking-wider text-[#A8AEA9] uppercase flex items-center gap-2">
              <span>Hey 👋, I'm an AI &amp; ML Student</span>
            </span>
          </div>

          {/* Grid Layout: Oversized Name & Cinematic Portrait */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
            <div className="lg:col-span-7 flex flex-col justify-center order-2 lg:order-1">
              <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-[5.2rem] xl:text-[6.6rem] font-black tracking-tight uppercase leading-none text-[#67F59A] select-none whitespace-nowrap">
                THIRUVARUL
              </h1>

              <p className="text-sm sm:text-base md:text-lg text-[#F7F8F6] font-medium tracking-wide mt-4 sm:mt-5 max-w-xl">
                Artificial Intelligence &amp; Machine Learning <span className="text-[#67F59A]">|</span> Aspiring Software Developer
              </p>

              {/* Status pill for mobile */}
              <div className="sm:hidden mt-3 inline-flex items-center gap-2 text-xs font-mono text-[#A8AEA9]">
                <span className="h-2 w-2 rounded-full bg-[#67F59A]" />
                <span>Available for Internships</span>
              </div>
            </div>

            {/* Right: Cinematic Portrait with Green Ambient Light */}
            <div className="lg:col-span-5 flex justify-center lg:justify-end order-1 lg:order-2">
              <div className="relative w-full max-w-[340px] sm:max-w-[400px] lg:max-w-[420px]">
                {/* Soft emerald ambient backlight */}
                <div
                  className="absolute inset-0 rounded-3xl pointer-events-none"
                  style={{
                    background: 'radial-gradient(circle at 50% 40%, rgba(103, 245, 154, 0.28) 0%, rgba(103, 245, 154, 0.08) 50%, transparent 75%)',
                    transform: 'scale(1.2)',
                  }}
                />

                {/* Portrait card frame with dark overlay blend */}
                <div className="relative rounded-3xl overflow-hidden border border-[#2E3831] bg-[#101311] shadow-2xl aspect-[4/4.8] sm:aspect-[4/4.6]">
                  {/* The real profile photograph */}
                  <img
                    src={personal.avatarUrl}
                    alt={`${personal.name} — Profile Portrait`}
                    className="w-full h-full object-cover object-[center_18%]"
                    onError={(e) => {
                      const el = e.currentTarget
                      el.style.display = 'none'
                      const parent = el.parentElement
                      if (parent) {
                        const fb = document.createElement('div')
                        fb.className = 'w-full h-full flex items-center justify-center bg-[#171A18]'
                        fb.innerHTML = `<span class="text-7xl font-bold text-[#67F59A] font-mono">${personal.monogram}</span>`
                        parent.appendChild(fb)
                      }
                    }}
                  />

                  {/* Cinematic dark bottom gradient overlay to blend image into panel */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#141715] via-transparent to-transparent opacity-85 pointer-events-none" />

                  {/* Subtle inner emerald rim highlight */}
                  <div className="absolute inset-0 rounded-3xl ring-1 ring-inset ring-[#67F59A]/20 pointer-events-none" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ── BOTTOM ROW: CONTACT DETAILS & ABOUT/CTAS ── */}
        <footer className="relative z-20 pt-6 border-t border-[#232924] flex flex-col md:flex-row items-start md:items-end justify-between gap-6">
          {/* Bottom-Left: Email & Phone & Location */}
          <div className="flex flex-col gap-1.5 text-xs font-mono text-[#A8AEA9]">
            <a
              href={`mailto:${personal.email}`}
              className="inline-flex items-center gap-2 hover:text-[#67F59A] transition-colors"
            >
              <Mail className="w-3.5 h-3.5 text-[#67F59A]" />
              <span>{personal.email}</span>
            </a>
            <a
              href={`tel:${personal.phone}`}
              className="inline-flex items-center gap-2 hover:text-[#67F59A] transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-[#67F59A]" />
              <span>{personal.phone}</span>
            </a>
            <div className="inline-flex items-center gap-2 text-[#7B837C]">
              <MapPin className="w-3.5 h-3.5 text-[#7B837C]" />
              <span>{personal.location}</span>
            </div>
          </div>

          {/* Right side, lower portion: Intro & Compact Social Links */}
          <div className="flex flex-col items-start md:items-end max-w-lg">
            <p className="text-xs sm:text-sm text-[#A8AEA9] leading-relaxed md:text-right mb-4">
              Building practical software applications through programming, artificial intelligence, and machine learning. Interested in software development and AI/ML internship opportunities.
            </p>

            <div className="flex flex-wrap items-center gap-3">
              {/* Direct PDF Download Button */}
              <a
                href={`${import.meta.env.BASE_URL}resume.pdf`}
                download="Thiruvarul_K_Resume.pdf"
                className="inline-flex items-center gap-2 px-4 py-2 text-xs font-bold text-[#101311] bg-[#67F59A] hover:bg-[#A0FFC0] rounded-full transition-all shadow-md shadow-[#67F59A]/20 cursor-pointer"
              >
                <Download className="w-3.5 h-3.5" aria-hidden="true" />
                <span>Download Resume</span>
              </a>

              {/* LinkedIn */}
              <a
                href={personal.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-[#A8AEA9] hover:text-[#F7F8F6] bg-[#1A201C] hover:bg-[#222B24] border border-[#232924] rounded-full transition-all"
                aria-label="LinkedIn"
                title="LinkedIn Profile"
              >
                <LinkedinIcon className="w-4 h-4 text-[#67F59A]" />
              </a>

              {/* GitHub */}
              <a
                href={personal.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-[#A8AEA9] hover:text-[#F7F8F6] bg-[#1A201C] hover:bg-[#222B24] border border-[#232924] rounded-full transition-all"
                aria-label="GitHub"
                title="GitHub Profile"
              >
                <GithubIcon className="w-4 h-4" />
              </a>

              {/* Email Button */}
              <a
                href={`mailto:${personal.email}`}
                className="p-2 text-[#A8AEA9] hover:text-[#F7F8F6] bg-[#1A201C] hover:bg-[#222B24] border border-[#232924] rounded-full transition-all"
                aria-label="Send Email"
                title="Email Thiruvarul"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>
        </footer>

        {/* ── RIGHT EDGE: SLIM VERTICAL SCROLL INDICATOR ── */}
        <div className="absolute right-3 top-1/2 -translate-y-1/2 hidden xl:flex flex-col items-center gap-3 z-20">
          <button
            onClick={() => scrollTo('about')}
            className="flex flex-col items-center gap-2 text-[10px] font-mono tracking-widest uppercase text-[#7B837C] hover:text-[#67F59A] transition-colors cursor-pointer"
            aria-label="Scroll to About section"
          >
            <span className="[writing-mode:vertical-lr] tracking-widest">SCROLL</span>
            <div className="w-[1.5px] h-10 bg-[#232924] relative overflow-hidden rounded-full">
              <div className="w-full h-full bg-[#67F59A] animate-scroll-line" />
            </div>
          </button>
        </div>
      </div>
    </section>
  )
}
