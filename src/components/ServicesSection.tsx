import { Home, TrendingUp, Key, Building2, BarChart3 } from 'lucide-react'
import ServiceCard from './ServiceCard'

const services = [
  {
    icon: Home,
    title: 'Property Purchase',
    description: 'We help buyers find and acquire the perfect property — residential, commercial, or land — at the best value with full assistance throughout the process.',
  },
  {
    icon: TrendingUp,
    title: 'Property Sale',
    description: 'Maximize the value of your property with our expert marketing strategies, professional listing, and wide network of qualified buyers.',
  },
  {
    icon: Key,
    title: 'Lease & Rental',
    description: 'Find quality tenants or the ideal rental space. We handle lease agreements, tenant screening, and property management with diligence.',
  },
  {
    icon: Building2,
    title: 'Property Rental',
    description: 'Whether you\'re a landlord or a tenant, we connect the right people with the right properties and ensure smooth rental arrangements.',
  },
  {
    icon: BarChart3,
    title: 'Property Appraisal',
    description: 'Get accurate and professional property valuations for buying, selling, taxation, or legal purposes — backed by market expertise.',
  },
]

export default function ServicesSection() {
  return (
    <section
      id="services"
      className="py-24 relative"
      style={{ background: 'linear-gradient(180deg, #0d1f3c 0%, #0a1628 100%)' }}
    >
      {/* Background accent */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-px opacity-30"
        style={{ background: 'linear-gradient(90deg, transparent, #22d3ee, transparent)' }}
      />

      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <p
            className="font-body text-xs uppercase tracking-widest mb-3"
            style={{ color: '#22d3ee', letterSpacing: '0.2em' }}
          >
            What We Offer
          </p>
          <h2 className="font-display text-5xl lg:text-7xl uppercase text-white leading-none mb-4">
            OUR{' '}
            <span
              className="bg-clip-text text-transparent"
              style={{ backgroundImage: 'linear-gradient(90deg, #22d3ee, #67e8f9)' }}
            >
              SERVICES
            </span>
          </h2>
          <div className="section-divider mx-auto mb-4" />
          <p className="font-body text-white/50 max-w-xl mx-auto">
            Full-spectrum real estate services tailored to your needs — whether you're buying, selling, leasing, or just need a property valuation.
          </p>
        </div>

        {/* Row 1 — 3 cards */}
        <div className="grid md:grid-cols-3 gap-5 mb-5">
          {services.slice(0, 3).map((service, i) => (
            <ServiceCard key={i} {...service} index={i} />
          ))}
        </div>

        {/* Row 2 — 2 cards centered */}
        <div className="grid md:grid-cols-2 gap-5 max-w-2xl mx-auto">
          {services.slice(3).map((service, i) => (
            <ServiceCard key={i + 3} {...service} index={i + 3} />
          ))}
        </div>
      </div>
    </section>
  )
}