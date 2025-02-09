import React from 'react'
import { Link } from 'react-router-dom';
// import image from "./assets/photo.webp";

export default function Home() {
    return (
        <div className="mx-auto w-full max-w-7xl">
            <aside className="relative overflow-hidden text-black rounded-lg sm:mx-16 mx-2 sm:py-16">
                <div className="relative z-10 max-w-screen-xl px-4   pb-20 pt-10 sm:py-24 mx-auto sm:px-6 lg:px-8">
                    <div className=" flex flex-col items-center max-w-xl sm:mt-1 mt-80 space-y-8 text-center sm:text-right sm:ml-auto">
                        <h2 className="text-4xl text-center font-bold sm:text-5xl ">
                            Sanyam Jain
                            <br />
                            <span className=" text-sm ">Web Developer , UI/UX Designer </span>
                        </h2>

                        <Link
                            className="flex flex-row text-white items-center   px-3 py-3 font-medium bg-blue-400 rounded-lg hover:bg-blue-600 ease-in-out duration-300 w-44"
                            to="https://www.instagram.com/sanyam.p.jain?igsh=b2ZtY21tYjB3eGtj"
                        >
                            <a className='inline-flex gap-2 items-center py-0 hover:py-1 ease-in-out duration-200'
                             href="https://www.instagram.com/sanyam.p.jain?igsh=b2ZtY21tYjB3eGtj">
                            <img className='  w-6 h-6 ml-2 rounded-md ' src='../src/assets/insta.jpg'/>
                            <h1>sanyam.p.jain</h1>
                            </a>
                        </Link>
                    </div>
                </div>

                <div className="absolute inset-0 w-full sm:my-20 sm:pt-1 pt-12 h-full    ">
                    <img className="w-96 p-4 rounded-3xl bg-gray-500 shadow-2xl  shadow-black hover:p-0 hover:shadow-blue-400  ease-in-out duration-200 " src='../src/assets/blue.jpg' alt="image1" />
                </div>
            </aside>
            </div>
    );
}

