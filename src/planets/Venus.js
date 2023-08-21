import { Sphere } from "@react-three/drei";
import React, { useRef } from "react";
import { useTexture } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
export const Venus = ({ animated }) => {
  const venusRef = useRef();

  const [venusTexture] = useTexture(["/assets/venus.jpg"]);

  useFrame(({ clock }) => {
    if (animated) {
      // Orbit Rotation
      venusRef.current.position.x =
        Math.sin(clock.getElapsedTime() * 0.06) * 95;
      venusRef.current.position.z =
        Math.cos(clock.getElapsedTime() * 0.06) * 95;
      // Axis Rotation
      venusRef.current.rotation.y += 0.01;
    }
  });
  return (
    <mesh castShadow ref={venusRef} position={[95, 0, 0]}>
      {/* RADIUS AXE X ET AXE Y */}
      <Sphere args={[50 / 19, 32, 32]}>
        <meshStandardMaterial map={venusTexture} />
      </Sphere>
    </mesh>
  );
};
