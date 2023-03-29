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
          bg={"#000"}
          maxWidth={700}
          borderLeftColor={"#aaa"}
          borderLeftWidth={5}
        >
          <Text
            color={"#fff"}
            fontSize={20}
            textAlign={"center"}
            marginTop={"4"}
          >
            YOUR PROJECT IS IN GOOD HANDS
          </Text>
          <Text
            color={"#fff"}
            mx={5}
            my={5}
            textAlign={"left"}
            lineHeight={"24px"}
          >
            Highly motivated Software Engineer with 2 years of experience in web
            and mobile application development. Proven ability to work
            effectively as a key member of agile development teams, contributing
            to the design, implementation, and maintenance of robust and
            high-performance applications. A lifelong learner always dedicated
            to improvement and growth by continuously discovering, evaluating,
            and implementing new technologies to maximize development efficiency
            and deliver exceptional results. Seeking a new opportunity to
            leverage my proven competence in software feature development,
            detailed analysis, implementation, and problem-solving. Well-versed
            in HTML, CSS, JavaScript, Typescript, React.js, React Native, C#,
            .Net, and other programming frameworks.
          </Text>
        </Center>
      </Center>
    </Center>
  );
};

export default AboutMe;
