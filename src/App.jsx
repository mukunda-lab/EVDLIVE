import { motion, useScroll, useSpring } from 'framer-motion'
import AnimatedBackground from './components/AnimatedBackground'
import Header from './components/Header'
import Hero from './components/Hero'
import LiveSection from './components/LiveSection'
import QuoteSection from './components/QuoteSection'
import GlowDivider from './components/GlowDivider'
import Meditaciones from './components/Meditaciones'
import Actividades from './components/Actividades'
import Suscribete from './components/Suscribete'

export default function App() {
  const { scrollYProgress } = useScroll()
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 24, mass: 0.4 })

  return (
    <>
      <motion.div
        className="fixed inset-x-0 top-0 z-[60] h-[3px] origin-left bg-gradient-to-r from-evd-line via-evd-cyan to-evd-cream"
        style={{ scaleX: progress }}
        aria-hidden="true"
      />
      <AnimatedBackground />
      <Header />
      <main className="overflow-hidden">
        <Hero />
        <LiveSection />
        <QuoteSection />
        <GlowDivider className="mt-[8vh]" />
        <Meditaciones />
        <Actividades />
        <Suscribete />
      </main>
    </>
  )
}
