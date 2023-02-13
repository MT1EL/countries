import { Box, useColorMode, Text, Flex, Button } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { faMoon, faSun } from "@fortawesome/free-regular-svg-icons";
function Navbar() {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Box
      py="1em"
      px={{ base: "1em", md: "5em" }}
      alignItems="center"
      display="flex"
      justifyContent="space-between"
    >
      <Text fontWeight="extrabold" fontSize="1.2em">
        Where in the world
      </Text>
      {colorMode === "light" ? (
        <DarkModeContent toggleColorMode={toggleColorMode} />
      ) : (
        <LightkModeContent toggleColorMode={toggleColorMode} />
      )}
    </Box>
  );
}

export default Navbar;

const DarkModeContent = ({ toggleColorMode }) => (
  <Button onClick={() => toggleColorMode()} variant="ghost" gap="0.5em">
    <FontAwesomeIcon icon={faMoon} />
    <Text>Dark Mode</Text>
  </Button>
);
const LightkModeContent = ({ toggleColorMode }) => (
  <Button onClick={() => toggleColorMode()} variant="ghost" gap="0.5em">
    <FontAwesomeIcon icon={faSun} />
    <Text>light Mode</Text>
  </Button>
);
