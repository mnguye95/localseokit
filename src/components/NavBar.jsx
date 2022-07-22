import React, { useState } from 'react'
import { AiOutlineClose, AiOutlineMenu, } from 'react-icons/ai'

const NavBar = () => {
    const [nav, setNav] = useState(false); 

    const handleNav = () => {
        setNav(!nav)
    }

  return (
    <div className='flex justify-between items-center h-24 max-width-[1240px] mx-auto md:px-16 px-8 text-white'>
        <h2 className='w-full text-3xl font-bold text-[#00df9a]'>LocalSEOKit.</h2>
        <ul className='hidden md:flex'>
            <li className='p-4'>Home</li>
            <li className='p-4'>Company</li>
            <li className='p-4'>Resources</li>
            <li className='p-4'>About</li>
            <li className='p-4'>Contact</li>
        </ul>
        <div onClick={handleNav} className='block cursor-pointer md:hidden'>
            {!nav ? <AiOutlineMenu size={20}/> : <AiOutlineClose size={20}/>}
        </div>
        <div className={!nav ? 'fixed left-[-100%] ease-out-in duration-500' : 'md:hidden fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500'}>
            <h2 className='w-full text-3xl font-bold text-[#00df9a] m-4'>LocalSEOKit.</h2>
            <ul className='uppercase p-4'>
                <li className='p-4 border-b border-gray-600'>Home</li>
                <li className='p-4 border-b border-gray-600'>Company</li>
                <li className='p-4 border-b border-gray-600'>Resources</li>
                <li className='p-4 border-b border-gray-600'>About</li>
                <li className='p-4'>Contact</li>
            </ul>
        </div>
    </div>
  )
}

export default NavBar