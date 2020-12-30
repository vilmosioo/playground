import React from 'react'
import { ReactThreeFiber, useThree, useFrame, extend } from 'react-three-fiber'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'

extend({ OrbitControls })

declare global {
  export namespace JSX {
    export interface IntrinsicElements {
      orbitControls: ReactThreeFiber.Object3DNode<OrbitControls, typeof OrbitControls>
    }
  }
}

export const CameraControls = () => {
  const {
    camera,
    gl: { domElement }
  } = useThree()
  const controls = React.useRef<OrbitControls>()
  useFrame(_state => controls.current?.update())
  return <orbitControls ref={controls} args={[camera, domElement]} />
}
