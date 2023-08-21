import { Sphere } from "@react-three/drei";
import React, { useRef } from "react";
import { useTexture } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
export const Jupiter = ({ animated }) => {
  const jupiterRef = useRef();

  const [jupiterTexture] = useTexture(["/assets/jupiter.jpg"]);

  useFrame(({ clock }) => {
    if (animated) {
      // // Orbit Rotation
      jupiterRef.current.position.x =
        Math.sin(clock.getElapsedTime() * 1.1) * 180;
      jupiterRef.current.position.z =
        Math.cos(clock.getElapsedTime() * 1.1) * 180;
      // Axis Rotation
      jupiterRef.current.rotation.y += 0.01;
    }
  });
  return (
    <mesh castShadow ref={jupiterRef} position={[180, 0, 0]}>
      {/* RADIUS AXE X ET AXE Y */}
      <Sphere args={[50 / 6, 32, 32]}>
        <meshStandardMaterial map={jupiterTexture} />
      </Sphere>
    </mesh>
  );
};
