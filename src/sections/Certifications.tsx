import React, { useState } from 'react'
import {
  Award,
  Cloud,
  Code,
  Brain,
  Database,
  Bot,
  Keyboard,
  ExternalLink,
  Calendar,
  Building,
} from 'lucide-react'
import { portfolioData, type CertificationItem } from '../data/portfolio'

export const Certifications: React.FC = () => {
  const { certifications } = portfolioData
  const [selectedFilter, setSelectedFilter] = useState<string>('all')

  const getCategoryIcon = (category: CertificationItem['category']) => {
    switch (category) {
      case 'aiml':
        return { icon: Brain, color: 'text-[#67F59A] bg-[#67F59A]/10 border-[#67F59A]/20' }
      case 'cloud':
        return { icon: Cloud, color: 'text-[#A0FFC0] bg-[#67F59A]/10 border-[#67F59A]/20' }
      case 'database':
        return { icon: Database, color: 'text-[#67F59A] bg-[#67F59A]/10 border-[#67F59A]/20' }
      case 'programming':
        return { icon: Code, color: 'text-[#A0FFC0] bg-[#67F59A]/10 border-[#67F59A]/20' }
      case 'automation':
        return { icon: Bot, color: 'text-[#67F59A] bg-[#67F59A]/10 border-[#67F59A]/20' }
      case 'vocational':
        return { icon: Keyboard, color: 'text-[#A0FFC0] bg-[#67F59A]/10 border-[#67F59A]/20' }
      default:
        return { icon: Award, color: 'text-[#67F59A] bg-[#67F59A]/10 border-[#67F59A]/20' }
    }
  }

  const filters = [
    { id: 'all', label: 'All Certifications' },
    { id: 'aiml', label: 'AI & Machine Learning' },
    { id: 'cloud', label: 'Cloud & Networking' },
    { id: 'programming', label: 'Programming & DB' },
    { id: 'automation', label: 'Automation & Skills' },
  ]

  const filteredCertifications = certifications.filter((cert) => {
    if (selectedFilter === 'all') return true
    if (selectedFilter === 'aiml') return cert.category === 'aiml'
    if (selectedFilter === 'cloud') return cert.category === 'cloud'
    if (selectedFilter === 'programming') return cert.category === 'programming' || cert.category === 'database'
    if (selectedFilter === 'automation') return cert.category === 'automation' || cert.category === 'vocational'
    return true
  })

  return (
    <section id="certifications" className="py-24 bg-transparent relative border-t border-[#232924]/70">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="flex flex-col items-start mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#171A18] border border-[#232924] text-[#67F59A] font-mono text-xs mb-3 font-semibold tracking-wider">
            <span>CREDENTIALS &amp; TRAINING</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#F7F8F6] tracking-tight">
            Certifications &amp; Courses
          </h2>
          <p className="text-[#A8AEA9] text-sm sm:text-base mt-2 max-w-2xl">
            Verified technical training in machine learning, cloud architectures, database systems, software automation, and computational skill sets.
          </p>
        </div>

        {/* Filter buttons */}
        <div className="flex flex-wrap items-center gap-2 mb-8">
          {filters.map((filter) => (
            <button
              key={filter.id}
              onClick={() => setSelectedFilter(filter.id)}
              className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-all cursor-pointer ${
                selectedFilter === filter.id
                  ? 'bg-[#67F59A] text-[#101311] font-bold shadow-md shadow-[#67F59A]/20'
                  : 'bg-[#171A18] text-[#A8AEA9] hover:text-[#F7F8F6] hover:bg-[#202722] border border-[#232924]'
              }`}
            >
              {filter.label}
            </button>
          ))}
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {filteredCertifications.map((cert) => {
            const { icon: Icon, color: iconStyle } = getCategoryIcon(cert.category)
            const hasCredential = Boolean(cert.credentialUrl && cert.credentialUrl.trim().length > 0)

            return (
              <div
                key={cert.id}
                className="bg-[#171A18] rounded-3xl p-5 sm:p-6 flex flex-col justify-between border border-[#232924] hover:border-[#67F59A]/30 transition-all duration-300"
              >
                <div>
                  {/* Top Bar with Icon & Date */}
                  <div className="flex items-start justify-between gap-3 mb-3.5">
                    <div className={`p-2.5 rounded-2xl border shrink-0 ${iconStyle}`}>
                      <Icon className="w-5 h-5" />
                    </div>

                    {cert.date && (
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#141715] border border-[#232924] text-[11px] font-mono text-[#A8AEA9]">
                        <Calendar className="w-3 h-3 text-[#67F59A]" />
                        <span>{cert.date}</span>
                      </span>
                    )}
                  </div>

                  {/* Certification Title */}
                  <h3 className="text-sm sm:text-base font-semibold text-[#F7F8F6] leading-snug mb-2">
                    {cert.title}
                  </h3>

                  {/* Issuer if explicitly specified */}
                  {cert.issuer && (
                    <div className="flex items-center gap-1.5 text-xs text-[#A8AEA9] mb-3 font-mono">
                      <Building className="w-3 h-3 text-[#67F59A]" />
                      <span>{cert.issuer}</span>
                    </div>
                  )}
                </div>

                {/* Credential Action */}
                <div className="pt-3.5 border-t border-[#232924] mt-4 flex items-center justify-between text-xs">
                  <span className="text-[11px] font-mono uppercase tracking-wider text-[#A8AEA9]">
                    Verified Course
                  </span>
                  {hasCredential ? (
                    <a
                      href={cert.credentialUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-xs font-semibold text-[#67F59A] hover:text-[#A0FFC0]"
                    >
                      <span>View Credential</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  ) : (
                    <span className="text-[11px] text-[#A8AEA9] font-mono">Verified Record</span>
                  )}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
