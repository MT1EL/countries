import { Grid, Text } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import CountryCard from "./CountryCard";

function Countries({ searchWord }) {
  const [data, setData] = useState(null);
  console.log(searchWord);
  useEffect(() => {
    setData(JSON.parse(localStorage.getItem("data")));
  }, [searchWord]);

  if (!data) {
    return <Text>Loading</Text>;
  }

  return (
    <Grid
      templateColumns={{
        base: "1fr",
        // sm: "repeat(2, 1fr)",
        md: "repeat(2, 1fr)",
        lg: "repeat(4, 1fr)",
      }}
      gap="2.2em"
    >
      {data.map((item, index) => (
        <CountryCard key={item.name.official} data={item} />
      ))}
    </Grid>
  );
}

export default Countries;
