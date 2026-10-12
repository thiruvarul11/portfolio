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
      color: 'text-[#67F59A] bg-[#67F59A]/10 border-[#67F59A]/20',
    },
    {
      icon: Building2,
      label: 'Institution',
      value: education.institution,
      color: 'text-[#A0FFC0] bg-[#67F59A]/10 border-[#67F59A]/20',
    },
    {
      icon: MapPin,
      label: 'Location',
      value: personal.location,
      color: 'text-[#67F59A] bg-[#67F59A]/10 border-[#67F59A]/20',
    },
    {
      icon: Compass,
      label: 'Primary Focus',
      value: education.interests,
      color: 'text-[#A0FFC0] bg-[#67F59A]/10 border-[#67F59A]/20',
    },
  ]

  const highlights = [
    {
      icon: Code2,
      title: 'Programming Fundamentals',
      description:
        'Building strong fundamentals in Python, Java, and SQL for clean logic, data handling, and backend services.',
    },
    {
      icon: Cpu,
      title: 'AI & Machine Learning',
      description:
        'Studying core artificial intelligence principles and applied machine learning models with hands-on practice.',
    },
    {
      icon: Users,
      title: 'Practical Project Delivery',
      description:
        'Proven team hackathon experience at SIH 2025, version control with GitHub, and structured code development.',
    },
  ]

  return (
    <section id="about" className="py-24 bg-transparent relative border-t border-[#232924]/70">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="flex flex-col items-start mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#171A18] border border-[#232924] text-[#67F59A] font-mono text-xs mb-3 font-semibold tracking-wider">
            <span>ABOUT THIRUVARUL</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#F7F8F6] tracking-tight">
            Background &amp; Academic Focus
          </h2>
          <p className="text-[#A8AEA9] text-sm sm:text-base mt-2 max-w-2xl">
            Artificial Intelligence and Machine Learning undergraduate at Rajalakshmi Institute of Technology, Chennai.
          </p>
        </div>

        {/* Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Main Narrative Card */}
          <div className="lg:col-span-7 bg-[#171A18] rounded-3xl p-6 sm:p-8 border border-[#232924]">
            <h3 className="text-lg font-bold text-[#F7F8F6] mb-4">
              Professional Summary
            </h3>
            <p className="text-[#A8AEA9] leading-relaxed text-sm sm:text-base mb-5">
              {personal.summary}
            </p>
            <p className="text-[#A8AEA9] leading-relaxed text-sm">
              Through collaborative initiatives like the Smart India Hackathon and applied software projects, I continuously refine my coding practices, backend architecture skills, and understanding of intelligent algorithms to solve real-world challenges.
            </p>

            {/* Core Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-8 pt-6 border-t border-[#232924]">
              {highlights.map((item, idx) => {
                const Icon = item.icon
                return (
                  <div key={idx} className="flex flex-col items-start">
                    <div className="p-2.5 rounded-xl bg-[#141715] border border-[#232924] text-[#67F59A] mb-2.5">
                      <Icon className="w-4 h-4" />
                    </div>
                    <h4 className="text-xs font-semibold text-[#F7F8F6] mb-1">{item.title}</h4>
                    <p className="text-[12px] text-[#A8AEA9] leading-relaxed">{item.description}</p>
                  </div>
                )
              })}
            </div>

            {/* Resume Action in About */}
            <div className="mt-8 pt-6 border-t border-[#232924] flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center gap-2 text-xs text-[#A8AEA9]">
                <FileText className="w-4 h-4 text-[#67F59A]" />
                <span>Verified Curriculum Vitae (PDF)</span>
              </div>
              <a
                href={`${import.meta.env.BASE_URL}resume.pdf`}
                download="Thiruvarul_K_Resume.pdf"
                className="inline-flex items-center gap-2 px-4 py-2 text-xs font-bold text-[#101311] bg-[#67F59A] hover:bg-[#A0FFC0] rounded-full transition-all cursor-pointer"
              >
                <Download className="w-3.5 h-3.5" aria-hidden="true" />
                <span>Download Resume</span>
              </a>
            </div>
          </div>

          {/* Quick Facts Sidebar */}
          <div className="lg:col-span-5 flex flex-col gap-4">
            <div className="bg-[#171A18] rounded-3xl p-6 border border-[#232924]">
              <h3 className="text-xs font-mono uppercase tracking-wider text-[#67F59A] font-semibold mb-5">
                Key Academic &amp; Personal Facts
              </h3>

              <div className="space-y-3.5">
                {facts.map((fact, index) => {
                  const Icon = fact.icon
                  return (
                    <div
                      key={index}
                      className="flex items-start gap-3.5 p-3.5 rounded-2xl bg-[#141715] border border-[#232924]"
                    >
                      <div className={`p-2.5 rounded-xl border shrink-0 ${fact.color}`}>
                        <Icon className="w-4 h-4" />
                      </div>
                      <div className="min-w-0">
                        <div className="text-[11px] font-mono text-[#A8AEA9] uppercase tracking-wide">
                          {fact.label}
                        </div>
                        <div className="text-sm font-semibold text-[#F7F8F6] mt-0.5 leading-snug break-words">
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
