import React, { useRef } from "react";
import { Torus } from "@react-three/drei";

import * as THREE from "three";

const Rings = () => {
  const RingRef = useRef();

  return (
    <>
      <Torus
        ref={RingRef}
        args={[120, 0.2, 120, 120]}
        rotation={[Math.PI / 2, 0, 0]}
      >
        <meshStandardMaterial
          color="red"
          side={THREE.DoubleSide}
          // transparent:
        />
      </Torus>
      <Torus
        ref={RingRef}
        args={[70, 0.2, 120, 120]}
        rotation={[Math.PI / 2, 0, 0]}
      >
        <meshStandardMaterial
          color="blue"
          side={THREE.DoubleSide}
          // transparent:
        />
      </Torus>
      <Torus
        ref={RingRef}
        args={[95, 0.2, 120, 120]}
        rotation={[Math.PI / 2, 0, 0]}
      >
        <meshStandardMaterial
          color="white"
          side={THREE.DoubleSide}
          // transparent:
        />
      </Torus>
      <Torus
        ref={RingRef}
        args={[265, 0.2, 120, 120]}
        rotation={[Math.PI / 2, 0, 0]}
      >
        <meshStandardMaterial
          color="yellow"
          side={THREE.DoubleSide}
          // transparent:
        />
      </Torus>
      <Torus
        ref={RingRef}
        args={[148, 0.2, 120, 120]}
        rotation={[Math.PI / 2, 0, 0]}
      >
        <meshStandardMaterial
          color="blue"
          side={THREE.DoubleSide}
          // transparent:
        />
      </Torus>
      <Torus
        ref={RingRef}
        args={[180, 0.2, 120, 120]}
        rotation={[Math.PI / 2, 0, 0]}
      >
        <meshStandardMaterial
          color="orange"
          side={THREE.DoubleSide}
          // transparent:
        />
      </Torus>
      <Torus
        ref={RingRef}
        args={[220, 0.2, 120, 120]}
        rotation={[Math.PI / 2, 0, 0]}
      >
        <meshStandardMaterial
          color="green"
          side={THREE.DoubleSide}
          // transparent:
        />
      </Torus>
      <Torus
        ref={RingRef}
        args={[250, 0.2, 120, 120]}
        rotation={[Math.PI / 2, 0, 0]}
      >
        <meshStandardMaterial
          color="red"
          side={THREE.DoubleSide}
          // transparent:
        />
      </Torus>
    </>
  );
};

export default Rings;
