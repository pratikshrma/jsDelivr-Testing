// import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'
import './index.css'
// import App from './App.tsx'
//
// createRoot(document.getElementById('root')!).render(
//   <StrictMode>
//     <App />
//   </StrictMode>,
// )
//
//
import { createRoot } from 'react-dom/client'
import { Canvas, useFrame } from '@react-three/fiber'
import { useRef } from 'react'
import * as THREE from 'three'
import { OrbitControls } from '@react-three/drei'

// your simple test scene
const Box = () => {
  const mesh = useRef<THREE.Mesh | null>(null)
  useFrame(() => {
    if (mesh.current) {
      mesh.current.rotation.x += 0.01
      mesh.current.rotation.y += 0.01
    }
  })
  return (
    <mesh ref={mesh}>
      <boxGeometry args={[1, 1, 1]} />
      <meshNormalMaterial />
    </mesh>
  )
}

const Scene = () => (
  <Canvas
    camera={{
      position: [2.5, 2.5, 2.5]
    }}
  >
    <OrbitControls />
    <Box />
  </Canvas>
)

// web component
class MyScene extends HTMLElement {
  connectedCallback() {
    let root = (this as any)._root
    root = createRoot(this)
    root.render(<Scene />)
  }
  disconnectedCallback() {
    let root = (this as any)._root
    root.unmount()
  }
}

if (!customElements.get('my-scene')) {
  customElements.define('my-scene', MyScene)
}
