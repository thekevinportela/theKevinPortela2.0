import { Box, Center, Text } from "@chakra-ui/react";
import Divider from "./Divider";
import Typewriter from "typewriter-effect";
import React from "react";

const ShowCase = () => {
  return (
    <Box
      mb={{ base: 100, md: 0 }}
      width={"full"}
      position="relative"
      className="ShowCase"
    >
      <Box
        position={"absolute"}
        bgGradient="linear(transparent 50%, #000 90%)"
        h={"100%"}
        w={"full"}
        zIndex={2}
      />

      <Center
        bgImage={require("../assets/imgs/showcase.jpg")}
        bgPosition={"center"}
        h={{ base: "100vh", md: "100vh" }}
        flexDir={"column"}
        width={"100%"}
        bgRepeat={"no-repeat"}
        bgSize={"cover"}
        overflow={"hidden"}
      >
        <Center zIndex={2} flexDir={"column"}>
          <Text
            mt={{ base: 300, md: 300 }}
            textAlign={"center"}
            fontSize={{ base: "2xl", md: "5xl" }}
            color={"#fff"}
          >
            I AM KEVIN THE
          </Text>
          <Text color={"#fff"} fontSize={{ base: "2xl", md: "5xl" }} pb={2}>
            <Typewriter
              options={{
                strings: [
                  "MOBILE DEVELOPER",
                  "WEB DEVELOPER",
                  "SOFTWARE ENGINEER",
                ],
                autoStart: true,
                loop: true,
              }}
            />
          </Text>
          <Divider />
          <Text
            py={4}
            textAlign={"center"}
            fontSize={{ base: "sm", md: "xl" }}
            color={"#fff"}
          >
            I SPECIALIZE IN REACT NATIVE AND REACT.JS
          </Text>
        </Center>
      </Center>
    </Box>
  );
};

export default ShowCase;
