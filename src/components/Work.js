import { Grid, Box, Center, GridItem, Image, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { MY_WORK } from "../portfolioData";
import Divider from "./Divider";

const Work = () => {
  return (
    <Center
      className="Work"
      bgColor={"#000"}
      flexDir={"column"}
      mb={{ base: 100, md: 200 }}
    >
      <Text mb={2} color={"#fff"} fontSize={"2xl"}>
        MY WORK
      </Text>
      <Divider />
      <Text color={"#fff"} my={4}>
        Check out some of my projects!
      </Text>

      <Grid
        templateColumns={{
          base: "repeat(1, 1fr)",
          md: "repeat(2, 1fr)",
          xl: "repeat(3, 1fr)",
        }}
        gap={2}
      >
        {MY_WORK.map((project, i) => {
          return (
            <a target={"_blank"} href={project.link} rel="noreferrer">
              <GridItem>
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{
                    opacity: 1,
                  }}
                  viewport={{ once: false, amount: 0.2 }}
                  whileHover={{ scale: 1.2, zIndex: 100 }}
                  whileTap={{ scale: 0.9, zIndex: 100 }}
                >
                  {project.image ? (
                    <Image
                      src={project.image}
                      h={{ base: 250, md: 300 }}
                      w={{ base: 375, md: 450 }}
                      objectFit={"cover"}
                      borderRadius={"md"}
                    />
                  ) : (
                    <Box
                      h={{ base: 250, md: 300 }}
                      w={{ base: 375, md: 450 }}
                      bg={"#ccc"}
                    ></Box>
                  )}
                </motion.div>
              </GridItem>
            </a>
          );
        })}
      </Grid>
    </Center>
  );
};

export default Work;
