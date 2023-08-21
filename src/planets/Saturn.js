import { Sphere, Torus } from "@react-three/drei";
import React, { useRef } from "react";
import { useTexture } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";
export const Saturn = ({ animated }) => {
  const saturnRef = useRef();
  const ringRef = useRef();

  const [saturnTexture] = useTexture(["/assets/saturn.jpg"]);
  const [ringTexture] = useTexture(["/assets/saturn_ring_alpha.png"]);

  useFrame(({ clock }) => {
    if (animated) {
      // // Orbit Rotation
      saturnRef.current.position.x =
        Math.sin(clock.getElapsedTime() * 2.9) * 220;
      saturnRef.current.position.z =
        Math.cos(clock.getElapsedTime() * 2.9) * 220;
      // Axis Rotation
      saturnRef.current.rotation.y += 0.01;
    }
  });
  return (
    <mesh castShadow ref={saturnRef} position={[220, 0, 0]}>
      {/* RADIUS AXE X ET AXE Y */}
      <Sphere args={[50 / 7, 32, 32]}>
        <meshStandardMaterial map={saturnTexture} />
      </Sphere>
      <Torus
        ref={ringRef}
        args={[0.8, 0.05, 64, 64]}
        rotation={[Math.PI / 2, 0, 0]}
      >
        <meshStandardMaterial
          // color="#CCC"
          side={THREE.DoubleSide}
          map={ringTexture}
          alphaMap={ringTexture}
          // transparent:
        />
      </Torus>
    </mesh>
  );
};
