import { useState } from "react";
import { PricingData, FaqData } from "../data/data";
import PricingCard from "../components/PricingCard";
import Accordian from "../components/Accordian";

const Pricing = () => {
  const [isMonthly, setIsMonthly] = useState(true);
  const handleToggle = (type) => {
    setIsMonthly(type === "month");
  };

  return (
    <div className="mx-auto max-w-7xl px-4">
      <h1 className="text-center text-4xl font-bold tracking-tight text-gray-800 p-4 mt-2">
        Choose the right plan for you
      </h1>
      {/* TOGGLE BUTTONS */}
      <div className=" flex items-center justify-center  mx-auto p-1 bg-gray-200 rounded-full max-w-xs ">
        <div className="text-sm flex gap-2 border ">
          <button
            onClick={() => handleToggle("month")}
            className={`${
              isMonthly
                ? "bg-gray-800 text-white"
                : "bg-transparent text-gray bg-gray-800"
            } px-2 py-1 rounded-full transition-all duration-500`}
          >
            Monthly billing
          </button>
          <button
            onClick={() => handleToggle("annual")}
            className={`${
              !isMonthly
                ? "bg-gray-800 text-white"
                : "bg-transparent text-black"
            } px-2 py-1 rounded-full transition-all duration-500`}
          >
            Annual billing
          </button>
        </div>
      </div>
      {/* PRICING CARDS */}
      <div className=" mt-8 w-[90%] mx-auto mb-8 ">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {PricingData.map((data, index) => (
            <PricingCard key={index} data={data} isMonthly={isMonthly} />
          ))}
        </div>
      </div>
      <hr className="border-t-1 border-gray-400 my-4" />
      {/* FAQ SECTION */}
      <h2 className="text-center text-3xl font-bold tracking-tight text-gray-800 p-4 mt-2">
        Frequently Asked Questions
      </h2>

      {FaqData.map((data,index) => (
        <Accordian data={data}  key={index}/>
      ))}
    </div>
  );
};

export default Pricing;
