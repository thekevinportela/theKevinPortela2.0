import { Box, Center, Image, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";

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
      <Center mt={5}>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: false, amount: 0.2 }}
          whileHover={{ scale: 1.2 }}
        >
          <Image
            src={require("../assets/imgs/NumberGuesser.jpeg")}
            h={300}
            w={450}
            objectFit={"cover"}
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: false, amount: 0.5 }}
          whileHover={{ scale: 1.2, borderRadius: 20 }}
        >
          <Image
            src={require("../assets/imgs/WeatherApp.jpeg")}
            h={300}
            w={450}
            objectFit={"cover"}
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: false, amount: 0.8 }}
          whileHover={{ scale: 1.2 }}
        >
          <Image
            src={require("../assets/imgs/TodoApp.jpeg")}
            h={300}
            w={450}
            objectFit={"cover"}
          />
        </motion.div>
      </Center>
      <Center>
        <Box
          border={"1px"}
          borderColor={"#000"}
          h={300}
          w={450}
          bg={"#ccc"}
        ></Box>
        <Box
          border={"1px"}
          borderColor={"#000"}
          h={300}
          w={450}
          bg={"#ccc"}
        ></Box>
        <Box
          border={"1px"}
          borderColor={"#000"}
          h={300}
          w={450}
          bg={"#ccc"}
        ></Box>
      </Center>
      <Center>
        <Box
          border={"1px"}
          borderColor={"#000"}
          h={300}
          w={450}
          bg={"#ccc"}
        ></Box>
        <Box
          border={"1px"}
          borderColor={"#000"}
          h={300}
          w={450}
          bg={"#ccc"}
        ></Box>
        <Box
          border={"1px"}
          borderColor={"#000"}
          h={300}
          w={450}
          bg={"#ccc"}
        ></Box>
      </Center>
    </Center>
  );
};

export default Work;
