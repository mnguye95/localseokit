import React from 'react'
import Typed from 'react-typed'
import { Link } from 'react-router-dom'

const Hero = () => {
  return (
    <div className='text-white'>
        <div className='max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center'>
            <p className='text-[#00df9a] font-bold p-2'>GROWING WITH LOCAL LEADS</p>
            <h1 className='md:text-7xl sm:text-6xl text-4xl font-bold md:py-6'>LOCAL SEO KIT</h1>
            <div className='flex justify-center items-center'>
                <p className='md:text-5xl sm:text-4xl  text-xl font-bold'>Used by&nbsp;</p>
                <Typed
                    strings={['SEOers', 'web developers', 'lawyers', 'realtors', 'dentists', 'plumbers', 'handyman', 'painters', 'landscapers', 'contractors']}
                    className='md:text-5xl sm:text-4xl text-xl font-bold'
                    typeSpeed={40}
                    backSpeed={70}
                    loop
                />
            </div>
            <p className='py-4 px-2 md:text-2xl text-xl font-bold text-gray-500'>Optimize your website to rank on Google faster!</p>
            <Link to='/register'><button className='bg-[#00df9a] w-[200px] rounded-md font-medium mx-auto my-3 py-3 text-black'>Join Beta Launch</button></Link>
        </div>
    </div>
  )
}

export default Hero