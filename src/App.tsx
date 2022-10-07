import { Canvas } from '@react-three/fiber'
import {OrbitControls} from '@react-three/drei'
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import { ThreeDTextBox } from './components/TextBox'

function App() {
  return (
    <Canvas>
        <ambientLight />
        <spotLight position={[10, 15, 12]} angle={0.7} />
        <ThreeDTextBox position={[0,0,0]}>
          LA CAJA CON TEXTO: aca esta el cuerpo del texto que no es muy extenso tampoco porque se trata de una descripcion
          hecha por mi para ver como queda esta letra en el cubo.
        </ThreeDTextBox>
    </Canvas>
  )
}

export default App
