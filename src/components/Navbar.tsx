import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'
import FlavianLogo from './FlavianLogo'

const navLinks = [
  { label: 'Home', href: '#hero' },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Why Us', href: '#why-us' },
  { label: 'Join Us', href: '#join' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleNav = (href: string) => {
    setMenuOpen(false)
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-navy-900/95 backdrop-blur-md border-b border-cyan-400/10 py-3'
          : 'bg-transparent py-5'
      }`}
      style={{ backgroundColor: scrolled ? 'rgba(10,22,40,0.95)' : 'transparent' }}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <button onClick={() => handleNav('#hero')}>
          <FlavianLogo size={42} />
        </button>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <button
              key={link.label}
              onClick={() => handleNav(link.href)}
              className="font-body text-sm font-medium text-white/70 hover:text-cyan-400 transition-colors duration-200 tracking-wide uppercase"
              style={{ letterSpacing: '0.08em', fontSize: '0.8rem' }}
            >
              {link.label}
            </button>
          ))}
          <button
            onClick={() => handleNav('#contact')}
            className="font-body text-sm font-semibold px-5 py-2 rounded-full transition-all duration-300 hover:scale-105"
            style={{
              background: 'linear-gradient(135deg, #22d3ee, #1a3a6b)',
              color: 'white',
              boxShadow: '0 4px 15px rgba(34,211,238,0.25)'
            }}
          >
            Inquire Now
          </button>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden text-white p-2"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div
          className="md:hidden absolute top-full left-0 right-0 border-t border-cyan-400/10 py-4"
          style={{ background: 'rgba(10,22,40,0.98)', backdropFilter: 'blur(20px)' }}
        >
          {navLinks.map((link) => (
            <button
              key={link.label}
              onClick={() => handleNav(link.href)}
              className="block w-full text-left px-6 py-3 text-white/80 hover:text-cyan-400 hover:bg-white/5 transition-colors font-body"
            >
              {link.label}
            </button>
          ))}
        </div>
      )}
    </nav>
  )
}