import React from 'react';

const Navbar = () => {
    return (
        <nav className="bg-[#2A0845] text-black flex justify-between items-center">
            <div className="flex items-center space-x-6">
                <img src="\src\assets\lpng.png" alt="Cyber Yoda Logo" className="h-20 m-4 ml-20 mr-20" />
                <a href="/" className="text-black  font-tomorrow text-lg pr-6 pl-80">Home</a>
                <a href="/team" className="text-black  font-tomorrow text-lg pr-6">Team</a>
                <a href="/services" className="text-black  font-tomorrow text-lg pr-6">Services</a>
                <a href="/about" className="text-black transition font-tomorrow  text-lg pr-6">About</a>
                <a href="/contact" className="text-black  font-tomorrow text-lg pr-6">Contact</a>
                <button className="bg-blue-600 text-white font-semibold py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">
                    Get Demo
                </button>
            </div>


        </nav>
    );
};

export default Navbar;
