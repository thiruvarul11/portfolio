import React from 'react'
import {
  HeartHandshake,
  BookOpen,
  Languages,
  CheckCircle,
  Building,
  Sparkles,
} from 'lucide-react'
import { portfolioData } from '../data/portfolio'

export const Leadership: React.FC = () => {
  const { leadership, languages } = portfolioData

  return (
    <section id="leadership" className="py-20 bg-[#0C0806] relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="flex flex-col items-start mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-orange-500/10 border border-orange-500/25 text-orange-400 font-mono text-xs mb-3 font-semibold tracking-wider">
            <span>LEADERSHIP &amp; COMMUNITY</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#F7F3EF] tracking-tight">
            Leadership &amp; Additional Information
          </h2>
          <p className="text-[#A99C94] text-sm sm:text-base mt-2 max-w-2xl">
            Active extracurricular leadership in student organizations, editorial stewardship, and multilingual communication.
          </p>
        </div>

        {/* 2-Column Responsive Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left: NSS Club Leadership */}
          <div className="lg:col-span-7 warm-card rounded-3xl p-6 sm:p-8 flex flex-col justify-between border border-orange-500/15">
            <div>
              <div className="flex items-start justify-between gap-4 mb-5">
                <div className="p-3 rounded-2xl bg-orange-500/10 border border-orange-500/25 text-orange-400">
                  <HeartHandshake className="w-6 h-6" />
                </div>
                <span className="px-3.5 py-1 rounded-full bg-[#201510] border border-orange-500/20 text-xs font-mono text-orange-300 font-semibold">
                  {leadership.membership}
                </span>
              </div>

              <div className="mb-4">
                <h3 className="text-xl font-bold text-[#F7F3EF] tracking-tight">
                  {leadership.role}
                </h3>
                <div className="flex items-center gap-2 text-sm text-orange-300 font-medium mt-1">
                  <Building className="w-4 h-4 text-orange-400" />
                  <span>{leadership.organization}</span>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-[#D8CFC7] leading-relaxed mb-6">
                {leadership.description}
              </p>

              <div className="space-y-3 pt-5 border-t border-orange-500/15">
                <div className="flex items-start gap-3">
                  <div className="p-1.5 rounded-lg bg-orange-500/10 text-orange-400 mt-0.5">
                    <BookOpen className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-xs font-semibold text-[#F7F3EF]">Editorial &amp; Documentation</h4>
                    <p className="text-xs text-[#A99C94] leading-relaxed">
                      Overseeing official club narratives, media summaries, and editorial publications.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-1.5 rounded-lg bg-amber-500/10 text-amber-400 mt-0.5">
                    <CheckCircle className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-xs font-semibold text-[#F7F3EF]">Community Engagement</h4>
                    <p className="text-xs text-[#A99C94] leading-relaxed">
                      Collaborating with volunteer teams across campus social welfare programs and awareness drives.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-orange-500/15 flex items-center justify-between text-xs text-[#A99C94] font-mono">
              <span>National Service Scheme (NSS)</span>
              <span className="text-orange-400">RIT Chennai</span>
            </div>
          </div>

          {/* Right: Languages & Communication */}
          <div className="lg:col-span-5 flex flex-col justify-between warm-card rounded-3xl p-6 sm:p-8 border border-orange-500/15">
            <div>
              <div className="flex items-center gap-3.5 mb-6">
                <div className="p-3 rounded-2xl bg-orange-500/10 border border-orange-500/25 text-orange-400">
                  <Languages className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-[#F7F3EF] tracking-tight">Languages</h3>
                  <p className="text-xs text-[#A99C94]">Multilingual Fluency</p>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-[#D8CFC7] leading-relaxed mb-6">
                Effective communication across diverse academic and development teams in regional and professional environments:
              </p>

              <div className="space-y-3.5">
                {languages.map((lang, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between p-4 rounded-2xl bg-[#0C0806] border border-orange-500/15"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full bg-orange-400" />
                      <span className="text-sm font-bold text-[#F7F3EF]">{lang.name}</span>
                    </div>
                    {lang.proficiency && (
                      <span className="text-xs font-mono text-orange-300 bg-orange-950/50 px-3 py-1 rounded-full border border-orange-600/30 font-medium">
                        {lang.proficiency}
                      </span>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Communication philosophy note */}
            <div className="mt-8 pt-5 border-t border-orange-500/15 flex items-start gap-2.5 text-xs text-[#A99C94]">
              <Sparkles className="w-4 h-4 text-orange-400 shrink-0 mt-0.5" />
              <p className="leading-relaxed">
                Clear technical writing and active listening underpin successful code reviews, project integrations, and team outcomes.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
