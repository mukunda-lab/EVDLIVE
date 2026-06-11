import { motion } from 'framer-motion'
import Reveal from './Reveal'
import { MEDITATION_POSTS, EMBEDS } from '../data'

export default function Meditaciones() {
  return (
    <section className="relative py-[6vh]">
      <div className="mx-auto w-[95%] max-w-7xl px-2 lg:px-8">
        <Reveal>
          <h2 className="text-center font-heading text-[20px] font-medium tracking-[-1px] text-evd-cream lg:text-[26px]">
            Meditaciones con Mataji Shaktiananda
          </h2>
        </Reveal>
      </div>

      <div id="meditaciones" className="mx-auto mt-10 grid w-[88%] max-w-[1600px] scroll-mt-28 grid-cols-1 gap-10 lg:grid-cols-2">
        {/* Columna izquierda: banners de meditaciones apilados, como el original */}
        <div>
          <Reveal>
            <h2 className="font-heading text-[22px] font-light tracking-[1px] text-evd-cream lg:text-[26px]">
              Leer Meditaciones
            </h2>
          </Reveal>
          <motion.div
            className="mt-5 space-y-6"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-60px' }}
            variants={{ show: { transition: { staggerChildren: 0.12 } } }}
          >
            {MEDITATION_POSTS.map((post) => (
              <motion.a
                key={post.title}
                href={post.href}
                target="_blank"
                rel="noopener noreferrer"
                title={post.title}
                variants={{
                  hidden: { opacity: 0, y: 32 },
                  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.21, 0.6, 0.35, 1] } },
                }}
                whileHover={{ y: -5 }}
                className="group block overflow-hidden rounded-[15px] shadow-lg shadow-black/40 ring-1 ring-transparent transition-shadow duration-300 hover:shadow-xl hover:shadow-black/60 hover:ring-evd-cream/30"
              >
                <img
                  src={post.img}
                  alt={post.title}
                  className="w-full transition-transform duration-700 group-hover:scale-[1.03]"
                  loading="lazy"
                />
              </motion.a>
            ))}
          </motion.div>
        </div>

        {/* Columna derecha: podcast */}
        <Reveal delay={0.1} y={40}>
          <div className="overflow-hidden rounded-[15px] pt-0 shadow-lg shadow-black/40 lg:pt-[53px]">
            <iframe
              src={EMBEDS.podcast}
              title="Podcast Shaktiananda Ma"
              className="h-[560px] w-full lg:h-[680px]"
              frameBorder="0"
              scrolling="no"
              loading="lazy"
            />
          </div>
        </Reveal>
      </div>
    </section>
  )
}
