import { Phone, Mail, MapPin, MessageCircle } from 'lucide-react'
import FlavianLogo from './FlavianLogo'

const navLinks = [
  { label: 'Home', href: '#hero' },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Why Us', href: '#why-us' },
  { label: 'Join Us', href: '#join' },
  { label: 'Contact', href: '#contact' },
]

const services = [
  'Property Purchase',
  'Property Sale',
  'Lease & Rental',
  'Property Rental',
  'Property Appraisal',
]

export default function Footer() {
  const scrollTo = (href: string) =>
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })

  return (
    <footer
      className="pt-16 pb-8 relative"
      style={{ background: '#060f1e', borderTop: '1px solid rgba(34,211,238,0.1)' }}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <FlavianLogo size={44} />
            <p className="font-body text-white/50 text-sm leading-relaxed mt-4 mb-5">
              Providing quality real estate service with respect to purchase, sale, lease, rental, and appraisal of real property.
            </p>
            <div
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs"
              style={{
                background: 'rgba(34,211,238,0.08)',
                border: '1px solid rgba(34,211,238,0.2)',
                color: '#22d3ee'
              }}
            >
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              Always Open
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-display text-sm uppercase tracking-widest text-white mb-5" style={{ letterSpacing: '0.15em' }}>
              Navigation
            </h4>
            <div className="space-y-2">
              {navLinks.map(link => (
                <button
                  key={link.label}
                  onClick={() => scrollTo(link.href)}
                  className="block font-body text-sm text-white/50 hover:text-cyan-400 transition-colors"
                >
                  {link.label}
                </button>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-display text-sm uppercase tracking-widest text-white mb-5" style={{ letterSpacing: '0.15em' }}>
              Services
            </h4>
            <div className="space-y-2">
              {services.map(s => (
                <p key={s} className="font-body text-sm text-white/50">{s}</p>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display text-sm uppercase tracking-widest text-white mb-5" style={{ letterSpacing: '0.15em' }}>
              Contact
            </h4>
            <div className="space-y-3">
              {[
                { icon: Phone, value: '0961 921 0591', href: 'tel:09619210591' },
                { icon: Mail, value: 'flavianrealty@gmail.com', href: 'mailto:flavianrealty@gmail.com' },
                { icon: MapPin, value: '072 C. Lirio St, Poblacion 2, Nagcarlan, Laguna 4002', href: '#' },
                { icon: MessageCircle, value: 'Flavian Realty (Messenger)', href: 'https://m.me/flavianrealty' },
              ].map((item, i) => {
                const Icon = item.icon
                return (
                  <a
                    key={i}
                    href={item.href}
                    className="flex items-start gap-3 group"
                  >
                    <Icon size={15} className="flex-shrink-0 mt-0.5" style={{ color: '#22d3ee' }} />
                    <span className="font-body text-sm text-white/50 group-hover:text-white/80 transition-colors leading-snug">
                      {item.value}
                    </span>
                  </a>
                )
              })}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-3"
          style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }}
        >
          <p className="font-body text-white/30 text-xs text-center">
            © {new Date().getFullYear()} Flavian Realty. All rights reserved.
          </p>
          <p className="font-body text-white/20 text-xs">
            Nagcarlan, Laguna, Philippines
          </p>
        </div>
      </div>
    </footer>
  )
}