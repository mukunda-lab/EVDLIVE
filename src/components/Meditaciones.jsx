import { motion } from 'framer-motion'
import Reveal from './Reveal'
import { MEDITATION_CARDS } from '../data'

export default function Meditaciones() {
  return (
    <section id="meditaciones" className="relative scroll-mt-24 py-16 lg:py-24">
      <div className="mx-auto max-w-6xl px-4">
        <Reveal>
          <h2 className="text-center font-heading text-3xl font-bold text-evd-deep lg:text-4xl">
            Meditaciones con Mataji Shaktiananda
          </h2>
          <div className="mx-auto mt-4 h-1 w-20 rounded-full bg-gradient-to-r from-evd-blue to-evd-deep" />
        </Reveal>

        <Reveal delay={0.15}>
          <p className="mx-auto mt-8 max-w-3xl text-center text-base leading-relaxed text-evd-dark/75">
            Experimenta la expansión de tus campos sutiles, medita junto a un Ser que habita la
            Meditación como un estado de la conciencia cósmica.
          </p>
        </Reveal>

        <motion.div
          className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-60px' }}
          variants={{ show: { transition: { staggerChildren: 0.12 } } }}
        >
          {MEDITATION_CARDS.map((card) => (
            <motion.a
              key={card.title}
              href={card.href}
              target="_blank"
              rel="noopener noreferrer"
              variants={{
                hidden: { opacity: 0, y: 36 },
                show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.21, 0.6, 0.35, 1] } },
              }}
              whileHover={{ y: -8 }}
              className="group overflow-hidden rounded-2xl bg-white shadow-lg shadow-evd-deep/10 ring-1 ring-evd-blue/10 transition-shadow duration-300 hover:shadow-2xl hover:shadow-evd-blue/20"
            >
              <div className="overflow-hidden">
                <img
                  src={card.img}
                  alt={card.title}
                  className="aspect-square w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
              <div className="flex items-center justify-between gap-2 px-5 py-4">
                <h4 className="font-heading text-sm font-semibold text-evd-dark transition-colors group-hover:text-evd-blue">
                  {card.title}
                </h4>
                <svg
                  className="h-4 w-4 shrink-0 text-evd-blue transition-transform duration-300 group-hover:translate-x-1"
                  viewBox="0 0 16 16"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M3 8h10M9 4l4 4-4 4" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
            </motion.a>
          ))}
        </motion.div>

        <Reveal delay={0.2} className="mt-12 text-center">
          <motion.a
            href="https://shaktianandama.com/"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ y: -3, scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="inline-block rounded-full bg-gradient-to-r from-evd-deep to-evd-blue px-10 py-3.5 font-heading text-sm font-bold tracking-wide text-white shadow-lg shadow-evd-blue/30 transition-shadow hover:shadow-xl hover:shadow-evd-blue/40"
          >
            Leer Meditaciones
          </motion.a>
        </Reveal>
      </div>
    </section>
  )
}
