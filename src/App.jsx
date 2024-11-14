import "./App.css";
import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";
import PriceOptions from "./components/PriceOptions/PriceOptions";

function App() {
  return (
    <>
      <Navbar></Navbar>
      <Hero></Hero>
      <PriceOptions></PriceOptions>
    </>
  );
}

export default App;
