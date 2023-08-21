import { Sphere } from "@react-three/drei";
import React, { useRef } from "react";
import { useTexture } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
export const Neptune = ({ animated }) => {
  const neptuneRef = useRef();

  const [neptuneTexture] = useTexture(["/assets/neptune.jpg"]);

  useFrame(({ clock }) => {
    if (animated) {
      // // Orbit Rotation
      neptuneRef.current.position.x =
        Math.sin(clock.getElapsedTime() * 16.4) * 265;
      neptuneRef.current.position.z =
        Math.cos(clock.getElapsedTime() * 16.4) * 265;
      // Axis Rotation
      neptuneRef.current.rotation.y += 0.01;
    }
  });
  return (
    <mesh castShadow ref={neptuneRef} position={[265, 0, 0]}>
      {/* RADIUS AXE X ET AXE Y */}
      <Sphere args={[0.5, 32, 32]}>
        <meshStandardMaterial map={neptuneTexture} />
      </Sphere>
    </mesh>
  );
};
