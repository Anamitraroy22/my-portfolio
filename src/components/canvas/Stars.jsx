// src/components/canvas/Stars.jsx
import * as THREE from "three";
import { useRef, useState, useEffect } from "react";
import { useFrame } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";
import * as random from "maath/random/dist/maath-random.esm";

const Stars = (props) => {
  const ref = useRef();
  // Increased sphere radius and count for better visibility and density
  const [positions] = useState(() =>
    random.inSphere(new Float32Array(60000), { radius: 10 }) // Increased radius to 10
  );

  const [baseColor] = useState(() => new THREE.Color("#f272c8"));

  useFrame((state, delta) => {
    // rotation
    ref.current.rotation.x -= delta / 10;
    ref.current.rotation.y -= delta / 15;

    // Twinkle effect (can be uncommented once stars are visible)
    // const time = state.clock.elapsedTime;
    // const twinkle = 0.2 + 0.1 * Math.sin(time * 3);
    // ref.current.material.opacity = twinkle;
  });

  // Debugging: Log when Stars component renders
  useEffect(() => {
    console.log("Stars component rendered with", positions.length, "points.");
  }, [positions]);

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points
        ref={ref}
        positions={positions}
        stride={3}
        frustumCulled
        {...props}
      >
        <PointMaterial
          transparent
          color={baseColor}
          size={0.003} // Slightly increased size for better visibility
          opacity={1} // Force opacity to 1 for debugging
          sizeAttenuation={true}
          depthWrite={false}
        />
      </Points>
    </group>
  );
};

export default Stars;