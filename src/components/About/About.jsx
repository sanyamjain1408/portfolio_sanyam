import React from 'react'
import { motion } from 'framer-motion';
import sanyam from '/src/assets/blue.jpg'

export default function About() {
    return (
        <div className="py-16 bg-white">
            <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
                <motion.div
                initial={{ opacity: 0, scale: 0.8 }} // 🌀 Start small & hidden
                animate={{ opacity: 1, scale: 1 }} // 🔥 Smooth scale-up effect
                transition={{ duration: 3, ease: "easeOut" }}
                >
                <div className="flex flex-col sm:flex-row space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
                    <div className="md:5/12 lg:w-5/12">
                        <img className='w-96 p-4 rounded-3xl bg-gray-500 shadow-2xl shadow-black hover:p-0 hover:shadow-blue-400 ease-in-out duration-200'
                            src={sanyam}
                            alt="image"
                        />
                    </div>
                    <div className="md:7/12 lg:w-6/12">
                        <h2 className="text-2xl text-gray-900 font-bold md:text-4xl">
                        Hello everyone, I'm Sanyam Jain ,
                        </h2>
                        <p className="mt-6 text-gray-600">
                        a B.Tech student specializing in Computer Science Engineering at Parul University. 
                        I have a strong command of Full-Stack Web Development and UI/UX design, allowing
                         me to create visually appealing and highly functional websites.
                        </p>
                        <p className="mt-4 text-gray-600">
                        My technical expertise includes HTML, CSS, Tailwind, JavaScript, React, MongoDB,
                         and API testing using Postman. Additionally, I am proficient in Figma for UI/UX
                          design and have a deep understanding of both frontend and backend development.
                        </p>
                        <p className="mt-4 text-gray-600">
                        I have also gained practical experience as a UI/UX Designer intern at Fuel Flex
                         Company, where I worked on designing intuitive and user-friendly digital
                         interfaces. With my skills and hands-on experience, I can efficiently develop,
                         optimize, and enhance web applications to deliver a seamless user experience.
                        </p>
                    </div>
                </div>

                </motion.div>
            </div>
        </div>
    );
}