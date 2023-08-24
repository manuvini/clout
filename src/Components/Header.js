import React from 'react';

function Header() {
  return (
    <header className="bg-black py-4">
      <nav className="flex items-center justify-between max-w-6xl mx-auto px-4">
        <div className="flex items-center space-x-2">
          {/* <img src="https://example.com/path-to-your-image.png" alt="Logo" className="h-8 w-8" /> Add your online logo */}
          <a href="#" className="text-gray-400 text-xl">Clout services</a>
        </div>
        <ul className="flex space-x-4">
          <li><a href="#" className="text-white hover:text-blue-300">Home</a></li>
          <li><a href="#" className="text-white hover:text-blue-300">About</a></li>
          <li><a href="#" className="text-white hover:text-blue-300">Services</a></li>
          <li><a href="#" className="text-white hover:text-blue-300">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
