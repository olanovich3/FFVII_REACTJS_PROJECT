/* eslint-disable react/no-unknown-property */

import { OrbitControls } from '@react-three/drei';
import { Canvas, useLoader } from '@react-three/fiber';
import { useFrame } from '@react-three/fiber';
import { Suspense, useRef } from 'react';
import { TextureLoader } from 'three/src/loaders/TextureLoader';
function Scene() {
  const myMesh = useRef();
  const Moon = useRef();
  const orbitRadius = 20;
  useFrame(({ clock }) => {
    myMesh.current.rotation.y = -(clock.getElapsedTime() / 4);
    Moon.current.position.set(
      Math.cos(clock.getElapsedTime()) * orbitRadius,
      0,
      Math.sin(clock.getElapsedTime()) * orbitRadius,
    );
  });

  const colorMap = useLoader(TextureLoader, 'mapa.png');
  const colorMoon = useLoader(TextureLoader, 'Moon.jpg');
  return (
    <>
      <ambientLight intensity={0.2} />
      <directionalLight color="gold" position={[0, 0, -13]} />
      <directionalLight color="blue" position={[0, 0, 13]} />
      <mesh ref={Moon} position={[2, 2, 2]}>
        <sphereGeometry args={[2, 14, 14]} />
        <meshStandardMaterial map={colorMoon} />
      </mesh>
      <mesh ref={myMesh}>
        <sphereGeometry args={[8, 64, 64]} />
        <meshStandardMaterial map={colorMap} />
      </mesh>
    </>
  );
}
const TextureGlobe = () => {
  Scene.background = null;
  Scene.fog = true;
  return (
    <div className="globe">
      <Canvas camera={{ fov: 75, near: 0.1, far: 1000, position: [-17, 4, 0] }}>
        <OrbitControls enableZoom={true} />
        <Suspense fallback={null}>
          <Scene />
        </Suspense>
      </Canvas>
    </div>
  );
};
export default TextureGlobe;
