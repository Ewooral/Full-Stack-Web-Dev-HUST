/* eslint-disable prettier/prettier */
import React from 'react';
import { NavLink } from 'react-router-dom';

function Sidebar() {
    return (
        <div className="flex flex-col h-screen bg-gray-100 shadow">
            <div className="flex flex-col flex-grow pt-5 pb-4 overflow-y-auto">
                <div className="flex items-center flex-shrink-0 px-4">
                    <span className="text-2xl font-bold text-gray-800">My Site</span>
                </div>
                <nav className="mt-5 flex-1 px-2 bg-white space-y-1">
                    <NavLink
                        exact
                        to="/welcome"
                        className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
                        activeClassName="bg-gray-200 text-gray-900">
                        Home
                    </NavLink>
                    <NavLink
                        to="/todo"
                        className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
                        activeClassName="bg-gray-200 text-gray-900">
                        Todo
                    </NavLink>
                    <NavLink
                        to="/search"
                        className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
                        activeClassName="bg-gray-200 text-gray-900">
                        Search
                    </NavLink>
                </nav>
            </div>
        </div>
    );
}

export default Sidebar;
