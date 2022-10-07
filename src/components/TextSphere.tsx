import * as THREE from 'three'
import { useRef, useMemo } from 'react'
import { createPortal, useFrame } from "@react-three/fiber"
import { Text, Shadow, OrthographicCamera } from "@react-three/drei"

export function TextSphere({ children } :any) {
    const cam = useRef<THREE.Camera>(null!)
  
    const [scene, target] = useMemo(() => {
      const scene = new THREE.Scene()
      scene.background = new THREE.Color('white')
      const target = new THREE.WebGLMultisampleRenderTarget(2048, 2048, {
        format: THREE.RGBFormat,
        stencilBuffer: false
      })
      target.samples = 8
      return [scene, target]
    }, [])
  
    useFrame(state => {
      state.gl.setRenderTarget(target)
      state.gl.render(scene, cam.current)
      state.gl.setRenderTarget(null)
    })
  
    return (
      <>
        <OrthographicCamera ref={cam} position={[0, 0, 10]} zoom={10} attachArray="material" attachObject={['attributes', 'position']}/>
        {createPortal(
          <Text
            color="#171717"
            fontSize={4}
            maxWidth={60}
            lineHeight={1}
            letterSpacing={-0.1}
            textAlign="left"
            attachObject={children}
            attachArray="material"
            font="https://fonts.gstatic.com/s/raleway/v14/1Ptrg8zYS_SKggPNwK4vaqI.woff"
            anchorX="center"
            anchorY="middle">
            {children}
          </Text>,
          scene
        )}
        <mesh>
          <sphereBufferGeometry attach="geometry" args={[2, 64, 64]} />
          <meshStandardMaterial attach="material" map={target.texture} />
        </mesh>
      </>
    )
  }