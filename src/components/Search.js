import {
  Box,
  Flex,
  Input,
  InputGroup,
  InputLeftAddon,
  Select,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
function Search({ setSearchWord }) {
  const [continent, setContinent] = useState("");
  const [search, setSearch] = useState("");
  const handleChange = (event) => {
    /* gets input */
    const inputText = event.target.value;
    /* stores input into the state */
    setSearch(inputText);
    /* Filters data based on user input or with the help of a continent and user input */
    const newFilter = JSON.parse(localStorage.getItem("originalData")).filter(
      (value) => {
        if (continent !== "") {
          return (
            value.region.includes(continent) &&
            value.name.official.toLowerCase().includes(inputText.toLowerCase())
          );
        } else {
          return value.name.official
            .toLowerCase()
            .includes(inputText.toLowerCase());
        }
      }
    );
    /* sets filtered data to localstorage */
    localStorage.setItem("data", JSON.stringify(newFilter));
    setSearchWord(inputText);
  };

  const handleSelectChange = (event) => {
    /* gets value */
    const SelectValue = event.target.value;
    /* Filters data based on continent or with the help of a user input and continent  */

    let newFilter;
    if (search === "" && SelectValue === "") {
      newFilter = JSON.parse(localStorage.getItem("originalData"));
    } else {
      newFilter = JSON.parse(localStorage.getItem("originalData")).filter(
        (value) => {
          if (search === "") {
            return value.region
              .toLowerCase()
              .includes(SelectValue.toLowerCase());
          }
          if (search !== "") {
            return (
              value.name.official
                .toLowerCase()
                .includes(search.toLowerCase()) &&
              value.region.toLowerCase().includes(SelectValue.toLowerCase())
            );
          }
        }
      );
    }

    /* sets filtered data to localstorage */
    localStorage.setItem("data", JSON.stringify(newFilter));
    setSearchWord(SelectValue === "" ? "changed" : SelectValue);
    setContinent(SelectValue);
  };

  return (
    <Flex
      justifyContent="space-between"
      flexDirection={{ base: "column", md: "row" }}
    >
      <Box>
        <InputGroup>
          <InputLeftAddon
            children={<FontAwesomeIcon icon={faMagnifyingGlass} />}
          />
          <Input
            placeholder="Search for a country..."
            onChange={handleChange}
          />
        </InputGroup>
      </Box>
      <Box>
        <Select placeholder="Filter by Region" onChange={handleSelectChange}>
          <option value="Africa">Africa</option>
          <option value="America">America</option>
          <option value="Asia">Asia</option>
          <option value="Europe">Europe</option>
          <option value="Oceania">Oceania</option>
        </Select>
      </Box>
    </Flex>
  );
}

export default Search;
