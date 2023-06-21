"use client"
import React from 'react'
import Image from 'next/image';
import Link from 'next/link';


const NavBar = () => {
  return (
    <div>
        <div className='navbar w-full h-fit text-gray-700 bg-white shadow p-5 justify-around flex'>
          <div>
            <Link
            href='#'
            >
            <Image
            src="/Images/BIK.svg"
            width={50}
            height={50}
            alt='Logo'
            className='hover:shadow-lg'
            />
            </Link>
          </div>
            <ul className='grid grid-cols-4 gap-10 justify-between w-[600] items-center '>
                <li><button className='listlink'>Home</button></li>
                <li><button className='listlink'>About</button></li>
                <li><button className='listlink'>Project</button></li>
                <li><button className='listlink'>Skills</button></li>
            </ul>
        </div>
    </div>
  )
}

export default NavBar;