import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Sphere } from '@react-three/drei';

export function Background() {
  return (
    <div className="fixed inset-0 -z-10">
      <Canvas
        camera={{ position: [0, 0, 15], fov: 50 }}
        style={{ background: 'transparent' }}
      >
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />
        <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={0.5} />
        <Sphere args={[8, 64, 64]}>
          <meshBasicMaterial color="#6366f1" wireframe />
        </Sphere>
        {Array.from({ length: 100 }).map((_, i) => (
          <mesh key={i} position={[
            Math.random() * 40 - 20,
            Math.random() * 40 - 20,
            Math.random() * 40 - 20
          ]}>
            <sphereGeometry args={[0.1]} />
            <meshPhongMaterial color="#6366f1" />
          </mesh>
        ))}
      </Canvas>
    </div>
  );
}