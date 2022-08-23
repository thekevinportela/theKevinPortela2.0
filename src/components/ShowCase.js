import { Box, Center, Text } from "@chakra-ui/react";
import React from "react";

const ShowCase = () => {
  return (
    <Center className="ShowCase">
      <Box
        position={"absolute"}
        bgGradient="linear(transparent 50%, #000 90%)"
        h={"100vh"}
        width={"full"}
        zIndex={2}
      ></Box>

      <Center
        bgImage={require("../assets/imgs/showcase.jpg")}
        bgPosition={"center"}
        h={"100vh"}
        flexDir={"column"}
        width={"full"}
        bgRepeat={"no-repeat"}
        bgSize={"cover"}
        overflow={"hidden"}
        // zIndex={-1}
      >
        <Center zIndex={2} flexDir={"column"}>
          <Text mt={300} textAlign={"center"} fontSize={"5xl"} color={"#fff"}>
            I AM KEVIN THE MOBILE DEVELOPER
          </Text>
          <Text textAlign={"center"} fontSize={"xl"} color={"#fff"}>
            I SPECIALIZE IN REACT NATIVE AND REACT.JS
          </Text>
        </Center>
      </Center>
    </Center>
  );
};

export default ShowCase;
