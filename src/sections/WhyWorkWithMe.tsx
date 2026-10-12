import React from 'react'
import { Lightbulb, Users, BookOpen, Cpu, Sparkles } from 'lucide-react'
import { portfolioData, type StrengthItem } from '../data/portfolio'

export const WhyWorkWithMe: React.FC = () => {
  const { strengths } = portfolioData

  const getStrengthIcon = (iconName: StrengthItem['iconName']) => {
    switch (iconName) {
      case 'lightbulb':
        return { icon: Lightbulb, color: 'text-orange-400 bg-orange-500/10 border-orange-500/25' }
      case 'users':
        return { icon: Users, color: 'text-amber-400 bg-amber-500/10 border-amber-500/25' }
      case 'bookOpen':
        return { icon: BookOpen, color: 'text-orange-400 bg-orange-500/10 border-orange-500/25' }
      case 'cpu':
        return { icon: Cpu, color: 'text-amber-400 bg-amber-500/10 border-amber-500/25' }
      default:
        return { icon: Sparkles, color: 'text-orange-400 bg-orange-500/10 border-orange-500/25' }
    }
  }

  return (
    <section id="why-work-with-me" className="py-20 bg-[#0C0806] relative bg-tech-dots">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="flex flex-col items-start mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-orange-500/10 border border-orange-500/25 text-orange-400 font-mono text-xs mb-3 font-semibold tracking-wider">
            <span>WHY WORK WITH ME</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#F7F3EF] tracking-tight">
            What I Bring to the Team
          </h2>
          <p className="text-[#A99C94] text-sm sm:text-base mt-2 max-w-2xl">
            Combining technical foundations, problem-solving, collaboration, and a commitment to continuous learning.
          </p>
        </div>

        {/* 4 Cards Responsive Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {strengths.map((strength) => {
            const { icon: Icon, color: iconStyle } = getStrengthIcon(strength.iconName)

            return (
              <div
                key={strength.id}
                className="warm-card warm-card-hover rounded-3xl p-6 sm:p-7 flex flex-col items-start justify-between border border-orange-500/15 group"
              >
                <div>
                  {/* Icon Container with Warm Glow on hover */}
                  <div className={`p-3.5 rounded-2xl border mb-5 transition-transform duration-300 group-hover:scale-105 ${iconStyle}`}>
                    <Icon className="w-6 h-6" />
                  </div>

                  {/* Title */}
                  <h3 className="text-base sm:text-lg font-bold text-[#F7F3EF] mb-3 leading-snug">
                    {strength.title}
                  </h3>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-[#A99C94] leading-relaxed">
                    {strength.description}
                  </p>
                </div>

                {/* Subtle indicator bar */}
                <div className="w-full mt-6 pt-4 border-t border-orange-500/10 flex items-center justify-between text-[11px] font-mono text-orange-400/80">
                  <span>Core Trait</span>
                  <div className="w-2 h-2 rounded-full bg-orange-500/70 group-hover:bg-orange-400 transition-colors" />
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
