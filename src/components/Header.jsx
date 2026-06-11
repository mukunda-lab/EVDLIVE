import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { COUNTRIES, NAV_LINKS, IMAGES } from '../data'

function Chevron({ open }) {
  return (
    <svg
      className={`h-3 w-3 transition-transform duration-300 ${open ? 'rotate-180' : ''}`}
      viewBox="0 0 12 12"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    >
      <path d="M2 4l4 4 4-4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [countriesOpen, setCountriesOpen] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [mobileCountriesOpen, setMobileCountriesOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/85 shadow-lg shadow-evd-deep/5 backdrop-blur-md'
          : 'bg-white/60 backdrop-blur-sm'
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 lg:px-8">
        <a href="https://live.evdsky.com/" className="flex items-center gap-3">
          <img src={IMAGES.logo} alt="Escuela Valores Divinos" className="h-11 w-11" />
          <div className="leading-tight">
            <span className="block font-heading text-sm font-bold tracking-wide text-evd-dark">
              Escuela Valores Divinos
            </span>
            <span className="block font-heading text-xs font-semibold tracking-[0.3em] text-evd-blue">
              LIVE
            </span>
          </div>
        </a>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-5 xl:flex" aria-label="Navegación principal">
          <div
            className="relative"
            onMouseEnter={() => setCountriesOpen(true)}
            onMouseLeave={() => setCountriesOpen(false)}
          >
            <button
              className="flex items-center gap-1 text-[13px] font-semibold tracking-wide text-evd-dark transition-colors hover:text-evd-blue"
              aria-expanded={countriesOpen}
              onClick={() => setCountriesOpen((v) => !v)}
            >
              PAÍSES <Chevron open={countriesOpen} />
            </button>
            <AnimatePresence>
              {countriesOpen && (
                <motion.ul
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 8 }}
                  transition={{ duration: 0.2 }}
                  className="absolute left-0 top-full w-56 rounded-xl border border-evd-blue/10 bg-white/95 py-2 shadow-xl shadow-evd-deep/10 backdrop-blur-md"
                >
                  {COUNTRIES.map((c) => (
                    <li key={c.label}>
                      <a
                        href={c.href}
                        className="block px-5 py-2 text-[13px] font-medium text-evd-dark transition-all hover:bg-evd-blue/5 hover:pl-6 hover:text-evd-blue"
                      >
                        {c.label}
                      </a>
                    </li>
                  ))}
                </motion.ul>
              )}
            </AnimatePresence>
          </div>
          {NAV_LINKS.map((l) => (
            <a
              key={l.label}
              href={l.href}
              className={`relative text-[13px] font-semibold tracking-wide transition-colors after:absolute after:-bottom-1 after:left-0 after:h-0.5 after:w-0 after:bg-evd-blue after:transition-all after:duration-300 hover:after:w-full ${
                l.label === 'LIVE' ? 'text-evd-blue' : 'text-evd-dark hover:text-evd-blue'
              }`}
            >
              {l.label}
            </a>
          ))}
        </nav>

        {/* Mobile hamburger */}
        <button
          className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 rounded-lg text-evd-dark transition-colors hover:bg-evd-blue/10 xl:hidden"
          onClick={() => setMobileOpen((v) => !v)}
          aria-label={mobileOpen ? 'Cerrar menú' : 'Abrir menú'}
          aria-expanded={mobileOpen}
        >
          <span className={`h-0.5 w-6 bg-current transition-all duration-300 ${mobileOpen ? 'translate-y-2 rotate-45' : ''}`} />
          <span className={`h-0.5 w-6 bg-current transition-all duration-300 ${mobileOpen ? 'opacity-0' : ''}`} />
          <span className={`h-0.5 w-6 bg-current transition-all duration-300 ${mobileOpen ? '-translate-y-2 -rotate-45' : ''}`} />
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.nav
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden border-t border-evd-blue/10 bg-white/95 backdrop-blur-md xl:hidden"
            aria-label="Navegación móvil"
          >
            <div className="max-h-[70vh] overflow-y-auto px-6 py-4">
              <button
                className="flex w-full items-center justify-between py-2.5 text-sm font-semibold text-evd-dark"
                onClick={() => setMobileCountriesOpen((v) => !v)}
                aria-expanded={mobileCountriesOpen}
              >
                PAÍSES <Chevron open={mobileCountriesOpen} />
              </button>
              <AnimatePresence>
                {mobileCountriesOpen && (
                  <motion.ul
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden pl-4"
                  >
                    {COUNTRIES.map((c) => (
                      <li key={c.label}>
                        <a href={c.href} className="block py-2 text-sm text-evd-dark/80 hover:text-evd-blue">
                          {c.label}
                        </a>
                      </li>
                    ))}
                  </motion.ul>
                )}
              </AnimatePresence>
              {NAV_LINKS.map((l) => (
                <a
                  key={l.label}
                  href={l.href}
                  className={`block py-2.5 text-sm font-semibold ${
                    l.label === 'LIVE' ? 'text-evd-blue' : 'text-evd-dark hover:text-evd-blue'
                  }`}
                >
                  {l.label}
                </a>
              ))}
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
