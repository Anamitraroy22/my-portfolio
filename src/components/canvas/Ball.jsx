// src/components/canvas/BallCanvas.jsx
import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { Float, Preload, useTexture, Decal } from "@react-three/drei";
import CanvasLoader from "../Loader";

// Import the fallback icon from your assets index.
// Ensure 'fallbacktech' is correctly imported and exported in src/assets/index.js
import { fallbacktech as fallbackIcon } from "../../assets";


// 🎯 Ball component
const Ball = ({ imgUrl }) => {
  // useTexture will suspend the component if imgUrl is loading or fails.
  // Suspense will catch this and show CanvasLoader.
  // The imgUrl passed here MUST be a valid, loadable string URL.
  const [texture] = useTexture([imgUrl]);

  return (
    <Float speed={3} rotationIntensity={0} floatIntensity={3.5}>
      <ambientLight intensity={0.25} />
      <directionalLight position={[0, 0, 0.05]} />

      <mesh castShadow receiveShadow scale={2.75}>
        <icosahedronGeometry args={[1, 1]} />
        <meshStandardMaterial
          color="#fff8eb"
          polygonOffset
          polygonOffsetFactor={-5}
          flatShading
        />

        {texture && ( // Ensure texture exists before trying to render Decal
          <Decal
            position={[0, 0, 1]}
            rotation={[2 * Math.PI, 0, 0]}
            scale={1}
            map={texture}
            transparent
            polygonOffset
            polygonOffsetFactor={-7}
            depthWrite={false}
            depthTest
            alphaTest={0.001}
          />
        )}
      </mesh>
    </Float>
  );
};

// ✅ BallCanvas wrapper
const BallCanvas = ({ icon }) => {
  // This logic is critical: it ensures imgUrl is ALWAYS a valid string URL
  // before being passed to useTexture.
  let resolvedIcon = fallbackIcon; // Start with fallback as default

  if (typeof icon === "string" && icon) {
    // If it's a non-empty string, use it directly
    resolvedIcon = icon;
  } else if (typeof icon === "object" && icon !== null && icon.default) {
    // If it's an object (e.g., Webpack/Vite import) and has a .default property
    resolvedIcon = icon.default;
  }

  // Optional: Add a console log to verify the resolved URL
  console.log("BallCanvas: Resolved icon URL:", resolvedIcon);

  return (
    <Canvas frameloop="always" dpr={[1, 2]} gl={{ preserveDrawingBuffer: true }} className="w-full h-full">
      <Suspense fallback={<CanvasLoader />}>
        {/* Pass the fully resolved and validated icon URL to the Ball component */}
        <Ball imgUrl={resolvedIcon} />
      </Suspense>
      <Preload all />
    </Canvas>
  );
};

export default BallCanvas;