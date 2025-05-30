import React, {useState} from 'react'
import { ToastContainer, toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import { motion } from 'framer-motion';

import { db } from '../../firebase'; // Make sure the path is correct
import { collection, addDoc } from 'firebase/firestore';



export default function Contact() {

    const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [tel, setTel] = useState('');

  const sam = async (e) => {
    e.preventDefault();

    if (!name || !email || !tel) {
        toast.warning("Please fill all the fields!", {
          position: "top-center",
          autoClose: 3000,
        });
        return; // stop the form from submitting
      }
      if (!/^\d{10}$/.test(tel)) {
        toast.error("Phone number must be exactly 10 digits! or a number ", {
          position: "top-center",
          autoClose: 3000,
        });
        return;
      }
    
  
    try {
      await addDoc(collection(db, "contacts"), {
        name: name,
        email: email,
        tel: tel,
      });
  
      toast.success("Submitted Successfully", {
        position: "top-center",
        autoClose: 3000,
      });
  
      // Clear the form
      setName('');
      setEmail('');
      setTel('');
    } catch (error) {
      toast.error("Submission Failed");
      console.error("Error adding document: ", error);
    }
  };
  
    return (
        <div className="relative flex items-top justify-center min-h-[700px] bg-white sm:items-center sm:pt-0">
            <div className="max-w-6xl mx-auto sm:px-6 lg:px-8">
                <div className="mt-1 overflow-hidden">
            
                    <motion.div className="grid grid-cols-1 md:grid-cols-2"
                     initial={{ opacity: 0, scale: 0.8 }} // 🌀 Start small & hidden
                     animate={{ opacity: 1, scale: 1 }} // 🔥 Smooth scale-up effect
                     transition={{ duration: 3, ease: "easeOut" }}
                    >
                    
                        <div className="p-6 mr-2 bg-gray-100 sm:rounded-lg">
                            <h1 className="text-3xl sm:text-4xl text-gray-800 font-extrabold tracking-tight">
                                Get in touch: 
                            </h1>
                            <p className="text-normal text-lg sm:text-xl font-medium text-gray-600 mt-2">
                                Fill in the form to start a conversation
                            </p>

                            <div className="flex items-center mt-8 text-gray-600">
                                <svg
                                    fill="none"
                                    stroke="currentColor"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="1.5"
                                    viewBox="0 0 24 24"
                                    className="w-8 h-8 text-gray-500"
                                >
                                    <path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        stroke-width="1.5"
                                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                                    />
                                    <path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        stroke-width="1.5"
                                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                                    />
                                </svg>
                                <div className="ml-4 text-md tracking-wide font-semibold w-40">
                                    New Colony, Dungarpur, Rajasthan 
                                </div>
                            </div>

                            <div className="flex items-center mt-4 text-gray-600">
                                <svg
                                    fill="none"
                                    stroke="currentColor"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="1.5"
                                    viewBox="0 0 24 24"
                                    className="w-8 h-8 text-gray-500"
                                >
                                    <path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        stroke-width="1.5"
                                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1
                                         1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1
                                          1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 
                                          14.284 3 6V5z"
                                    />
                                </svg>
                                <div className="ml-4 text-md tracking-wide font-semibold w-40">
                                    6377266103
                                </div>
                            </div>

                            <div className="flex flex-wrap items-center mt-2 text-gray-600">
                                <svg
                                    fill="none"
                                    stroke="currentColor"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="1.5"
                                    viewBox="0 0 24 24"
                                    className="w-8 h-8 text-gray-500"
                                >
                                    <path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        stroke-width="1.5"
                                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2
                                           0 00-2 2v10a2 2 0 002 2z"
                                    />
                                </svg>
                                <div className="flex flex-wrap ml-4 text-md tracking-wide font-semibold w-40">
                                    sanyamkanu@gmail.com
                                </div>
                                
                            </div>
                        </div>

                        <form className="p-6 flex flex-col justify-center">
                            <div className="flex flex-col">
                                <label for="name" className="hidden">
                                    Full Name
                                </label>
                                <input
                                    type="name"
                                    name="name"
                                    id="name"
                                    placeholder="Full Name"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    className="w-100 mt-2 py-3 px-3 rounded-lg bg-white border border-gray-400
                                             text-gray-800 font-semibold focus:border-orange-500 focus:outline-none"
                                />
                            </div>

                            <div className="flex flex-col mt-2">
                                <label for="email" className="hidden">
                                    Email
                                </label>
                                <input
                                    type="email"
                                    name="email"
                                    id="email"
                                    placeholder="Email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    className="w-100 mt-2 py-3 px-3 rounded-lg bg-white border border-gray-400
                                               text-gray-800 font-semibold focus:border-orange-500 focus:outline-none"
                                />
                            </div>

                            <div className="flex flex-col mt-2">
                                <label for="tel" className="hidden">
                                    Number
                                </label>
                                <input
                                    type="tel"
                                    name="tel"
                                    id="tel"
                                    placeholder="Telephone Number"
                                    value={tel}
                                    onChange={(e) => setTel(e.target.value)}
                                    className="w-100 mt-2 py-3 px-3 rounded-lg bg-white border border-gray-400
                                              text-gray-800 font-semibold focus:border-orange-500 focus:outline-none"
                                />
                            </div>

                            <button 
                              onClick={sam}
                                type="submit"
                                className="md:w-32 bg-orange-700 hover:bg-blue-dark text-white font-bold py-3 px-6 
                                            rounded-lg mt-3 hover:bg-orange-600 transition ease-in-out duration-300"
                                
                            >
                                Submit
                            </button>
                            <ToastContainer/>
                        </form>
                   
                    </motion.div>

                    


                </div>
            </div>
        </div>
    );
}

