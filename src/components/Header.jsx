import React, { useState } from "react";
import { Link } from 'react-router-dom';

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-black shadow-md p-4 flex justify-between items-center fixed top-0 w-full z-50">
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white">
        Arun Saini
      </h1>

      {/* Desktop Nav */}
      <nav className="hidden md:flex space-x-6 md:space-x-10 text-lg md:text-2xl">
      <Link to="/" className="text-white hover:text-gray-400">Home</Link>
        <Link to="/about" className="text-white hover:text-gray-400">About</Link>
        <Link to="/projects" className="text-white hover:text-gray-400">Projects</Link>
        <Link to="/contact" className="text-white hover:text-gray-400">Contact</Link>
      </nav>

      {/* Mobile Menu Button */}
      <div className="md:hidden">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-white focus:outline-none text-2xl"
        >
          {isOpen ? "✖" : "☰"}
        </button>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="absolute top-20 right-4 bg-black p-4 rounded-lg shadow-md flex flex-col space-y-4 z-50 md:hidden">
          <a href="#" className="text-white hover:text-gray-400">
            Home
          </a>
          <a href="#" className="text-white hover:text-gray-400">
            Projects
          </a>
          <a href="#" className="text-white hover:text-gray-400">
            About
          </a>
          <a href="#" className="text-white hover:text-gray-400">
            Contact
          </a>
        </div>
      )}
    </header>
  );
}

export default Header;
