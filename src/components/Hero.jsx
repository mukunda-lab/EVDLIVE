import { motion } from 'framer-motion'
import { IMAGES } from '../data'

const ANCHORS = [
  { label: 'Live', href: '#video-stream-cover' },
  { label: 'Meditaciones', href: '#meditaciones' },
  { label: 'Suscríbete', href: '#suscribete' },
]

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* Original column gradient: #6d9bba fading down into the dark body */}
      <div
        className="absolute inset-x-0 top-0 h-[60vh]"
        style={{ background: 'linear-gradient(180deg, #6d9bba 0%, rgba(35,23,36,0) 100%)' }}
        aria-hidden="true"
      />
      <div className="relative mx-auto max-w-7xl px-4 pb-[6vw] pt-[calc(66px+7vw)] text-center">
        <motion.img
          src={IMAGES.heroBanner}
          alt="LIVE EVD - Escuela Valores Divinos"
          className="mx-auto w-[40%] max-w-[330px] min-w-[170px] drop-shadow-2xl"
          initial={{ opacity: 0, scale: 0.92, filter: 'blur(8px)' }}
          animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
          transition={{ duration: 1.1, ease: [0.21, 0.6, 0.35, 1] }}
        />
        <motion.div
          className="mt-[8vw] flex flex-wrap items-center justify-center gap-x-14 gap-y-3 lg:mt-[6vw]"
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
              whileTap={{ scale: 0.97 }}
              className="btn-hero rounded-[10px] px-4 py-[13px] font-heading text-[18px] font-light text-evd-cyan lg:text-[21px]"
            >
              {a.label}
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
