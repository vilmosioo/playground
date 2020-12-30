import * as React from 'react'
import './App.css'
import { MeshProps } from 'react-three-fiber'
import * as Three from 'three'

function App (props: MeshProps) {
  const mesh = React.useRef<Three.Mesh>()
  const texture = new Three.TextureLoader().load('./stars.jpg')

  return (
    <mesh ref={mesh} {...props}>
      <sphereGeometry args={[1, 100, 100]} />
      <meshLambertMaterial map={texture} />
    </mesh>
  )
}

export default App
