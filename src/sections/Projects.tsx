import React, { useState } from 'react'
import {
  ExternalLink,
  Calendar,
  UserCheck,
  ArrowUpRight,
  Lock,
  Info,
} from 'lucide-react'
import { GithubIcon } from '../components/Icons'
import { portfolioData, type ProjectItem } from '../data/portfolio'

const PlaceholderThumbnail: React.FC<{ category: string }> = () => {
  return (
    <div
      className="w-full h-full bg-[#141715] flex items-center justify-center"
      aria-hidden="true"
    >
      <svg
        width="56"
        height="56"
        viewBox="0 0 64 64"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="opacity-25"
      >
        <rect x="8" y="16" width="48" height="32" rx="4" stroke="#67F59A" strokeWidth="2" />
        <circle cx="22" cy="28" r="5" stroke="#67F59A" strokeWidth="2" />
        <path d="M8 40L20 28L30 38L40 26L56 40" stroke="#67F59A" strokeWidth="2" strokeLinejoin="round" />
      </svg>
    </div>
  )
}

interface ProjectCardProps {
  project: ProjectItem
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const [imgError, setImgError] = useState(false)
  const hasLiveUrl = Boolean(project.liveUrl && project.liveUrl.trim().length > 0)
  const showGithubBtn = project.githubVerified && Boolean(project.githubUrl?.trim())
  const showPrivateNotice = !project.githubVerified && Boolean(project.githubUrl?.trim())

  return (
    <article className="group relative flex flex-col rounded-3xl overflow-hidden bg-[#171A18] border border-[#232924] shadow-lg shadow-black/40 transition-all duration-300 ease-out hover:-translate-y-1.5 hover:border-[#67F59A]/30">
      {/* ── Thumbnail ── */}
      <div className="relative w-full h-52 overflow-hidden shrink-0 bg-[#101311]">
        {project.thumbnail && !imgError ? (
          <img
            src={project.thumbnail}
            alt={project.thumbnailAlt ?? project.name}
            loading="lazy"
            onError={() => setImgError(true)}
            className="w-full h-full object-cover object-center transition-transform duration-500 ease-out group-hover:scale-105"
          />
        ) : (
          <PlaceholderThumbnail category={project.category} />
        )}

        {/* Dark gradient overlay at bottom for tag readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#171A18] via-[#171A18]/25 to-transparent" />

        {/* Category pill on the thumbnail */}
        <div className="absolute top-3.5 left-3.5 flex flex-wrap gap-1.5">
          <span className="px-2.5 py-1 rounded-full bg-[#101311]/80 backdrop-blur-sm border border-[#232924] text-[#67F59A] font-mono text-[10px] font-semibold tracking-wide">
            {project.category}
          </span>
          {project.event && (
            <span className="px-2.5 py-1 rounded-full bg-[#101311]/80 backdrop-blur-sm border border-[#232924] text-[#A0FFC0] font-mono text-[10px] font-semibold">
              {project.event}
            </span>
          )}
        </div>

        {/* Date badge top-right */}
        {project.date && (
          <span className="absolute top-3.5 right-3.5 flex items-center gap-1 px-2.5 py-1 rounded-full bg-[#101311]/80 backdrop-blur-sm border border-[#232924] text-[10px] font-mono text-[#A8AEA9]">
            <Calendar className="w-2.5 h-2.5 text-[#67F59A]" />
            {project.date}
          </span>
        )}
      </div>

      {/* ── Card Body ── */}
      <div className="flex flex-col flex-1 p-5 sm:p-6">
        {/* Title + Role */}
        <div className="mb-3">
          <h3 className="text-lg sm:text-xl font-bold text-[#F7F8F6] tracking-tight leading-snug mb-1.5">
            {project.name}
          </h3>
          {project.role && (
            <div className="flex items-center gap-1.5 text-xs text-[#A8AEA9]">
              <UserCheck className="w-3.5 h-3.5 text-[#67F59A] shrink-0" />
              <span>{project.role}</span>
            </div>
          )}
        </div>

        {/* Description */}
        <p className="text-xs sm:text-sm text-[#A8AEA9] leading-relaxed mb-4 flex-1">
          {project.description}
        </p>

        {/* Tech Tags */}
        {project.tags && project.tags.length > 0 && (
          <div className="flex flex-wrap gap-1.5 mb-5">
            {project.tags.map((tag, i) => (
              <span
                key={i}
                className="px-2.5 py-0.5 rounded-full bg-[#141715] border border-[#232924] text-[10px] text-[#A8AEA9] font-mono"
              >
                {tag}
              </span>
            ))}
          </div>
        )}

        {/* ── Action Buttons ── */}
        <div className="pt-4 border-t border-[#232924] flex flex-wrap items-center gap-2.5">
          {/* Verified GitHub button */}
          {showGithubBtn && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-full text-xs font-bold text-[#101311] bg-[#67F59A] hover:bg-[#A0FFC0] transition-all shadow-md group/btn"
              aria-label={`Open ${project.name} repository on GitHub`}
            >
              <GithubIcon className="w-3.5 h-3.5 shrink-0" />
              <span>{project.githubButtonText ?? 'View on GitHub'}</span>
              <ArrowUpRight className="w-3 h-3 shrink-0 transition-transform duration-200 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
            </a>
          )}

          {/* Live demo button */}
          {hasLiveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3.5 py-2.5 rounded-full text-xs font-semibold text-[#F7F8F6] bg-[#141715] hover:bg-[#202722] border border-[#232924] transition-colors"
            >
              <ExternalLink className="w-3.5 h-3.5 text-[#67F59A]" />
              <span>Live Demo</span>
            </a>
          )}

          {/* Private / unverified repo notice */}
          {showPrivateNotice && (
            <div
              className="flex items-center gap-2 px-3.5 py-2 rounded-full bg-[#141715] border border-[#232924] text-[11px] text-[#A8AEA9] cursor-default"
              title={`Repository may be private: ${project.githubUrl}`}
            >
              <Lock className="w-3 h-3 text-[#A8AEA9] shrink-0" />
              <span>Repo pending public access</span>
              <Info className="w-3 h-3 text-[#67F59A]/60 shrink-0" />
            </div>
          )}
        </div>
      </div>
    </article>
  )
}

