import React, { Suspense, useEffect, useState, useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Preload, Float } from "@react-three/drei";
import * as THREE from "three";

import CanvasLoader from "../Loader";

const DataNetwork = () => {
  const innerGroupRef = useRef();
  const outerGroupRef = useRef();
  const pointer = useRef({ x: 0, y: 0 });
  const particlesCount = 250;
  
  useEffect(() => {
    const handleMouseMove = (e) => {
      pointer.current.x = (e.clientX / window.innerWidth) * 2 - 1;
      pointer.current.y = -(e.clientY / window.innerHeight) * 2 + 1;
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const { positions, lines } = useMemo(() => {
    const pos = [];
    const phi = Math.PI * (3 - Math.sqrt(5)); // Golden angle
    
    // Generate perfectly distributed points on a sphere (Fibonacci Sphere)
    for (let i = 0; i < particlesCount; i++) {
      const y = 1 - (i / (particlesCount - 1)) * 2; // y goes from 1 to -1
      const radius = Math.sqrt(1 - y * y); // radius at y
      const theta = phi * i; // golden angle increment
      
      const x = Math.cos(theta) * radius;
      const z = Math.sin(theta) * radius;
      
      pos.push(new THREE.Vector3(x * 3.5, y * 3.5, z * 3.5));
    }

    const linePositions = [];
    // Connect points
    for (let i = 0; i < particlesCount; i++) {
      for (let j = i + 1; j < particlesCount; j++) {
        const distance = pos[i].distanceTo(pos[j]);
        // With 250 points at radius 3.5, 1.4 distance connects neighbors perfectly without gaps
        if (distance < 1.4) {
          linePositions.push(
            pos[i].x, pos[i].y, pos[i].z,
            pos[j].x, pos[j].y, pos[j].z
          );
        }
      }
    }

    const positionsArray = new Float32Array(pos.length * 3);
    for (let i = 0; i < pos.length; i++) {
      positionsArray[i * 3] = pos[i].x;
      positionsArray[i * 3 + 1] = pos[i].y;
      positionsArray[i * 3 + 2] = pos[i].z;
    }

    return { 
      positions: positionsArray, 
      lines: new Float32Array(linePositions) 
    };
  }, []);

  useFrame((state, delta) => {
    if (innerGroupRef.current) {
      innerGroupRef.current.rotation.y += delta * 0.15;
      innerGroupRef.current.rotation.z += delta * 0.05;
    }
    if (outerGroupRef.current) {
      const targetX = pointer.current.y * 0.5;
      const targetY = pointer.current.x * 0.5;
      
      outerGroupRef.current.rotation.x += (targetX - outerGroupRef.current.rotation.x) * delta * 5;
      outerGroupRef.current.rotation.y += (targetY - outerGroupRef.current.rotation.y) * delta * 5;
    }
  });

  return (
    <group ref={outerGroupRef} position={[0, -0.5, 0]}>
      <group ref={innerGroupRef}>
        {/* Nodes */}
        <points>
          <bufferGeometry>
            <bufferAttribute
              attach="attributes-position"
              count={positions.length / 3}
              array={positions}
              itemSize={3}
            />
          </bufferGeometry>
          <pointsMaterial size={0.08} color="#915eff" transparent opacity={0.9} sizeAttenuation />
        </points>

        {/* Connections */}
        <lineSegments>
          <bufferGeometry>
            <bufferAttribute
              attach="attributes-position"
              count={lines.length / 3}
              array={lines}
              itemSize={3}
            />
          </bufferGeometry>
          <lineBasicMaterial color="#60a5fa" transparent opacity={0.3} />
        </lineSegments>

        {/* Core Ambient Glow */}
        <mesh>
          <sphereGeometry args={[3.4, 32, 32]} />
          <meshBasicMaterial color="#915eff" transparent opacity={0.02} depthWrite={false} />
        </mesh>
      </group>
    </group>
  );
};

const ComputersCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 500px)");
    setIsMobile(mediaQuery.matches);
    const handleMediaQueryChange = (event) => setIsMobile(event.matches);
    mediaQuery.addEventListener("change", handleMediaQueryChange);
    return () => mediaQuery.removeEventListener("change", handleMediaQueryChange);
  }, []);

  return (
    <div className="absolute inset-0 z-0">
      <Canvas
        frameloop="always"
        shadows
        dpr={[1, 2]}
        camera={{ position: [0, 0, 12], fov: 45 }}
        gl={{ antialias: true }}
      >
        <Suspense fallback={<CanvasLoader />}>
          <OrbitControls
            enableZoom={false}
            autoRotate
            autoRotateSpeed={0.8}
            maxPolarAngle={Math.PI / 1.8}
            minPolarAngle={Math.PI / 2.2}
          />
          
          <ambientLight intensity={0.5} />
          <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={1} castShadow />
          <pointLight position={[-10, -10, -10]} intensity={0.5} color="#915eff" />
          
          <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
            <DataNetwork />
          </Float>
        </Suspense>

        <Preload all />
      </Canvas>
    </div>
  );
};

export default ComputersCanvas;