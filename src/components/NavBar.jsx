import React, { useState } from 'react'
import { AiOutlineClose, AiOutlineMenu, } from 'react-icons/ai'
import { Link, useNavigate } from 'react-router-dom';
import { UserAuth } from '../context/AuthContext';

const NavBar = () => {
    const [nav, setNav] = useState(false);
    const {user, logOut} = UserAuth();
    const navigate = useNavigate();
    
    const handleNav = () => {
        setNav(!nav)
    }

    const handleLogOut = async () => {
        try {
            await logOut();
            navigate('/')
          } catch (error) {
            console.log(error.message);
          }
    }

  return (
    <div className='flex justify-between items-center h-24 max-width-[1240px] lg:container mx-auto md:px-16 px-8 text-white'>
        <h2 className='text-3xl font-bold text-[#00df9a]'>LocalSEOKit.</h2>
        {!user ? <ul className='hidden md:flex items-center'>
            <Link to='/services'><li className='p-4 '>Services</li></Link>
            <Link to='/signin'><li className='p-4 mr-6'>Sign In</li></Link>
            <Link to='/register'><button className='bg-white text-black w-[200px] rounded-md font-medium mx-auto my-4 py-4'>Get Started</button></Link>
        </ul> : <ul className='hidden md:flex items-center float-right'>
            <Link to='/account'><li className='p-4 mr-6'>Account</li></Link>
            <Link to='/dashboard'><button className='bg-white text-black w-[200px] rounded-md font-medium mx-auto my-4 py-4'>Dashboard</button></Link>
        </ul> }
        
        <div onClick={handleNav} className='block cursor-pointer md:hidden'>
            {!nav ? <AiOutlineMenu size={20}/> : <AiOutlineClose size={20}/>}
        </div>
        <div className={!nav ? 'fixed left-[-100%] ease-out-in duration-500' : 'md:hidden fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500'}>
            <h2 className='w-full text-3xl font-bold text-[#00df9a] m-4'>LocalSEOKit.</h2>
            {!user ? <ul className='uppercase p-4'>
                <li className='p-4 border-b border-gray-600'><Link to='/services'>Services</Link></li>
                <li className='p-4 border-b border-gray-600'><Link to='/signin'>Sign In</Link></li>
                <li className='p-4'><Link to='/register'>Get Started</Link></li>
            </ul> : <ul className='uppercase p-4'>
                <li className='p-4 border-b border-gray-600'><Link to='/dashboard'>Dashboard</Link></li>
                <li className='p-4'><Link to='/account'><p>Account</p></Link></li>
            </ul>}
        </div>
    </div>
  )
}

export default NavBar