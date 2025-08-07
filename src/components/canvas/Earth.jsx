// src/components/canvas/Earth.jsx
import React, { Suspense, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import CanvasLoader from "../Loader";

const EarthModel = () => {
  const earth = useGLTF("/planet/scene.gltf");
  const earthRef = useRef();

  // Rotate on every frame
  useFrame(() => {
    if (earthRef.current) {
      earthRef.current.rotation.y += 0.05; // Increase this value for faster spin
    }
  });

  return (
    <primitive
      ref={earthRef}
      object={earth.scene}
      scale={1.4}
      position={[0, 0, 0]}
      rotation={[0.2, 0, 0]}
    />
  );
};

const Earth = () => {
  return (
    <Canvas
      shadows
      dpr={[1, 2]}
      camera={{ position: [0, 0, 5], fov: 45 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <ambientLight intensity={0.6} />
        <directionalLight position={[5, 5, 5]} intensity={0.1} />
        {/* OrbitControls is optional now, can remove or leave for interaction */}
        {/* <OrbitControls enableZoom={false} enablePan={false} /> */}
        <EarthModel />
        <Preload all />
      </Suspense>
    </Canvas>
  );
};

export default Earth;
