import { Sphere, OrbitControls, PerspectiveCamera } from "@react-three/drei";
import React, { useEffect, useRef, useState } from "react";
import { useTexture } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { Mercury } from "./planets/Mercury";
import { Venus } from "./planets/Venus";
import { Mars } from "./planets/Mars";
import { Jupiter } from "./planets/Jupiter";
import { Saturn } from "./planets/Saturn";
import { Uranus } from "./planets/Uranus";
import { Neptune } from "./planets/Neptune";
import * as THREE from "three";
import Rings from "./planets/Rings";
import { Earth } from "./planets/Earth";

export const Sun = ({ animated }) => {
  const [sunTexture] = useTexture(["/assets/sun.jpg"]);
  const sunRef = useRef();
  const earthRef = useRef();
  const cameraRef = useRef(null);

  useEffect(() => {
    if (!!cameraRef.current) {
      console.log(cameraRef.current);
    }
  }, [cameraRef.current]);

  const [earthTexture] = useTexture(["/assets/earth_daymap.jpg"]);

  useFrame(({ clock }) => {
    if (animated) {
      // // Orbit Rotation

      earthRef.current.position.x =
        Math.sin(clock.getElapsedTime() * 0.1) * 120;
      earthRef.current.position.z =
        Math.cos(clock.getElapsedTime() * 0.1) * 120;
      // Axis Rotation
      earthRef.current.rotation.y += 0.001;
    }
  });

  useFrame(() => {
    if (animated) {
      sunRef.current.rotation.y += 0.002;
    }
  });
  return (
    <group>
      <mesh ref={sunRef}>
        {/* RADIUS AXE X ET AXE Y */}
        <Sphere args={[50, 32, 32]}>
          <meshStandardMaterial map={sunTexture} />
        </Sphere>
        <Rings />
      </mesh>
      <mesh castShadow ref={earthRef}>
        {/* RADIUS AXE X ET AXE Y */}
        <OrbitControls enablePan={true} ref={cameraRef} />
        <Sphere args={[50 / 18, 32, 32]}>
          <meshStandardMaterial map={earthTexture} />
        </Sphere>
      </mesh>
      <Mercury animated={animated} />
      <Venus animated={animated} />

      <Mars animated={animated} />
      <Jupiter animated={animated} />
      <Saturn animated={animated} />
      <Uranus animated={animated} />
      <Neptune animated={animated} />
    </group>
  );
};
