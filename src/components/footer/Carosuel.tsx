'use client'
import Image from 'next/image';
import { useEffect } from 'react';
import { motion, animate, useMotionValue } from 'framer-motion';

const carousel_images: string[] = [
  "/instagram_img/1.png",
  "/instagram_img/2.png",
  "/instagram_img/3.png",
  "/instagram_img/4.png",
  "/instagram_img/5.png",
  "/instagram_img/6.png",
  "/instagram_img/7.png",
];

export default function FooterCarousel() {
  let width = 1280;
  const xTranslation = useMotionValue(0);

  useEffect(() => {
    const finalPostion = -width / 2 - 8;

    const controls = animate(xTranslation, [0, finalPostion], {
      duration: 25,
      ease: "linear",
      repeat: Infinity,
      repeatType: "loop",
      repeatDelay: 0,
    });

    return controls.stop();
  }, [xTranslation, width]);

  return (
    <div className="relative z-10 border-t-[1px] border-solid border-[#dcdcdc]">
      <div className="container">
        <h5 className="text-center py-10 text-[18px] font-medium tracking-tight"> Follow us @ Instagram </h5>
      </div>
      <motion.div 
        style={{ x: xTranslation }} 
        className="flex gap-0.5 whitespace-nowrap w-full overflow-x-hidden justify-start ">
        {
          [...carousel_images, ...carousel_images].map((src, index) => {
            return (
              <div 
                key={index} 
                className="relative min-h-[256px] flex-shrink-0 w-full sm:w-1/4 md:w-1/4 lg:size-1/5 flex justify-center items-center"
              >
                <Image 
                  src={src} 
                  fill
                  alt="carousel_image" 
                  className="object-cover w-full h-full" 
                />
              </div>
            );
          })
        }
      </motion.div>
      <div className="my-[60px] container">
        <div className="flex justify-center">
          <ul className="flex">
            <li> Home </li>
            <li> About us </li>
            <li> Lifestyle </li>
            <li> Travel </li>
            <li> Music </li>
            <li> Contact </li>
          </ul>
        </div>
      </div>
    </div>
  )
};