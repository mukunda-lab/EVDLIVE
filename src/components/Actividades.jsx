import { motion } from 'framer-motion'
import Reveal from './Reveal'
import { ACTIVITIES } from '../data'

export default function Actividades() {
  return (
    <section className="relative py-16 lg:py-24">
      <div className="mx-auto max-w-6xl px-4">
        <Reveal>
          <h2 className="text-center font-heading text-3xl font-bold text-evd-deep lg:text-4xl">
            Próximas actividades
          </h2>
          <div className="mx-auto mt-4 h-1 w-20 rounded-full bg-gradient-to-r from-evd-blue to-evd-deep" />
        </Reveal>

        <motion.div
          className="mt-14 grid grid-cols-1 gap-8 md:grid-cols-3"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-60px' }}
          variants={{ show: { transition: { staggerChildren: 0.15 } } }}
        >
          {ACTIVITIES.map((act) => (
            <motion.article
              key={act.href}
              variants={{
                hidden: { opacity: 0, y: 44 },
                show: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.21, 0.6, 0.35, 1] } },
              }}
              whileHover={{ y: -10 }}
              className="group relative overflow-hidden rounded-3xl bg-white shadow-xl shadow-evd-deep/10 ring-1 ring-evd-blue/10 transition-shadow duration-300 hover:shadow-2xl hover:shadow-evd-blue/25"
            >
              <div className="relative overflow-hidden">
                <img
                  src={act.img}
                  alt={act.title.join(' ')}
                  className="aspect-square w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-evd-dark/60 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                <span className="absolute right-4 top-4 rounded-full bg-white/90 px-4 py-1.5 font-heading text-xs font-bold tracking-wide text-evd-deep shadow-md backdrop-blur-sm">
                  {act.time}
                </span>
              </div>
              <div className="flex flex-col items-center px-6 py-7 text-center">
                <h3 className="font-heading text-xl font-bold leading-snug text-evd-dark">
                  {act.title.map((line) => (
                    <span key={line} className="block">
                      {line}
                    </span>
                  ))}
                </h3>
                <motion.a
                  href={act.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.96 }}
                  className="mt-5 inline-flex items-center gap-2 rounded-full border-2 border-evd-blue px-7 py-2 font-heading text-sm font-semibold text-evd-blue transition-colors duration-300 hover:bg-evd-blue hover:text-white"
                >
                  Saber más
                  <svg className="h-3.5 w-3.5" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M3 8h10M9 4l4 4-4 4" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </motion.a>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
