import { Shield, Users, Clock, Award, Handshake, MapPin } from 'lucide-react'

const reasons = [
  {
    icon: Shield,
    title: 'Trusted & Reliable',
    description: 'Every transaction is handled with complete transparency, honesty, and dedication to protecting your interests.',
  },
  {
    icon: Users,
    title: 'Expert Team',
    description: 'Our trained and dedicated agents bring local market knowledge and professional expertise to every deal.',
  },
  {
    icon: Clock,
    title: 'Always Open',
    description: 'We\'re always available to assist you — no matter the time, your inquiries and concerns are our priority.',
  },
  {
    icon: Award,
    title: 'Quality Service',
    description: 'We uphold the highest standards of real estate practice, ensuring every client receives exceptional service.',
  },
  {
    icon: Handshake,
    title: 'Client-Centered',
    description: 'Your goals are our goals. We work tirelessly to ensure your real estate transactions are successful and stress-free.',
  },
  {
    icon: MapPin,
    title: 'Local Expertise',
    description: 'Deep-rooted knowledge of Nagcarlan and Laguna\'s property landscape gives our clients a strategic advantage.',
  },
]

export default function WhyUsSection() {
  return (
    <section
      id="why-us"
      className="py-24 relative overflow-hidden"
      style={{ background: '#0a1628' }}
    >
      {/* Large faded text */}
      <div
        className="absolute top-8 right-0 font-display text-[12rem] font-bold opacity-[0.03] select-none whitespace-nowrap"
        style={{ color: '#22d3ee', lineHeight: 1 }}
      >
        WHY US
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="mb-16">
          <p
            className="font-body text-xs uppercase tracking-widest mb-3"
            style={{ color: '#22d3ee', letterSpacing: '0.2em' }}
          >
            The Flavian Difference
          </p>
          <h2 className="font-display text-5xl lg:text-7xl uppercase text-white leading-none mb-4">
            WHY CHOOSE{' '}
            <span
              className="bg-clip-text text-transparent"
              style={{ backgroundImage: 'linear-gradient(90deg, #22d3ee, #67e8f9)' }}
            >
              US?
            </span>
          </h2>
          <div className="section-divider mb-4" />
          <p className="font-body text-white/50 max-w-lg">
            We go beyond just closing deals — we build lasting relationships founded on quality, integrity, and genuine care for our clients.
          </p>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((reason, i) => {
            const Icon = reason.icon
            return (
              <div
                key={i}
                className="group flex gap-5 p-6 rounded-2xl hover-lift transition-all duration-300"
                style={{
                  background: 'rgba(255,255,255,0.03)',
                  border: '1px solid rgba(34,211,238,0.08)',
                }}
              >
                <div
                  className="w-12 h-12 flex-shrink-0 rounded-xl flex items-center justify-center transition-all duration-300 group-hover:scale-110"
                  style={{
                    background: 'rgba(34,211,238,0.1)',
                    border: '1px solid rgba(34,211,238,0.2)'
                  }}
                >
                  <Icon size={22} style={{ color: '#22d3ee' }} />
                </div>
                <div>
                  <h3 className="font-display text-xl uppercase text-white mb-2" style={{ letterSpacing: '0.03em' }}>
                    {reason.title}
                  </h3>
                  <p className="font-body text-white/50 text-sm leading-relaxed">
                    {reason.description}
                  </p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}