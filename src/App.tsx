import { Canvas } from '@react-three/fiber'
import {OrbitControls} from '@react-three/drei'
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import { ThreeDBox } from './components/Box'

function App() {
  return (
    <Canvas>
        <ambientLight />
        <OrbitControls/>
        <spotLight position={[10, 15, 12]} angle={0.7} />
        <ThreeDBox position={[0,0,0]} />
    </Canvas>
  )
}

export default App
