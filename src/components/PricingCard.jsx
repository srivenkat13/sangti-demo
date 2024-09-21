import React from "react";
import { FaCheckCircle } from "react-icons/fa";

const PricingCard = ({ data, isMonthly }) => {
  return (
    <div>
      <div
        className={`rounded-xl p-6  shadow-xl w-[300px] ${
          data.isFeatured ? "bg-slate-900 text-white" : "bg-gray-200 text-black"
        }`}
      >
        <div className="flex justify-between items-center  mb-8">
          <h3 className="text-xl  font-semibold">{data.planTitle}</h3>
          {data.isFeatured && (
            <p className="bg-sTheme p-1 px-2 rounded-full text-sm text-black">
              Popular
            </p>
          )}
        </div>

        <p className="text-4xl font-bold mb-4">
          ${isMonthly ? data.monthlyPrice : data.annualPrice}
          <span className="ml-1 text-base font-normal text-neutral-600">
            per month
          </span>
        </p>
        <p className="mb-3 text-neutral-600">{data.limitText}</p>
        {/* CTA BUTTONS */}
        <button
          className={` text-white w-full py-2 mt-4 rounded-md font-semibold ${
            data.isFeatured ? "bg-sTheme" : "bg-black"
          }`}
        >
          Get started
        </button>
        <button
          className={`border border-black w-full py-2 mt-2 rounded-md font-semibold ${
            data.isFeatured ? "bg-white text-black" : ""
          }`}
        >
          Chat to with us
        </button>
        {/* FEATURED SECTION */}
        <div className="mt-6">
          <h4 className="text-lg font-medium">Features</h4>
          <p className="text-neutral-600 text-xs">
            {data.featureNote}
          </p>
          <ul className="mt-4 space-y-2">
            {data.features.map((feature, index) => (
              <li key={index} className="flex items-center  text-neutral-600">
                <span className="mr-3 text-sTheme">
                  <FaCheckCircle />
                </span>
                {feature}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default PricingCard;
