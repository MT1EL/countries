import { Button, useColorMode } from "@chakra-ui/react";
import { useEffect } from "react";
import Body from "./Body";
import Navbar from "./components/Navbar";

function App() {
  const { colorMode, toggleColorMode } = useColorMode();
  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((response) => response.json())
      .then((data) => {
        localStorage.setItem("originalData", JSON.stringify(data));
        localStorage.setItem("data", JSON.stringify(data));
      });
  });
  return (
    <>
      <Navbar />
      <Body />
    </>
  );
}

export default App;
