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
        return { icon: Trophy, color: 'text-orange-400 bg-orange-500/10 border-orange-500/25' }
      case 'folder':
        return { icon: FolderGit2, color: 'text-amber-400 bg-amber-500/10 border-amber-500/25' }
      case 'brain':
        return { icon: Brain, color: 'text-orange-400 bg-orange-500/10 border-orange-500/25' }
      case 'award':
        return { icon: Award, color: 'text-amber-400 bg-amber-500/10 border-amber-500/25' }
      case 'users':
        return { icon: Users, color: 'text-orange-400 bg-orange-500/10 border-orange-500/25' }
      case 'target':
        return { icon: Target, color: 'text-amber-400 bg-amber-500/10 border-amber-500/25' }
      default:
        return { icon: Trophy, color: 'text-orange-400 bg-orange-500/10 border-orange-500/25' }
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
    <section id="achievements" className="py-20 bg-[#0C0806] relative bg-tech-grid">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="flex flex-col items-start mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-orange-500/10 border border-orange-500/25 text-orange-400 font-mono text-xs mb-3 font-semibold tracking-wider">
            <span>MILESTONES</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#F7F3EF] tracking-tight">
            Achievements &amp; Experience
          </h2>
          <p className="text-[#A99C94] text-sm sm:text-base mt-2 max-w-2xl">
            Projects, collaborative development, and continuous learning that shape my engineering journey.
          </p>
        </div>

        {/* 3-Column Responsive Cards Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {achievements.map((item) => {
            const { icon: Icon, color: iconStyle } = getAchievementIcon(item.iconName)

            return (
              <div
                key={item.id}
                className="warm-card warm-card-hover rounded-3xl p-6 sm:p-7 flex flex-col justify-between border border-orange-500/15"
              >
                <div>
                  {/* Card Header & Badge */}
                  <div className="flex items-start justify-between gap-3 mb-4">
                    <div className={`p-3 rounded-2xl border shrink-0 ${iconStyle}`}>
                      <Icon className="w-5 h-5" />
                    </div>

                    {item.badge && (
                      <span className="px-2.5 py-1 rounded-full bg-[#201510] border border-orange-500/20 text-orange-300 font-mono text-[11px] font-semibold">
                        {item.badge}
                      </span>
                    )}
                  </div>

                  {/* Title & Category */}
                  <div className="mb-3">
                    <div className="text-[11px] font-mono uppercase tracking-wider text-orange-400/90 font-medium mb-1">
                      {item.category}
                    </div>
                    <h3 className="text-lg font-bold text-[#F7F3EF] leading-snug">
                      {item.title}
                    </h3>
                    {item.role && (
                      <div className="text-xs text-orange-300 font-medium mt-1">
                        Role: {item.role}
                      </div>
                    )}
                  </div>

                  {/* Bullet Points */}
                  <ul className="space-y-2.5 my-5">
                    {item.bullets.map((bullet, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 text-xs text-[#D8CFC7] leading-relaxed">
                        <span className="w-1.5 h-1.5 rounded-full bg-orange-400 shrink-0 mt-1.5" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Project specific repo links if present (Card 2) */}
                  {item.projectLinks && item.projectLinks.length > 0 && (
                    <div className="space-y-2 pt-3 border-t border-orange-500/10">
                      <div className="text-[11px] font-mono text-[#A99C94] uppercase tracking-wide">
                        Repository Links:
                      </div>
                      <div className="flex flex-col gap-1.5">
                        {item.projectLinks.map((pLink, pIdx) => (
                          <a
                            key={pIdx}
                            href={pLink.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center justify-between px-3 py-1.5 rounded-xl bg-[#0C0806] hover:bg-[#201510] border border-orange-500/15 text-xs text-orange-200 hover:text-white transition-colors"
                          >
                            <span className="truncate">{pLink.name}</span>
                            <ArrowUpRight className="w-3.5 h-3.5 text-orange-400 shrink-0 ml-1" />
                          </a>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                {/* Footer Link / Action */}
                {item.link && (
                  <div className="mt-5 pt-4 border-t border-orange-500/10">
                    <a
                      href={item.link.url}
                      target={item.link.isExternal ? '_blank' : '_self'}
                      rel={item.link.isExternal ? 'noopener noreferrer' : undefined}
                      onClick={(e) => {
                        if (item.link && !item.link.isExternal) {
                          handleScrollTo(e, item.link.url)
                        }
                      }}
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-orange-400 hover:text-orange-300 transition-colors"
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
