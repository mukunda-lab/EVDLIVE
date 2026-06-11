import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Reveal from './Reveal'

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
]

export default function QuoteSection() {
  const [open, setOpen] = useState(false)

  return (
    <section className="relative py-16 lg:py-24">
      <div className="mx-auto max-w-3xl px-4 text-center">
        <Reveal>
          <div className="space-y-1">
            {QUOTE_LINES.map((line) => (
              <h5 key={line} className="font-heading text-lg font-medium italic leading-relaxed text-evd-dark lg:text-xl">
                {line}
              </h5>
            ))}
          </div>
        </Reveal>
        <Reveal delay={0.15}>
          <h3 className="mt-6 font-heading text-2xl font-bold text-evd-deep">Mataji Shaktiananda</h3>
          <div className="mx-auto mt-4 h-px w-24 bg-gradient-to-r from-transparent via-evd-blue to-transparent" />
        </Reveal>

        <Reveal delay={0.25}>
          <p className="mt-8 text-base leading-relaxed text-evd-dark/75">
            Meditar es la experiencia interna del alma, la forma de contacto entre el alma-mente
            individual y su conciencia cósmica. Es la visión de la belleza y la verdad del Ser.
          </p>
        </Reveal>

        <Reveal delay={0.3}>
          <button
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            className="group mt-6 inline-flex items-center gap-2 font-heading text-sm font-semibold tracking-wide text-evd-blue transition-colors hover:text-evd-deep"
          >
            leer más...
            <motion.span animate={{ rotate: open ? 180 : 0 }} transition={{ duration: 0.3 }}>
              <svg className="h-4 w-4" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M3 6l5 5 5-5" strokeLinecap="round" strokeLinejoin="round" />
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
                <div className="space-y-4 pt-5 text-left text-base leading-relaxed text-evd-dark/75">
                  {READ_MORE.map((p) => (
                    <p key={p.slice(0, 24)}>{p}</p>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </Reveal>
      </div>
    </section>
  )
}
