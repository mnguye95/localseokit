import React from 'react'
import Typed from 'react-typed'

const Hero = () => {
  return (
    <div className='text-white'>
        <div className='max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center'>
            <p className='text-[#00df9a] font-bold p-2'>GROWING WITH LOCAL LEADS</p>
            <h1 className='md:text-7xl sm:text-6xl text-4xl font-bold md:py-6'>LOCAL SEO KIT.</h1>
            <div className='flex justify-center'>
                <p className='md:text-5xl sm:text-4xl text-xl font-bold'>Used by </p>
                <Typed
                    strings={['SEOers', 'web developers', 'lawyers', 'realtors', 'dentists', 'plumbers', 'handyman', 'painters', 'landscapers', 'contractors']}
                    className='pl-3 md:text-5xl sm:text-4xl text-xl font-bold'
                    typeSpeed={40}
                    backSpeed={70}
                    loop
                />
            </div>
        </div>
    </div>
  )
}

export default Hero