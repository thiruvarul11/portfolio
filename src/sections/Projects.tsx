import React from 'react'
import {
  ExternalLink,
  FolderGit2,
  Calendar,
  UserCheck,
  Tag,
  ArrowUpRight,
} from 'lucide-react'
import { GithubIcon } from '../components/Icons'
import { portfolioData, type ProjectItem } from '../data/portfolio'

export const Projects: React.FC = () => {
  const { projects } = portfolioData

  return (
    <section id="projects" className="py-20 bg-[#0C0806] relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="flex flex-col items-start mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-orange-500/10 border border-orange-500/25 text-orange-400 font-mono text-xs mb-3 font-semibold tracking-wider">
            <span>PROJECT PORTFOLIO</span>
          </div>
          <div className="flex flex-col sm:flex-row sm:items-end justify-between w-full gap-4">
            <div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#F7F3EF] tracking-tight">
                Featured Engineering Projects
              </h2>
              <p className="text-[#A99C94] text-sm sm:text-base mt-2 max-w-2xl">
                Practical initiatives developed for hackathons and software development, highlighting backend logic, team collaboration, and version control.
              </p>
            </div>
          </div>
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project: ProjectItem) => {
            const hasLiveUrl = Boolean(project.liveUrl && project.liveUrl.trim().length > 0)
            const hasGithubUrl = Boolean(project.githubUrl && project.githubUrl.trim().length > 0)
            const buttonText = project.githubButtonText || 'View Project on GitHub'

            return (
              <div
                key={project.id}
                className="warm-card warm-card-hover rounded-3xl p-6 sm:p-7 flex flex-col justify-between border border-orange-500/15"
              >
                <div>
                  {/* Category & Event Meta */}
                  <div className="flex items-start justify-between gap-2 mb-4">
                    <span className="px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/25 text-orange-300 font-mono text-[11px] font-semibold tracking-wide">
                      {project.category}
                    </span>

                    {project.date && (
                      <span className="flex items-center gap-1.5 text-[11px] font-mono text-[#A99C94]">
                        <Calendar className="w-3 h-3 text-orange-400" />
                        <span>{project.date}</span>
                      </span>
                    )}
                  </div>

                  {/* Project Title */}
                  <h3 className="text-xl font-bold text-[#F7F3EF] tracking-tight mb-2 flex items-center gap-2">
                    <FolderGit2 className="w-5 h-5 text-orange-400 shrink-0" />
                    <span>{project.name}</span>
                  </h3>

                  {/* Role or Event info if available */}
                  {(project.role || project.event) && (
                    <div className="flex flex-wrap items-center gap-2 mb-4 text-xs">
                      {project.role && (
                        <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#201510] border border-orange-500/20 text-[#E6DDD5]">
                          <UserCheck className="w-3 h-3 text-orange-400" />
                          <span>Role: {project.role}</span>
                        </div>
                      )}
                      {project.event && (
                        <div className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-[#1A120E] border border-orange-500/15 text-orange-300 font-mono text-[11px]">
                          <span>{project.event}</span>
                        </div>
                      )}
                    </div>
                  )}

                  {/* Project Description */}
                  <p className="text-xs sm:text-sm text-[#D8CFC7] leading-relaxed mb-6">
                    {project.description}
                  </p>

                  {/* Verified Tags */}
                  {project.tags && project.tags.length > 0 && (
                    <div className="flex flex-wrap gap-1.5 mb-6">
                      {project.tags.map((tag, i) => (
                        <span
                          key={i}
                          className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-[#0C0806] border border-orange-500/15 text-[11px] text-[#A99C94] font-mono"
                        >
                          <Tag className="w-2.5 h-2.5 text-orange-400/80" />
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}
                </div>

                {/* Action Links */}
                <div className="pt-5 border-t border-orange-500/15 mt-2">
                  <div className="flex flex-wrap items-center gap-2.5">
                    {hasGithubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-xs font-semibold text-white bg-gradient-orange hover:opacity-95 transition-all shadow-md shadow-orange-600/20"
                      >
                        <GithubIcon className="w-3.5 h-3.5" />
                        <span>{buttonText}</span>
                        <ArrowUpRight className="w-3 h-3" />
                      </a>
                    )}

                    {hasLiveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-3.5 py-2.5 rounded-xl text-xs font-semibold text-[#F7F3EF] bg-[#221712] hover:bg-[#2B1D16] border border-orange-500/25 transition-colors"
                      >
                        <ExternalLink className="w-3.5 h-3.5 text-orange-400" />
                        <span>Live Demo</span>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
