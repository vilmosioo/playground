import { useRef } from 'react';
import './App.css';
import { useFrame, MeshProps } from 'react-three-fiber';
import * as Three from 'three';

function App(props: MeshProps) {
  const mesh = useRef<Three.Mesh>();

  useFrame(() => {
    if (mesh.current) mesh.current.rotation.x = mesh.current.rotation.y += 0.01;
  });

  return (
    <mesh ref={mesh} {...props}>
      <boxBufferGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color={'orange'} />
    </mesh>
  );
}

export default App;
