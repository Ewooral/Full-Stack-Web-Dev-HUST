/* eslint-disable prettier/prettier */
import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className="bg-gradient-to-r from-blue-500 to-purple-500">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="text-white font-bold text-xl">
              My Site
            </Link>
          </div>
          <div className="flex items-center">
            <Link to="/search" className="ml-6 text-white hover:text-gray-200">
              Search
            </Link>
            <Link to="/" className="ml-6 text-white hover:text-gray-200">
              Home
            </Link>
            <Link to="/todo" className="ml-6 text-white hover:text-gray-200">
              Todo App
            </Link>
            <Link to="/contact" className="ml-6 text-white hover:text-gray-200">
              Contact
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
