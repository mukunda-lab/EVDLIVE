import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Reveal from './Reveal'
import { IMAGES } from '../data'

const QUOTE_LINES = [
  '“¿Qué o quién es un meditador?',
  'Quien a través de sí mismo busca encontrarse.',
  'Quien sabe habita aquí y allá, y busca unirse.',
  'Quien sabe que su Ser lo contiene todo”.',
]

const READ_MORE = [
  'Las Meditaciones junto a Mataji Shaktiananda son un evento único, surgen de la Esfera Babaji y se ofrendan a los seres despiertos a través de los filamentos de Luz que la Madre sostiene en conexión plena con los planos de Luz.',
  'Cada encuentro genera una nueva aventura hacia el Ser, donde Shakti Ma se dispone para entregar la enseñanza de la Luz que su memoria cósmica posee. En esos momentos, no hay nada previamente preparado, el universo evolutivo se abre para contener al meditador en sus potentes corrientes de ascensión.',
  'En cada meditación guiada por la Madre Shaktiananda, se genera la atmósfera propicia para que el alma se disponga a realizar el contacto interno más elevado, aquel que lo reconecta con su realidad divina.',
  'Experimenta la expansión de tus campos sutiles, medita junto a un Ser que habita la Meditación como un estado de la conciencia cósmica.',
]

export default function QuoteSection() {
  const [open, setOpen] = useState(false)

  return (
    <section className="relative mt-[14vw] overflow-visible">
      {/* fondo Ma: circular, glowing into the dark background, behind the quote (as the original) */}
      <motion.div
        className="pointer-events-none absolute -top-[18vw] left-[-21vw] -z-10 w-[75vw] max-w-[1100px]"
        initial={{ opacity: 0, scale: 0.96 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.4, ease: 'easeOut' }}
        aria-hidden="true"
      >
        <motion.img
          src={IMAGES.fondoMa}
          alt=""
          className="w-full rounded-full"
          style={{ boxShadow: '0px 2px 58px 80px #0c1422' }}
          animate={{ y: [0, -12, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
          loading="lazy"
        />
      </motion.div>

      <div className="mx-auto max-w-5xl px-4 pt-[3vw]">
        <Reveal>
          <div className="space-y-1 text-center">
            {QUOTE_LINES.map((line) => (
              <h5 key={line} className="font-quote text-[17px] leading-relaxed text-evd-cream lg:text-[22px]">
                {line}
              </h5>
            ))}
          </div>
        </Reveal>

        {/* Text divider with name, like the original dsm_text_divider */}
        <Reveal delay={0.15}>
          <div className="mt-6 flex items-center gap-5">
            <span className="h-px flex-1 bg-evd-cream/80" />
            <h3 className="font-heading text-[15px] font-normal text-evd-cream">Mataji Shaktiananda</h3>
            <span className="h-px flex-1 bg-evd-cream/80" />
          </div>
        </Reveal>

        <Reveal delay={0.25}>
          <p className="mx-auto mt-14 px-[6vw] text-left font-heading text-[14px] font-light leading-relaxed text-evd-cream lg:px-[12vw] lg:text-[15px]">
            Meditar es la experiencia interna del alma, la forma de contacto entre el alma-mente
            individual y su conciencia cósmica. Es la visión de la belleza y la verdad del Ser.
          </p>
        </Reveal>

        <Reveal delay={0.3}>
          <div className="px-[6vw] lg:px-[12vw]">
            <button
              onClick={() => setOpen((v) => !v)}
              aria-expanded={open}
              className="group mt-4 inline-flex items-center gap-2 font-heading text-[13px] text-evd-cream transition-colors hover:text-evd-cyan"
            >
              {!open && 'leer más...'}
              <motion.span animate={{ rotate: open ? 45 : 0 }} transition={{ duration: 0.3 }}>
                <svg className="h-4 w-4" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M8 3v10M3 8h10" strokeLinecap="round" />
                </svg>
              </motion.span>
            </button>
            <AnimatePresence initial={false}>
              {open && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.45, ease: [0.21, 0.6, 0.35, 1] }}
                  className="overflow-hidden"
                >
                  <div className="space-y-4 pt-4 text-left font-heading text-[15px] font-light leading-relaxed text-evd-cream lg:text-[16px]">
                    {READ_MORE.map((p) => (
                      <p key={p.slice(0, 24)}>{p}</p>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
