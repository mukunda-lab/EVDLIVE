import Reveal from './Reveal'
import { EMBEDS } from '../data'

export default function Suscribete() {
  return (
    <section id="suscribete" className="relative scroll-mt-24 py-16 lg:py-24">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-evd-blue/5 to-evd-deep/10" aria-hidden="true" />
      <div className="relative mx-auto max-w-3xl px-4">
        <Reveal>
          <h2 className="text-center font-heading text-3xl font-bold text-evd-deep lg:text-4xl">
            Suscríbete
          </h2>
          <div className="mx-auto mt-4 h-1 w-20 rounded-full bg-gradient-to-r from-evd-blue to-evd-deep" />
        </Reveal>
        <Reveal delay={0.15}>
          <h5 className="mx-auto mt-8 max-w-2xl text-center font-heading text-base font-medium leading-relaxed text-evd-dark/80 lg:text-lg">
            Suscríbete para recibir notificaciones de próximas actividades, novedades y recibir en
            tu correo la meditación para su lectura y estudio. Pronto podrás acceder a nuevos
            materiales y enseñanzas.
          </h5>
        </Reveal>
        <Reveal delay={0.25} className="mt-10" y={40}>
          <div className="overflow-hidden rounded-2xl bg-white/80 shadow-xl shadow-evd-deep/15 ring-1 ring-evd-blue/10 backdrop-blur-sm">
            <iframe
              src={EMBEDS.subscribeForm}
              title="Formulario de suscripción"
              className="h-[520px] w-full"
              loading="lazy"
            />
          </div>
        </Reveal>
      </div>
    </section>
  )
}
