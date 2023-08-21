import { Sphere } from "@react-three/drei";
import React, { useRef } from "react";
import { useTexture } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
export const Mercury = ({ animated }) => {
  const mercuryRef = useRef();
  const mercurySpeed = 1 * (365 / 88);

  const [mercuryTexture] = useTexture(["/assets/mercury.jpg"]);

  useFrame(({ clock }) => {
    if (animated) {
      // Orbit Rotation

      mercuryRef.current.position.x =
        Math.sin(clock.getElapsedTime() * 0.024) * 70;
      mercuryRef.current.position.z =
        Math.cos(clock.getElapsedTime() * 0.024) * 70;

      // Axis Rotation
      mercuryRef.current.rotation.y += 0.01;
    }
  });
  return (
    <mesh castShadow ref={mercuryRef} position={[70, 0, 0]}>
      {/* RADIUS AXE X ET AXE Y */}
      <Sphere args={[50 / 38, 32, 32]}>
        <meshStandardMaterial map={mercuryTexture} />
      </Sphere>
    </mesh>
  );
};
