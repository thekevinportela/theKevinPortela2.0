import { Center, Image, Text } from "@chakra-ui/react";
import React from "react";
import Divider from "./Divider";

const AboutMe = () => {
  return (
    <Center
      className="AboutMe"
      bgColor={"#000"}
      flexDir={"column"}
      mb={{ base: 100, md: 200 }}
    >
      <Text mb={2} color={"#fff"} fontSize={"2xl"}>
        ABOUT ME
      </Text>
      <Divider />
      <Text color={"#fff"} my={4}>
        Let me tell you a little about myself and what I do...
      </Text>

      <Center pt={4} bg={"black"} flexDir={{ base: "column", lg: "row" }}>
        <Image
          objectFit={"cover"}
          src={require("../assets/imgs/about.jpg")}
          margin={5}
          borderRadius={"2xl"}
          h={"2xs"}
          w={"sm"}
        />
        <Center
          flexDir={"column"}
          margin={5}
          borderRadius={"3xl"}
          h={{ base: "md", md: "2xs" }}
          bg={"#000"}
          maxWidth={700}
          borderLeftColor={"#aaa"}
          borderLeftWidth={5}
        >
          <Text color={"#fff"} fontSize={20} textAlign={"center"}>
            YOUR PROJECT IS IN GOOD HANDS
          </Text>
          <Text
            color={"#fff"}
            mx={5}
            my={5}
            textAlign={"left"}
            lineHeight={"24px"}
          >
            Passionate Mobile Engineer with over 1 year of mobile application
            development experience as a key member of Caribu's development team
            building cross-platform native and web applications using React
            Native and front-end knowledge for upgradation support. Dedicated to
            continuously discovering, evaluating, and implementing new
            technologies to maximize development efficiency. Seeking to leverage
            and expand proven competence in software feature development,
            implementation, and problem-solving.
          </Text>
        </Center>
      </Center>
    </Center>
  );
};

export default AboutMe;
