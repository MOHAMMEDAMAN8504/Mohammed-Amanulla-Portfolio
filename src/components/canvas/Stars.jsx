"use client"

import { useState, useRef, Suspense, useEffect } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import { Points, PointMaterial, Preload } from "@react-three/drei"
import * as random from "maath/random/dist/maath-random.esm"

const Stars = (props) => {
  const ref = useRef()
  const secondaryRef = useRef()
  const groupRef = useRef()
  
  const pointer = useRef({ x: 0, y: 0 })
  // Increased from 6000 to 15000 (5000 dots)
  const [sphere] = useState(() => random.inSphere(new Float32Array(15000), { radius: 1.2 }))
  // Increased from 3000 to 6000 (2000 dots)
  const [sphere2] = useState(() => random.inSphere(new Float32Array(6000), { radius: 1.5 }))

  useEffect(() => {
    const handleMouseMove = (e) => {
      pointer.current.x = (e.clientX / window.innerWidth) * 2 - 1
      pointer.current.y = -(e.clientY / window.innerHeight) * 2 + 1
    }
    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  useFrame((state, delta) => {
    // continuous slow rotation
    ref.current.rotation.x -= delta / 20
    ref.current.rotation.y -= delta / 25
    
    if (secondaryRef.current) {
      secondaryRef.current.rotation.x -= delta / 30
      secondaryRef.current.rotation.y -= delta / 35
    }

    // cursor follow effect
    const targetX = pointer.current.y * 0.3
    const targetY = pointer.current.x * 0.3

    if (groupRef.current) {
      groupRef.current.rotation.x += (targetX - groupRef.current.rotation.x) * delta * 3
      groupRef.current.rotation.y += (targetY - groupRef.current.rotation.y) * delta * 3
    }
  })

  return (
    <group ref={groupRef} rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled {...props}>
        <PointMaterial
          transparent
          color="#f2f2f3"
          size={0.002}
          sizeAttenuation={true}
          depthWrite={false}
        />
      </Points>
      {/* Secondary particles for depth */}
      <Points ref={secondaryRef} positions={sphere2} stride={3} frustumCulled>
        <PointMaterial
          transparent
          color="#915eff"
          size={0.0015}
          sizeAttenuation={true}
          depthWrite={false}
        />
      </Points>
    </group>
  )
}

const StarsCanvas = () => {
  return (
    <div className="w-full h-auto absolute inset-0 z-[-1] pointer-events-none">
      <Canvas camera={{ position: [0, 0, 1] }}>
        <Suspense fallback={null}>
          <Stars />
        </Suspense>
        <Preload all />
      </Canvas>
    </div>
  )
}


export default StarsCanvas