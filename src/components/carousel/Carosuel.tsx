'use client'

import * as React from 'react'
import useEmblaCarousel, { EmblaOptionsType } from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'

interface CarouselSlide {
  id: number
  content: React.ReactNode
}

interface CarouselProps {
  autoplayInterval?: number
}

const slides: string[] = [
  "/instagram_img/1.png",
  "/instagram_img/2.png",
  "/instagram_img/3.png",
  "/instagram_img/4.png",
  "/instagram_img/5.png",
  "/instagram_img/6.png",
  "/instagram_img/7.png",
];

export default function Carousel({
  autoplayInterval = 5000,
}: CarouselProps) {
  const options: EmblaOptionsType = {
    speed: 0.07,
    loop: true,
    align: 'start',
    slidesToScroll: 1,
    containScroll: 'trimSnaps',
  }

  const autoPlayOptions = React.useMemo(() =>
    Autoplay({
      delay: 0,
      playOnInit: true,
      stopOnInteraction: false,
      stopOnMouseEnter: true,
      rootNode: (emblaRoot) => emblaRoot,
      jump: false,
    }),
  [])

  const [emblaRef, emblaApi] = useEmblaCarousel(options, [autoPlayOptions])

  return (
    <div className="relative w-full max-w-screen mx-auto">
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex">
          {slides.map((slide, index) => (
            <div key={index} className="flex-[0_0_20%] min-w-0 group relative">
              <div className="h-64 flex items-center justify-center bg-gray-100">
                <img src={slide} alt="" />
              </div>
              <InstagramOverlay />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

function InstagramOverlay() {
  return (
    <div className="absolute inset-0 bg-[rgba(48,51,107,0.95)] flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
      <img src='/instagram.svg' className="w-12 h-[30px] text-white" />
    </div>
  )
}

