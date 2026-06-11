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
      className={`fixed inset-x-0 top-0 z-50 bg-white transition-shadow duration-300 ${
        scrolled ? 'shadow-md shadow-black/20' : 'shadow-[0_1px_0_rgba(0,0,0,0.1)]'
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 lg:px-8">
        <a href="https://live.evdsky.com/" className="shrink-0">
          <img
            src={IMAGES.diviLogo}
            alt="Escuela Valores Divinos - LIVE"
            width="93"
            height="43"
            className="h-[43px] w-auto"
          />
        </a>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-5 font-heading xl:flex" aria-label="Navegación principal">
          <div
            className="relative"
            onMouseEnter={() => setCountriesOpen(true)}
            onMouseLeave={() => setCountriesOpen(false)}
          >
            <button
              className="flex items-center gap-1 text-sm font-normal text-[#666] transition-colors hover:text-[#2ea3f2]"
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
                  className="absolute left-0 top-full w-60 border-t-[3px] border-[#2ea3f2] bg-white py-3 shadow-[0_2px_5px_rgba(0,0,0,0.1)]"
                >
                  {COUNTRIES.map((c) => (
                    <li key={c.label}>
                      <a
                        href={c.href}
                        className="block px-5 py-2 text-sm text-[#666] transition-all hover:bg-black/5 hover:pl-6"
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
              className="relative text-sm font-normal text-[#666] transition-colors after:absolute after:-bottom-1 after:left-0 after:h-0.5 after:w-0 after:bg-[#2ea3f2] after:transition-all after:duration-300 hover:text-[#2ea3f2] hover:after:w-full"
            >
              {l.label}
            </a>
          ))}
        </nav>

        {/* Mobile hamburger */}
        <button
          className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 rounded text-[#2ea3f2] xl:hidden"
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
            className="overflow-hidden border-t border-black/10 bg-white font-heading xl:hidden"
            aria-label="Navegación móvil"
          >
            <div className="max-h-[70vh] overflow-y-auto px-6 py-4">
              <button
                className="flex w-full items-center justify-between py-2.5 text-sm text-[#666]"
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
                        <a href={c.href} className="block py-2 text-sm text-[#666] hover:text-[#2ea3f2]">
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
                  className="block py-2.5 text-sm text-[#666] hover:text-[#2ea3f2]"
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
