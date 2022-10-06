import { useFrame } from "@react-three/fiber"
import { useRef, useState } from "react"

export function ThreeDBox(props: JSX.IntrinsicElements['mesh']) {
        const mesh = useRef<THREE.Mesh>(null!)
        const [hovered, setHover] = useState(false)
        const [active, setActive] = useState(false)
       
        return (
          <mesh
            {...props}
            ref={mesh}
            scale={active ? 2.5 : 2}
            onClick={(event) => setActive(!active)}
            onPointerOver={(event) => setHover(true)}
            onPointerOut={(event) => setHover(false)}>
            <boxGeometry args={[2, 2, 2]} />
            <meshStandardMaterial color={hovered ? 'hotpink' : 'orange'} />
          </mesh>
        )
      }