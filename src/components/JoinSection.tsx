import { ArrowRight, Star, BookOpen } from 'lucide-react'

const perks = [
  {
    icon: Star,
    title: 'Unlimited Commission',
    desc: 'Earn attractive commissions and incentives with no ceiling — your effort directly equals your income.',
  },
  {
    icon: BookOpen,
    title: 'Free Training & Seminars',
    desc: 'We invest in your growth with regular free trainings and seminars designed to set you up for success.',
  },
]

export default function JoinSection() {
  return (
    <section
      id="join"
      className="py-24 relative overflow-hidden"
      style={{ background: 'linear-gradient(135deg, #0d1f3c 0%, #122a52 50%, #0d1f3c 100%)' }}
    >
      {/* Background accent circles */}
      <div
        className="absolute -right-32 top-1/2 -translate-y-1/2 w-80 h-80 rounded-full opacity-10"
        style={{ background: 'radial-gradient(circle, #22d3ee, transparent)' }}
      />

      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left content */}
          <div>
            <p
              className="font-body text-xs uppercase tracking-widest mb-3"
              style={{ color: '#22d3ee', letterSpacing: '0.2em' }}
            >
              Careers
            </p>
            <h2 className="font-display text-5xl lg:text-7xl uppercase text-white leading-none mb-6">
              JOIN OUR{' '}
              <span
                className="bg-clip-text text-transparent"
                style={{ backgroundImage: 'linear-gradient(90deg, #22d3ee, #67e8f9)' }}
              >
                TEAM!
              </span>
            </h2>
            <div className="section-divider mb-6" />

            <p className="font-body text-white/60 text-lg leading-relaxed mb-4">
              We're on the lookout for <strong className="text-white">dedicated and driven agents</strong> to join our growing team!
            </p>
            <p className="font-body text-white/60 leading-relaxed mb-8">
              If you're committed and eager to grow, we want to work with you. Be part of a team that values your development and rewards your hard work.
            </p>

            <a
              href="mailto:flavianrealty@gmail.com?subject=Job Application - Real Estate Agent"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-semibold transition-all duration-300 hover:scale-105"
              style={{
                background: 'linear-gradient(135deg, #22d3ee, #06b6d4)',
                color: '#0a1628',
                boxShadow: '0 8px 25px rgba(34,211,238,0.3)'
              }}
            >
              Apply Now <ArrowRight size={18} />
            </a>
          </div>

          {/* Right — perks */}
          <div className="space-y-5">
            <div
              className="glass-card rounded-2xl p-6 mb-6"
              style={{ border: '1px solid rgba(34,211,238,0.15)' }}
            >
              <p className="font-display text-lg uppercase text-white/70 tracking-wider">
                WHAT WE OFFER:
              </p>
            </div>

            {perks.map((perk, i) => {
              const Icon = perk.icon
              return (
                <div
                  key={i}
                  className="glass-card hover-lift rounded-2xl p-6 flex gap-5 items-start"
                  style={{ border: '1px solid rgba(34,211,238,0.12)' }}
                >
                  <div
                    className="w-12 h-12 flex-shrink-0 rounded-xl flex items-center justify-center"
                    style={{
                      background: 'rgba(34,211,238,0.1)',
                      border: '1px solid rgba(34,211,238,0.25)'
                    }}
                  >
                    <Icon size={22} style={{ color: '#22d3ee' }} />
                  </div>
                  <div>
                    <h3 className="font-display text-xl uppercase text-white mb-2">
                      {perk.title}
                    </h3>
                    <p className="font-body text-white/55 text-sm leading-relaxed">{perk.desc}</p>
                  </div>
                </div>
              )
            })}

            {/* Visit us tag */}
            <div
              className="rounded-2xl p-5 flex items-center gap-4 mt-2"
              style={{
                background: 'rgba(34,211,238,0.06)',
                border: '1px solid rgba(34,211,238,0.2)'
              }}
            >
              <div
                className="w-10 h-10 flex-shrink-0 rounded-full flex items-center justify-center"
                style={{ background: '#22d3ee' }}
              >
                <ArrowRight size={18} color="#0a1628" />
              </div>
              <div>
                <p className="font-display text-sm uppercase text-white tracking-wider">VISIT US</p>
                <p className="font-body text-white/50 text-xs">
                  #72 C. Lirio St. Nagcarlan, Laguna · Besides Iglesia Ni Cristo
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}