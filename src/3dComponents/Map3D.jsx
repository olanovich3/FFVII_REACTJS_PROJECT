/* eslint-disable react/no-unknown-property */

import { OrbitControls } from '@react-three/drei';
import { Canvas, useLoader } from '@react-three/fiber';
import { Suspense, useRef } from 'react';
import { TextureLoader } from 'three/src/loaders/TextureLoader';
function Scene() {
  const myMesh = useRef();
  const colorMap = useLoader(TextureLoader, 'mapa.png');
  return (
    <>
      <ambientLight intensity={0.5} />
      <mesh ref={myMesh} rotation={[0, 0.2, 0]}>
        <boxGeometry args={[27, 20, 27]} />
        <meshLambertMaterial map={colorMap} />
      </mesh>
    </>
  );
}
const Texture = () => {
  Scene.background = null;
  return (
    <div className="mapContainer">
      <div className="map">
        <Canvas camera={{ fov: 75, near: 0.1, far: 1000, position: [-30, 4, 0] }}>
          <OrbitControls enableZoom={true} />
          <Suspense fallback={null}>
            <Scene />
          </Suspense>
        </Canvas>
      </div>
      <div className="controls">
        <h1>Controls</h1>
        <p>Left click to rotate</p>
        <p>Wheel to zoom</p>
        <p>Right click to move</p>
      </div>
    </div>
  );
};
export default Texture;
