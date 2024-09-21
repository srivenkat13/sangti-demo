import { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";

const Accordian = ({ data }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <div className=" mb-3">
        {/* TITLE */}
        <button
          onClick={toggleAccordion}
          className="w-full text-left py-4 px-6 flex justify-between items-center bg-gray-200 hover:bg-gray-300 transition rounded-2xl"
        >
          <span className="text-lg font-medium text-gray-800">
            {data.title}
          </span>

          <IoIosArrowDown
            className={`transform transition-transform ${
              isOpen ? "rotate-180" : ""
            }`}
          />
        </button>
        {/* DROP DOWN CONTENT */}
        <div
          className={`overflow-hidden transition-max-height duration-500 ease-in-out ${
            isOpen ? "max-h-96" : "max-h-0"
          }`}
        >
          <div className="p-6 bg-gray-50 text-gray-700">{data.content}</div>
        </div>
      </div>
    </>
  );
};

export default Accordian;
