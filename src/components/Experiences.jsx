import { Canvas, useFrame, useThree } from '@react-three/fiber'
import { ScrollControls, useScroll } from '@react-three/drei'
import * as THREE from 'three'
import { useRef } from 'react'


// --- 1. Particules flottantes ---
const Particles = ({ count = 300 }) => {
  const mesh = useRef()

  const positions = new Float32Array(count * 3)
  for (let i = 0; i < count; i++) {
    positions[i * 3]     = (Math.random() - 0.5) * 20
    positions[i * 3 + 1] = (Math.random() - 0.5) * 20
    positions[i * 3 + 2] = (Math.random() - 0.5) * 20
  }

  useFrame((state) => {
    mesh.current.rotation.y = state.clock.elapsedTime * 0.03
    mesh.current.rotation.x = state.clock.elapsedTime * 0.01
  })

  return (
    <points ref={mesh}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          array={positions}
          count={count}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial size={0.08} color="#8b5cf6" transparent opacity={0.8} sizeAttenuation />
    </points>
  )
}

// --- 2. Gestion de la Caméra ---
const CameraRig = () => {
  const { camera } = useThree()
  const scroll = useScroll()

  useFrame(() => {
    const offset = scroll.offset

    if (offset < 0.33) {
      camera.position.lerp(new THREE.Vector3(0, 0, 6), 0.05)
    } else if (offset < 0.66) {
      camera.position.lerp(new THREE.Vector3(2, 2, 4), 0.05)
    } else {
      camera.position.lerp(new THREE.Vector3(-3, 1, 4), 0.05)
    }
    
    // Ajout d'une légère rotation automatique pour rendre la scène vivante
    // camera.position.y += Math.sin(state.clock.elapsedTime) * 0.005 

    camera.lookAt(0, 0, 0)
  })

  return null
}

// --- 3. La Scène Globale ---
const Scene = () => {
  return (
    <>
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 5]} intensity={1} />
      <pointLight position={[-5, 3, 2]} intensity={5} color="#8b5cf6" distance={10} />
      <pointLight position={[5, -3, 2]} intensity={5} color="#06b6d4" distance={10} />
      {/* Particules flottantes */}
      <Particles count={300} />
      <CameraRig />
    </>
  )
}

// --- 4. Le Canvas Principal ---
const Experiences = () => {
  return (
    <Canvas
      camera={{ position: [0, 0, 6] }}
      style={{ width: '100vw', height: '100vh' }}
      gl={{ antialias: true, alpha: true }}
    >
      <ScrollControls pages={3} damping={0.25}>
        <Scene />
      </ScrollControls>
    </Canvas>
  )
}

export default Experiences