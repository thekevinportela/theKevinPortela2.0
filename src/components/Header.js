import { HStack, Text } from "@chakra-ui/react";
import { useState } from "react";
import { Link } from "react-scroll";

const Header = () => {
  const [selected, setSelected] = useState(0);

  const clicked = (n) => {
    setSelected(n);
  };

  return (
    <HStack
      position={"fixed"}
      w={"full"}
      justifyContent={"space-between"}
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
        <Text px={5} color={"white"} fontSize={60}>
          KP
        </Text>
      </Link>
      <HStack px={5}>
        <Link
          to="ShowCase"
          spy={true}
          smooth={true}
          offset={0}
          duration={600}
          onClick={() => clicked(1)}
          style={{ cursor: "pointer" }}
        >
          <Text color={selected === 1 ? "gold" : "white"}>HOME</Text>
        </Link>
        <Link
          to="AboutMe"
          spy={true}
          smooth={true}
          offset={-100}
          duration={600}
          onClick={() => clicked(2)}
          style={{ cursor: "pointer", marginLeft: 20 }}
        >
          <Text color={selected === 2 ? "gold" : "white"}>ABOUT</Text>
        </Link>
        <Link
          to="Work"
          spy={true}
          smooth={true}
          offset={-100}
          duration={600}
          onClick={() => clicked(3)}
          style={{ cursor: "pointer", marginLeft: 20 }}
        >
          <Text color={selected === 3 ? "gold" : "white"}>WORK</Text>
        </Link>
        <Link
          to="Contact"
          spy={true}
          smooth={true}
          offset={-100}
          duration={600}
          onClick={() => clicked(4)}
          style={{ cursor: "pointer", marginLeft: 20 }}
        >
          <Text color={selected === 4 ? "gold" : "white"}>CONTACT</Text>
        </Link>
      </HStack>

      {/* <Link
        activeClass="active"
        to="test1"
        spy={true}
        smooth={true}
        offset={50}
        duration={500}
        onSetActive={this.handleSetActive}
      >
        Test 1
      </Link> */}
    </HStack>
  );
};

export default Header;
