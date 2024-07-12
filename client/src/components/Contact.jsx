import React from 'react';

const ContactUs = () => {
    return (
        <div id="contact" className="flex flex-col lg:flex-row items-center justify-center min-h-screen bg-white">
            <div className="w-full lg:w-1/2 p-4">
                <img src="/contact.jpg" alt="Contact Us" className="w-full h-auto" />
            </div>
            <div className="w-full lg:w-1/2 p-4">
                <div className="max-w-md mx-auto bg-white shadow-md rounded-lg p-8">
                    <h2 className="text-3xl font-bold mb-4">Contact Us</h2>
                    <form>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="fullName">
                                Full Name
                            </label>
                            <input
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="fullName"
                                type="text"
                                placeholder="Full Name"
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                                E-mail
                            </label>
                            <input
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="email"
                                type="email"
                                placeholder="E-mail"
                            />
                        </div>
                        <div className="mb-6">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="message">
                                Message
                            </label>
                            <textarea
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="message"
                                placeholder="Message"
                            />
                        </div>
                        <div className="flex items-center justify-between">
                            <button
                                className="bg-black text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                                type="button"
                            >
                                Contact Us
                            </button>
                        </div>
                    </form>
                    <div className="mt-8">
                        <h3 className="text-xl font-bold mt-4 mb-2">Based in</h3>
                        <p>Gandhinagar , Gujarat</p>
                        <div className="flex space-x-4 mt-4">
                            <a href="#" className="text-gray-500 hover:text-gray-700">
                                <i className="fab fa-facebook fa-2x"></i>
                            </a>
                            <a href="#" className="text-gray-500 hover:text-gray-700">
                                <i className="fab fa-instagram fa-2x"></i>
                            </a>
                            <a href="#" className="text-gray-500 hover:text-gray-700">
                                <i className="fab fa-twitter fa-2x"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactUs;
