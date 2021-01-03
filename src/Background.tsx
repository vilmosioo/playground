import * as React from 'react'
import './App.css'
import { MeshProps } from 'react-three-fiber'
import * as Three from 'three'

function Background (props: MeshProps) {
  const mesh = React.useRef<Three.Mesh>()
  const texture = new Three.TextureLoader().load('./stars2.png')

  return (
    <mesh ref={mesh} {...props}>
      <sphereGeometry args={[100, 100, 100]} />
      <meshLambertMaterial map={texture} side={Three.BackSide} />
    </mesh>
  )
}

export default Background
