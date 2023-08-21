import "./App.css";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, PerspectiveCamera } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import React, { useEffect, useRef, useState } from "react";

import Menu from "./menu/Menu";
import MainContainer from "./MainContainer";
import { Button, ChakraProvider, GridItem } from "@chakra-ui/react";
import { Switch, useToast } from "@chakra-ui/react";
import { Grid } from "@chakra-ui/react";
import { Sun } from "./Sun";
import Model from "./Model";

function App() {
  const [animated, setAnimated] = useState(true);
  const toast = useToast();

  const handleclick = () => {
    setAnimated(!animated);
    console.log(animated);
    toast({
      title: animated === true ? "continue" : "stopped",
      status: "success",
      duration: 2000,
      isClosable: true,
    });
  };
  return (
    <>
      <ChakraProvider>
        <Grid templateColumns="repeat(2, 1fr)" gap={2}>
          <GridItem>
            {" "}
            <Menu />
          </GridItem>

          <GridItem>
            {" "}
            <Switch
              id="email-alerts"
              isChecked={animated}
              onChange={handleclick}
            />
          </GridItem>
        </Grid>
        <div className="App2">
          <Model />
        </div>
        <div className="App">
          <Canvas camera={{ position: [0, 20, 150] }}>
            <MainContainer animated={animated} />
          </Canvas>
        </div>
      </ChakraProvider>
      {/* <Test /> */}
    </>
  );
}

export default App;
