import React from 'react'
import Laptop from '../assets/images/laptop.jpg'
import { Link } from 'react-router-dom'
const FortySixty = () => {
  return (
    <div className='w-full bg-white py-16 px-4'>
        <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
            <img className='w-[500px] mx-auto my-4' src={Laptop} alt='/' />
            <div className='flex flex-col justify-center'>
                <p className='text-[#00df9a] font-bold'>DATA ANALTICS DASHBOARD</p>
                <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>Manage Data Analytics Centrality</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe velit excepturi facilis illum. Earum natus reiciendis et totam, fugiat voluptates mollitia vero expedita dolores, aspernatur reprehenderit voluptate. Laborum, aperiam ex?</p>
                <Link to='/register'><button className='bg-black w-[200px] rounded-md font-medium my-6 mx-auto md:mx-0 py-3 text-[#00df9a]'>Join Beta Launch</button></Link>
            </div>
        </div>
    </div>
  )
}

export default FortySixty