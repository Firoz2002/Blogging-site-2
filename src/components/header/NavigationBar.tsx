'use client'
import Image from 'next/image';
import { useState} from 'react';
import { AnimatePresence, motion } from 'framer-motion';

import styles from "./styles.module.css";

const variants = {
    button: {
        open: {
            opacity: 0,
            transition: { delay: 0.5 }
        },
        closed: {
            opacity: 1,
            transition: { delay: 0.4 }
        },
    },
    top: {
        open: {
            rotate: ["0deg", "0deg", "45deg"],
            top: ["35%", "50%", "50%"],
        },
        closed: {
            rotate: ["45deg", "0deg", "0deg"],
            top: "30%",
            transition: { delay: 0.5 }
        },
        hovered: {
            top: "20%",
        },
        transition: {
            delay: 0.5
        }
    },
    middle: {
        open: {
            rotate: ["0deg", "0deg", "-45deg"],
        },
        closed: {
            rotate: ["-45deg", "0deg", "0deg"],
            transition: { delay: 0.8 }
        },
        transition: {
            delay: 0.5
        }
    },
    bottom: {
        open: {
            rotate: ["0deg", "0deg", "45deg"],
            bottom: ["35%", "50%", "50%"],
            left: "50%",
            opacity: 0,
        },
        closed: {
            rotate: ["45deg", "0deg", "0deg"],
            bottom: "35%",
            left: "50%",
        },
        hovered: {
            top: "70%"
        },
        transition: {
            delay: 0.5
        }
    },
}

const sidebarVariants = {
    initial: {
        opacity: 0,
    },
    animate: {
        opacity: 1,
        transition: { delay: 0.5 },
    },
    exit: {
        opacity: 0, transition: { delay: 0.5 }
    },
    transition: {
        duration: 0.2,
        ease: [0.165, 0.84, 0.44, 1]
    }
}

const crossButtonVariants = {
    open: {
        opacity: 1,
        transition: { delay: 0.5 }
    },
    closed: {
        opacity: 0,
        transition: { delay: 0.5 }
    },
    hovered: {
        backgroundColor: "#000000",
        transition: { delay: 0.1 }
    }
}

export default function NavigationBar() {
    const [isActive, setIsActive] = useState<boolean>(false);
    const [isHovered, setIsHovered] = useState<boolean>(false);

  return (
    <header className=" p-12 flex justify-between sm:ps-[15px]">
        <motion.button 
            initial={false}
            variants={variants.button}
            animate={[isActive ? "open" : "closed", isHovered ? "hovered" : ""]}
            onClick={() => { setIsActive(!isActive); setIsHovered(false) }} 
            onHoverStart={() => (isActive ? "" : setIsHovered(true))}
            onHoverEnd={() => setIsHovered(false)}
            className='relative h-10 w-10 z-50 rounded-full bg-white/0 transition-colors hover:bg-white/20'
        >
            <motion.span  
                variants={variants.top}
                className='absolute h-1 w-7 bg-zinc-600'
                style={{ left: "50%", top: "30%", x: "-50%", y: "-50%" }}
            />
            <motion.span 
                variants={variants.middle}
                className='absolute h-1 w-7 bg-zinc-600'
                style={{ left: "50%", top: "50%", x: "-50%", y: "-50%" }}
            />
            <motion.span 
                variants={variants.bottom}
                className='absolute h-1 w-7 bg-zinc-600'
                style={{ left: "50%", top: "60%", x: "-50%", y: "50%", color: "red" }} 
            />
        </motion.button>

        <AnimatePresence mode='wait' initial={false}> 
            {isActive && (
                <>
                    <motion.div
                        aria-hidden="true"
                        {...sidebarVariants}
                        className='sidebar fixed lg:pt-[0px] sm:pt-[30px] top-0 left-0 sm:w-[270px] lg:w-[700px] h-full z-40 border-r bg-white lg:flex overflow-y-auto'
                    >
                    
                        <motion.button 
                            className="absolute right-[35px] lg:top-10 lg:right-10 sm:top-[3px] w-[30px] h-[54px]"
                            onClick={() => {setIsActive(false); setIsHovered(false)}}
                            onHoverStart={() => setIsHovered(true)}
                            onHoverEnd={() => setIsHovered(false)}
                            animate={[isActive ? "open" : "closed", isHovered ? "hovered" : ""]}
                        >
                        
                            <motion.span variants={crossButtonVariants} className="absolute h-[3px] w-7 rounded-lg rotate-45 bg-gray-300"></motion.span>
                            <motion.span variants={crossButtonVariants} className="absolute h-[3px] w-7 rounded-lg -rotate-45 bg-slate-300"></motion.span>
                        </motion.button>

                        <div className="text-center leading-[1.3] sm:p-[30px] sm:w-full lg:p-[50px] lg:w-1/2">
                            <figure className="mb-[30px]">
                                <Image width={180} height={180} className="rounded-full lg:ms-[35px] sm:ms-[6.5px] sm:max-w-[180px] sm:max-h-[180px]" src="/person1.jpg" alt="" />
                            </figure>

                            <h3 className="text-center tracking-widest lighter mb-[30px] text-[16px] text-stone-300 font-serif"> ABOUT ME </h3>

                            <h2 className='text-3xl font-serif mb-2.5 text-center mt-5'> Emily Tran Le </h2>

                            <p className="text-center text-[17px] font-sans font-light leading-[1.7] mb-[30px]"> Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>

                            <ul className='flex gap-2 align-middle justify-center'>
                                <li>
                                    <img src="https://img.icons8.com/?size=23&id=8824&format=png&color=000000" alt="twitter" />
                                </li>
                                <li>
                                    <img src="https://img.icons8.com/?size=23&id=118467&format=png&color=000000" alt="facebook" />
                                </li>
                                <li>
                                    <img src="https://img.icons8.com/?size=23&id=59813&format=png&color=000000" alt="instagram" />
                                </li>
                            </ul>
                        </div>

                        <div className='pt-8 p-[30px]'>
                            <div className="text-lg mb-[30px]">
                                <h3 className="text-lg text-gray-400 mt-10 mb-[30px] font-serif"> CATEGORIES </h3>
                                <ul>
                                    <li className="mb-2.5"> Travel </li>
                                    <li className="mb-2.5"> Style </li>
                                    <li className="mb-2.5"> Photography </li>
                                    <li className="mb-2.5"> Food & Drinks </li>
                                    <li className="mb-2.5"> Culture </li>
                                </ul>
                            </div>
                            <div>
                                <input className="border" type="text" />
                            </div>
                        </div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>

        <h1 className="font-serif text-4xl"> Magazine <sup className="text-[20px] -top-5">TM</sup> </h1>

        <ul className='flex gap-2 align-middle'>
            <li>
                <img src="https://img.icons8.com/?size=25&id=8824&format=png&color=000000" alt="twitter" />
            </li>
            <li>
                <img src="https://img.icons8.com/?size=25&id=118467&format=png&color=000000" alt="facebook" />
            </li>
            <li>
                <img src="https://img.icons8.com/?size=25&id=59813&format=png&color=000000" alt="instagram" />
            </li>
        </ul>
    </header>
  )
}
