import Work from "./../components/Work";
import { Box } from "@chakra-ui/react";
import AboutMe from "../components/AboutMe";
import Header from "../components/Header";
import ShowCase from "../components/ShowCase";
import TechnicalSkills from "../components/TechnicalSkills";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

const Main = () => {
  return (
    <Box
      bg={"black"}
      display={"flex"}
      flex={1}
      width="full"
      flexDirection={"column"}
    >
      <Header />
      <ShowCase />
      <AboutMe />
      <TechnicalSkills />
      <Work />
      <Contact />
      <Footer />
    </Box>
  );
};

export default Main;
