import { Canvas } from '@react-three/fiber'
import {OrbitControls} from '@react-three/drei'
import { useRef, useState } from 'react'
import reactLogo from './assets/react.svg'
import { ThreeDTextBox } from './components/TextBox'
import Overlay from "./components/Overlay";

function App() {
  const ref = useRef<THREE.Mesh>(null!)
  //const overlay = useRef();
  //const caption = useRef();
  //const scroll = useRef(0);

  return (
    <>
    <div style={{width: '100%', height: '100%', backgroundColor: 'white'}} >
    <Canvas>
        <ambientLight />
        <spotLight position={[10, 15, 12]} angle={0.7} />
        <ThreeDTextBox position={[0,0,0]}>
          LA CAJA CON TEXTO: aca esta el cuerpo del texto que no es muy extenso tampoco porque se trata de una descripcion
          hecha por mi para ver como queda esta letra en el cubo.
        </ThreeDTextBox>
    </Canvas>
     </div>
     
     </>
  )
}

export default App
