import { Sphere } from "@react-three/drei";
import React, { useRef } from "react";
import { useTexture } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
export const Uranus = ({ animated }) => {
  const uranusRef = useRef();

  const [uranusTexture] = useTexture(["/assets/uranus.jpg"]);

  useFrame(({ clock }) => {
    if (animated) {
      // // Orbit Rotation
      uranusRef.current.position.x =
        Math.sin(clock.getElapsedTime() * 8.4) * 250;
      uranusRef.current.position.z =
        Math.cos(clock.getElapsedTime() * 8.4) * 250;
      // Axis Rotation
      uranusRef.current.rotation.y += 0.01;
    }
  });
  return (
    <mesh castShadow ref={uranusRef} position={[250, 0, 0]}>
      {/* RADIUS AXE X ET AXE Y */}
      <Sphere args={[50 / 16, 32, 32]}>
        <meshStandardMaterial map={uranusTexture} />
      </Sphere>
    </mesh>
  );
};
