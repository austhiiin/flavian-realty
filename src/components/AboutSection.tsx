import { CheckCircle2 } from 'lucide-react'

const values = [
  'Honest and transparent transactions',
  'Client-first approach in every deal',
  'Local expertise in Laguna properties',
  'Professional and licensed agents',
]

export default function AboutSection() {
  return (
    <section
      id="about"
      className="py-24 relative overflow-hidden"
      style={{ background: 'linear-gradient(180deg, #0a1628 0%, #0d1f3c 100%)' }}
    >
      {/* Decorative line */}
      <div
        className="absolute left-0 top-0 bottom-0 w-1"
        style={{ background: 'linear-gradient(180deg, transparent, #22d3ee, transparent)' }}
      />

      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
        {/* Left — visual block */}
        <div className="relative">
          {/* Big background text */}
          <div
            className="absolute -top-8 -left-4 font-display text-9xl font-bold opacity-5 select-none"
            style={{ color: '#22d3ee', fontSize: '10rem' }}
          >
            FR
          </div>

          <div className="relative z-10">
            <div
              className="glass-card rounded-3xl p-8 mb-4"
              style={{ border: '1px solid rgba(34,211,238,0.2)' }}
            >
              <div
                className="font-display text-7xl font-bold mb-2"
                style={{ color: '#22d3ee' }}
              >
                FLAVIAN
              </div>
              <div className="font-display text-3xl text-white/80 uppercase tracking-widest mb-4">
                REALTY
              </div>
              <div className="w-16 h-1 rounded mb-4" style={{ background: '#22d3ee' }} />
              <p className="font-body text-white/60 leading-relaxed">
                Based in Nagcarlan, Laguna — Flavian Realty is your community real estate partner,
                committed to making property transactions seamless, professional, and rewarding.
              </p>
            </div>

            {/* Address card */}
            <div
              className="glass-card rounded-2xl p-5"
              style={{ border: '1px solid rgba(34,211,238,0.1)' }}
            >
              <p className="text-white/40 text-xs uppercase tracking-widest mb-1">Office Location</p>
              <p className="text-white font-medium text-sm">
                072 C. Lirio St Poblacion 2, Nagcarlan, Philippines 4002
              </p>
              <p className="text-white/40 text-xs mt-1">Besides Iglesia Ni Cristo</p>
            </div>
          </div>
        </div>

        {/* Right — content */}
        <div>
          <p
            className="font-body text-xs uppercase tracking-widest mb-3"
            style={{ color: '#22d3ee' }}
          >
            Who We Are
          </p>
          <h2 className="font-display text-5xl lg:text-6xl uppercase text-white leading-none mb-6">
            BUILT ON TRUST,<br />
            <span
              className="bg-clip-text text-transparent"
              style={{ backgroundImage: 'linear-gradient(90deg, #22d3ee, #67e8f9)' }}
            >
              DRIVEN BY SERVICE
            </span>
          </h2>
          <div className="section-divider mb-6" />
          <p className="font-body text-white/60 text-lg leading-relaxed mb-6">
            At Flavian Realty, we provide <strong className="text-white">quality service</strong> with
            respect to the purchase, sale, lease, rental, or appraisal of real property.
            Our team is dedicated to guiding you through every step of your real estate journey
            with expertise and care.
          </p>
          <p className="font-body text-white/60 leading-relaxed mb-8">
            Whether you're buying your first home, selling an investment property, or looking for
            the perfect rental — Flavian Realty is always open and ready to serve you.
          </p>

          <div className="space-y-3">
            {values.map((v, i) => (
              <div key={i} className="flex items-center gap-3">
                <CheckCircle2 size={18} className="flex-shrink-0" style={{ color: '#22d3ee' }} />
                <span className="font-body text-white/80 text-sm">{v}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}