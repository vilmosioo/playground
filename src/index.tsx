import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import reportWebVitals from './reportWebVitals'
import { Canvas } from 'react-three-fiber'
import { CameraControls } from './CameraControls'

ReactDOM.render(
  <React.StrictMode>
  <Canvas camera={{ position: [10, 0, 0] }}>
    <CameraControls />
    <ambientLight />
    <pointLight position={[10, 10, 10]} />
    <App position={[0, 0, 0]} />
  </Canvas>
  </React.StrictMode>,
  document.getElementById('root')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals(console.log)
