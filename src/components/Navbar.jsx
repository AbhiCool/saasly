import React, { useRef } from "react";

const Navbar = () => {
  const mobileMenuRef = useRef();
  return (
    <nav
      id="navbar"
      className="bg-gray-800 px-6 py-4 fixed w-full top-0 z-50 text-white"
    >
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-blue-400">
          <a href="/">SaaSly</a>
        </h1>
        <ul className="hidden md:flex space-x-6">
          <li>
            <a href="#coreFeatures" className="hover:text-blue-400">
              Features
            </a>
          </li>
          <li>
            <a href="#pricing" className="hover:text-blue-400">
              Pricing
            </a>
          </li>
          <li>
            <a href="#contactUs" className="hover:text-blue-400">
              Contact
            </a>
          </li>
        </ul>
        <button
          className="md:hidden text-2xl text-white"
          onClick={() => {
            console.log("clicked on hamburger");
            mobileMenuRef.current.classList.toggle("hidden");
          }}
        >
          &#9776;
        </button>
      </div>
      <div
        ref={mobileMenuRef}
        className="mobile-menu hidden md:hidden absolute top-[100%] left-0 w-full transition-all duration-500 ease-in-out"
      >
        <ul className="flex flex-col space-y-2 px-10 py-4 bg-gray-800">
          <li>
            <a href="#coreFeatures" className="hover:text-blue-400">
              Features
            </a>
          </li>
          <li>
            <a href="#pricing" className="hover:text-blue-400">
              Pricing
            </a>
          </li>
          <li>
            <a href="#contactUs" className="hover:text-blue-400">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
