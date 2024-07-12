import React, { useState } from 'react';
import { MenuIcon, XIcon } from '@heroicons/react/outline';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="bg-white text-black flex justify-between items-center p-2 pr-7 fixed w-full z-10 shadow-md">
            <div className="flex items-center">
                <img src="\src\assets\lpng.png" alt="Cyber Yoda Logo" className="h-20 m-4" />
            </div>
            <div className="hidden md:flex items-center space-x-6">
                <a href="/" className="text-black font-tomorrow text-lg pr-6">Home</a>
                <a href="/team" className="text-black font-tomorrow text-lg pr-6">Team</a>
                <a href="/services" className="text-black font-tomorrow text-lg pr-6">Services</a>
                <a href="/about" className="text-black transition font-tomorrow text-lg pr-6">About</a>
                <a href="/contact" className="text-black font-tomorrow text-lg pr-6">Contact</a>
            </div>
            <div className="md:hidden flex items-center">
                <button onClick={toggleMenu} className="text-black focus:outline-none">
                    {isOpen ? <XIcon className="h-8 w-8" /> : <MenuIcon className="h-8 w-8" />}
                </button>
            </div>
            {isOpen && (
                <div className="absolute top-20 left-0 w-full bg-white flex flex-col mt-10 items-center space-y-4 py-4 md:hidden">
                    <a href="/" className="text-black font-tomorrow text-lg">Home</a>
                    <a href="/team" className="text-black font-tomorrow text-lg">Team</a>
                    <a href="/services" className="text-black font-tomorrow text-lg">Services</a>
                    <a href="/about" className="text-black font-tomorrow text-lg">About</a>
                    <a href="/contact" className="text-black font-tomorrow text-lg">Contact</a>
                    <button className="bg-blue-600 text-white font-semibold py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">
                        Get Demo
                    </button>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
