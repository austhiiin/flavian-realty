import type { FormEvent } from 'react'
import { useState } from 'react'
import { Send, Phone, Mail, MapPin, MessageCircle, CheckCircle2, AlertCircle } from 'lucide-react'

interface FormData {
  name: string
  email: string
  phone: string
  service: string
  message: string
}

const initialForm: FormData = { name: '', email: '', phone: '', service: '', message: '' }

const serviceOptions = [
  'Property Purchase',
  'Property Sale',
  'Lease & Rental',
  'Property Appraisal',
  'General Inquiry',
  'Join the Team',
]

export default function ContactSection() {
  const [form, setForm] = useState<FormData>(initialForm)
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    // Build mailto link
    const subject = encodeURIComponent(`Inquiry: ${form.service || 'General'} - ${form.name}`)
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\nPhone: ${form.phone}\nService: ${form.service}\n\nMessage:\n${form.message}`
    )
    window.location.href = `mailto:flavianrealty@gmail.com?subject=${subject}&body=${body}`
    setStatus('success')
    setTimeout(() => setStatus('idle'), 5000)
  }

  return (
    <section
      id="contact"
      className="py-24 relative overflow-hidden"
      style={{ background: 'linear-gradient(180deg, #0a1628 0%, #0d1f3c 100%)' }}
    >
      <div
        className="absolute top-0 left-0 right-0 h-px opacity-20"
        style={{ background: 'linear-gradient(90deg, transparent, #22d3ee, transparent)' }}
      />

      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <p
            className="font-body text-xs uppercase tracking-widest mb-3"
            style={{ color: '#22d3ee', letterSpacing: '0.2em' }}
          >
            Get In Touch
          </p>
          <h2 className="font-display text-5xl lg:text-7xl uppercase text-white leading-none mb-4">
            SEND AN{' '}
            <span
              className="bg-clip-text text-transparent"
              style={{ backgroundImage: 'linear-gradient(90deg, #22d3ee, #67e8f9)' }}
            >
              INQUIRY
            </span>
          </h2>
          <div className="section-divider mx-auto mb-4" />
          <p className="font-body text-white/50 max-w-xl mx-auto">
            Have a question or ready to start your real estate journey? Reach out and we'll get back to you right away.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-10">
          {/* Contact Info */}
          <div className="lg:col-span-2 space-y-6">
            <div
              className="glass-card rounded-2xl p-7"
              style={{ border: '1px solid rgba(34,211,238,0.15)' }}
            >
              <h3 className="font-display text-2xl uppercase text-white mb-6">Contact Details</h3>

              {[
                { icon: Phone, label: 'Phone', value: '0961 921 0591', href: 'tel:09619210591' },
                { icon: Mail, label: 'Email', value: 'flavianrealty@gmail.com', href: 'mailto:flavianrealty@gmail.com' },
                { icon: MapPin, label: 'Address', value: '072 C. Lirio St Poblacion 2, Nagcarlan, Philippines 4002', href: '#' },
                { icon: MessageCircle, label: 'Facebook', value: 'Flavian Realty', href: 'https://m.me/flavianrealty' },
              ].map((item, i) => {
                const Icon = item.icon
                return (
                  <a
                    key={i}
                    href={item.href}
                    className="flex gap-4 items-start group mb-5 last:mb-0"
                  >
                    <div
                      className="w-10 h-10 flex-shrink-0 rounded-lg flex items-center justify-center transition-colors duration-200"
                      style={{
                        background: 'rgba(34,211,238,0.1)',
                        border: '1px solid rgba(34,211,238,0.2)'
                      }}
                    >
                      <Icon size={18} style={{ color: '#22d3ee' }} />
                    </div>
                    <div>
                      <p className="font-body text-white/40 text-xs uppercase tracking-wider mb-0.5">{item.label}</p>
                      <p className="font-body text-white/80 text-sm group-hover:text-cyan-400 transition-colors">
                        {item.value}
                      </p>
                    </div>
                  </a>
                )
              })}
            </div>

            {/* Always open badge */}
            <div
              className="rounded-2xl p-5 flex items-center gap-3"
              style={{
                background: 'rgba(34,211,238,0.06)',
                border: '1px solid rgba(34,211,238,0.2)'
              }}
            >
              <div className="w-3 h-3 rounded-full bg-green-400 animate-pulse flex-shrink-0" />
              <div>
                <p className="font-display text-sm uppercase text-white tracking-wider">Always Open</p>
                <p className="font-body text-white/40 text-xs">We're available whenever you need us</p>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-3">
            <div
              className="glass-card rounded-2xl p-8"
              style={{ border: '1px solid rgba(34,211,238,0.15)' }}
            >
              {status === 'success' ? (
                <div className="flex flex-col items-center justify-center py-12 text-center">
                  <CheckCircle2 size={56} style={{ color: '#22d3ee' }} className="mb-4" />
                  <h3 className="font-display text-3xl uppercase text-white mb-2">Email App Opened!</h3>
                  <p className="font-body text-white/60">Your inquiry has been prepared. Just hit Send in your email client!</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block font-body text-xs uppercase tracking-widest text-white/40 mb-2">
                        Full Name *
                      </label>
                      <input
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        required
                        placeholder="Juan dela Cruz"
                        className="input-glow w-full px-4 py-3 rounded-xl font-body text-sm text-white placeholder-white/20 transition-all duration-200"
                        style={{
                          background: 'rgba(255,255,255,0.05)',
                          border: '1px solid rgba(255,255,255,0.1)'
                        }}
                      />
                    </div>
                    <div>
                      <label className="block font-body text-xs uppercase tracking-widest text-white/40 mb-2">
                        Email Address *
                      </label>
                      <input
                        name="email"
                        type="email"
                        value={form.email}
                        onChange={handleChange}
                        required
                        placeholder="you@email.com"
                        className="input-glow w-full px-4 py-3 rounded-xl font-body text-sm text-white placeholder-white/20 transition-all duration-200"
                        style={{
                          background: 'rgba(255,255,255,0.05)',
                          border: '1px solid rgba(255,255,255,0.1)'
                        }}
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block font-body text-xs uppercase tracking-widest text-white/40 mb-2">
                        Phone Number
                      </label>
                      <input
                        name="phone"
                        type="tel"
                        value={form.phone}
                        onChange={handleChange}
                        placeholder="09XX XXX XXXX"
                        className="input-glow w-full px-4 py-3 rounded-xl font-body text-sm text-white placeholder-white/20 transition-all duration-200"
                        style={{
                          background: 'rgba(255,255,255,0.05)',
                          border: '1px solid rgba(255,255,255,0.1)'
                        }}
                      />
                    </div>
                    <div>
                      <label className="block font-body text-xs uppercase tracking-widest text-white/40 mb-2">
                        Service Needed
                      </label>
                      <select
                        name="service"
                        value={form.service}
                        onChange={handleChange}
                        className="input-glow w-full px-4 py-3 rounded-xl font-body text-sm text-white transition-all duration-200"
                        style={{
                          background: 'rgba(13,31,60,0.9)',
                          border: '1px solid rgba(255,255,255,0.1)'
                        }}
                      >
                        <option value="" style={{ background: '#0d1f3c' }}>Select a service...</option>
                        {serviceOptions.map(s => (
                          <option key={s} value={s} style={{ background: '#0d1f3c' }}>{s}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block font-body text-xs uppercase tracking-widest text-white/40 mb-2">
                      Your Message *
                    </label>
                    <textarea
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      placeholder="Tell us about your property needs or questions..."
                      className="input-glow w-full px-4 py-3 rounded-xl font-body text-sm text-white placeholder-white/20 transition-all duration-200 resize-none"
                      style={{
                        background: 'rgba(255,255,255,0.05)',
                        border: '1px solid rgba(255,255,255,0.1)'
                      }}
                    />
                  </div>

                  {status === 'error' && (
                    <div className="flex items-center gap-2 text-red-400 text-sm">
                      <AlertCircle size={16} />
                      <span>Something went wrong. Please try again.</span>
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={status === 'sending'}
                    className="w-full flex items-center justify-center gap-2 py-4 rounded-xl font-semibold transition-all duration-300 hover:scale-[1.02] disabled:opacity-60"
                    style={{
                      background: 'linear-gradient(135deg, #22d3ee, #06b6d4)',
                      color: '#0a1628',
                      boxShadow: '0 8px 25px rgba(34,211,238,0.3)'
                    }}
                  >
                    <Send size={18} />
                    {status === 'sending' ? 'Opening Email...' : 'Send Inquiry'}
                  </button>

                  <p className="text-white/30 text-xs text-center font-body">
                    This will open your email app pre-filled with your inquiry details.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}