import React from 'react'

const NavBar = () => {
  return (
    <div>
        <div className='navbar w-full h-fit text-gray-700 bg-white border border-gray-300 border-bottom p-5 justify-center flex'>
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