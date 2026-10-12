import React from 'react'
import { Lightbulb, Users, BookOpen, Cpu, Sparkles } from 'lucide-react'
import { portfolioData, type StrengthItem } from '../data/portfolio'

export const WhyWorkWithMe: React.FC = () => {
  const { strengths } = portfolioData

  const getStrengthIcon = (iconName: StrengthItem['iconName']) => {
    switch (iconName) {
      case 'lightbulb':
        return { icon: Lightbulb, color: 'text-[#67F59A] bg-[#67F59A]/10 border-[#67F59A]/20' }
      case 'users':
        return { icon: Users, color: 'text-[#A0FFC0] bg-[#67F59A]/10 border-[#67F59A]/20' }
      case 'bookOpen':
        return { icon: BookOpen, color: 'text-[#67F59A] bg-[#67F59A]/10 border-[#67F59A]/20' }
      case 'cpu':
        return { icon: Cpu, color: 'text-[#A0FFC0] bg-[#67F59A]/10 border-[#67F59A]/20' }
      default:
        return { icon: Sparkles, color: 'text-[#67F59A] bg-[#67F59A]/10 border-[#67F59A]/20' }
    }
  }

  return (
    <section id="why-work-with-me" className="py-24 bg-transparent relative border-t border-[#232924]/70">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="flex flex-col items-start mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#171A18] border border-[#232924] text-[#67F59A] font-mono text-xs mb-3 font-semibold tracking-wider">
            <span>WHY WORK WITH ME</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#F7F8F6] tracking-tight">
            What I Bring to the Team
          </h2>
          <p className="text-[#A8AEA9] text-sm sm:text-base mt-2 max-w-2xl">
            Combining technical foundations, problem-solving, collaboration, and a commitment to continuous learning.
          </p>
        </div>

        {/* 4 Cards Grid — height: auto, no text clipping, adaptive flex layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {strengths.map((strength) => {
            const { icon: Icon, color: iconStyle } = getStrengthIcon(strength.iconName)
            return (
              <div
                key={strength.id}
                className="bg-[#171A18] rounded-3xl p-5 sm:p-6 flex flex-col justify-between border border-[#232924] hover:border-[#67F59A]/30 transition-all duration-300 group"
              >
                <div>
                  {/* Compact icon badge */}
                  <div className={`inline-flex p-3 rounded-2xl border mb-4 self-start transition-transform duration-300 group-hover:scale-105 ${iconStyle}`}>
                    <Icon className="w-5 h-5" />
                  </div>

                  {/* Title */}
                  <h3 className="text-base font-bold text-[#F7F3EF] mb-2 leading-snug">
                    {strength.title}
                  </h3>

                  {/* Description — full readable text, no clipping */}
                  <p className="text-xs sm:text-sm text-[#A8AEA9] leading-relaxed">
                    {strength.description}
                  </p>
                </div>

                {/* Minimal bottom indicator */}
                <div className="mt-5 pt-3.5 border-t border-[#232924] flex items-center justify-between text-[10px] font-mono text-[#A8AEA9]">
                  <span>Core Trait</span>
                  <div className="w-2 h-2 rounded-full bg-[#67F59A]/70 group-hover:bg-[#67F59A] transition-colors" />
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
