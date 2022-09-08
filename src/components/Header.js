import { Box, HStack, Text, useBreakpointValue } from "@chakra-ui/react";
import { useState } from "react";
import { Link } from "react-scroll";

const Header = () => {
  const [selected, setSelected] = useState(0);

  const clicked = (n) => {
    setSelected(n);
  };

  const offset = useBreakpointValue({
    base: -140,
    md: -100,
  });

  const LINK_DATA = [
    {
      label: "HOME",
      to: "ShowCase",
      offset: offset,
      id: 1,
    },
    {
      label: "ABOUT",
      to: "AboutMe",
      offset: offset,
      id: 2,
    },
    {
      label: "WORK",
      to: "Work",
      offset: offset,
      id: 3,
    },
    {
      label: "CONTACT",
      to: "Contact",
      offset: offset,
      id: 4,
    },
  ];

  return (
    <HStack
      flexDirection={{ base: "column", md: "row" }}
      position={"fixed"}
      w={"full"}
      justifyContent={{ base: "space-around", md: "space-between" }}
      bg={"black"}
      zIndex={10}
    >
      <Link
        to="ShowCase"
        spy={true}
        smooth={true}
        offset={0}
        duration={600}
        onClick={() => clicked(0)}
        style={{ cursor: "pointer" }}
      >
        <Text px={{ base: 0, md: 5 }} color={"white"} fontSize={60}>
          KP
        </Text>
      </Link>
      <HStack px={{ base: 0, md: 5 }}>
        {LINK_DATA.map((link) => (
          <RenderLink
            label={link.label}
            to={link.to}
            offset={link.offset}
            id={link.id}
            selected={selected}
            clicked={clicked}
          />
        ))}
      </HStack>
    </HStack>
  );
};

export default Header;

const RenderLink = ({ label, to, offset, id, selected, clicked }) => {
  return (
    // <Box p={4}>
    <Box px={{ base: 2, md: 4 }} pb={{ base: 3, md: 0 }}>
      <Link
        to={to}
        spy={true}
        smooth={true}
        offset={offset}
        duration={600}
        onClick={() => clicked(id)}
        style={{
          cursor: "pointer",
        }}
      >
        <Text color={selected === id ? "gold" : "white"} fontSize={16}>
          {label}
        </Text>
      </Link>
    </Box>
  );
};
