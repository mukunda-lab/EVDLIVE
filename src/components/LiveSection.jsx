import { motion } from 'framer-motion'
import Reveal from './Reveal'
import { IMAGES, EMBEDS } from '../data'

export default function LiveSection() {
  return (
    <section
      id="video-stream-cover"
      className="relative scroll-mt-24 overflow-hidden py-16 lg:py-24"
    >
      {/* fondo Ma background, kept from the original */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${IMAGES.fondoMa})` }}
        aria-hidden="true"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-white/80 via-white/60 to-white/85" aria-hidden="true" />

      <div className="relative mx-auto max-w-5xl px-4">
        <Reveal>
          <h1 className="text-center font-heading text-lg font-semibold uppercase tracking-[0.35em] text-evd-deep/80">
            Contactos Maestros
          </h1>
        </Reveal>
        <motion.h1
          className="mx-auto mt-3 max-w-3xl text-center font-heading text-3xl font-bold leading-tight lg:text-5xl"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-60px' }}
          variants={{ show: { transition: { staggerChildren: 0.06, delayChildren: 0.15 } } }}
        >
          {'Transmisiones en vivo desde la escuela valores divinos'.split(' ').map((word, i) => (
            <motion.span
              key={i}
              className="shimmer-text inline-block"
              variants={{
                hidden: { opacity: 0, y: 26, filter: 'blur(6px)' },
                show: {
                  opacity: 1,
                  y: 0,
                  filter: 'blur(0px)',
                  transition: { duration: 0.6, ease: [0.21, 0.6, 0.35, 1] },
                },
              }}
            >
              {word}&nbsp;
            </motion.span>
          ))}
        </motion.h1>

        <Reveal delay={0.2} className="mt-8 flex justify-center">
          <div className="inline-flex items-center gap-3 rounded-full bg-white/80 px-6 py-2.5 shadow-lg shadow-evd-deep/10 backdrop-blur-sm">
            <span className="pulse-ring relative inline-block h-3 w-3 rounded-full bg-slate-400 text-slate-400" />
            <span className="font-heading text-sm font-semibold tracking-wide text-evd-dark">
              No estamos en vivo
            </span>
          </div>
        </Reveal>

        <Reveal delay={0.3} className="mt-10" y={48}>
          <motion.div
            id="video-iframe"
            whileHover={{ scale: 1.01 }}
            transition={{ duration: 0.4 }}
            className="overflow-hidden rounded-2xl bg-evd-dark shadow-2xl shadow-evd-deep/25 ring-1 ring-white/40"
          >
            <div className="relative aspect-video w-full">
              <iframe
                src={EMBEDS.youtube}
                title="Transmisión en vivo - Escuela Valores Divinos"
                className="absolute inset-0 h-full w-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                loading="lazy"
              />
            </div>
          </motion.div>
        </Reveal>

        <Reveal delay={0.15} className="mt-10" y={40}>
          <img
            src={IMAGES.offline}
            alt="No estamos transmitiendo en este momento"
            className="mx-auto w-full max-w-3xl rounded-2xl shadow-xl shadow-evd-deep/15 ring-1 ring-white/50"
            loading="lazy"
          />
        </Reveal>
      </div>
    </section>
  )
}
