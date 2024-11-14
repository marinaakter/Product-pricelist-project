import { useState, useEffect } from "react";
import PriceOption from "../PriceOption/PriceOption";

const PriceOptions = () => {
  const [priceOfOptions, setPriceOfOptions] = useState([]);
  useEffect(() => {
    fetch("/data.json")
      .then((res) => res.json())
      .then((data) => setPriceOfOptions(data.PriceOptions))
      .catch((err) => console.error("Could not fetch the data", err));
  }, []);

  return (
    <div className="m-12">
      <h2 className="text-5xl font-bold text-center mb-10">Best Price in the town</h2>
      <div className="grid grid-cols-3 gap-6">
        {priceOfOptions.map((option) => (
          <PriceOption key={option.id} option={option}></PriceOption>
        ))}
      </div>
    </div>
  );
};

export default PriceOptions;
