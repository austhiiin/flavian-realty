import { ArrowRight, MapPin, Phone } from 'lucide-react'

export default function HeroSection() {
  const scrollTo = (href: string) =>
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center hero-pattern overflow-hidden"
      style={{ background: 'linear-gradient(135deg, #0a1628 0%, #0d1f3c 50%, #0a1628 100%)' }}
    >
      {/* Dot grid overlay */}
      <div className="absolute inset-0 dot-grid opacity-40" />

      {/* Decorative large circle */}
      <div
        className="absolute -right-40 top-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full opacity-10"
        style={{ background: 'radial-gradient(circle, #22d3ee 0%, transparent 70%)' }}
      />
      <div
        className="absolute -left-20 bottom-0 w-[400px] h-[400px] rounded-full opacity-5"
        style={{ background: 'radial-gradient(circle, #22d3ee 0%, transparent 70%)' }}
      />

      {/* Diagonal accent strip */}
      <div
        className="absolute top-0 right-0 w-1/3 h-full opacity-5"
        style={{
          background: 'linear-gradient(135deg, transparent 0%, #22d3ee 100%)',
          clipPath: 'polygon(60% 0, 100% 0, 100% 100%, 20% 100%)'
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-28 pb-16 grid lg:grid-cols-2 gap-16 items-center">
        {/* Left content */}
        <div>
          <div
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-6 text-xs font-semibold tracking-widest uppercase"
            style={{
              background: 'rgba(34,211,238,0.1)',
              border: '1px solid rgba(34,211,238,0.3)',
              color: '#22d3ee'
            }}
          >
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
            Nagcarlan, Laguna · Est. Flavian Realty
          </div>

          <h1
            className="font-display text-6xl lg:text-8xl uppercase leading-none mb-6"
            style={{ letterSpacing: '-0.01em' }}
          >
            <span className="text-white">YOUR TRUSTED</span>
            <br />
            <span
              className="bg-clip-text text-transparent"
              style={{ backgroundImage: 'linear-gradient(90deg, #22d3ee, #67e8f9)' }}
            >
              REAL ESTATE
            </span>
            <br />
            <span className="text-white">PARTNER</span>
          </h1>

          <p className="font-body text-white/60 text-lg leading-relaxed mb-10 max-w-lg">
            Providing <strong className="text-white/90">quality service</strong> with respect to the purchase, sale,
            lease, rental, or appraisal of real property — with integrity and professionalism you can trust.
          </p>

          <div className="flex flex-wrap gap-4 mb-12">
            <button
              onClick={() => scrollTo('#contact')}
              className="flex items-center gap-2 px-8 py-4 rounded-full font-semibold text-navy-900 transition-all duration-300 hover:scale-105 hover:shadow-2xl"
              style={{
                background: 'linear-gradient(135deg, #22d3ee, #06b6d4)',
                color: '#0a1628',
                boxShadow: '0 8px 25px rgba(34,211,238,0.35)'
              }}
            >
              Send an Inquiry <ArrowRight size={18} />
            </button>
            <button
              onClick={() => scrollTo('#services')}
              className="flex items-center gap-2 px-8 py-4 rounded-full font-semibold transition-all duration-300 hover:scale-105"
              style={{
                border: '1.5px solid rgba(34,211,238,0.4)',
                color: '#22d3ee',
                background: 'rgba(34,211,238,0.05)'
              }}
            >
              Our Services
            </button>
          </div>

          {/* Quick info */}
          <div className="flex flex-wrap gap-6">
            <div className="flex items-center gap-2 text-white/50 text-sm">
              <MapPin size={15} className="text-cyan-400 flex-shrink-0" />
              <span>072 C. Lirio St, Poblacion 2, Nagcarlan</span>
            </div>
            <div className="flex items-center gap-2 text-white/50 text-sm">
              <Phone size={15} className="text-cyan-400 flex-shrink-0" />
              <span>0961 921 0591</span>
            </div>
          </div>
        </div>

        {/* Right — stat cards */}
        <div className="hidden lg:grid grid-cols-2 gap-4">
          {[
            { value: '5+', label: 'Years of Service', sub: 'Serving Laguna' },
            { value: '100%', label: 'Quality Focused', sub: 'Client Satisfaction' },
            { value: '5', label: 'Core Services', sub: 'Full Property Range' },
            { value: '∞', label: 'Opportunities', sub: 'Join Our Team' },
          ].map((stat, i) => (
            <div
              key={i}
              className="glass-card rounded-2xl p-6 hover-lift"
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              <div
                className="font-display text-5xl font-bold mb-1"
                style={{ color: '#22d3ee' }}
              >
                {stat.value}
              </div>
              <div className="font-body font-semibold text-white text-sm mb-1">{stat.label}</div>
              <div className="font-body text-white/40 text-xs">{stat.sub}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-40">
        <span className="text-white/60 text-xs tracking-widest uppercase">Scroll</span>
        <div className="w-px h-12 bg-gradient-to-b from-cyan-400 to-transparent" />
      </div>
    </section>
  )
}