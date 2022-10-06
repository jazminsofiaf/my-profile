import { Canvas } from '@react-three/fiber'
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import { ThreeDBox } from './components/Box'

function App() {
  return (
    <Canvas>
        <ambientLight />
        <pointLight position={[10, 10, 10]} />
        <ThreeDBox position={[0,0,0]} />
    </Canvas>
  )
}

export default App
