import React, { useState, useRef } from 'react'
import emailjs from '@emailjs/browser'
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
  Loader2,
  AlertCircle,
  CheckCircle2,
  Sparkles,
  KeyRound,
} from 'lucide-react'
import { GithubIcon, LinkedinIcon } from '../components/Icons'
import { portfolioData } from '../data/portfolio'

export const Contact: React.FC = () => {
  const { personal } = portfolioData
  const formRef = useRef<HTMLFormElement | null>(null)

  const [copiedEmail, setCopiedEmail] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })
  const [formErrors, setFormErrors] = useState<Record<string, string>>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error' | 'unconfigured' | 'fallback_opened'>('idle')
  const [errorMessage, setErrorMessage] = useState<string>('')

  // EmailJS configuration via Vite environment variables
  const serviceId = (import.meta.env.VITE_EMAILJS_SERVICE_ID || '').trim()
  const templateId = (import.meta.env.VITE_EMAILJS_TEMPLATE_ID || '').trim()
  const publicKey = (import.meta.env.VITE_EMAILJS_PUBLIC_KEY || '').trim()

  const hasServiceId = Boolean(serviceId && !serviceId.includes('placeholder'))
  const hasTemplateId = Boolean(templateId && !templateId.includes('placeholder'))
  const hasPublicKey = Boolean(publicKey && !publicKey.includes('placeholder'))

  // All three must be present for live direct browser delivery
  const isEmailJSConfigured = hasServiceId && hasTemplateId && hasPublicKey

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

  const triggerMailtoFallback = () => {
    const mailtoSubject = encodeURIComponent(
      formData.subject.trim() || `Portfolio Inquiry from ${formData.name.trim() || 'Recruiter'}`
    )
    const mailtoBody = encodeURIComponent(
      `Name: ${formData.name.trim()}\nEmail: ${formData.email.trim()}\n\nMessage:\n${formData.message.trim()}`
    )
    window.location.href = `mailto:${personal.email}?subject=${mailtoSubject}&body=${mailtoBody}`
    setSubmitStatus('fallback_opened')
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!validate()) return

    setSubmitStatus('idle')
    setErrorMessage('')

    if (!isEmailJSConfigured) {
      // Configuration is incomplete - never claim direct send success
      setSubmitStatus('unconfigured')
      triggerMailtoFallback()
      return
    }

    if (!formRef.current) return
    setIsSubmitting(true)

    try {
      // Official SDK method sendForm with form element
      const response = await emailjs.sendForm(
        serviceId,
        templateId,
        formRef.current,
        publicKey
      )

      if (response.status === 200 || response.text === 'OK') {
        setSubmitStatus('success')
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: '',
        })
      } else {
        throw new Error(`EmailJS responded with status ${response.status}: ${response.text}`)
      }
    } catch (err: unknown) {
      console.error('EmailJS submission error:', err)
      const errorText =
        err instanceof Error
          ? err.message
          : typeof err === 'object' && err !== null && 'text' in err
          ? String((err as { text: unknown }).text)
          : 'Failed to send message via EmailJS.'
      setErrorMessage(errorText)
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact" className="py-24 bg-transparent relative border-t border-[#232924]/70">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="flex flex-col items-start mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#171A18] border border-[#232924] text-[#67F59A] font-mono text-xs mb-3 font-semibold tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>GET IN TOUCH</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#F7F8F6] tracking-tight">
            Contact &amp; Collaboration
          </h2>
          <p className="text-[#A8AEA9] text-sm sm:text-base mt-2 max-w-2xl">
            Interested in discussing software development internships, AI/ML opportunities, or student collaborations? Reach out anytime.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left: Contact Info & Channels */}
          <div className="lg:col-span-5 space-y-4">
            {/* Primary Email Card */}
            <div className="bg-[#171A18] rounded-3xl p-6 border border-[#232924] relative shadow-lg shadow-black/40">
              <div className="flex items-start justify-between gap-4 mb-4">
                <div className="p-3 rounded-2xl bg-[#141715] border border-[#232924] text-[#67F59A]">
                  <Mail className="w-6 h-6" />
                </div>
                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-mono bg-[#141715] hover:bg-[#202722] text-[#A8AEA9] hover:text-[#F7F8F6] border border-[#232924] transition-colors cursor-pointer"
                  title="Copy email to clipboard"
                >
                  {copiedEmail ? <Check className="w-3.5 h-3.5 text-[#67F59A]" /> : <Copy className="w-3.5 h-3.5 text-[#67F59A]" />}
                  <span>{copiedEmail ? 'Copied!' : 'Copy'}</span>
                </button>
              </div>

              <div className="text-xs font-mono uppercase text-[#67F59A] tracking-wider mb-1 font-medium">
                Direct Email
              </div>
              <a
                href={`mailto:${personal.email}`}
                className="text-base sm:text-lg font-bold text-[#F7F8F6] hover:text-[#67F59A] transition-colors break-all block"
              >
                {personal.email}
              </a>
              <p className="text-xs text-[#A8AEA9] mt-2">
                Fastest response for recruitment &amp; internship inquiries.
              </p>
            </div>

            {/* Phone Card */}
            <div className="bg-[#171A18] rounded-3xl p-5 border border-[#232924] flex items-center justify-between shadow-lg shadow-black/40">
              <div className="flex items-center gap-3.5">
                <div className="p-2.5 rounded-2xl bg-[#141715] border border-[#232924] text-[#A0FFC0]">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[11px] font-mono uppercase text-[#A8AEA9] tracking-wider">
                    Phone / Mobile
                  </div>
                  <a
                    href={`tel:${personal.phone.replace(/\s+/g, '')}`}
                    className="text-sm sm:text-base font-bold text-[#F7F8F6] hover:text-[#67F59A] transition-colors"
                  >
                    {personal.phone}
                  </a>
                </div>
              </div>
              <a
                href={`tel:${personal.phone.replace(/\s+/g, '')}`}
                className="px-3.5 py-1.5 rounded-full text-xs font-semibold bg-[#141715] hover:bg-[#202722] text-[#67F59A] border border-[#232924] transition-colors"
              >
                Call
              </a>
            </div>

            {/* Location Card */}
            <div className="bg-[#171A18] rounded-3xl p-5 border border-[#232924] flex items-center gap-3.5 shadow-lg shadow-black/40">
              <div className="p-2.5 rounded-2xl bg-[#141715] border border-[#232924] text-[#67F59A]">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <div className="text-[11px] font-mono uppercase text-[#A8AEA9] tracking-wider">
                  Location
                </div>
                <div className="text-sm font-semibold text-[#F7F8F6]">
                  {personal.location}
                </div>
              </div>
            </div>

            {/* Social Profiles & Resume */}
            <div className="bg-[#171A18] rounded-3xl p-5 border border-[#232924] space-y-2.5 shadow-lg shadow-black/40">
              <div className="text-xs font-mono uppercase text-[#67F59A] tracking-wider mb-2 font-medium">
                Professional Links
              </div>
              
              <a
                href={personal.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-3 rounded-2xl bg-[#141715] hover:bg-[#202722] border border-[#232924] transition-colors text-[#A8AEA9] hover:text-[#F7F8F6]"
              >
                <div className="flex items-center gap-3">
                  <LinkedinIcon className="w-4 h-4 text-[#67F59A]" />
                  <span className="text-xs font-medium">linkedin.com/in/thiruvarul-k</span>
                </div>
                <ExternalLink className="w-3.5 h-3.5 text-[#A8AEA9]" />
              </a>

              <a
                href={personal.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-3 rounded-2xl bg-[#141715] hover:bg-[#202722] border border-[#232924] transition-colors text-[#A8AEA9] hover:text-[#F7F8F6]"
              >
                <div className="flex items-center gap-3">
                  <GithubIcon className="w-4 h-4 text-[#F7F8F6]" />
                  <span className="text-xs font-medium">github.com/thiruvarul11</span>
                </div>
                <ExternalLink className="w-3.5 h-3.5 text-[#A8AEA9]" />
              </a>

              <a
                href={`${import.meta.env.BASE_URL}resume.pdf`}
                download="Thiruvarul_K_Resume.pdf"
                className="flex items-center justify-between p-3 rounded-2xl bg-[#141715] hover:bg-[#202722] border border-[#232924] hover:border-[#67F59A]/30 transition-colors text-[#F7F8F6]"
              >
                <div className="flex items-center gap-3">
                  <FileText className="w-4 h-4 text-[#67F59A]" />
                  <span className="text-xs font-semibold">Download Resume (PDF)</span>
                </div>
                <Download className="w-3.5 h-3.5 text-[#67F59A]" aria-hidden="true" />
              </a>
            </div>
          </div>

          {/* Right: Direct Message Form with EmailJS */}
          <div className="lg:col-span-7 bg-[#171A18] rounded-3xl p-6 sm:p-8 border border-[#232924] shadow-xl shadow-black/40">
            <div className="flex items-center justify-between mb-5 flex-wrap gap-2">
              <div className="flex items-center gap-3">
                <div className="p-3 rounded-2xl bg-[#141715] border border-[#232924] text-[#67F59A]">
                  <MessageSquare className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-[#F7F8F6]">Send Direct Message</h3>
                  <p className="text-xs text-[#A8AEA9]">
                    {isEmailJSConfigured
                      ? 'Delivered directly via connected EmailJS service'
                      : 'EmailJS configured with seamless mail client fallback'}
                  </p>
                </div>
              </div>

              {/* Status Badge */}
              <div className="flex items-center gap-1.5">
                <span className={`inline-flex items-center gap-1.5 text-[11px] font-mono px-3 py-1 rounded-full border ${
                  isEmailJSConfigured
                    ? 'bg-emerald-500/10 border-emerald-500/30 text-emerald-400'
                    : hasServiceId
                    ? 'bg-amber-500/10 border-amber-500/30 text-amber-300'
                    : 'bg-[#141715] border-[#232924] text-[#A8AEA9]'
                }`}>
                  <span className={`w-1.5 h-1.5 rounded-full ${
                    isEmailJSConfigured
                      ? 'bg-emerald-400 animate-pulse'
                      : hasServiceId
                      ? 'bg-amber-400'
                      : 'bg-zinc-500'
                  }`} />
                  {isEmailJSConfigured
                    ? 'EmailJS Connected'
                    : hasServiceId
                    ? 'Service Connected (Key Pending)'
                    : 'EmailJS Ready'}
                </span>
              </div>
            </div>

            {/* Incomplete Config Notice (shown clearly without exposing keys) */}
            {!isEmailJSConfigured && (
              <div className="mb-5 p-3.5 rounded-2xl bg-[#141715] border border-[#232924] text-xs text-[#A8AEA9] flex items-start gap-2.5">
                <KeyRound className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-amber-300">
                    {hasServiceId
                      ? `Service ID connected (${serviceId})`
                      : 'EmailJS configuration pending'}
                  </p>
                  <p className="text-[11px] text-[#A8AEA9] mt-0.5">
                    {!hasTemplateId || !hasPublicKey
                      ? 'To enable direct one-click browser delivery, add your Template ID and Public Key to .env.local. The form will seamlessly open in your mail client until configured.'
                      : 'Complete .env.local setup to enable direct sending.'}
                  </p>
                </div>
              </div>
            )}

            <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
              {/* Hidden template helper variables */}
              <input type="hidden" name="to_name" value={personal.name} />
              <input type="hidden" name="to_email" value={personal.email} />
              <input type="hidden" name="reply_to" value={formData.email} />

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="contact-name" className="block text-xs font-medium text-[#A8AEA9] mb-1.5">
                    Your Name <span className="text-[#67F59A]">*</span>
                  </label>
                  <input
                    id="contact-name"
                    name="user_name"
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Hiring Manager"
                    disabled={isSubmitting}
                    className={`w-full px-4 py-3 rounded-2xl bg-[#141715] border text-sm text-[#F7F8F6] placeholder-[#A8AEA9]/50 focus:outline-none focus:border-[#67F59A] transition-colors disabled:opacity-60 ${
                      formErrors.name ? 'border-rose-500' : 'border-[#232924]'
                    }`}
                  />
                  {formErrors.name && (
                    <p className="text-[11px] text-rose-400 mt-1">{formErrors.name}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="contact-email" className="block text-xs font-medium text-[#A8AEA9] mb-1.5">
                    Your Email <span className="text-[#67F59A]">*</span>
                  </label>
                  <input
                    id="contact-email"
                    name="user_email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="e.g. recruiter@company.com"
                    disabled={isSubmitting}
                    className={`w-full px-4 py-3 rounded-2xl bg-[#141715] border text-sm text-[#F7F8F6] placeholder-[#A8AEA9]/50 focus:outline-none focus:border-[#67F59A] transition-colors disabled:opacity-60 ${
                      formErrors.email ? 'border-rose-500' : 'border-[#232924]'
                    }`}
                  />
                  {formErrors.email && (
                    <p className="text-[11px] text-rose-400 mt-1">{formErrors.email}</p>
                  )}
                </div>
              </div>

              <div>
                <label htmlFor="contact-subject" className="block text-xs font-medium text-[#A8AEA9] mb-1.5">
                  Subject / Topic
                </label>
                <input
                  id="contact-subject"
                  name="subject"
                  type="text"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  placeholder="e.g. Software Development Internship / AI Opportunity"
                  disabled={isSubmitting}
                  className="w-full px-4 py-3 rounded-2xl bg-[#141715] border border-[#232924] text-sm text-[#F7F8F6] placeholder-[#A8AEA9]/50 focus:outline-none focus:border-[#67F59A] transition-colors disabled:opacity-60"
                />
              </div>

              <div>
                <label htmlFor="contact-message" className="block text-xs font-medium text-[#A8AEA9] mb-1.5">
                  Message <span className="text-[#67F59A]">*</span>
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Write your note, job opportunity details, or collaboration project..."
                  disabled={isSubmitting}
                  className={`w-full px-4 py-3 rounded-2xl bg-[#141715] border text-sm text-[#F7F8F6] placeholder-[#A8AEA9]/50 focus:outline-none focus:border-[#67F59A] transition-colors disabled:opacity-60 ${
                    formErrors.message ? 'border-rose-500' : 'border-[#232924]'
                  }`}
                />
                {formErrors.message && (
                  <p className="text-[11px] text-rose-400 mt-1">{formErrors.message}</p>
                )}
              </div>

              {/* Status Alerts */}
              {submitStatus === 'success' && (
                <div className="p-4 rounded-2xl bg-emerald-950/40 border border-emerald-500/40 text-[#67F59A] text-xs flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#67F59A] shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-sm">Message Delivered Directly!</p>
                    <p className="text-[#A8AEA9] mt-0.5">
                      Thank you for reaching out. Your message has been sent directly to Thiruvarul's inbox at <span className="text-[#67F59A] font-mono">{personal.email}</span>.
                    </p>
                  </div>
                </div>
              )}

              {submitStatus === 'unconfigured' && (
                <div className="p-4 rounded-2xl bg-amber-950/30 border border-amber-500/30 text-amber-200 text-xs flex items-start gap-3">
                  <Info className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-sm">Redirected to Email Client</p>
                    <p className="text-[#A8AEA9] mt-0.5">
                      EmailJS template or public key is not yet set in <code className="text-amber-300">.env.local</code>. A pre-filled draft has opened in your mail app addressed to <span className="text-[#67F59A] font-mono">{personal.email}</span>.
                    </p>
                  </div>
                </div>
              )}

              {submitStatus === 'fallback_opened' && (
                <div className="p-4 rounded-2xl bg-[#141715] border border-[#232924] text-[#A8AEA9] text-xs flex items-start gap-3">
                  <Mail className="w-5 h-5 text-[#67F59A] shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-[#F7F8F6]">Email Draft Prepared</p>
                    <p className="text-[#A8AEA9] mt-0.5">
                      Your default mail application has been opened with your message addressed to <span className="text-[#67F59A] font-mono">{personal.email}</span>. Please click Send in your email client.
                    </p>
                  </div>
                </div>
              )}

              {submitStatus === 'error' && (
                <div className="p-4 rounded-2xl bg-rose-950/40 border border-rose-500/40 text-rose-200 text-xs flex items-start gap-3">
                  <AlertCircle className="w-5 h-5 text-rose-400 shrink-0 mt-0.5" />
                  <div className="flex-1">
                    <p className="font-semibold text-sm">Submission Error</p>
                    <p className="text-[#A8AEA9] mt-0.5">
                      {errorMessage || 'There was a problem submitting your message through EmailJS.'}
                    </p>
                    <button
                      type="button"
                      onClick={triggerMailtoFallback}
                      className="mt-2.5 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-rose-500/20 hover:bg-rose-500/30 text-rose-300 border border-rose-500/30 text-[11px] font-medium transition-colors cursor-pointer"
                    >
                      <Mail className="w-3.5 h-3.5" />
                      <span>Send directly using your email app instead</span>
                    </button>
                  </div>
                </div>
              )}

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full text-xs font-bold text-[#101311] bg-[#67F59A] hover:bg-[#A0FFC0] disabled:opacity-60 disabled:cursor-not-allowed transition-all shadow-md shadow-[#67F59A]/20 cursor-pointer"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin text-[#101311]" />
                      <span>Sending Message...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-3.5 h-3.5" />
                      <span>{isEmailJSConfigured ? 'Send Message' : 'Send (Open Mail Client)'}</span>
                    </>
                  )}
                </button>

                <button
                  type="button"
                  onClick={triggerMailtoFallback}
                  className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-full text-xs font-medium text-[#A8AEA9] hover:text-[#F7F8F6] bg-[#141715] hover:bg-[#202722] border border-[#232924] transition-colors cursor-pointer"
                >
                  <Mail className="w-3.5 h-3.5 text-[#67F59A]" />
                  <span>Open in Mail App</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
