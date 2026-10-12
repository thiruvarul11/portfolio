import React from 'react'
import { FileText, X, Download, ExternalLink } from 'lucide-react'

interface ResumeModalProps {
  isOpen: boolean
  onClose: () => void
  resumeUrl: string
  isAvailable: boolean
}

const RESUME_HREF = `${import.meta.env.BASE_URL}resume.pdf`
const RESUME_FILENAME = 'Thiruvarul_K_Resume.pdf'

export const ResumeModal: React.FC<ResumeModalProps> = ({
  isOpen,
  onClose,
  isAvailable,
}) => {
  if (!isOpen) return null

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md"
      role="dialog"
      aria-modal="true"
      aria-labelledby="resume-modal-title"
      onClick={(e) => { if (e.target === e.currentTarget) onClose() }}
    >
      <div className="relative w-full max-w-md p-6 bg-[#171A18] border border-[#232924] rounded-3xl shadow-2xl">
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-1.5 text-[#A8AEA9] hover:text-[#F7F8F6] rounded-full hover:bg-[#202722] transition-colors cursor-pointer"
          aria-label="Close dialog"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-3.5 mb-5">
          <div className="p-3 rounded-2xl bg-[#141715] text-[#67F59A] border border-[#232924]">
            <FileText className="w-6 h-6" />
          </div>
          <div>
            <h3 id="resume-modal-title" className="text-lg font-bold text-[#F7F8F6]">
              Curriculum Vitae / Resume
            </h3>
            <p className="text-xs text-[#A8AEA9]">Thiruvarul K &bull; AI &amp; ML Student</p>
          </div>
        </div>

        {isAvailable ? (
          <div>
            <p className="text-sm text-[#A8AEA9] leading-relaxed mb-6">
              Official verified resume — PDF ready for download. Click below to save or open directly.
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-3">
              <a
                href={RESUME_HREF}
                download={RESUME_FILENAME}
                onClick={onClose}
                className="w-full sm:w-auto flex-1 inline-flex items-center justify-center gap-2 px-5 py-3 text-xs font-bold text-[#101311] bg-[#67F59A] hover:bg-[#A0FFC0] rounded-full transition-all shadow-md shadow-[#67F59A]/20 cursor-pointer"
              >
                <Download className="w-4 h-4" />
                <span>Download PDF</span>
              </a>

              <a
                href={RESUME_HREF}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-4 py-3 text-xs font-medium text-[#F7F8F6] bg-[#141715] hover:bg-[#202722] border border-[#232924] rounded-full transition-colors"
              >
                <ExternalLink className="w-4 h-4 text-[#67F59A]" />
                <span>View in Browser</span>
              </a>
            </div>
          </div>
        ) : (
          <div>
            <div className="p-4 mb-5 bg-[#141715] border border-[#232924] rounded-2xl text-xs text-[#A8AEA9] leading-relaxed">
              <p className="font-semibold text-[#67F59A] mb-1">Resume File Missing</p>
              Place your resume PDF at <span className="font-mono text-[#F7F8F6]">public/resume.pdf</span> to enable one-click download.
            </div>
            <div className="flex justify-end">
              <button
                onClick={onClose}
                className="px-5 py-2.5 text-xs font-medium text-[#F7F8F6] bg-[#141715] hover:bg-[#202722] border border-[#232924] rounded-full transition-colors cursor-pointer"
              >
                Understood
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
