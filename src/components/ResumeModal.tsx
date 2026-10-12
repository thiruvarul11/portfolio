import React from 'react'
import { FileText, X, Copy, Check, Download, ExternalLink } from 'lucide-react'

interface ResumeModalProps {
  isOpen: boolean
  onClose: () => void
  resumeUrl: string
  isAvailable: boolean
}

export const ResumeModal: React.FC<ResumeModalProps> = ({
  isOpen,
  onClose,
  resumeUrl,
  isAvailable,
}) => {
  const [copied, setCopied] = React.useState(false)

  if (!isOpen) return null

  const handleCopyPath = () => {
    navigator.clipboard.writeText('public/resume.pdf')
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fade-in"
      role="dialog"
      aria-modal="true"
      aria-labelledby="resume-modal-title"
    >
      <div className="relative w-full max-w-md p-6 bg-[#17100D] border border-orange-500/25 rounded-3xl shadow-2xl shadow-orange-950/40">
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-1.5 text-[#A99C94] hover:text-[#F7F3EF] rounded-xl hover:bg-[#251A15] transition-colors cursor-pointer"
          aria-label="Close dialog"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-3.5 mb-5">
          <div className="p-3 rounded-2xl bg-orange-500/10 text-orange-400 border border-orange-500/25">
            <FileText className="w-6 h-6" />
          </div>
          <div>
            <h3 id="resume-modal-title" className="text-lg font-bold text-[#F7F3EF]">
              Curriculum Vitae / Resume
            </h3>
            <p className="text-xs text-[#A99C94]">Thiruvarul K &bull; AI &amp; ML Student</p>
          </div>
        </div>

        {isAvailable ? (
          <div>
            <p className="text-sm text-[#A99C94] leading-relaxed mb-6">
              Official verified resume file is ready for download. You can download the PDF directly or open it in a new tab.
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-3">
              <a
                href={resumeUrl}
                download="Thiruvarul_K_Resume.pdf"
                onClick={onClose}
                className="w-full sm:w-auto flex-1 inline-flex items-center justify-center gap-2 px-5 py-3 text-sm font-semibold text-white bg-gradient-orange hover:opacity-95 rounded-xl transition-all shadow-lg shadow-orange-600/30 cursor-pointer"
              >
                <Download className="w-4 h-4" />
                <span>Download PDF</span>
              </a>

              <a
                href={resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-4 py-3 text-sm font-medium text-[#E6DDD5] bg-[#221712] hover:bg-[#2C1E17] border border-orange-500/20 rounded-xl transition-colors"
              >
                <ExternalLink className="w-4 h-4 text-orange-400" />
                <span>View</span>
              </a>
            </div>
          </div>
        ) : (
          <div>
            <div className="p-4 mb-4 bg-orange-500/10 border border-orange-500/20 rounded-2xl text-xs text-[#E6DDD5] leading-relaxed">
              <p className="font-semibold text-orange-300 mb-1">Resume File Placement</p>
              Place your resume PDF into <span className="font-mono text-orange-200">public/resume.pdf</span> to enable instant one-click downloading.
            </div>

            <div className="flex items-center justify-between p-3 bg-[#0C0806] border border-orange-500/15 rounded-xl mb-5">
              <span className="font-mono text-xs text-[#A99C94]">public/resume.pdf</span>
              <button
                onClick={handleCopyPath}
                className="inline-flex items-center gap-1.5 px-2.5 py-1 text-xs text-orange-300 bg-orange-950/60 hover:bg-orange-900/60 border border-orange-700/40 rounded-lg transition-colors cursor-pointer"
              >
                {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                {copied ? 'Copied' : 'Copy Path'}
              </button>
            </div>

            <div className="flex justify-end">
              <button
                onClick={onClose}
                className="px-5 py-2.5 text-sm font-medium text-white bg-[#221712] hover:bg-[#2C1E17] border border-orange-500/20 rounded-xl transition-colors cursor-pointer"
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
