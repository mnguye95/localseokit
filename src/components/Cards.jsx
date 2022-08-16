import React from 'react'
import Single from '../assets/images/solo.png'
import Double from '../assets/images/business.png'
import Triple from '../assets/images/enterprise.png'
import { Link } from 'react-router-dom'

const Cards = () => {
  return (
    <div className='w-full bg-white md:py-[10rem] py-[5rem] px-4'>
        <div className='max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8'>
            <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
                <img className='w-20 mx-auto mt-[-3rem] bg-white' src={Single} alt="/" />
                <h3 className='text-2xl font-bold text-center py-8'>Solo</h3>
                <p className='text-center text-4xl font-bold'>$5</p>
                <div className='text-center font-medium'>
                    <p className='py-2 border-b mx-8 mt-8'>SEO Audits</p>
                    <p className='py-2 border-b mx-8'>Meta Descriptions</p>
                    <p className='py-2 border-b mx-8'>Blog Suggestions</p>
                    <p className='py-2 border-b mx-8'>Add Geo-Data to Images</p>
                    <p className='py-2 border-b mx-8'>15 Credits Each Monthly</p>
                </div>
                <Link className='mx-auto' to='/register'><button className='bg-[#00df9a] w-[200px] rounded-md font-medium my-6 py-3'>Get Started</button></Link>
            </div>
            <div className='w-full shadow-xl bg-gray-100 flex flex-col p-4 md:my-0 my-8 rounded-lg hover:scale-105 duration-300'>
                <img className='w-20 mx-auto mt-[-3rem] bg-transparent' src={Double} alt="/" />
                <h3 className='text-2xl font-bold text-center py-8'>Business</h3>
                <p className='text-center text-4xl font-bold'>$9</p>
                <div className='text-center font-medium'>
                    <p className='py-2 border-b mx-8 mt-8 font-bold'>All of Solo Features</p>
                    <p className='py-2 border-b mx-8'>Access to API</p>
                    <p className='py-2 border-b mx-8'>24/7 Live Support</p>
                    <p className='py-2 border-b mx-8'>Whitelabel Features</p>
                    <p className='py-2 border-b mx-8'>50 Credits Each Monthly</p>
                </div>
                <Link className='mx-auto' to='/register'><button className='bg-black text-[#00df9a] w-[200px] rounded-md font-medium my-6 py-3'>Get Started</button></Link>
            </div>
            <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
                <img className='w-20 mx-auto mt-[-3rem] bg-white' src={Triple} alt="/" />
                <h3 className='text-2xl font-bold text-center py-8'>Enterprise</h3>
                <p className='text-center text-4xl font-bold'>$12</p>
                <div className='text-center font-medium'>
                    <p className='py-2 border-b mx-8 mt-8 font-bold'>All of Business Features</p>
                    <p className='py-2 border-b mx-8'>Live Agency Training</p>
                    <p className='py-2 border-b mx-8'>Mastermind SEO Group Access</p>
                    <p className='py-2 border-b mx-8'>Branding &amp; Marketing Audit</p>
                    <p className='py-2 border-b mx-8'>100 Credits Each Monthly</p>
                </div>
                <Link className='mx-auto' to='/register'><button className='bg-[#00df9a] w-[200px] rounded-md font-medium my-6 py-3'>Get Started</button></Link>
            </div>
        </div>
    </div>
  )
}

export default Cards