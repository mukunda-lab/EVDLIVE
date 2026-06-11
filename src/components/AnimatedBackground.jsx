const PARTICLES = Array.from({ length: 18 }, (_, i) => ({
  left: `${(i * 53) % 100}%`,
  size: 4 + ((i * 7) % 9),
  duration: 14 + ((i * 5) % 16),
  delay: (i * 1.7) % 14,
}))

export default function AnimatedBackground() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-white" aria-hidden="true">
      <div className="aurora-blob aurora-1 left-[-10%] top-[-15%] h-[55vh] w-[55vw] bg-evd-blue/40" />
      <div className="aurora-blob aurora-2 right-[-15%] top-[20%] h-[60vh] w-[50vw] bg-evd-deep/30" />
      <div className="aurora-blob aurora-3 bottom-[-20%] left-[20%] h-[50vh] w-[60vw] bg-sky-200/60" />
      {PARTICLES.map((p, i) => (
        <span
          key={i}
          className="particle"
          style={{
            left: p.left,
            width: p.size,
            height: p.size,
            animationDuration: `${p.duration}s`,
            animationDelay: `${p.delay}s`,
          }}
        />
      ))}
      <div className="absolute inset-0 bg-white/55" />
    </div>
  )
}
