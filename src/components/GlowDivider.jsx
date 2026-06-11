export default function GlowDivider({ className = '' }) {
  return (
    <div className={`w-full ${className}`} aria-hidden="true">
      <div className="glow-line" />
      <div className="glow-line-blur" />
    </div>
  )
}
