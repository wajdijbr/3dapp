import { useHelper } from "@react-three/drei";
import React, { useRef } from "react";
import AnimatedStars from "./AnimatedStars";
import { Sun } from "./Sun";
import * as THREE from "three";
import { Moon } from "./planets/Mercury";

const MainContainer = ({ animated }) => {
  const directionalLightRef = useRef();
  const directionalLightRefTwo = useRef();

  useHelper(directionalLightRef, THREE.DirectionalLightHelper, 1, "hotpink");
  useHelper(directionalLightRefTwo, THREE.DirectionalLightHelper, 1, "hotpink");

  return (
    <>
      <color attach={"background"} args={["black"]} />

      <AnimatedStars />
      {/* <directionalLight ref={directionalLightRef} position={[0, 0, 10]} />
      <directionalLight ref={directionalLightRefTwo} position={[0, 0, -10]} /> */}
      <ambientLight />
      <Sun animated={animated} />
    </>
  );
};

export default MainContainer;
