import { useEffect } from "react";
import Body from "./Body";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Country from "./components/Country";

function App() {
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
      <Router>
        <Routes>
          <Route path="/" element={<Body />} />
          <Route path="/country" element={<Country />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
