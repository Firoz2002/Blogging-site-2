'use client'
import React, { useRef } from "react";
import { motion } from "framer-motion";
import { Carousel } from '@mantine/carousel';
import Autoplay from "embla-carousel-autoplay";
import { IconArrowRight, IconArrowLeft } from '@tabler/icons-react';

import '@mantine/core/styles.css';
import '@mantine/carousel/styles.css';

const carousel_images: string[] = [
  "/carousel_img/b1.jpg",
  "/carousel_img/b2.jpg",
  "/carousel_img/b3.jpg",
];

export default function HeroSection() {
  const autoplay = useRef(Autoplay({ delay: 5000 }));
  const [slideIndex, setSlideIndex] = React.useState<number>(0);
  const [slideChanged, setSlideChanged] = React.useState(true);

  const handleSlideChange = (index: number) => {
    setSlideIndex(index);
    setSlideChanged(true);
  };

  return (
    <div className="relative lg:min-h-screen sm:min-h-[300px] overflow-hidden">
      <Carousel 
        slideSize="50%" 
        height={"100%"} 
        slideGap="md" 
        align={"center"}
        controlSize={25} 
        loop
        withControls
        plugins={[autoplay.current]}
        onSlideChange={handleSlideChange}
        onMouseEnter={autoplay.current.reset}
        onMouseLeave={autoplay.current.reset}
        nextControlIcon={<IconArrowRight style={{ width: "3rem", height: "3rem", }} />}
        previousControlIcon={<IconArrowLeft style={{ width: "3rem", height: "3rem" }} />}
      >
        <Image />
      </Carousel>

      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
        {
          slideChanged && <Modal slideIndex={slideIndex} />
        }
      </div>
    </div>
  )
}

const Image = () => {
  return (
    <>
      {
        carousel_images.map((src, index) => {
          return <Carousel.Slide
            key={index}
            style={{ 
              backgroundImage: `url(${src})`, 
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
            className="carousel-image aspect-video w-[625px] mr-[30px] shrink-0 lg:min-h-screen sm:min-h-[300px] relative"
          >
          </Carousel.Slide>
        })
      }
    </>
  )
}

const Modal = ({slideIndex}: {slideIndex: number}) => {
  return (
    <motion.div 
      key={slideIndex}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 0 }}
      transition={{     
        duration: 2,
        ease: "easeOut",
        delay: 1,
      }}
      className="max-w-[595px] mx-auto z-50" 
    >
      <div className="flex items-center justify-center flex-col">
        <motion.h3 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 0 }}
          transition={{
            duration: 2,
            ease: "easeOut",
            delay: 1,
          }}
          className="text-center lg:text-base sm:text-[10px] inline-block py-[3px] px-2.5 uppercase bg-black text-white rounded-sm mb-[15px] tracking-[2px] cursor-pointer select-none max-w-max"> Lifestyle </motion.h3>
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 0 }}
          transition={{
            duration: 2,
            ease: "easeOut",
            delay: 2,
          }}
          className="text-center lg:text-[40px] sm:text-[20px] bg-black font-bold text-white uppercase px-5 pt-3 pb-[5px] cursor-pointer select-none"> Take a look at last night's party! </motion.h2>
      </div>
    </motion.div>
  )
}
