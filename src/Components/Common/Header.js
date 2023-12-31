import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <header className="bg-black  py-4">
        <nav className="flex items-center justify-between max-w-6xl mx-auto px-4">
          <div className="flex items-center space-x-2">
            {/* Your logo */}
            <a href="#" className="text-white text-2xl ">
            Sarvangahealex
            </a>
          </div>
          <div className="lg:hidden">
            <button
              onClick={toggleMenu}
              className="text-black text-2xl focus:outline-none"
            >
              {/* Hamburger menu icon */}
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="white"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
          <ul className="hidden lg:flex space-x-10">
            <li>
              <Link
                to={"/"}
                className="text-white text-xl hover:text-blue-300"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to={'/about'}
                className="text-white text-xl hover:text-blue-300"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to={"/Gallery"}
                className="text-white text-xl hover:text-blue-300"
              >
                Gallery
              </Link>
            </li>
            <li>
              <Link
                to={"/Services"}
                className="text-white text-xl hover:text-blue-300"
              >
                Services
              </Link>
            </li>
            <li>
              <Link
                to={'/Contact'}
                className="text-white text-xl hover:text-blue-300"
              >
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </header>

      <div
        className={`w-full lg:hidden ${isMenuOpen ? 'block' : 'hidden'}`}
        style={{
          position: 'absolute',
          zIndex: 999,
        }}
      >       <ul className="bg-black text-white flex-col py-2 space-y-1 lg:space-y-0 lg:flex-row lg:space-x-6">
          <li>
            <Link
              to={"/"}
              href="#"
              className="text-white hover:text-blue-300 block lg:inline-block lg:text-white p-2 px-6 border-b border-gray-700"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to={"/about"}
              className="text-white hover:text-blue-300 block lg:inline-block lg:text-white p-2 px-6 border-b border-gray-700"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to={"/gallery"}
              className="text-white hover:text-blue-300 block lg:inline-block lg:text-white p-2 px-6 border-b border-gray-700"
            >
              Gallery
            </Link>
          </li>


          <li>
            <Link
              to={"/services"}
              className="text-white hover:text-blue-300 block lg:inline-block lg:text-white p-2 px-6 border-b border-gray-700"
            >
              Services
            </Link>
          </li>
          <li>
            <Link
              to={"/contact"}
              className="text-white hover:text-blue-300 block lg:inline-block lg:text-white p-2 px-6 border-b border-gray-700"
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
}

export default Header;
