import { Box, Center, Grid, Image, Text } from "@chakra-ui/react";

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
        <Image
          src={require("../assets/imgs/NumberGuesserThumbnail.jpg")}
          h={300}
          w={450}
          objectFit={"cover"}
        />
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
