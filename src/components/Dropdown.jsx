import { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";

const Dropdown = ({ navTitle, dropdown }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <div className="relative" onClick={() => setIsOpen((val) => !val)}>
        {/* NAVIGATION TITLE */}
        <div
          className={`flex items-center cursor-pointer ${
            isOpen ? "text-neutral-600" : ""
          }`}
        >
          {navTitle}
          <IoIosArrowDown
            className={`ml-1  transition-transform duration-200 ${
              isOpen ? "rotate-180" : ""
            }`}
          />
        </div>
        {/* DROP DOWN CONTENT */}
        {isOpen && (
          <div
            className="absolute left-0 mt-2 w-56 bg-gray-200 shadow-xl rounded-md z-10 p-4"
            onMouseEnter={() => setIsOpen(true)}
            onMouseLeave={() => setIsOpen(false)}
          >
            {dropdown.map((item, index) => (
              <div
                className="mb-2 cursor-pointer hover:text-neutral-600"
                key={index}
              >
                <p className="font-normal">{item.title}</p>
                <p className="font-normal italic text-xs  text-gray-600">
                  {item.description}
                </p>
                {index < dropdown.length - 1 && (
                  <hr className=" border-t border-gray-800 my-2" />
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Dropdown;
