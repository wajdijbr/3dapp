import { Sphere, Circle, OrbitControls } from "@react-three/drei";
import React, { useMemo, useRef, useEffect } from "react";
import { useTexture } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

export const Earth = () => {
  const earthRef = useRef();

  const [earthTexture] = useTexture(["/assets/earth_daymap.jpg"]);

  useFrame(({ clock }) => {
    // // Orbit Rotation
    earthRef.current.position.x = Math.sin(clock.getElapsedTime() * 0.1) * 120;
    earthRef.current.position.z = Math.cos(clock.getElapsedTime() * 0.1) * 120;
    // Axis Rotation
    earthRef.current.rotation.y += 0.001;
  });
  return (
    <mesh castShadow ref={earthRef}>
      {/* RADIUS AXE X ET AXE Y */}

      <Sphere args={[50 / 18, 32, 32]}>
        <meshStandardMaterial map={earthTexture} />
      </Sphere>
    </mesh>
  );
};
