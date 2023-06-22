"use client"
import React from 'react'
import Image from 'next/image';

const MainSection = () => {
  return (
    <div className='h-4/5'>
    <div className='border h-4/5 text-white w-full relative  flex justify-center'>    {/*Kept getting it wrong till
                                                                                        i used the relative */}
        <Image
        fill={true}
        style={{objectFit:"cover"}}
        src="/Images/mainpic.jpg"
              
        />
        
    </div>
    <div className='absolute top-[300] left-0 justify-center flex  items-center w-full h-full'>
        <div className='bg-black w-1/5 h-1/3'></div>
        <div className='bg-black w-1/5 h-1/3 mx-5'></div>
        <div className='bg-black w-1/5 h-1/3'></div>
        </div>
    </div>

  )
}

export default MainSection;