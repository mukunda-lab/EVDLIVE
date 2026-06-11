const RISING = Array.from({ length: 14 }, (_, i) => ({
  left: `${(i * 53) % 100}%`,
  size: 3 + ((i * 7) % 7),
  duration: 18 + ((i * 5) % 18),
  delay: (i * 2.1) % 16,
}))

const TWINKLES = Array.from({ length: 26 }, (_, i) => ({
  left: `${(i * 37) % 100}%`,
  top: `${(i * 61) % 100}%`,
  size: 1 + (i % 3),
  duration: 2.5 + ((i * 3) % 5),
  delay: (i * 1.3) % 5,
}))

export default function AnimatedBackground() {
  return (
    <div
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
      style={{ background: 'linear-gradient(90deg, #0a1423 22%, #231724 91%)' }}
      aria-hidden="true"
    >
      <div className="aurora-blob aurora-1 left-[-12%] top-[-15%] h-[55vh] w-[55vw] bg-evd-navy" />
      <div className="aurora-blob aurora-2 right-[-15%] top-[25%] h-[60vh] w-[50vw] bg-[#574da4]" />
      <div className="aurora-blob aurora-3 bottom-[-20%] left-[15%] h-[50vh] w-[60vw] bg-evd-line" />
      {TWINKLES.map((t, i) => (
        <span
          key={`t${i}`}
          className="twinkle"
          style={{
            left: t.left,
            top: t.top,
            width: t.size,
            height: t.size,
            animationDuration: `${t.duration}s`,
            animationDelay: `${t.delay}s`,
          }}
        />
      ))}
      {RISING.map((p, i) => (
        <span
          key={`r${i}`}
          className="star"
          style={{
            left: p.left,
            width: p.size,
            height: p.size,
            animationDuration: `${p.duration}s`,
            animationDelay: `${p.delay}s`,
          }}
        />
      ))}
    </div>
  )
}
