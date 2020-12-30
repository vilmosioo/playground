import * as React from 'react'
import './App.css'
import { MeshProps } from 'react-three-fiber'
import * as Three from 'three'

function App (props: MeshProps) {
  const mesh = React.useRef<Three.Mesh>()

  return (
    <mesh ref={mesh} {...props}>
      <boxBufferGeometry args={[2, 2, 2]} />
      <meshStandardMaterial color='red' />
    </mesh>
  )
}

export default App
