"use client"
import React from 'react'
import Image from 'next/image';

const MainSection = () => {
  return (
    <div className='h-4/5'>
    <div className='border sm:h-4/5 h-full text-white w-full relative flex justify-center'>    {/*Kept getting it wrong till
                                                                                        i used the relative */}
        <Image
        fill={true}
        style={{objectFit:"cover"}}
        src="/Images/mainpic.jpg"
           
        />
        <div className='relative justify-center flex md:flex-row items-center w-full h-full flex-col'>{/*To adjust the relative, use top-0 or left-0 based on prefernce */}
        <div className='bg-black w-[200] md:w-1/5 md:h-1/2 h-1/4 mt-5 md:mt-0'></div>
        <div className='bg-black w-[200] md:w-1/5 md:h-1/2 h-1/4 sm:mx-5 my-5'></div>
        <div className='bg-black w-[200] md:w-1/5 md:h-1/2 h-1/4 mb-5 md:mb-0'></div>
        </div>
    </div>
    
    </div>

  )
}

export default MainSection;