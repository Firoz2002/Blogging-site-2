import React from 'react'
import Carousel from '../carousel/Carosuel'

export default function Footer() {
  return (
    <div className='border-t'>
      <h4 className='text-center p-10 font-bold text-lg'> Follow us @ Instagram</h4>

      <Carousel  />

      <div className='py-[60px]'>
        <nav className='w-full flex justify-center items-center text-lg text-[#4f4d4d]'>
          <ul className='flex px-32 py-8'>
            <li className='px-3 hover:text-black cursor-pointer'>Home</li>
            <li className='px-3 hover:text-black cursor-pointer'>About us</li>
            <li className='px-3 hover:text-black cursor-pointer'>Lifestyle</li>
            <li className='px-3 hover:text-black cursor-pointer'>Travel</li>
            <li className='px-3 hover:text-black cursor-pointer'>Music</li>
            <li className='px-3 hover:text-black cursor-pointer'>Contact</li>
          </ul>
        </nav>
      </div>
    </div>
  )
}
