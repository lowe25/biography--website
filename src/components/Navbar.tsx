import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="flex items-center h-[75px] pl-[50px] pr-[50px] bg-[#000] max-md:pr-[20px] max-md:pl-[20px]">
      <div className="max-width flex justify-between items-center">
        <div>
          <img
            className="w-[49px] h-[49px]"
            src="/img/footer/kb-logo.png"
            alt="Kobe Bryant Logo"
          />
        </div>
        <nav
          className={`z-50 absolute top-[70px] left-0 w-full md:static max-md:block md:w-full max-md:transition-all duration-300 ease-in-out ${
            menuOpen
              ? "opacity-100 transition-y-0 pointer-events-auto max-md:bg-[red]"
              : "opacity-0 -translate-y-2 pointer-events-none md:opacity-100 md:translate-y-0 md:pointer-events-auto"
          }`}
        >
          <ul className="flex justify-center gap-[40px] max-md:flex-col max-md:gap-[15px] max-md:items-center max-md:p-[15px]">
            <li className="text-[1.8rem] text-[#fff] duration-300 ease-in-out hover:text-[#FDB927]">
              <Link to="/">Home</Link>
            </li>
            <li className="text-[1.8rem] text-[#fff] duration-300 ease-in-out hover:text-[#FDB927]">
              <Link to="/about">About</Link>
            </li>
            <li className="text-[1.8rem] text-[#fff] duration-300 ease-in-out hover:text-[#FDB927]">
              <Link to="/profile">Profile</Link>
            </li>
          </ul>
        </nav>
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden w-6 h-6 flex flex-col justify-center items-center relative z-50"
          aria-label="Toggle Menu"
        >
          <span
            className={`absolute w-6 h-[2px] bg-white transition-all duration-300 ease-in-out ${
              menuOpen ? "rotate-45 top-1/2" : "-translate-y-2"
            }`}
          />
          <span
            className={`absolute w-6 h-[2px] bg-white transition-all duration-300 ease-in-out ${
              menuOpen ? "opacity-0" : "opacity-100"
            }`}
          />
          <span
            className={`absolute w-6 h-[2px] bg-white transition-all duration-300 ease-in-out ${
              menuOpen ? "-rotate-45 top-1/2" : "translate-y-2"
            }`}
          />
        </button>
      </div>
    </header>
  );
};

export default Navbar;
