import React, { useState } from 'react'
import {
  Mail,
  Phone,
  MapPin,
  Copy,
  Check,
  Send,
  ExternalLink,
  MessageSquare,
  Info,
  FileText,
  Download,
} from 'lucide-react'
import { GithubIcon, LinkedinIcon } from '../components/Icons'
import { portfolioData } from '../data/portfolio'

export const Contact: React.FC = () => {
  const { personal } = portfolioData
  const [copiedEmail, setCopiedEmail] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })
  const [formErrors, setFormErrors] = useState<Record<string, string>>({})
  const [formSubmitted, setFormSubmitted] = useState(false)

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personal.email)
    setCopiedEmail(true)
    setTimeout(() => setCopiedEmail(false), 2500)
  }

  const validate = () => {
    const errors: Record<string, string> = {}
    if (!formData.name.trim()) errors.name = 'Please provide your name.'
    if (!formData.email.trim()) {
      errors.email = 'Please provide your email address.'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errors.email = 'Please provide a valid email address.'
    }
    if (!formData.message.trim()) {
      errors.message = 'Please write a message.'
    } else if (formData.message.trim().length < 10) {
      errors.message = 'Message must be at least 10 characters long.'
    }
    setFormErrors(errors)
    return Object.keys(errors).length === 0
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!validate()) return

    const mailtoSubject = encodeURIComponent(
      formData.subject.trim() || `Portfolio Inquiry from ${formData.name.trim()}`
    )
    const mailtoBody = encodeURIComponent(
      `Name: ${formData.name.trim()}\nEmail: ${formData.email.trim()}\n\nMessage:\n${formData.message.trim()}`
    )

    setFormSubmitted(true)
    window.location.href = `mailto:${personal.email}?subject=${mailtoSubject}&body=${mailtoBody}`
  }

  return (
    <section id="contact" className="py-20 bg-[#0C0806] relative bg-tech-grid">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="flex flex-col items-start mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-orange-500/10 border border-orange-500/25 text-orange-400 font-mono text-xs mb-3 font-semibold tracking-wider">
            <span>GET IN TOUCH</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#F7F3EF] tracking-tight">
            Contact &amp; Collaboration
          </h2>
          <p className="text-[#A99C94] text-sm sm:text-base mt-2 max-w-2xl">
            Interested in discussing software development internships, AI/ML opportunities, or student collaborations? Reach out anytime.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left: Contact Info & Channels */}
          <div className="lg:col-span-5 space-y-4">
            {/* Primary Email Card */}
            <div className="warm-card rounded-3xl p-6 border border-orange-500/15 relative">
              <div className="flex items-start justify-between gap-4 mb-4">
                <div className="p-3 rounded-2xl bg-orange-500/10 border border-orange-500/25 text-orange-400">
                  <Mail className="w-6 h-6" />
                </div>
                <button
                  onClick={handleCopyEmail}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-mono bg-[#221712] hover:bg-[#2B1D16] text-[#E6DDD5] border border-orange-500/20 transition-colors cursor-pointer"
                  title="Copy email to clipboard"
                >
                  {copiedEmail ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5 text-orange-400" />}
                  <span>{copiedEmail ? 'Copied!' : 'Copy'}</span>
                </button>
              </div>

              <div className="text-xs font-mono uppercase text-orange-400/90 tracking-wider mb-1 font-medium">
                Direct Email
              </div>
              <a
                href={`mailto:${personal.email}`}
                className="text-base sm:text-lg font-bold text-[#F7F3EF] hover:text-orange-300 transition-colors break-all block"
              >
                {personal.email}
              </a>
              <p className="text-xs text-[#A99C94] mt-2">
                Fastest response for recruitment &amp; project inquiries.
              </p>
            </div>

            {/* Phone Card */}
            <div className="warm-card rounded-3xl p-5 border border-orange-500/15 flex items-center justify-between">
              <div className="flex items-center gap-3.5">
                <div className="p-2.5 rounded-2xl bg-amber-500/10 border border-amber-500/25 text-amber-400">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[11px] font-mono uppercase text-[#A99C94] tracking-wider">
                    Phone / Mobile
                  </div>
                  <a
                    href={`tel:${personal.phone.replace(/\s+/g, '')}`}
                    className="text-sm sm:text-base font-bold text-[#F7F3EF] hover:text-orange-300 transition-colors"
                  >
                    {personal.phone}
                  </a>
                </div>
              </div>
              <a
                href={`tel:${personal.phone.replace(/\s+/g, '')}`}
                className="px-3.5 py-1.5 rounded-xl text-xs font-semibold bg-[#221712] hover:bg-[#2B1D16] text-orange-300 border border-orange-500/20 transition-colors"
              >
                Call
              </a>
            </div>

            {/* Location Card */}
            <div className="warm-card rounded-3xl p-5 border border-orange-500/15 flex items-center gap-3.5">
              <div className="p-2.5 rounded-2xl bg-orange-500/10 border border-orange-500/25 text-orange-400">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <div className="text-[11px] font-mono uppercase text-[#A99C94] tracking-wider">
                  Location
                </div>
                <div className="text-sm font-semibold text-[#F7F3EF]">
                  {personal.location}
                </div>
              </div>
            </div>

            {/* Social Profiles & Resume */}
            <div className="warm-card rounded-3xl p-5 border border-orange-500/15 space-y-2.5">
              <div className="text-xs font-mono uppercase text-orange-400/90 tracking-wider mb-2 font-medium">
                Professional Links
              </div>
              
              <a
                href={personal.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-3 rounded-2xl bg-[#0C0806] hover:bg-[#201510] border border-orange-500/15 transition-colors text-[#D8CFC7] hover:text-[#F7F3EF]"
              >
                <div className="flex items-center gap-3">
                  <LinkedinIcon className="w-4 h-4 text-orange-400" />
                  <span className="text-xs font-medium">linkedin.com/in/thiruvarul-k</span>
                </div>
                <ExternalLink className="w-3.5 h-3.5 text-[#A99C94]" />
              </a>

              <a
                href={personal.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-3 rounded-2xl bg-[#0C0806] hover:bg-[#201510] border border-orange-500/15 transition-colors text-[#D8CFC7] hover:text-[#F7F3EF]"
              >
                <div className="flex items-center gap-3">
                  <GithubIcon className="w-4 h-4 text-[#F7F3EF]" />
                  <span className="text-xs font-medium">github.com/thiruvarul11</span>
                </div>
                <ExternalLink className="w-3.5 h-3.5 text-[#A99C94]" />
              </a>

              <a
                href={personal.resumeUrl}
                download="Thiruvarul_K_Resume.pdf"
                className="flex items-center justify-between p-3 rounded-2xl bg-orange-950/30 hover:bg-orange-950/50 border border-orange-500/25 transition-colors text-orange-200"
              >
                <div className="flex items-center gap-3">
                  <FileText className="w-4 h-4 text-orange-400" />
                  <span className="text-xs font-semibold">Download Resume (PDF)</span>
                </div>
                <Download className="w-3.5 h-3.5 text-orange-400" />
              </a>
            </div>
          </div>

          {/* Right: Direct Message Form */}
          <div className="lg:col-span-7 warm-card rounded-3xl p-6 sm:p-8 border border-orange-500/15">
            <div className="flex items-center gap-3 mb-5">
              <div className="p-3 rounded-2xl bg-orange-500/10 border border-orange-500/25 text-orange-400">
                <MessageSquare className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-[#F7F3EF]">Send Direct Message</h3>
                <p className="text-xs text-[#A99C94]">
                  Pre-fills and launches your default email client
                </p>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="contact-name" className="block text-xs font-medium text-[#E6DDD5] mb-1.5">
                    Your Name <span className="text-orange-400">*</span>
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. John Doe"
                    className={`w-full px-4 py-3 rounded-2xl bg-[#0C0806] border text-sm text-[#F7F3EF] placeholder-[#A99C94]/60 focus:outline-none focus:ring-2 focus:ring-orange-500/40 transition-colors ${
                      formErrors.name ? 'border-rose-500' : 'border-orange-500/20'
                    }`}
                  />
                  {formErrors.name && (
                    <p className="text-[11px] text-rose-400 mt-1">{formErrors.name}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="contact-email" className="block text-xs font-medium text-[#E6DDD5] mb-1.5">
                    Your Email <span className="text-orange-400">*</span>
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="e.g. john@example.com"
                    className={`w-full px-4 py-3 rounded-2xl bg-[#0C0806] border text-sm text-[#F7F3EF] placeholder-[#A99C94]/60 focus:outline-none focus:ring-2 focus:ring-orange-500/40 transition-colors ${
                      formErrors.email ? 'border-rose-500' : 'border-orange-500/20'
                    }`}
                  />
                  {formErrors.email && (
                    <p className="text-[11px] text-rose-400 mt-1">{formErrors.email}</p>
                  )}
                </div>
              </div>

              <div>
                <label htmlFor="contact-subject" className="block text-xs font-medium text-[#E6DDD5] mb-1.5">
                  Subject / Topic
                </label>
                <input
                  id="contact-subject"
                  type="text"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  placeholder="e.g. Internship Opportunity / Software Project"
                  className="w-full px-4 py-3 rounded-2xl bg-[#0C0806] border border-orange-500/20 text-sm text-[#F7F3EF] placeholder-[#A99C94]/60 focus:outline-none focus:ring-2 focus:ring-orange-500/40 transition-colors"
                />
              </div>

              <div>
                <label htmlFor="contact-message" className="block text-xs font-medium text-[#E6DDD5] mb-1.5">
                  Message <span className="text-orange-400">*</span>
                </label>
                <textarea
                  id="contact-message"
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Write your note or opportunity details here..."
                  className={`w-full px-4 py-3 rounded-2xl bg-[#0C0806] border text-sm text-[#F7F3EF] placeholder-[#A99C94]/60 focus:outline-none focus:ring-2 focus:ring-orange-500/40 transition-colors ${
                    formErrors.message ? 'border-rose-500' : 'border-orange-500/20'
                  }`}
                />
                {formErrors.message && (
                  <p className="text-[11px] text-rose-400 mt-1">{formErrors.message}</p>
                )}
              </div>

              {/* Honest client-side indicator note */}
              <div className="flex items-start gap-2.5 p-3.5 rounded-2xl bg-[#0C0806] border border-orange-500/15 text-[11px] text-[#A99C94]">
                <Info className="w-4 h-4 text-orange-400 shrink-0 mt-0.5" />
                <span>
                  Submitting directly prepares an email with your input in your default email client addressed to{' '}
                  <span className="text-orange-200 font-mono font-medium">{personal.email}</span>.
                </span>
              </div>

              {formSubmitted && (
                <div className="p-3.5 rounded-2xl bg-orange-950/40 border border-orange-500/30 text-orange-300 text-xs flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Email client triggered. If it didn't open automatically, use the direct email link above!</span>
                </div>
              )}

              <button
                type="submit"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-2xl text-sm font-semibold text-white bg-gradient-orange hover:opacity-95 transition-all shadow-md shadow-orange-600/30 cursor-pointer"
              >
                <Send className="w-4 h-4" />
                <span>Send Message via Email</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
