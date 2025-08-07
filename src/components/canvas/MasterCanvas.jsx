// src/components/canvas/MasterCanvas.jsx
import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { Preload } from "@react-three/drei"; // OrbitControls removed as you want it fixed
import Stars from "./Stars";
import CanvasLoader from "../Loader";

const MasterCanvas = () => {
  return (
    <div className='w-full h-auto absolute inset-0 z-[-1]'>
      <Canvas 
        // Adjusted camera position to be further back to view the larger star sphere
        camera={{ position: [0, 0, 10], fov: 75 }} // Increased FOV for wider view
        gl={{ preserveDrawingBuffer: true }}
        // Added temporary black background to the Canvas itself for debugging visibility
        className="fixed inset-0 z-[-1] bg-black" 
      >
        <Suspense fallback={<CanvasLoader />}>
          {/* No lights needed for PointMaterial unless you want to affect other objects */}
          {/* <ambientLight intensity={0.5} /> */}
          {/* <directionalLight position={[5, 5, 5]} intensity={1.2} /> */}

          <Stars />

          {/* OrbitControls are typically not needed for a fixed background starfield,
              unless you want the user to be able to manually rotate the stars.
              If you want auto-rotation only, handle it in useFrame of Stars component.
          */}
          {/* <OrbitControls
            autoRotate
            autoRotateSpeed={1.0}
            enableZoom={false}
            enablePan={false}
            maxPolarAngle={Math.PI / 2}
            minPolarAngle={Math.PI / 2}
          /> */}

          <Preload all />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default MasterCanvas;