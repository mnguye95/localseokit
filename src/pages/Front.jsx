import React from 'react'
import Cards from '../components/Cards';
import Footer from '../components/Footer';
import FortySixty from '../components/FortySixty';
import Hero from '../components/Hero';
import NavBar from '../components/NavBar';
import Newsletter from '../components/Newsletter';

const Front = () => {
  return (
    <div className='bg-[#000300]'>
      <NavBar/>
      <Hero/>
      <FortySixty/>
      <Newsletter/>
      <Cards/>
      <Footer/>
    </div>
  )
}

export default Front