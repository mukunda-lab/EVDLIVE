import { useEffect, useRef } from 'react'
import Reveal from './Reveal'
import { IMAGES, EMBEDS, IS_LIVE } from '../data'

function YouTubeSubscribe() {
  const ref = useRef(null)

  useEffect(() => {
    const render = () => window.gapi?.ytsubscribe?.go?.(ref.current)
    if (window.gapi?.ytsubscribe) {
      render()
      return
    }
    const script = document.createElement('script')
    script.src = 'https://apis.google.com/js/platform.js'
    script.async = true
    script.onload = render
    document.body.appendChild(script)
  }, [])

  return (
    <div ref={ref} className="flex justify-center">
      <div
        className="g-ytsubscribe"
        data-channelid={EMBEDS.youtubeChannelId}
        data-layout="default"
        data-count="default"
      />
    </div>
  )
}

export default function LiveSection() {
  return (
    <section className="relative" id="video-stream-row">
      <div className="mx-auto max-w-5xl px-4">
        <Reveal>
          <h1 className="glow-cyan text-center font-heading text-[clamp(22px,2vw,38px)] font-light uppercase leading-[1.2em] tracking-[5px]">
            Contactos Maestros
          </h1>
        </Reveal>
        <Reveal delay={0.1}>
          <h1 className="glow-cyan mt-2 text-center font-heading text-[clamp(13px,1vw,20px)] font-light uppercase leading-[1.6em] tracking-[5px]">
            Transmisiones en vivo desde la escuela valores divinos
          </h1>
        </Reveal>

        {/* Player de YouTube: oculto cuando no hay transmisión, como en el original */}
        <div id="video-iframe" className={IS_LIVE ? 'mt-8' : 'hidden'}>
          <div className="overflow-hidden rounded-[10px]">
            <div className="relative aspect-video w-full">
              <iframe
                src={EMBEDS.youtube}
                title="Transmisión en vivo - Escuela Valores Divinos"
                className="absolute inset-0 h-full w-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            </div>
          </div>
        </div>

        {!IS_LIVE && (
          <div id="video-stream-cover" className="mt-8 scroll-mt-28">
            <Reveal y={40}>
              <div className="overflow-hidden rounded-[10px] shadow-2xl shadow-black/50">
                <img
                  src={IMAGES.offline}
                  alt="No estamos en vivo"
                  className="w-full"
                  loading="lazy"
                />
              </div>
            </Reveal>
            <Reveal delay={0.15} y={40}>
              <div className="mt-4 overflow-hidden rounded-[10px] shadow-2xl shadow-black/50">
                <img
                  src={IMAGES.playerCover}
                  alt="Portada"
                  className="w-full transition-transform duration-700 hover:scale-[1.02]"
                  loading="lazy"
                />
              </div>
            </Reveal>
          </div>
        )}

        <Reveal delay={0.2} className="relative z-10 mt-6">
          <YouTubeSubscribe />
        </Reveal>
      </div>
    </section>
  )
}
