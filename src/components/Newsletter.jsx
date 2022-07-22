import React from 'react'

const Newsletter = () => {
  return (
    <div className='w-full text-white py-16 px-8'>
        <div className='max-w-[1240px] mx-auto grid md:grid-cols-3'>
            <div className='lg:col-span-2'>
                <h1 className='md:text-4xl sm:text-3xl text-2xl  font-bold py-2'>Want tips and tricks to outrank your competitors?</h1>
                <p>Sign up today for our weekly updates on local SEO strategies.</p>
            </div>
            <div className='my-4'>
                <div className='inline'>
                    <input className='p-3 flex w-full rounded-md text-black' type="email" placeholder='Enter Email' />
                    <button className='bg-[#00df9a] w-[200px] rounded-md font-medium mx-auto my-3 py-3 text-black'>Get Notified</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Newsletter