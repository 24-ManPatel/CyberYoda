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
                top: element.offsetTop - 50, // Adjust if your navbar height is different
                behavior: 'smooth'
            });
        }
    };

    return (
        <nav className="bg-white text-black flex justify-between items-center p-2 pr-7 fixed w-full z-10 shadow-md">
            <div className="flex items-center">
                <img src="\lpng.png" alt="Cyber Yoda Logo" className="h-20 m-4" />
            </div>
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
                <div className="absolute top-20 left-0 w-full bg-white flex flex-col mt-10 items-center space-y-4 py-4 md:hidden">
                    <a onClick={() => handleScroll('home')} className="cursor-pointer text-black font-tomorrow text-lg">Home</a>
                    <a onClick={() => handleScroll('team')} className="cursor-pointer text-black font-tomorrow text-lg">Team</a>
                    <a onClick={() => handleScroll('service')} className="cursor-pointer text-black font-tomorrow text-lg">Services</a>
                    <a onClick={() => handleScroll('blog')} className="cursor-pointer text-black font-tomorrow text-lg">Blogs</a>
                    <a onClick={() => handleScroll('contact')} className="cursor-pointer text-black font-tomorrow text-lg">Contact</a>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
