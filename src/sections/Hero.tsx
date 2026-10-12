import React from 'react'
import {
  ArrowRight,
  MapPin,
  GraduationCap,
  Sparkles,
  ChevronDown,
  Terminal,
  Download,
} from 'lucide-react'
import { GithubIcon, LinkedinIcon } from '../components/Icons'
import { portfolioData } from '../data/portfolio'

interface HeroProps {
  onOpenResume: () => void
}

export const Hero: React.FC<HeroProps> = ({ onOpenResume }) => {
  const { personal, education } = portfolioData

  const scrollTo = (id: string) => {
    const el = document.getElementById(id)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section
      id="hero"
      className="relative min-h-[92vh] flex items-center justify-center pt-28 pb-16 overflow-hidden bg-tech-grid"
    >
      {/* Background ambient warm orange light glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[540px] h-[360px] bg-orange-600/10 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute top-1/3 left-1/5 w-[300px] h-[300px] bg-amber-500/10 rounded-full blur-[110px] pointer-events-none" />
      <div className="absolute top-1/2 right-1/4 w-[340px] h-[340px] bg-orange-700/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Headlines & Call to Actions */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            {/* Status Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#1A120E] border border-orange-500/30 text-orange-300 text-xs font-medium mb-6 shadow-xs shadow-orange-950/40">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-orange-500"></span>
              </span>
              <span>{personal.status}</span>
            </div>

            {/* Greeting */}
            <h2 className="text-sm sm:text-base font-mono text-orange-400 mb-2 flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-orange-400" />
              <span>Hi, I'm {personal.name}</span>
            </h2>

            {/* Main Headline with Orange Gradient */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-bold tracking-tight text-[#F7F3EF] leading-tight mb-5">
              Building Intelligent Solutions Through{' '}
              <span className="text-gradient-orange">
                AI &amp; Software Development
              </span>
              .
            </h1>

            {/* Supporting Headline */}
            <p className="text-base sm:text-lg text-[#A99C94] leading-relaxed max-w-2xl mb-8">
              {personal.heroSubheadline}
            </p>

            {/* CTAs and Links */}
            <div className="flex flex-wrap items-center gap-3 sm:gap-4 mb-10 w-full sm:w-auto">
              {/* Primary CTA */}
              <button
                onClick={() => scrollTo('projects')}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-semibold text-white bg-gradient-orange hover:opacity-95 rounded-2xl transition-all shadow-lg shadow-orange-600/30 hover:-translate-y-0.5 cursor-pointer"
              >
                <span>Explore Projects</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              {/* Secondary CTA: Download Resume */}
              <div className="inline-flex items-center rounded-2xl bg-[#1A120E] border border-orange-500/25 p-0.5 shadow-xs">
                <a
                  href={personal.resumeUrl}
                  download="Thiruvarul_K_Resume.pdf"
                  className="inline-flex items-center justify-center gap-2 px-5 py-3 text-sm font-semibold text-[#F7F3EF] hover:bg-[#251A14] rounded-2xl transition-all cursor-pointer"
                >
                  <Download className="w-4 h-4 text-orange-400" />
                  <span>Download Resume</span>
                </a>
                <button
                  onClick={onOpenResume}
                  className="px-2.5 py-3 text-xs text-orange-400 hover:text-orange-300 hover:bg-[#251A14] rounded-xl transition-colors cursor-pointer"
                  title="View resume options"
                >
                  &bull;&bull;&bull;
                </button>
              </div>

              {/* LinkedIn & GitHub icons */}
              <div className="flex items-center gap-2">
                <a
                  href={personal.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 text-orange-300 hover:text-white bg-[#17100D] hover:bg-[#251A15] border border-orange-500/20 hover:border-orange-500/40 rounded-2xl transition-all hover:-translate-y-0.5"
                  aria-label="LinkedIn Profile"
                  title="Visit LinkedIn Profile"
                >
                  <LinkedinIcon className="w-4 h-4" />
                </a>

                <a
                  href={personal.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 text-[#A99C94] hover:text-white bg-[#17100D] hover:bg-[#251A15] border border-orange-500/20 hover:border-orange-500/40 rounded-2xl transition-all hover:-translate-y-0.5"
                  aria-label="GitHub Profile"
                  title="Visit GitHub Profile"
                >
                  <GithubIcon className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Micro Quick Facts */}
            <div className="flex flex-wrap items-center gap-4 sm:gap-6 pt-6 border-t border-orange-500/15 text-xs text-[#A99C94] font-mono">
              <div className="flex items-center gap-2">
                <GraduationCap className="w-4 h-4 text-orange-400" />
                <span>{education.institution}</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-orange-400" />
                <span>{personal.location}</span>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Profile Card with Warm Orange theme */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-sm">
              {/* Card Glow border */}
              <div className="absolute -inset-1 bg-gradient-to-r from-orange-600/30 via-amber-600/20 to-orange-500/30 rounded-3xl blur-md opacity-60"></div>

              <div className="relative warm-card rounded-3xl p-6 backdrop-blur-xl shadow-2xl border border-orange-500/25">
                {/* Header bar */}
                <div className="flex items-center justify-between pb-4 mb-5 border-b border-orange-500/15">
                  <div className="flex items-center gap-2">
                    <div className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
                    <div className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                    <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                  </div>
                  <div className="flex items-center gap-1.5 font-mono text-[11px] text-orange-300">
                    <Terminal className="w-3.5 h-3.5 text-orange-400" />
                    <span>thiruvarul.dev</span>
                  </div>
                </div>

                {/* Profile Avatar & Title */}
                <div className="flex items-center gap-4 mb-5">
                  <div className="relative w-20 h-20 rounded-2xl overflow-hidden bg-[#100B08] border-2 border-orange-500/40 p-0.5 shrink-0 shadow-md shadow-orange-950/50">
                    <img
                      src={personal.avatarUrl}
                      alt={personal.name}
                      onError={(e) => {
                        e.currentTarget.style.display = 'none'
                        if (e.currentTarget.parentElement) {
                          e.currentTarget.parentElement.innerHTML = `<div class="w-full h-full flex items-center justify-center font-bold text-xl text-orange-300 bg-[#1A120E]">${personal.monogram}</div>`
                        }
                      }}
                      className="w-full h-full object-cover rounded-xl"
                    />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-[#F7F3EF] tracking-tight">
                      {personal.name}
                    </h3>
                    <p className="text-xs text-orange-300 font-mono mt-0.5">
                      {personal.title}
                    </p>
                    <p className="text-[11px] text-[#A99C94] mt-1 flex items-center gap-1">
                      <MapPin className="w-3 h-3 text-orange-400/80" />
                      <span>{personal.location}</span>
                    </p>
                  </div>
                </div>

                {/* Technical Overview Snippet */}
                <div className="bg-[#0C0806] border border-orange-500/15 rounded-2xl p-3.5 mb-4 font-mono text-xs">
                  <div className="text-[#A99C94] text-[11px] mb-2.5 flex items-center justify-between">
                    <span className="text-orange-400/90">// Engineering Focus</span>
                    <span className="text-emerald-400 font-semibold text-[10px] bg-emerald-950/60 px-2 py-0.5 rounded-full border border-emerald-800/40">Verified</span>
                  </div>
                  <div className="space-y-1.5 text-xs">
                    <div className="flex justify-between">
                      <span className="text-[#A99C94]">Languages:</span>
                      <span className="text-orange-200">Python, Java, SQL</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-[#A99C94]">AI &amp; ML:</span>
                      <span className="text-amber-200">Foundations &amp; Concepts</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-[#A99C94]">VCS:</span>
                      <span className="text-orange-300">GitHub Version Control</span>
                    </div>
                  </div>
                </div>

                {/* Verified Hackathon Badge */}
                <div className="p-3 rounded-2xl bg-orange-950/30 border border-orange-500/25 text-xs flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-xl bg-orange-500/20 text-orange-300">
                      <Sparkles className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="font-semibold text-[#F7F3EF]">Smart India Hackathon 2025</div>
                      <div className="text-[11px] text-[#A99C94]">Jharkhand Connect &bull; Backend Dev</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll down indicator */}
        <div className="mt-12 flex justify-center">
          <button
            onClick={() => scrollTo('about')}
            className="flex flex-col items-center gap-1 text-xs text-[#A99C94] hover:text-orange-300 transition-colors cursor-pointer"
            aria-label="Scroll to about section"
          >
            <span>Learn more about my background</span>
            <ChevronDown className="w-4 h-4 animate-bounce text-orange-400" />
          </button>
        </div>
      </div>
    </section>
  )
}
