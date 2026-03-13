import { ArrowRight, Star, BookOpen, MapPin } from 'lucide-react'

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

const MAP_EMBED =
  'https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d500!2d121.41472!3d14.135111!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTTCsDA4JzA2LjQiTiAxMjHCsDI0JzUzLjAiRQ!5e0!3m2!1sen!2sph!4v1700000000000'
const MAP_LINK = 'https://www.google.com/maps?q=14.135111,121.414722'

export default function JoinSection() {
  return (
    <section
      id="join"
      className="py-24 relative overflow-hidden"
      style={{ background: 'linear-gradient(135deg, #0d1f3c 0%, #122a52 50%, #0d1f3c 100%)' }}
    >
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
          <div className="space-y-4">
            <div
              className="glass-card rounded-2xl p-5"
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

            {/* Interactive map block */}
            <div
              className="rounded-2xl overflow-hidden"
              style={{ border: '1px solid rgba(34,211,238,0.2)' }}
            >
              {/* Map header */}
              <div
                className="flex items-center justify-between px-4 py-3"
                style={{ borderBottom: '0.5px solid rgba(34,211,238,0.12)', background: '#0d1f3c' }}
              >
                <div className="flex items-center gap-2">
                  <MapPin size={13} style={{ color: '#22d3ee' }} />
                  <span className="font-body text-xs font-medium text-white">
                    Flavian Realty — Nagcarlan, Laguna
                  </span>
                </div>
                <a
                  href={MAP_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-body text-xs font-medium transition-opacity hover:opacity-70"
                  style={{ color: '#22d3ee' }}
                >
                  Open in Maps ↗
                </a>
              </div>

              {/* Embedded map */}
              <div className="relative w-full" style={{ height: '220px' }}>
                <iframe
                  src={MAP_EMBED}
                  width="100%"
                  height="220"
                  style={{ border: 0, display: 'block' }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Flavian Realty Location"
                />
              </div>

              {/* Address strip */}
              <div
                className="flex items-center justify-between px-4 py-3"
                style={{ background: 'rgba(34,211,238,0.05)' }}
              >
                <div className="flex items-center gap-2">
                  <MapPin size={12} style={{ color: '#22d3ee' }} />
                  <span className="font-body text-xs" style={{ color: 'rgba(255,255,255,0.5)' }}>
                    #72 C. Lirio St. Nagcarlan, Laguna · Besides Iglesia Ni Cristo
                  </span>
                </div>
                <span
                  className="font-body text-xs hidden sm:block"
                  style={{ color: 'rgba(255,255,255,0.25)' }}
                >
                  14°08'06.4"N 121°24'53.0"E
                </span>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}