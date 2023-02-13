import { Box, Img, Text, useColorMode } from "@chakra-ui/react";
import React from "react";

function CountryCard({ data }) {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Box
      as="a"
      href="/country"
      onClick={() =>
        localStorage.setItem("detailedCountry", JSON.stringify(data))
      }
      bg={colorMode === "light" && "#fff"}
      boxShadow={colorMode === "light" ? "5px 5px #f6f6f6" : "5px 5px #252525"}
      borderRadius="10px"
      overflow="hidden"
    >
      <Box>
        <Img src={data.flags.png} w="100%" h="190px" objectFit="cover" />
      </Box>
      <Box p="0.75em">
        <Text fontWeight="extrabold" fontSize="1.2em">
          {data.name.official}
        </Text>
        <Box py="1em">
          <Text fontWeight="bold">
            population:
            <span style={{ marginLeft: "0.5em", fontWeight: "normal" }}>
              {data.population}
            </span>
          </Text>
          <Text fontWeight="bold">
            Region:{" "}
            <span style={{ marginLeft: "0.5em", fontWeight: "normal" }}>
              {data.region}
            </span>
          </Text>
          <Text fontWeight="bold">
            Capital:{" "}
            <span style={{ marginLeft: "0.5em", fontWeight: "normal" }}>
              {data.capital}
            </span>
          </Text>
        </Box>
      </Box>
    </Box>
  );
}

export default CountryCard;
