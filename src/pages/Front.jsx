import React from 'react'
import Cards from '../components/Cards';
import Footer from '../components/Footer';
import FortySixty from '../components/FortySixty';
import Hero from '../components/Hero';
import NavBar from '../components/NavBar';
import Newsletter from '../components/Newsletter';

const Front = () => {
  document.body.style.background = '#000300';
  return (
    <div>
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