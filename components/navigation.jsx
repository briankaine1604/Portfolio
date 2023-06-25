"use client"
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const NavBar = () => {
  const [navState, setNavState] = useState(false);

  const toggleNav = () => {
    setNavState((prevState) => !prevState);
  };

  return (
    <div>
      <div className='navbar w-full h-fit text-gray-700 bg-white shadow-lg p-3 md:justify-around justify-between items-center flex fixed z-10 opacity-90'>
        <div>
          <Link href='/'>
            <Image
              src='/Images/BIK.svg'
              width={50}
              height={50}
              alt='Logo'
              className='hover:drop-shadow-xl rounded-full'
            />
          </Link>
        </div>
        <div className='md:hidden'>
          {/* Navbar hamburger */}
          <button onClick={toggleNav}>
            <div className='w-[20] h-[3] bg-black hover:shadow-xl'></div>
            <div className='w-[20] h-[3] bg-black my-1 hover:shadow-xl'></div>
            <div className='w-[20] h-[3] bg-black hover:shadow-2xl'></div>
          </button>
        </div>
        <ul className={`md:grid grid-cols-5 gap-1 md:gap-10 justify-between md:w-[600] items-center ${navState ? 'block' : 'hidden'}`}>
          <li>
            <button className='listlink'>Home</button>
          </li>
          <li>
            <button className='listlink'>About</button>
          </li>
          <li>
            <button className='listlink'>Projects</button>
          </li>
          <li>
            <button className='listlink'>Skills</button>
          </li>
          <li>
            <button className='listlink'>Contact</button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
