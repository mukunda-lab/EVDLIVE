import Reveal from './Reveal'
import { EMBEDS } from '../data'

export default function Podcast() {
  return (
    <section className="relative py-12 lg:py-16">
      <div className="mx-auto max-w-4xl px-4">
        <Reveal>
          <h2 className="text-center font-heading text-3xl font-bold text-evd-deep lg:text-4xl">
            Podcast
          </h2>
          <div className="mx-auto mt-4 h-1 w-20 rounded-full bg-gradient-to-r from-evd-blue to-evd-deep" />
        </Reveal>
        <Reveal delay={0.15} className="mt-10" y={40}>
          <div className="overflow-hidden rounded-2xl shadow-xl shadow-evd-deep/15 ring-1 ring-evd-blue/10">
            <iframe
              src={EMBEDS.podcast}
              title="Podcast Shaktiananda Ma"
              className="h-[420px] w-full"
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
