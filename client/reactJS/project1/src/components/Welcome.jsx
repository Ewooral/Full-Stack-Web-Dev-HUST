/* eslint-disable prettier/prettier */
import React from 'react';

function WelcomePage() {
    return (
        <div className="bg-gray-100 h-screen flex flex-col justify-center items-center">
            <h1 className="text-5xl font-bold text-gray-800 mb-8">Welcome to CodersAbode</h1>
            <p className="text-2xl text-gray-600 mb-8">
                The best platform for developers to connect, learn, and collaborate.
            </p>
            <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-4 px-8 rounded-full">
                Get Started
            </button>
        </div>
    );
}

export default WelcomePage;
