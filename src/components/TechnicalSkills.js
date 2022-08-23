import { Box, Center, Icon, Text } from "@chakra-ui/react";
import {
  SiReact,
  SiExpo,
  SiTypescript,
  SiJavascript,
  SiCss3,
  SiRedux,
  SiHtml5,
} from "react-icons/si";
import React from "react";

const iconSize = 20;
const iconText = 26;
const iconColor = "#aaa";
const iconSpace = 24;

const TechnicalSkills = ({ width }) => {
  return (
    <Center bgColor={"#000"} flexDir={"column"} mb={200}>
      <Text mb={2} color={"#fff"} fontSize={"2xl"}>
        TECHNICAL SKILLS
      </Text>
      <Box
        borderRadius={"full"}
        height={"0.5"}
        width={10}
        bgColor={"#a2a2a2"}
      ></Box>
      <Center mt={20}>
        <Center mx={iconSpace} flexDirection={"column"}>
          <Icon color={iconColor} h={iconSize} w={iconSize} as={SiReact} />
          <Text color={iconColor} fontSize={iconText}>
            React Native
          </Text>
        </Center>

        <Center mx={iconSpace} flexDirection={"column"}>
          <Icon color={iconColor} h={iconSize} w={iconSize} as={SiExpo} />
          <Text color={iconColor} fontSize={iconText}>
            Expo
          </Text>
        </Center>

        <Center mx={iconSpace} flexDirection={"column"}>
          <Icon color={iconColor} h={iconSize} w={iconSize} as={SiReact} />
          <Text color={iconColor} fontSize={iconText}>
            React JS
          </Text>
        </Center>

        <Center mx={iconSpace} flexDirection={"column"}>
          <Icon color={iconColor} h={iconSize} w={iconSize} as={SiRedux} />
          <Text color={iconColor} fontSize={iconText}>
            Redux
          </Text>
        </Center>
      </Center>
      <Center mt={20}>
        <Center mx={iconSpace} flexDirection={"column"}>
          <Icon color={iconColor} h={iconSize} w={iconSize} as={SiJavascript} />
          <Text color={iconColor} fontSize={iconText}>
            React Native
          </Text>
        </Center>

        <Center mx={iconSpace} flexDirection={"column"}>
          <Icon color={iconColor} h={iconSize} w={iconSize} as={SiTypescript} />
          <Text color={iconColor} fontSize={iconText}>
            Expo
          </Text>
        </Center>

        <Center mx={iconSpace} flexDirection={"column"}>
          <Icon color={iconColor} h={iconSize} w={iconSize} as={SiCss3} />
          <Text color={iconColor} fontSize={iconText}>
            CSS
          </Text>
        </Center>

        <Center mx={iconSpace} flexDirection={"column"}>
          <Icon color={iconColor} h={iconSize} w={iconSize} as={SiHtml5} />
          <Text color={iconColor} fontSize={iconText}>
            CSS
          </Text>
        </Center>
      </Center>
      {/* <Center flexDir={"column"}>
        <Box
          my={5}
          overflow={"hidden"}
          borderRadius={"md"}
          bg={"white"}
          height={5}
          width={width * 0.8}
        >
          <Box bg={"#aaa"} h={"full"} w={width * 0.8 * 0.8}></Box>
        </Box>
        <Box
          my={5}
          overflow={"hidden"}
          borderRadius={"md"}
          bg={"white"}
          height={5}
          width={width * 0.8}
        >
          <Box bg={"#aaa"} h={"full"} w={width * 0.8 * 0.8}></Box>
        </Box>
        <Box
          my={5}
          overflow={"hidden"}
          borderRadius={"md"}
          bg={"white"}
          height={5}
          width={width * 0.8}
        >
          <Box bg={"#aaa"} h={"full"} w={width * 0.8 * 0.8}></Box>
        </Box>
        <Box
          my={5}
          overflow={"hidden"}
          borderRadius={"md"}
          bg={"white"}
          height={5}
          width={width * 0.8}
        >
          <Box bg={"#aaa"} h={"full"} w={width * 0.8 * 0.8}></Box>
        </Box>
        <Box
          my={5}
          overflow={"hidden"}
          borderRadius={"md"}
          bg={"white"}
          height={5}
          width={width * 0.8}
        >
          <Box bg={"#aaa"} h={"full"} w={width * 0.8 * 0.8}></Box>
        </Box>
        <Box
          my={5}
          overflow={"hidden"}
          borderRadius={"md"}
          bg={"white"}
          height={5}
          width={width * 0.8}
        >
          <Box bg={"#aaa"} h={"full"} w={width * 0.8 * 0.8}></Box>
        </Box>
      </Center> */}
    </Center>
  );
};

export default TechnicalSkills;
