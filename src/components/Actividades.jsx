import { motion } from 'framer-motion'
import Reveal from './Reveal'
import { ACTIVITIES } from '../data'

export default function Actividades() {
  return (
    <section id="conferencias" className="relative mt-[5vw] mb-[2vw]">
      <Reveal y={40}>
        <div className="mx-auto w-[90%] max-w-[1350px] rounded-[15px] border border-evd-cream pb-2">
          <h2 className="mt-8 mb-3 text-center font-heading text-[22px] font-light tracking-[1px] text-evd-cream lg:text-[26px]">
            Próximas actividades
          </h2>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-3"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-60px' }}
            variants={{ show: { transition: { staggerChildren: 0.15 } } }}
          >
            {ACTIVITIES.map((act, i) => (
              <motion.div
                key={act.href}
                variants={{
                  hidden: { opacity: 0, y: 36 },
                  show: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.21, 0.6, 0.35, 1] } },
                }}
                className={`flex flex-col px-6 py-6 ${
                  i < 2
                    ? 'border-b border-evd-border-cyan/40 md:border-b-0 md:border-r md:border-r-evd-border-cyan'
                    : ''
                }`}
              >
                <div className="min-h-[125px]">
                  <h3 className="font-heading text-[1.6rem] font-semibold leading-[1.1em] text-evd-cream">
                    {act.title.map((line) => (
                      <span key={line} className="block">
                        {line}
                      </span>
                    ))}
                  </h3>
                  <p className="mt-2 font-heading text-[15px] font-light text-evd-cream">{act.time}</p>
                </div>
                <div className="group overflow-hidden rounded-[15px] shadow-lg shadow-black/40">
                  <img
                    src={act.img}
                    alt={act.title.join(' ')}
                    className="w-full transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                </div>
                <motion.a
                  href={act.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.97 }}
                  className="group/btn mt-5 inline-flex w-fit items-center gap-2 rounded-[15px] px-6 py-2.5 font-heading text-[1rem] text-evd-cream shadow-md shadow-black/30 transition-shadow hover:shadow-lg hover:shadow-black/50"
                  style={{ backgroundColor: act.buttonColor }}
                >
                  Saber más
                  <span className="inline-block w-0 overflow-hidden opacity-0 transition-all duration-300 group-hover/btn:w-4 group-hover/btn:opacity-100">
                    <svg className="h-4 w-4" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M3 8h10M9 4l4 4-4 4" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                </motion.a>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </Reveal>
    </section>
  )
}