export const Projects: React.FC = () => {
  const { projects } = portfolioData

  return (
    <section id="projects" className="py-24 bg-transparent relative border-t border-[#232924]/70">
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="flex flex-col items-start mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#171A18] border border-[#232924] text-[#67F59A] font-mono text-xs mb-3 font-semibold tracking-wider">
            <span>PROJECT PORTFOLIO</span>
          </div>
          <div className="flex flex-col sm:flex-row sm:items-end justify-between w-full gap-4">
            <div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#F7F8F6] tracking-tight">
                Featured Engineering Projects
              </h2>
              <p className="text-[#A8AEA9] text-sm sm:text-base mt-2 max-w-2xl">
                Practical initiatives developed for hackathons and software development, highlighting backend logic, team collaboration, and version control.
              </p>
            </div>
          </div>
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project: ProjectItem) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        {/* Unverified repos notice */}
        {projects.some(p => !p.githubVerified && p.githubUrl) && (
          <div className="mt-10 p-4 rounded-2xl bg-[#171A18] border border-[#232924] flex items-start gap-3">
            <Info className="w-4 h-4 text-[#67F59A] shrink-0 mt-0.5" />
            <p className="text-xs text-[#A8AEA9] leading-relaxed">
              <span className="text-[#F7F8F6] font-semibold">Repository Access Status:</span>{' '}
              <strong className="text-[#67F59A]">Urimai-Kaavalan</strong> is verified and accessible on your GitHub profile. <strong className="text-[#F7F8F6]">Jharkhand Connect</strong> is currently private under your account (switch visibility to Public in GitHub repo Settings &gt; Change visibility). <strong className="text-[#F7F8F6]">NAYAN-X</strong> is maintained by collaborator <code className="text-[#67F59A]">sabari060307</code> and is pending public sharing.
            </p>
          </div>
        )}
      </div>
    </section>
  )
}
