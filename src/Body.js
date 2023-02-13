import { Box, useColorMode } from "@chakra-ui/react";
import React, { useState } from "react";
import Countries from "./components/Countries";
import Search from "./components/Search";

function Body() {
  const { colorMode, toggleColorMode } = useColorMode();
  const [searchWord, setSearchWord] = useState();
  return (
    <Box
      px={{ base: "2em", md: "5em" }}
      pt="1em"
      bg={colorMode === "light" && "#fafafa"}
      minHeight="100vh"
    >
      <Box my="2em">
        <Search setSearchWord={setSearchWord} />
      </Box>
      <Box my="2em">
        <Countries searchWord={searchWord} />
      </Box>
    </Box>
  );
}

export default Body;
