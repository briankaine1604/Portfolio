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
      <div className='flex justify-around pt-16'>
        
        <div className='text-shadow justify-center items-center mt-10'>
          <div className='text-6xl max-w-[480] mt-10 ml-20 drop-shadow-2xl'><h1>Unleashing Creativity, One Pixel at a Time:</h1></div>
          <div className='text-2xl max-w-[300] ml-20 drop-shadow-lg'>Crafting Stunning Designs for a Digital World</div>
        </div>
       
        <Image
        src="/images/browser-trans.png"
        width={500}
        height={500}
        alt='a cartoon browser picture'
        className=''
        />
      </div>
      </header>
      <MainSection/>
      
    
    </div>
  )
}

export default Page;