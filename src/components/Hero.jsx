import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { IMAGES } from '../data'

const ANCHORS = [
  { label: 'Live', href: '#video-stream-cover' },
  { label: 'Meditaciones', href: '#meditaciones' },
  { label: 'Suscríbete', href: '#suscribete' },
]

export default function Hero() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
  const bannerY = useTransform(scrollYProgress, [0, 1], [0, 120])
  const bannerScale = useTransform(scrollYProgress, [0, 1], [1, 1.08])
  const bannerOpacity = useTransform(scrollYProgress, [0, 0.85], [1, 0.25])

  return (
    <section ref={ref} className="relative overflow-hidden pt-24 lg:pt-28">
      <div className="mx-auto max-w-5xl px-4 text-center">
        <motion.div style={{ y: bannerY, scale: bannerScale, opacity: bannerOpacity }}>
          <motion.img
            src={IMAGES.heroBanner}
            alt="LIVE EVD - Escuela Valores Divinos"
            className="mx-auto w-full max-w-2xl drop-shadow-xl"
            initial={{ opacity: 0, scale: 0.92, filter: 'blur(8px)' }}
            animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
            transition={{ duration: 1.1, ease: [0.21, 0.6, 0.35, 1] }}
          />
        </motion.div>
        <motion.div
          className="mt-2 flex flex-wrap items-center justify-center gap-4 pb-10"
          initial="hidden"
          animate="show"
          variants={{ show: { transition: { staggerChildren: 0.12, delayChildren: 0.5 } } }}
        >
          {ANCHORS.map((a) => (
            <motion.a
              key={a.label}
              href={a.href}
              variants={{
                hidden: { opacity: 0, y: 24 },
                show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.21, 0.6, 0.35, 1] } },
              }}
              whileHover={{ y: -3, scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              className="rounded-full border-2 border-evd-blue bg-white/70 px-8 py-2.5 font-heading text-sm font-semibold tracking-wide text-evd-deep shadow-md shadow-evd-blue/10 backdrop-blur-sm transition-colors hover:bg-evd-blue hover:text-white"
            >
              {a.label}
            </motion.a>
          ))}
        </motion.div>
        <motion.div
          className="pb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4, duration: 0.8 }}
          aria-hidden="true"
        >
          <motion.div
            className="mx-auto flex h-9 w-6 items-start justify-center rounded-full border-2 border-evd-blue/40 pt-1.5"
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
          >
            <span className="block h-2 w-1 rounded-full bg-evd-blue" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
