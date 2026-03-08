import { useGLTF } from '@react-three/drei'

const LaptopModel = () => {
  const { scene } = useGLTF('/src/assets/models/laptop.glb')
  return <primitive object={scene} scale={1} position={[0, 0, 0]} />
}

export default LaptopModel