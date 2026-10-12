import React from 'react'
import {
  Code,
  Brain,
  Terminal,
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
        return { icon: Code, color: 'text-orange-400 bg-orange-500/10 border-orange-500/25' }
      case 'brain':
        return { icon: Brain, color: 'text-amber-400 bg-amber-500/10 border-amber-500/25' }
      case 'terminal':
        return { icon: Terminal, color: 'text-orange-400 bg-orange-500/10 border-orange-500/25' }
      case 'git':
        return { icon: GitBranch, color: 'text-amber-400 bg-amber-500/10 border-amber-500/25' }
      case 'users':
        return { icon: Users2, color: 'text-orange-400 bg-orange-500/10 border-orange-500/25' }
      default:
        return { icon: Layers, color: 'text-orange-400 bg-orange-500/10 border-orange-500/25' }
    }
  }

  return (
    <section id="skills" className="py-20 bg-[#0C0806] relative bg-tech-dots">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="flex flex-col items-start mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-orange-500/10 border border-orange-500/25 text-orange-400 font-mono text-xs mb-3 font-semibold tracking-wider">
            <span>TOOLBOX</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#F7F3EF] tracking-tight">
            The Stack I Build With
          </h2>
          <p className="text-[#A99C94] text-sm sm:text-base mt-2 max-w-2xl">
            Programming foundations and AI/ML knowledge I use to explore and develop software applications.
          </p>
        </div>

        {/* Toolbox Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((category) => {
            const { icon: Icon, color: iconStyle } = getCategoryIcon(category.iconName)

            return (
              <div
                key={category.title}
                className="warm-card warm-card-hover rounded-3xl p-6 sm:p-7 flex flex-col justify-between border border-orange-500/15"
              >
                <div>
                  {/* Category Header */}
                  <div className="flex items-center gap-3.5 mb-3.5">
                    <div className={`p-3 rounded-2xl border ${iconStyle}`}>
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-base sm:text-lg font-bold text-[#F7F3EF]">
                        {category.title}
                      </h3>
                    </div>
                  </div>

                  <p className="text-xs text-[#A99C94] mb-5 leading-relaxed">
                    {category.description}
                  </p>

                  {/* Skills Tag Cloud with Pill Badges */}
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                      <div
                        key={skill.name}
                        className={`pill-tag inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium transition-all ${
                          skill.highlight
                            ? 'border-orange-500/35 text-[#F7F3EF] bg-[#221712]'
                            : ''
                        }`}
                      >
                        <CheckCircle2
                          className={`w-3.5 h-3.5 ${
                            skill.highlight ? 'text-orange-400' : 'text-[#A99C94]'
                          }`}
                        />
                        <span>{skill.name}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Subtext notice footer */}
                <div className="mt-6 pt-4 border-t border-orange-500/10 flex items-center justify-between text-[11px] font-mono text-[#A99C94]">
                  <span>Verified Resume Skill</span>
                  <span className="text-orange-400">{category.skills.length} skills</span>
                </div>
              </div>
            )
          })}
        </div>

        {/* Competency Note banner */}
        <div className="mt-8 p-4 rounded-2xl bg-[#17100D] border border-orange-500/15 flex items-center justify-between gap-4 text-xs text-[#A99C94]">
          <div className="flex items-center gap-2.5">
            <Sparkles className="w-4 h-4 text-orange-400 shrink-0" />
            <span>
              All skills displayed reflect verified academic and project foundations. No arbitrary percentage bars or fabricated metrics.
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}
