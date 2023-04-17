/* eslint-disable prettier/prettier */
import React from 'react';
import logo from '../assets/react.svg';

function Header() {
  return (
    <header className="bg-white shadow">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex-shrink-0 flex items-center">
            <img className="h-8 w-auto" src={logo} alt="Logo" />
          </div>
          <div className="hidden md:block">
            <div className="ml-4 flex items-center md:ml-6">
              <button className="bg-indigo-500 hover:bg-indigo-600 text-white px-4 py-2 rounded">
                Log in
              </button>
              <button className="ml-4 text-gray-500 hover:text-gray-700">Sign up</button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
