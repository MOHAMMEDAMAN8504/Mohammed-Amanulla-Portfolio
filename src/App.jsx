import React, { useEffect, useState } from 'react'
import './App.css'
import { BrowserRouter } from 'react-router-dom'
import { About, Contact, Education, Experience, Extracurricular, Hero, Navbar, Tech, Works, StarsCanvas } from './components'
import Lenis from '@studio-freight/lenis'
import { motion, useMotionValue, useSpring } from 'framer-motion'

const CursorGlow = () => {
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  const springConfig = { damping: 20, stiffness: 150, mass: 0.5 }
  const springX = useSpring(mouseX, springConfig)
  const springY = useSpring(mouseY, springConfig)

  const springConfigLag = { damping: 30, stiffness: 80, mass: 1 }
  const springXLag = useSpring(mouseX, springConfigLag)
  const springYLag = useSpring(mouseY, springConfigLag)

  useEffect(() => {
    const handleMouseMove = (e) => {
      mouseX.set(e.clientX)
      mouseY.set(e.clientY)
    }
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [mouseX, mouseY])

  return (
    <>
      {/* Core Cursor */}
      <motion.div
        className="fixed top-0 left-0 w-4 h-4 bg-accent rounded-full pointer-events-none z-[100] mix-blend-difference hidden md:block"
        style={{
          x: springX,
          y: springY,
          translateX: '-50%',
          translateY: '-50%',
        }}
      />
      {/* Medium Glow */}
      <motion.div
        className="fixed top-0 left-0 w-24 h-24 bg-accent/30 rounded-full pointer-events-none z-[90] mix-blend-screen blur-[20px] hidden md:block"
        style={{
          x: springX,
          y: springY,
          translateX: '-50%',
          translateY: '-50%',
        }}
      />
      {/* Large Ambient Lag Glow */}
      <motion.div
        className="fixed top-0 left-0 w-64 h-64 bg-accent/10 rounded-full pointer-events-none z-[80] mix-blend-screen blur-[60px] hidden md:block"
        style={{
          x: springXLag,
          y: springYLag,
          translateX: '-50%',
          translateY: '-50%',
        }}
      />
    </>
  )
}



function App() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      direction: 'vertical',
      gestureDirection: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1,
      smoothTouch: false,
      touchMultiplier: 2,
      infinite: false,
    })

    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)

    // Simulate loading
    const timer = setTimeout(() => setIsLoading(false), 2000)

    return () => {
      lenis.destroy()
      clearTimeout(timer)
    }
  }, [])

  return (
    <BrowserRouter>
      <div className='relative z-0 bg-primary min-h-screen'>
        <CursorGlow />
        
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center min-h-screen">
          <Navbar />
          <Hero />
        </div>

        <div className="relative z-0 overflow-hidden">
          <About />
          <div className="glow-bg top-[20%] left-[-10%] opacity-20" />
        </div>

        <Education />
        
        <div className="relative z-0 overflow-hidden">
          <Experience />
          <div className="glow-bg top-[40%] right-[-10%] opacity-30" />
        </div>

        <Extracurricular />
        <Tech />
        
        <div className="relative z-0 overflow-hidden">
          <Works />
          <div className="glow-bg top-[60%] left-[-10%] opacity-20" />
        </div>

        <div className="relative z-0 overflow-hidden">
          <Contact />
          <StarsCanvas />
          <div className="glow-bg bottom-[10%] right-[10%] opacity-20" />
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App
