import React, { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-[#081827]  text-white">
      <div className="container mx-auto p-5 flex justify-between items-center">
        {/* Logo */}
        <div className="text-3xl font-bold mr-4">TechGuard</div>

        {/* Desktop Menu */}
        <div className="hidden md:flex flex-grow items-center justify-center space-x-4">
          <a href="#home" className="hover:text-gray-300">
            Home
          </a>
          <a href="#about" className="hover:text-gray-300">
            About
          </a>
          <a href="#partners" className="hover:text-gray-300">
            Partners
          </a>
        </div>

        {/* Profile and Mobile Menu Button */}
        <div className="flex items-center space-x-4">
          <div className="md:hidden">
            <button onClick={toggleMenu} className="focus:outline-none">
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            </button>
          </div>
          {/* Profile Icon */}
          <div className="hidden md:block ml-4">
            <a href="#" className="flex items-center hover:text-gray-300">
              <svg
                className="w-8 h-8"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 17h5l-1.403-1.403A6.003 6.003 0 0018 13H4a6.003 6.003 0 00-2.597 2.597L0 17h5m15-10a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-gray-700">
          <a
            href="#home"
            className="block px-4 py-2 text-white hover:bg-gray-600"
          >
            Home
          </a>
          <a
            href="#about"
            className="block px-4 py-2 text-white hover:bg-gray-600"
          >
            About
          </a>
          <a href="#partners" className="text-white hover:text-gray-600">
            Partners
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

export { Navbar };
