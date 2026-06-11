import { motion, useScroll, useSpring } from 'framer-motion'
import AnimatedBackground from './components/AnimatedBackground'
import Header from './components/Header'
import Hero from './components/Hero'
import LiveSection from './components/LiveSection'
import QuoteSection from './components/QuoteSection'
import Meditaciones from './components/Meditaciones'
import Podcast from './components/Podcast'
import Actividades from './components/Actividades'
import Suscribete from './components/Suscribete'
import Footer from './components/Footer'

export default function App() {
  const { scrollYProgress } = useScroll()
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 24, mass: 0.4 })

  return (
    <>
      <motion.div
        className="fixed inset-x-0 top-0 z-[60] h-1 origin-left bg-gradient-to-r from-evd-deep via-evd-blue to-sky-300"
        style={{ scaleX: progress }}
        aria-hidden="true"
      />
      <AnimatedBackground />
      <Header />
      <main>
        <Hero />
        <LiveSection />
        <QuoteSection />
        <Meditaciones />
        <Podcast />
        <Actividades />
        <Suscribete />
      </main>
      <Footer />
    </>
  )
}
