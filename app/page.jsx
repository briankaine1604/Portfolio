"use client"

import React from 'react'
import Image from 'next/image';
import NavBar from '@/components/navigation'


const Page = () => {
  return (
    <div className='containerdiv'>
      <NavBar/>
      <div className='flex justify-end'>
        <Image
        src="/images/browser-trans.png"
        width={500}
        height={500}
        alt='browser pic'
        />
      </div>
    
    </div>
  )
}

export default Page;