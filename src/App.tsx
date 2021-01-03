import * as React from 'react'
import './App.css'
import { Canvas, MeshProps } from 'react-three-fiber'
import { CameraControls } from './CameraControls'
import Background from './Background'

function App (props: MeshProps) {
  return (
    <Canvas camera={{ position: [10, 0, 0] }}>
      <CameraControls />
      <ambientLight />
      <pointLight position={[10, 10, 10]} />
      <Background position={[0, 0, 0]} />
    </Canvas>
  )
}

export default App
