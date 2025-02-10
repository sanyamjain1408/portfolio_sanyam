import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion"; // ✅ Import Framer Motion
import sanyam from '/src/assets/blue.jpg';
import instagram from '/src/assets/insta.jpg';
import linkedin from '/src/assets/linkedin.webp';
import github from '/src/assets/github.webp';
export default function Home() {
  return (
    <motion.div 
      className="mx-auto w-full max-w-7xl"
      initial={{ opacity: 0, y: -50 }} // 🚀 Start from top (hidden)
      animate={{ opacity: 1, y: 0 }} // 🎯 Move to original position
      transition={{ duration: 1, ease: "easeOut" }} // ⏳ Smooth transition
    >
      <aside className="relative overflow-hidden text-black rounded-lg sm:mx-16 mx-2 sm:py-16">
        <div className="relative z-10 max-w-screen-xl px-4 pb-20 pt-10 sm:py-24 mx-auto sm:px-6 lg:px-8">
          <motion.div
            className="flex flex-col items-center max-w-xl sm:mt-1 mt-80 space-y-8 text-center sm:text-right sm:ml-auto"
            initial={{ opacity: 0, scale: 0.8 }} // 🌀 Start small & hidden
          animate={{ opacity: 1, scale: 1 }} // 🔥 Smooth scale-up effect
          transition={{ duration: 3, ease: "easeOut" }} // 📌 Smooth effect
          >
            <h2 className="text-4xl text-center font-serif font-bold sm:text-5xl sm:text-right sm:font-serif  
                          hover:sm:text-6xl ease-in-out duration-300 ">
            Hello , <br /> I'm Sanyam Jain ,
              <br />
              <span className="text-sm">MERN Stack Developer, UI/UX Designer</span>
            </h2>

            <div className="flex flex-col sm:flex-row  gap-3 ">
            <Link
              className="flex flex-row text-white items-center  gap-2 px-3 py-3 font-medium bg-blue-400
                          rounded-lg hover:bg-blue-600 ease-in-out duration-300 w-44"
              to="https://www.instagram.com/sanyam.p.jain?igsh=b2ZtY21tYjB3eGtj"
            >
              <img className="w-6 h-6 ml-2 rounded-md" src={instagram}/>
              <h1>sanyam.p.jain</h1>
            </Link>
            <Link
              className="flex flex-row text-white items-center gap-3 px-3 py-3 font-medium bg-blue-400 
                         rounded-lg hover:bg-blue-600 ease-in-out duration-300 w-44"
              to="https://www.linkedin.com/in/sanyamjain14/"
            >
              <img className="w-6 h-6 ml-2 rounded-md" src={linkedin} />
              <h1>sanyam jain</h1>
            </Link>
            <Link
              className="flex flex-row text-white items-center gap-1.5 px-3 py-3 font-medium bg-blue-400 
                         rounded-lg hover:bg-blue-600 ease-in-out duration-300 w-44"
              to="https://github.com/sanyamjain1408"
            >
              <img className="w-5 h-6 ml-2   rounded-md" src={github} />
              <h1>sanyamjain1408</h1>
            </Link>
            </div>
          </motion.div>
        </div>

        <motion.div
          className="absolute inset-0 w-full sm:my-20 sm:pt-1 pt-12 h-full"
          initial={{ opacity: 0, scale: 0.8 }} // 🌀 Start small & hidden
          animate={{ opacity: 1, scale: 1 }} // 🔥 Smooth scale-up effect
          transition={{ duration: 3, ease: "easeOut" }}
        >
          <img
            className="w-96 p-0 rounded-3xl bg-gray-100 shadow-2xl shadow-black hover:p-0 hover:shadow-blue-400 
                        ease-in-out duration-200"
            src={sanyam}
            alt="image1"
          />
        </motion.div>
      </aside>
    </motion.div>
  );
}
