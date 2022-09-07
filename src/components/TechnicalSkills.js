import { Box, Center, Grid, GridItem, Icon, Text } from "@chakra-ui/react";

import React from "react";
import { MY_SKILLS } from "../portfolioData";

const iconSize = 20;
const iconText = 26;
const iconColor = "#aaa";
const iconSpace = { base: 10, md: 20 };

const TechnicalSkills = ({ width }) => {
  return (
    <Center bgColor={"#000"} flexDir={"column"} mb={{ base: 100, md: 200 }}>
      <Text mb={2} color={"#fff"} fontSize={"2xl"}>
        TECHNICAL SKILLS
      </Text>
      <Box
        borderRadius={"full"}
        height={"0.5"}
        width={10}
        bgColor={"#a2a2a2"}
      ></Box>

      <Grid
        mt={20}
        templateColumns={{ base: "repeat(2, 1fr)", md: "repeat(4, 1fr)" }}
        gap={0}
        rowGap={20}
      >
        {MY_SKILLS.map((skill, i) => {
          return (
            <GridItem>
              <Center mx={iconSpace} flexDirection={"column"}>
                <Icon
                  color={iconColor}
                  h={iconSize}
                  w={iconSize}
                  as={skill.icon}
                />
                <Text
                  textAlign={"center"}
                  color={iconColor}
                  fontSize={iconText}
                >
                  {skill.name}
                </Text>
              </Center>
            </GridItem>
          );
        })}
      </Grid>
    </Center>
  );
};

export default TechnicalSkills;
