import { OrbitControls, Sphere } from "@react-three/drei";
import React, { useRef, useState } from "react";
import { Grid, GridItem } from "@chakra-ui/react";
import { Earth } from "./planets/Earth";
import { Canvas } from "@react-three/fiber";
import { useTexture } from "@react-three/drei";

const Model = () => {
  const earthRef = useRef();

  const [earthTexture] = useTexture(["/assets/earth_daymap.jpg"]);

  const styles = {
    grid: {
      backgroundColor: "black",
      margin: "1rem",
    },
    girdItem: {
      backgroundColor: "black",
      color: "white",
      width: "100%",
      borderRadius: "5px",
      border: "2px solid blue",
    },
  };
  return (
    <>
      <Grid style={styles.gird} templateColumns="repeat(9, 1fr)" gap={1}>
        <GridItem style={styles.girdItem}>
          <Canvas camera={{ position: [0, 1000, 100] }}>
            <ambientLight />

            <Sphere args={[50, 32, 32]}>
              <meshStandardMaterial />
            </Sphere>
          </Canvas>
        </GridItem>
        <GridItem style={styles.girdItem}>earth</GridItem>
        <GridItem style={styles.girdItem}>earth</GridItem>
        <GridItem style={styles.girdItem}>earth</GridItem>
        <GridItem style={styles.girdItem}>earth</GridItem>
        <GridItem style={styles.girdItem}>earth</GridItem>
        <GridItem style={styles.girdItem}>earth</GridItem>
        <GridItem style={styles.girdItem}>earth</GridItem>
        <GridItem style={styles.girdItem}>earth</GridItem>
      </Grid>
    </>
  );
};

export default Model;
