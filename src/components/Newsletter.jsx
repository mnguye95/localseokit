import React from 'react'

const Newsletter = () => {
  return (
    <div className='w-full text-white p-16'>
        <div className='max-w-[1240px] mx-auto grid md:grid-cols-3'>
            <div className='md:col-span-2'>
                <h3 className='md:text-4xl sm:text-3xl text-2xl  font-bold py-2'>Want tips and tricks to outrank your competitors?</h3>
                <p>Sign up today for our weekly updates on local SEO strategies.</p>
            </div>
            <div className='my-6'>
                <div className='flex flex-col sm:flex-row items-center justify-between'>
                    <input className='p-3 flex w-full rounded-md text-black' type="email" placeholder='Enter Email' />
                    <button className='bg-[#00df9a] w-[200px] rounded-md font-medium mx-auto my-3 py-3 ml-0 sm:ml-4 text-black'>Get Notified</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Newsletter