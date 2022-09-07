import { Grid, Box, Center, GridItem, Image, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { MY_WORK } from "../portfolioData";

const Work = () => {
  return (
    <Center className="Work" bgColor={"#000"} flexDir={"column"} mb={200}>
      <Text mb={2} color={"#fff"} fontSize={"2xl"}>
        MY WORK
      </Text>
      <Box
        borderRadius={"full"}
        height={"0.5"}
        width={10}
        bgColor={"#a2a2a2"}
      ></Box>
      <Text color={"#fff"} my={4}>
        Check out some of my projects!
      </Text>

      <Grid templateColumns="repeat(3, 1fr)" gap={2}>
        {MY_WORK.map((project, i) => {
          return (
            <GridItem>
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{
                  opacity: 1,
                }}
                viewport={{ once: false, amount: 0.2 }}
                whileHover={{ scale: 1.2, zIndex: 100 }}
              >
                {project.image ? (
                  <Image
                    src={project.image}
                    h={300}
                    w={450}
                    objectFit={"cover"}
                  />
                ) : (
                  <Box h={300} w={450} bg={"#ccc"}></Box>
                )}
              </motion.div>
            </GridItem>
          );
        })}
      </Grid>
    </Center>
  );
};

export default Work;
