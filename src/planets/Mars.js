import { Sphere } from "@react-three/drei";
import React, { useRef } from "react";
import { useTexture } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
export const Mars = ({ animated }) => {
  const marsRef = useRef();

  const [marsTexture] = useTexture(["/assets/mars.jpg"]);

  useFrame(({ clock }) => {
    if (animated) {
      // // Orbit Rotation
      marsRef.current.position.x =
        Math.sin(clock.getElapsedTime() * 0.18) * 148;
      marsRef.current.position.z =
        Math.cos(clock.getElapsedTime() * 0.18) * 148;
      // Axis Rotation
      marsRef.current.rotation.y += 0.01;
    }
  });
  return (
    <mesh castShadow ref={marsRef} position={[148, 0, 0]}>
      {/* RADIUS AXE X ET AXE Y */}
      <Sphere args={[50 / 21, 32, 32]}>
        <meshStandardMaterial map={marsTexture} />
      </Sphere>
    </mesh>
  );
};
