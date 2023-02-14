import {
  Box,
  Button,
  Grid,
  Img,
  useColorMode,
  Text,
  Flex,
} from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

function Country() {
  const { colorMode, toggleColorMode } = useColorMode();
  const [data, setData] = useState();

  useEffect(() => {
    setData(JSON.parse(localStorage.getItem("detailedCountry")));
  }, []);
  console.log(data);

  if (!data) {
    return <Text>Loading...</Text>;
  }
  const key = Object.keys(data.name.nativeName);
  const languagesKey = Object.keys(data.languages);
  console.log(languagesKey);
  return (
    <Box
      px={{ base: "1em", md: "5em" }}
      pt="1em"
      bg={colorMode === "light" && "#fafafa"}
      minHeight="100vh"
    >
      <Box my="2em">
        <Button as="a" href="/" gap=".5em" alignItems="center" px="2.5em">
          <FontAwesomeIcon icon={faArrowLeft} />
          Back
        </Button>
      </Box>
      <Box my="2em">
        <Grid
          justifyItems={{ base: "center", md: "normal" }}
          gridTemplateColumns={{ base: "1fr", md: "1fr 1fr" }}
          gap={{ base: "0em", md: "3em" }}
        >
          <Box>
            <Img
              src={data.flags.png}
              w={{ base: "auto", md: "100%" }}
              objectFit="cover"
            />
          </Box>
          <Box py="1.5em">
            <Text fontWeight={"extrabold"} fontSize="2em" mb=".5em">
              {data.name.official}
            </Text>
            <Grid gridTemplateColumns={{ base: "1fr", md: "1fr 1fr" }}>
              <Text fontWeight="bold">
                Native Name:{" "}
                <span style={{ fontWeight: "500" }}>
                  {data.name.nativeName[key[0]].common}
                </span>
              </Text>
              <Text fontWeight="bold">
                population:{" "}
                <span style={{ fontWeight: "500" }}>{data.population}</span>
              </Text>
              <Text fontWeight="bold">
                Region: <span style={{ fontWeight: "500" }}>{data.region}</span>
              </Text>
              <Text fontWeight="bold">
                Sub Region:{" "}
                <span style={{ fontWeight: "500" }}>{data.subregion}</span>
              </Text>
              <Text fontWeight="bold">
                <span>Languages: </span>
                {languagesKey.map((item, index) => (
                  <span key={index} style={{ fontWeight: "500" }}>
                    {data.languages[item]},{" "}
                  </span>
                ))}
              </Text>
              <Text fontWeight="bold">
                Capital:{" "}
                <span style={{ fontWeight: "500" }}>{data.capital}</span>
              </Text>
            </Grid>

            <Flex flexDirection={{ base: "column", md: "row" }}>
              <Text fontWeight={"extrabold"}>Google Map: </Text>

              <Button
                ml={{ base: "0em", md: "0.5em" }}
                variant="link"
                as="a"
                href={data.maps.googleMaps}
                target="_blank"
                fontWeight="500"
                alignSelf="flex-start"
              >
                {data.maps.googleMaps}
              </Button>
            </Flex>
          </Box>
        </Grid>
      </Box>
    </Box>
  );
}

export default Country;
