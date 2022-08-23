import Work from "./../components/Work";
import { Box } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import AboutMe from "../components/AboutMe";
import Header from "../components/Header";
import ShowCase from "../components/ShowCase";
import TechnicalSkills from "../components/TechnicalSkills";
import Contact from "../components/Contact";

const Main = () => {
  const [width, setWidth] = useState(window.innerWidth);

  function handleWindowSizeChange() {
    setWidth(window.innerWidth);
  }
  useEffect(() => {
    window.addEventListener("resize", handleWindowSizeChange);
    return () => {
      window.removeEventListener("resize", handleWindowSizeChange);
    };
  }, []);

  const isMobile = width <= 768;

  return (
    <Box
      bg={"black"}
      minWidth={1000}
      display={"flex"}
      flex={1}
      flexDirection={"column"}
    >
      <Header />
      <ShowCase />
      <AboutMe />
      <TechnicalSkills width={width} />
      <Work />
      <Contact />
    </Box>
  );
};

export default Main;
