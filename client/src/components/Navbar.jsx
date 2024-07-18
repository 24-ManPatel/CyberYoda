import React, { useState } from 'react';
import { MenuIcon, XIcon } from '@heroicons/react/outline';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const handleScroll = (id) => {
        const element = document.getElementById(id);
        if (element) {
            window.scrollTo({
                top: element.offsetTop - 100, // Adjust if your navbar height is different
                behavior: 'smooth'
            });
        }
    };

    return (
        <nav className="bg-white text-black flex justify-between items-center p-2 pr-7 fixed w-full z-10 shadow-md">
            {!isOpen && (
                <div className="flex items-center">
                    <img src="\lpng.png" alt="Cyber Yoda Logo" className="h-20 m-4" />
                </div>
            )}
            <div className="hidden md:flex items-center space-x-6">
                <a onClick={() => handleScroll('home')} className="cursor-pointer text-black font-tomorrow text-lg pr-6">Home</a>
                <a onClick={() => handleScroll('team')} className="cursor-pointer text-black font-tomorrow text-lg pr-6">Team</a>
                <a onClick={() => handleScroll('service')} className="cursor-pointer text-black font-tomorrow text-lg pr-6">Services</a>
                <a onClick={() => handleScroll('blog')} className="cursor-pointer text-black font-tomorrow text-lg pr-6">Blogs</a>
                <a onClick={() => handleScroll('contact')} className="cursor-pointer text-black font-tomorrow text-lg pr-6">Contact</a>
            </div>
            <div className="md:hidden flex items-center">
                <button onClick={toggleMenu} className="text-black focus:outline-none">
                    {isOpen ? <XIcon className="h-8 w-8" /> : <MenuIcon className="h-8 w-8" />}
                </button>
            </div>
            {isOpen && (
                <div className="absolute top-0 left-0 w-full bg-white flex flex-col items-center py-6 z-20">
                    <div className="flex justify-center w-full">
                        <img src="\lpng.png" alt="Cyber Yoda Logo" className="h-20 m-4" />
                    </div>
                    <a onClick={() => { handleScroll('home'); toggleMenu(); }} className="w-full text-center cursor-pointer text-black font-tomorrow text-lg py-4">Home</a>
                    <a onClick={() => { handleScroll('team'); toggleMenu(); }} className="w-full text-center cursor-pointer text-black font-tomorrow text-lg py-4">Team</a>
                    <a onClick={() => { handleScroll('service'); toggleMenu(); }} className="w-full text-center cursor-pointer text-black font-tomorrow text-lg py-4">Services</a>
                    <a onClick={() => { handleScroll('blog'); toggleMenu(); }} className="w-full text-center cursor-pointer text-black font-tomorrow text-lg py-4">Blogs</a>
                    <a onClick={() => { handleScroll('contact'); toggleMenu(); }} className="w-full text-center cursor-pointer text-black font-tomorrow text-lg py-4">Contact</a>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
