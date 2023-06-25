"use client"

import React from 'react'
import Image from 'next/image';
import NavBar from '@/components/navigation'
import MainSection from '@/components/main';


const Page = () => {
  return (
    <div className='containerdiv'>
      <header>
      <NavBar/>
      <div className='flex md:flex-row justify-center items-center  md:justify-between pt-16 flex-col'>
        
        <div className='text-shadow items-center mt-0 flex flex-col mx-auto'>
          <h1 className='text-6xl max-w-[400] w-auto drop-shadow-2xl text-center pt-4 mt-4 '>Unleashing Creativity, One Pixel at a Time:</h1>
          <div className='text-2xl  max-w-[300] w-auto drop-shadow-lg text-center  '>Crafting Stunning Designs for a Digital World</div>
        </div>
       
        <div className=' relative mx-auto'><Image
        src="/images/browser-trans.png"
        width={450}
        height={450}
        alt='a cartoon browser picture'
        className=''
        />
        </div>
      </div>
      </header>
      <MainSection/>
      
    
    </div>
  )
}

export default Page;