import type { LucideIcon, ArrowRight } from 'lucide-react'

interface ServiceCardProps {
  icon: LucideIcon
  title: string
  description: string
  index: number
}

export default function ServiceCard({ icon: Icon, title, description, index }: ServiceCardProps) {
  const scrollToContact = () =>
    document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })

  return (
    <div
      className="hover-lift rounded-2xl p-6 group cursor-default flex flex-col"
      style={{
        background: '#0d1f3c',
        border: '1px solid rgba(34,211,238,0.15)',
        transition: 'border-color 0.3s ease',
      }}
      onMouseEnter={e => (e.currentTarget.style.borderColor = 'rgba(34,211,238,0.5)')}
      onMouseLeave={e => (e.currentTarget.style.borderColor = 'rgba(34,211,238,0.15)')}
    >
      {/* Service number */}
      <p
        className="font-body text-xs font-medium uppercase mb-4"
        style={{ color: 'rgba(34,211,238,0.55)', letterSpacing: '0.12em' }}
      >
        Service {String(index + 1).padStart(2, '0')}
      </p>

      {/* Icon */}
      <div
        className="w-11 h-11 rounded-xl flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110"
        style={{
          background: 'rgba(34,211,238,0.1)',
          border: '0.5px solid rgba(34,211,238,0.3)',
        }}
      >
        <Icon size={20} style={{ color: '#22d3ee' }} strokeWidth={1.8} />
      </div>

      {/* Title */}
      <h3
        className="font-display text-xl uppercase text-white mb-3"
        style={{ letterSpacing: '0.03em' }}
      >
        {title}
      </h3>

      {/* Description */}
      <p className="font-body text-sm leading-relaxed flex-1" style={{ color: 'rgba(255,255,255,0.5)' }}>
        {description}
      </p>

      {/* Divider + CTA */}
      <div
        className="mt-5 pt-4 flex items-center justify-between"
        style={{ borderTop: '0.5px solid rgba(255,255,255,0.08)' }}
      >
        <button
          onClick={scrollToContact}
          className="flex items-center gap-1.5 font-body text-xs font-medium transition-colors duration-200"
          style={{ color: '#22d3ee' }}
        >
          Inquire now
          
        </button>
      </div>
    </div>
  )
}