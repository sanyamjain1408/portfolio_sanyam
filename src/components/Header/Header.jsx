import React from 'react'
import{Link , NavLink } from 'react-router-dom'
import logo from '/src/assets/logo.png'


export default function Header() {
    return (
        <header className="shadow sticky z-50 top-0">
            <nav className= " bg-white border-gray-200 px-2 lg:px-6 py-2.5">
                <div className="flex flex-wrap  justify-between items-center mx-auto max-w-screen-xl ">
                    <Link to="/" className="flex flex-wrap items-center">
                        <img
                            src={logo}
                            className="mr-3 h-12 ml-5 "
                            alt="Logo"
                        />
                    </Link>
                   
                    
                        
                    
                        <ul className="flex flex-wrap items-center mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0 
                                       justify-center ">
                            <li>
                                <NavLink
                                to=""
                                    className={({isActive}) =>
                                        `block py-2 pr-4 pl-3 duration-200 border-b border-gray-100 hover:bg-gray-50
                                         lg:hover:bg-transparent lg:border-0 lg:p-0 ${isActive ? "text-blue-400" : "text-gray-700"} 
                                          hover:text-blue-600`
                                    }
                                >
                                    Home
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                to="/about"
                                    className={({isActive}) =>
                                        `block py-2 pr-4 pl-3 duration-200 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent
                                         lg:border-0 hover:text-blue-700 lg:p-0 ${isActive ? "text-blue-700" : "text-gray-700"}`
                                    }
                                >
                                    About
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                to="/contact"
                                    className={({isActive}) =>
                                        `block py-2 pr-4 pl-3 duration-200 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent 
                                         lg:border-0 hover:text-blue-700 lg:p-0 ${isActive ? "text-blue-700" : "text-gray-700"}`
                                    }
                                >
                                    Contact
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                to="/project"
                                    className={({isActive}) =>
                                        `block py-2 pr-4 pl-3 duration-200 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent
                                          lg:border-0 hover:text-blue-700 lg:p-0 ${isActive ? "text-blue-700" : "text-gray-700"}`
                                    }
                                >
                                    Project
                                </NavLink>
                            </li>
                            
                            
                        </ul>
                    
                </div>
            </nav>
        </header>
    );
}


