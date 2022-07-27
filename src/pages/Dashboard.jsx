import React from 'react'
import { UserAuth } from '../context/AuthContext';

const Dashboard = () => {
  return (
    <div className='flex'>
      <div className='p-7 w-72 h-screen bg-black text-center'> 
            <div className='text-xl font-bold text-[#00df9a]'>
                LocalSEOKit.
            </div>
        </div>
        <div className='p-7 text-2xl font-semibold'> Admin </div>
    </div>
  )
}

export default Dashboard