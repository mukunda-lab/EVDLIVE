import GlowDivider from './GlowDivider'
import Reveal from './Reveal'
import { EMBEDS } from '../data'

export default function Suscribete() {
  return (
    <section className="relative pb-[10vh]">
      <GlowDivider className="mb-[8vh]" />

      <div id="suscribete" className="mx-auto grid w-[90%] max-w-6xl scroll-mt-28 grid-cols-1 items-center gap-10 lg:grid-cols-2">
        <Reveal>
          <h5 className="pl-0 text-left font-heading text-[15px] font-light leading-[1.5em] text-evd-cream-soft lg:pl-[8vw] lg:text-right lg:text-[clamp(15px,1.1vw,22px)]">
            Suscríbete para recibir notificaciones de próximas actividades, novedades y recibir en
            tu correo la meditación para su lectura y estudio. Pronto podrás acceder a nuevos
            materiales y enseñanzas.
          </h5>
        </Reveal>
        <Reveal delay={0.15} y={40}>
          <div className="overflow-hidden rounded-[15px] px-2 py-2 lg:px-6">
            <iframe
              src={EMBEDS.subscribeForm}
              title="Formulario de suscripción"
              className="h-[520px] w-full rounded-[15px]"
              loading="lazy"
            />
          </div>
        </Reveal>
      </div>
    </section>
  )
}
