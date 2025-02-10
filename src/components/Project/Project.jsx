import React from "react";
import { Link } from "react-router-dom";
import first from "/src/assets/portfolio.png"
import second from "/src/assets/clipcode.png"
import third from "/src/assets/password_generator.png"
import forth from "/src/assets/number_guessing_game.png"
import five from "/src/assets/bmi_calculator.png"
import six from"/src/assets/change_bgcolor_every_sec.png"
import seven from"/src/assets/color_switcher.png"
import eight from"/src/assets/google.png"

function Project() {
  return (
    <div className="  flex flex-col pb-5  gap-5 justify-center items-center  sm:grid grid-cols-2 grid-rows-2 sm:gap-10 ">
     
      <Link to="https://sanyamjain-portfolio.netlify.app/">
        <div className="flex flex-col justify-center items-center  ">
          <img
            className="w-[40rem] border-black mt-5   rounded-3xl p-3  shadow-2xl  hover:p-0 hover:shadow-black 
                       ease-in-out duration-200 "
            src={first}
            alt=""
          />
          <h1 className="text-2xl text-black font-bold hover:text-3xl ease-in-out duration-200 ">
            Portfolio
            </h1>
        </div>
      </Link>

      <Link to="https://clipcodeapp-two.vercel.app/">
        <div className="flex flex-col justify-center items-center  ">
          <img
            className="w-[40rem] border-black mt-5   rounded-3xl p-3  shadow-2xl  hover:p-0 hover:shadow-black 
                       ease-in-out duration-200 "
            src={second}
            alt=""
          />
          <h1 className="text-2xl text-black font-bold hover:text-3xl ease-in-out duration-200 ">
            ClipCode
            </h1>
        </div>
      </Link>

      <Link to="https://github.com/sanyamjain1408/passwordgenerator/">
        <div className="flex flex-col justify-center items-center  ">
          <img
            className="w-[40rem] border-black mt-5   rounded-3xl p-3  shadow-2xl  hover:p-0 hover:shadow-black
                        ease-in-out duration-200 "
            src={third}
            alt=""
          />
          <h1 className="text-2xl text-black font-bold hover:text-3xl ease-in-out duration-200 ">
          Generate Random Password
            </h1>
        </div>
      </Link>

      <Link to="https://github.com/sanyamjain1408/number-guessing-game/">
        <div className="flex flex-col justify-center items-center  ">
          <img
            className="w-[40rem] border-black mt-5   rounded-3xl p-3  shadow-2xl  hover:p-0 hover:shadow-black 
                       ease-in-out duration-200 "
            src={forth}
            alt=""
          />
          <h1 className="text-2xl text-black font-bold hover:text-3xl ease-in-out duration-200 ">
          Number Guessing  Game
            </h1>
        </div>
      </Link>

      <Link to="https://github.com/sanyamjain1408/bmi_calculator/">
        <div className="flex flex-col justify-center items-center  ">
          <img
            className="w-[40rem] border-black mt-5   rounded-3xl p-3  shadow-2xl  hover:p-0 hover:shadow-black 
                        ease-in-out duration-200 "
            src={five}
            alt=""
          />
          <h1 className="text-2xl text-black font-bold hover:text-3xl ease-in-out duration-200 ">
          BMI Calculator
            </h1>
        </div>
      </Link>

      <Link to="https://github.com/sanyamjain1408/bmi_calculator/">
        <div className="flex flex-col justify-center items-center  ">
          <img
            className="w-[40rem] border-black mt-5   rounded-3xl p-3  shadow-2xl  hover:p-0 hover:shadow-black
                        ease-in-out duration-200 "
            src={six}
            alt=""
          />
          <h1 className="text-2xl text-black font-bold hover:text-3xl ease-in-out duration-200 ">
          Change Bg Color Every Sec.
            </h1>
        </div>
      </Link>

      <Link to="https://github.com/sanyamjain1408/switch_color">
        <div className="flex flex-col justify-center items-center  ">
          <img
            className="w-[40rem] border-black mt-5   rounded-3xl p-3  shadow-2xl  hover:p-0 hover:shadow-black 
                      ease-in-out duration-200 "
            src={seven}
            alt=""
          />
          <h1 className="text-2xl text-black font-bold hover:text-3xl ease-in-out duration-200 ">
          Color Switcher
            </h1>
        </div>
      </Link>

      <Link to="https://github.com/sanyamjain1408/google-web-page">
        <div className="flex flex-col justify-center items-center  ">
          <img
            className="w-[40rem] border-black mt-5   rounded-3xl p-3  shadow-2xl  hover:p-0 hover:shadow-black 
                      ease-in-out duration-200 "
            src={eight}
            alt=""
          />
          <h1 className="text-2xl text-black font-bold hover:text-3xl ease-in-out duration-200 ">
          Google
            </h1>
        </div>
      </Link>


    

    </div>
  );
}

export default Project;
