import { Link } from "react-router-dom";
import Dropdown from "./Dropdown";

const Navbar = () => {
  const dropdownData = [
    {
      title: "Emission Calculator",
      description: " get an estimate of your emissions",
    },
    {
      title: "Carbon Offset",
      description: " Buy projects for carbon offset",
    },
  ];
  return (
    <div>
      <nav
        className=" 
      fixed left-0 right-0 top-0 mx-auto w-full flex items-center justify-between  bg-opacity-20 backdrop-filter backdrop-blur-lg  p-4 shadow-lg "
      >
        <div>
          {/* LOGO */}
          <Link to="/">
            <h1 className="text-2xl  antialiased font-bold bg-gradient-to-l from-sGreen to-sBlue bg-clip-text text-transparent  font-sofadi">
              Sangti
            </h1>
          </Link>
        </div>
        {/* LINKS TO PAGES */}
        <div className=" flex items-center gap-9   font-medium">
          <Link to="/" className="cursor-pointer hover:text-neutral-600">
            Home
          </Link>
          <Dropdown navTitle="Others" dropdown={dropdownData} />
          <Link to="/about" className="cursor-pointer hover:text-neutral-600">
            About
          </Link>
          <Link to="/contact" className="cursor-pointer hover:text-neutral-600">
            Contact
          </Link>
          <Link to="/pricing" className="cursor-pointer hover:text-neutral-600">
            Pricing
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
