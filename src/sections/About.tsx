import React from 'react'
import { GraduationCap, Building2, MapPin, Compass, Code2, Cpu, Users, FileText, Download } from 'lucide-react'
import { portfolioData } from '../data/portfolio'

export const About: React.FC = () => {
  const { personal, education } = portfolioData

  const facts = [
    {
      icon: GraduationCap,
      label: 'Degree',
      value: education.degree,
      color: 'text-orange-400 bg-orange-500/10 border-orange-500/25',
    },
    {
      icon: Building2,
      label: 'Institution',
      value: education.institution,
      color: 'text-amber-400 bg-amber-500/10 border-amber-500/25',
    },
    {
      icon: MapPin,
      label: 'Location',
      value: personal.location,
      color: 'text-orange-300 bg-orange-500/10 border-orange-500/25',
    },
    {
      icon: Compass,
      label: 'Primary Interests',
      value: education.interests,
      color: 'text-amber-300 bg-amber-500/10 border-amber-500/25',
    },
  ]

  const highlights = [
    {
      icon: Code2,
      title: 'Programming Foundations',
      description:
        'Building strong fundamentals in Python, Java, and SQL for clean logic and backend development.',
    },
    {
      icon: Cpu,
      title: 'AI & Machine Learning',
      description:
        'Studying core machine learning paradigms and artificial intelligence concepts with practical exploration.',
    },
    {
      icon: Users,
      title: 'Collaborative Problem Solving',
      description:
        'Hands-on hackathon and team project experience applying version control and team communication.',
    },
  ]

  return (
    <section id="about" className="py-20 bg-[#0C0806] relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="flex flex-col items-start mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/25 text-orange-400 font-mono text-xs mb-3 font-semibold tracking-wider">
            <span>ABOUT ME</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-[#F7F3EF] tracking-tight">
            Background &amp; Academic Focus
          </h2>
          <p className="text-[#A99C94] text-sm sm:text-base mt-2 max-w-2xl">
            Undergraduate student driven by practical engineering, computational fundamentals, and emerging intelligent systems.
          </p>
        </div>

        {/* Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Main Narrative Card */}
          <div className="lg:col-span-7 warm-card rounded-3xl p-6 sm:p-8 backdrop-blur-sm border border-orange-500/15">
            <h3 className="text-lg font-bold text-[#F7F3EF] mb-4">
              Professional Summary
            </h3>
            <p className="text-[#D8CFC7] leading-relaxed text-sm sm:text-base mb-6">
              {personal.summary}
            </p>
            <p className="text-[#A99C94] leading-relaxed text-sm">
              Through collaborative initiatives like the Smart India Hackathon and software projects, I continuously refine my coding practices, backend architecture skills, and understanding of intelligent algorithms to solve real-world challenges.
            </p>

            {/* Core Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-8 pt-6 border-t border-orange-500/15">
              {highlights.map((item, idx) => {
                const Icon = item.icon
                return (
                  <div key={idx} className="flex flex-col items-start">
                    <div className="p-2.5 rounded-xl bg-[#221712] border border-orange-500/20 text-orange-400 mb-2.5">
                      <Icon className="w-4 h-4" />
                    </div>
                    <h4 className="text-xs font-semibold text-[#F7F3EF] mb-1">{item.title}</h4>
                    <p className="text-[12px] text-[#A99C94] leading-normal">{item.description}</p>
                  </div>
                )
              })}
            </div>

            {/* Secondary Resume Action in About */}
            <div className="mt-8 pt-6 border-t border-orange-500/15 flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center gap-2 text-xs text-[#A99C94]">
                <FileText className="w-4 h-4 text-orange-400" />
                <span>Verified Curriculum Vitae (PDF)</span>
              </div>
              <a
                href={personal.resumeUrl}
                download="Thiruvarul_K_Resume.pdf"
                className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold text-orange-200 bg-orange-950/50 hover:bg-orange-900/60 border border-orange-600/30 rounded-xl transition-all cursor-pointer"
              >
                <Download className="w-3.5 h-3.5 text-orange-400" />
                <span>Download Resume</span>
              </a>
            </div>
          </div>

          {/* Quick Facts Sidebar */}
          <div className="lg:col-span-5 flex flex-col gap-4">
            <div className="warm-card rounded-3xl p-6 backdrop-blur-sm border border-orange-500/15">
              <h3 className="text-xs font-mono uppercase tracking-wider text-orange-400 font-semibold mb-5">
                Key Academic &amp; Personal Facts
              </h3>

              <div className="space-y-4">
                {facts.map((fact, index) => {
                  const Icon = fact.icon
                  return (
                    <div
                      key={index}
                      className="flex items-start gap-3.5 p-3.5 rounded-2xl bg-[#0C0806] border border-orange-500/15"
                    >
                      <div className={`p-2.5 rounded-xl border shrink-0 ${fact.color}`}>
                        <Icon className="w-4 h-4" />
                      </div>
                      <div className="min-w-0">
                        <div className="text-[11px] font-mono text-[#A99C94] uppercase tracking-wide">
                          {fact.label}
                        </div>
                        <div className="text-sm font-semibold text-[#F7F3EF] mt-0.5 leading-snug break-words">
                          {fact.value}
                        </div>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
