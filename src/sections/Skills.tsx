import React from 'react'
import {
  Code,
  Brain,
  GitBranch,
  Users2,
  CheckCircle2,
  Sparkles,
  Layers,
} from 'lucide-react'
import { portfolioData, type SkillCategory } from '../data/portfolio'

export const Skills: React.FC = () => {
  const { skills } = portfolioData

  const getCategoryIcon = (iconName: SkillCategory['iconName']) => {
    switch (iconName) {
      case 'code':
        return { icon: Code, color: 'text-[#67F59A] bg-[#67F59A]/10 border-[#67F59A]/20' }
      case 'brain':
        return { icon: Brain, color: 'text-[#A0FFC0] bg-[#67F59A]/10 border-[#67F59A]/20' }
      case 'git':
        return { icon: GitBranch, color: 'text-[#67F59A] bg-[#67F59A]/10 border-[#67F59A]/20' }
      case 'users':
        return { icon: Users2, color: 'text-[#A0FFC0] bg-[#67F59A]/10 border-[#67F59A]/20' }
      default:
        return { icon: Layers, color: 'text-[#67F59A] bg-[#67F59A]/10 border-[#67F59A]/20' }
    }
  }

  return (
    <section id="skills" className="py-24 bg-transparent relative border-t border-[#232924]/70">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="flex flex-col items-start mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#171A18] border border-[#232924] text-[#67F59A] font-mono text-xs mb-3 font-semibold tracking-wider">
            <span>TECHNICAL EXPERTISE</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#F7F8F6] tracking-tight">
            The Stack I Build With
          </h2>
          <p className="text-[#A8AEA9] text-sm sm:text-base mt-2 max-w-2xl">
            Verified technical foundations in programming, artificial intelligence, and developer collaboration tools.
          </p>
        </div>

        {/* Toolbox Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
          {skills.map((category) => {
            const { icon: Icon, color: iconStyle } = getCategoryIcon(category.iconName)

            return (
              <div
                key={category.title}
                className="bg-[#171A18] rounded-3xl p-6 sm:p-7 flex flex-col justify-between border border-[#232924] hover:border-[#67F59A]/30 transition-all duration-300"
              >
                <div>
                  {/* Category Header */}
                  <div className="flex items-center gap-3.5 mb-3.5">
                    <div className={`p-3 rounded-2xl border ${iconStyle}`}>
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-base sm:text-lg font-bold text-[#F7F8F6]">
                        {category.title}
                      </h3>
                    </div>
                  </div>

                  <p className="text-xs text-[#A8AEA9] mb-5 leading-relaxed">
                    {category.description}
                  </p>

                  {/* Skills Tag Cloud with Pill Badges */}
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                      <div
                        key={skill.name}
                        className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium border transition-all ${
                          skill.highlight
                            ? 'border-[#67F59A]/30 text-[#F7F8F6] bg-[#141715]'
                            : 'border-[#232924] text-[#A8AEA9] bg-[#141715]/60'
                        }`}
                      >
                        <CheckCircle2
                          className={`w-3.5 h-3.5 ${
                            skill.highlight ? 'text-[#67F59A]' : 'text-[#7B837C]'
                          }`}
                        />
                        <span>{skill.name}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Subtext notice footer */}
                <div className="mt-6 pt-4 border-t border-[#232924] flex items-center justify-between text-[11px] font-mono text-[#A8AEA9]">
                  <span>Verified Resume Skill</span>
                  <span className="text-[#67F59A]">{category.skills.length} competencies</span>
                </div>
              </div>
            )
          })}
        </div>

        {/* Competency Note banner */}
        <div className="mt-8 p-4 rounded-2xl bg-[#171A18] border border-[#232924] flex items-center justify-between gap-4 text-xs text-[#A8AEA9]">
          <div className="flex items-center gap-2.5">
            <Sparkles className="w-4 h-4 text-[#67F59A] shrink-0" />
            <span>
              All skills displayed reflect verified academic and project foundations. No arbitrary percentage bars or fabricated metrics.
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}
