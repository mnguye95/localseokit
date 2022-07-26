import React from 'react'
import Single from '../assets/images/single.png'
import Double from '../assets/images/double.png'
import Triple from '../assets/images/triple.png'
import { Link } from 'react-router-dom'

const Cards = () => {
  return (
    <div className='w-full bg-white py-[10rem] px-4'>
        <div className='max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8'>
            <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
                <img className='w-20 mx-auto mt-[-3rem] bg-white' src={Single} alt="/" />
                <h3 className='text-2xl font-bold text-center py-8'>Single User</h3>
                <p className='text-center text-4xl font-bold'>$5</p>
                <div className='text-center font-medium'>
                    <p className='py-2 border-b mx-8 mt-8'>Access to all tools</p>
                    <p className='py-2 border-b mx-8'>1 License</p>
                    <p className='py-2 border-b mx-8'>1K photos per month</p>
                </div>
                <Link className='mx-auto' to='/register'><button className='bg-[#00df9a] w-[200px] rounded-md font-medium my-6 py-3'>Get Started</button></Link>
            </div>
            <div className='w-full shadow-xl bg-gray-100 flex flex-col p-4 md:my-0 my-8 rounded-lg hover:scale-105 duration-300'>
                <img className='w-20 mx-auto mt-[-3rem] bg-transparent' src={Double} alt="/" />
                <h3 className='text-2xl font-bold text-center py-8'>Double User</h3>
                <p className='text-center text-4xl font-bo6ld'>$9</p>
                <div className='text-center font-medium'>
                    <p className='py-2 border-b mx-8 mt-8'>Access to all tools</p>
                    <p className='py-2 border-b mx-8'>2 License</p>
                    <p className='py-2 border-b mx-8'>5K photos per month</p>
                </div>
                <Link className='mx-auto' to='/register'><button className='bg-black text-[#00df9a] w-[200px] rounded-md font-medium my-6 py-3'>Get Started</button></Link>
            </div>
            <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
                <img className='w-20 mx-auto mt-[-3rem] bg-white' src={Triple} alt="/" />
                <h3 className='text-2xl font-bold text-center py-8'>Triple User</h3>
                <p className='text-center text-4xl font-bold'>$12</p>
                <div className='text-center font-medium'>
                    <p className='py-2 border-b mx-8 mt-8'>Access to all tools</p>
                    <p className='py-2 border-b mx-8'>3 License</p>
                    <p className='py-2 border-b mx-8'>15K photos per month</p>
                </div>
                <Link className='mx-auto' to='/register'><button className='bg-[#00df9a] w-[200px] rounded-md font-medium my-6 py-3'>Get Started</button></Link>
            </div>
        </div>
    </div>
  )
}

export default Cards