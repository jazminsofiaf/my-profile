import * as THREE from 'three'
import { useRef, useMemo } from 'react'
import { createPortal, useFrame } from "@react-three/fiber"
import { Text, Shadow, OrthographicCamera } from "@react-three/drei"
import { useScrollPercentage } from "react-scroll-percentage";

export function ThreeDTextBox({ children } :any, props: JSX.IntrinsicElements['mesh'], ) {
  const cam = useRef<THREE.Camera>(null!)
  const mesh = useRef<THREE.Mesh>(null!)

  const [ref, percentage] = useScrollPercentage({
    threshold: 0
  });

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
          color="#326da8"
          fontSize={4}
          maxWidth={120}
          lineHeight={1}
          letterSpacing={0.1}
          attachObject={children}
          attachArray="material"
          font="https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:ital,wght@0,100;1,300;1,700&family=Source+Sans+Pro:wght@300&display=swap"
          anchorX="center"
          anchorY="middle">
          {children}
        </Text>,
        scene
      )}
      <mesh 
        {...props}
        rotation={[0 ,1,1]}
        ref={mesh}>
        <boxGeometry attach="geometry" args={[3.5, 3.5, 3.5  ]}  />
        <meshStandardMaterial attach="material" map={target.texture} />
      </mesh>
    </>
  )
}