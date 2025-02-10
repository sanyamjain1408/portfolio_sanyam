import React from 'react'
import { Link } from 'react-router-dom';
import logo from '/src/assets/logo.png'

export default function Footer() {
    return (
        <footer className="bg-white border-y  ">
            <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
                <div className="md:flex md:justify-between">
                    <div className="mb-6 md:mb-0">
                        <Link to="/" className="flex items-center">
                            <img
                                src={logo}
                                className="mr-3 h-16 sm:h-32 ml-5 mt-5"
                                alt="Logo"
                            />
                        </Link>
                    </div>
                    <div className="grid grid-cols-2  gap-4 sm:mr-32 sm:gap-32 sm:grid-cols-2">
                        <div>
                            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase">Resources</h2>
                            <ul className="text-gray-500 font-medium">
                                <li className="mb-4">
                                    <Link to="/" className="hover:underline">
                                        Home
                                    </Link>
                                </li>
                                <li  className="mb-4">
                                    <Link to="/about" className="hover:underline">
                                        About
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/about" className="hover:underline">
                                        Project
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase">Follow us</h2>
                            <ul className="text-gray-500 font-medium">
                                <li className="mb-4">
                                    <Link  className="hover:underline"
                                    to="https://github.com/sanyamjain1408"
                                    >
                                        Github
                                    </Link>
                                </li>
                                <li className="mb-4">
                                    <Link  className="hover:underline"
                                    to="https://www.linkedin.com/in/sanyamjain14/"
                                    >
                                        LinkedIn                                    </Link>
                                </li>
                                 <li >
                                    <Link  className="hover:underline"
                                    to="https://www.instagram.com/sanyam.p.jain/"
                                    >
                                        Instagram                                    </Link>
                                </li>
                               
                            </ul>
                        </div>
                        
                    </div>
                </div>
                <hr className="my-6 border-gray-200 sm:mx-auto lg:my-8" />
                <div className="sm:flex sm:items-center  sm:justify-center">
                    <span className="text-sm text-gray-500 sm:text-center sm:justify-center">
                        ©  __2003 __All Rights Reserved.
                    </span>
                </div>
            </div>
        </footer>
    );
}

