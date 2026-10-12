import React from 'react'
import {
  Trophy,
  FolderGit2,
  Brain,
  Award,
  Users,
  Target,
  ArrowUpRight,
  ExternalLink,
  ChevronRight,
} from 'lucide-react'
import { portfolioData, type AchievementItem } from '../data/portfolio'

export const Achievements: React.FC = () => {
  const { achievements } = portfolioData

  const getAchievementIcon = (iconName: AchievementItem['iconName']) => {
    switch (iconName) {
      case 'trophy':
        return { icon: Trophy, color: 'text-[#67F59A] bg-[#67F59A]/10 border-[#67F59A]/20' }
      case 'folder':
        return { icon: FolderGit2, color: 'text-[#A0FFC0] bg-[#67F59A]/10 border-[#67F59A]/20' }
      case 'brain':
        return { icon: Brain, color: 'text-[#67F59A] bg-[#67F59A]/10 border-[#67F59A]/20' }
      case 'award':
        return { icon: Award, color: 'text-[#A0FFC0] bg-[#67F59A]/10 border-[#67F59A]/20' }
      case 'users':
        return { icon: Users, color: 'text-[#67F59A] bg-[#67F59A]/10 border-[#67F59A]/20' }
      case 'target':
        return { icon: Target, color: 'text-[#A0FFC0] bg-[#67F59A]/10 border-[#67F59A]/20' }
      default:
        return { icon: Trophy, color: 'text-[#67F59A] bg-[#67F59A]/10 border-[#67F59A]/20' }
    }
  }

  const handleScrollTo = (e: React.MouseEvent, href: string) => {
    if (href.startsWith('#')) {
      e.preventDefault()
      const element = document.querySelector(href)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
      }
    }
  }

  return (
    <section id="achievements" className="py-24 bg-transparent relative border-t border-[#232924]/70">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="flex flex-col items-start mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#171A18] border border-[#232924] text-[#67F59A] font-mono text-xs mb-3 font-semibold tracking-wider">
            <span>MILESTONES &amp; EXPERIENCE</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#F7F8F6] tracking-tight">
            Achievements &amp; Experience
          </h2>
          <p className="text-[#A8AEA9] text-sm sm:text-base mt-2 max-w-2xl">
            Applied projects, collaborative development, and continuous learning that shape my engineering journey.
          </p>
        </div>

        {/* 3-Column Responsive Cards Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {achievements.map((item) => {
            const { icon: Icon, color: iconStyle } = getAchievementIcon(item.iconName)

            return (
              <div
                key={item.id}
                className="bg-[#171A18] rounded-3xl p-6 sm:p-7 flex flex-col justify-between border border-[#232924] hover:border-[#67F59A]/30 transition-all duration-300"
              >
                <div>
                  {/* Card Header & Badge */}
                  <div className="flex items-start justify-between gap-3 mb-4">
                    <div className={`p-3 rounded-2xl border shrink-0 ${iconStyle}`}>
                      <Icon className="w-5 h-5" />
                    </div>

                    {item.badge && (
                      <span className="px-2.5 py-1 rounded-full bg-[#141715] border border-[#232924] text-[#67F59A] font-mono text-[11px] font-semibold">
                        {item.badge}
                      </span>
                    )}
                  </div>

                  {/* Title & Category */}
                  <div className="mb-3">
                    <div className="text-[11px] font-mono uppercase tracking-wider text-[#A8AEA9] font-medium mb-1">
                      {item.category}
                    </div>
                    <h3 className="text-lg font-bold text-[#F7F8F6] leading-snug">
                      {item.title}
                    </h3>
                    {item.role && (
                      <div className="text-xs text-[#67F59A] font-medium mt-1">
                        Role: {item.role}
                      </div>
                    )}
                  </div>

                  {/* Bullet Points */}
                  <ul className="space-y-2.5 my-5">
                    {item.bullets.map((bullet, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 text-xs text-[#A8AEA9] leading-relaxed">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#67F59A] shrink-0 mt-1.5" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Project specific repo links if present */}
                  {item.projectLinks && item.projectLinks.length > 0 && (
                    <div className="space-y-2 pt-3 border-t border-[#232924]">
                      <div className="text-[11px] font-mono text-[#A8AEA9] uppercase tracking-wide">
                        Repository Links:
                      </div>
                      <div className="flex flex-col gap-1.5">
                        {item.projectLinks.map((pLink, pIdx) => (
                          <a
                            key={pIdx}
                            href={pLink.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center justify-between px-3 py-1.5 rounded-xl bg-[#141715] hover:bg-[#202722] border border-[#232924] text-xs text-[#A8AEA9] hover:text-[#F7F8F6] transition-colors"
                          >
                            <span className="truncate">{pLink.name}</span>
                            <ArrowUpRight className="w-3.5 h-3.5 text-[#67F59A] shrink-0 ml-1" />
                          </a>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                {/* Footer Link / Action */}
                {item.link && (
                  <div className="mt-5 pt-4 border-t border-[#232924]">
                    <a
                      href={item.link.url}
                      target={item.link.isExternal ? '_blank' : '_self'}
                      rel={item.link.isExternal ? 'noopener noreferrer' : undefined}
                      onClick={(e) => {
                        if (item.link && !item.link.isExternal) {
                          handleScrollTo(e, item.link.url)
                        }
                      }}
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#67F59A] hover:text-[#A0FFC0] transition-colors"
                    >
                      <span>{item.link.text}</span>
                      {item.link.isExternal ? (
                        <ExternalLink className="w-3.5 h-3.5" />
                      ) : (
                        <ChevronRight className="w-3.5 h-3.5" />
                      )}
                    </a>
                  </div>
                )}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
