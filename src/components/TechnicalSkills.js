import { Center, Grid, GridItem, Icon, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";

import Divider from "./Divider";
import React from "react";
import { MY_SKILLS } from "../portfolioData";

const iconSize = 20;
const iconText = 26;
const iconColor = "#ddd";
const iconSpace = { base: 10, md: 20 };

const TechnicalSkills = ({ width }) => {
  return (
    <Center bgColor={"#000"} flexDir={"column"} mb={{ base: 100, md: 200 }}>
      <Text mb={2} color={"#fff"} fontSize={"2xl"}>
        TECHNICAL SKILLS
      </Text>
      <Divider />

      <Grid
        mt={20}
        templateColumns={{ base: "repeat(2, 1fr)", md: "repeat(4, 1fr)" }}
        gap={0}
        rowGap={20}
      >
        {MY_SKILLS.map((skill, i) => {
          return (
            <GridItem>
              <motion.div
                whileHover={{
                  scale: 1.2,
                }}
              >
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
              </motion.div>
            </GridItem>
          );
        })}
      </Grid>
    </Center>
  );
};

export default TechnicalSkills;
