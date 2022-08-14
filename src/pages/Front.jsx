import {React, useRef} from 'react'
import Cards from '../components/Cards';
import Footer from '../components/Footer';
import FortySixty from '../components/FortySixty';
import Hero from '../components/Hero';
import NavBar from '../components/NavBar';
import Newsletter from '../components/Newsletter';

const Front = () => {
  const servicesRef = useRef();

  const handleClick = () => {
    servicesRef.current.scrollIntoView({ behavior: "smooth" });
  }
  

  return (
    <div className='bg-[#000300]'>
      <NavBar handleClick={handleClick}/>
      <Hero/>
      <div ref={servicesRef}><FortySixty/></div>
      <Newsletter/>
      <Cards/>
      <Footer/>
    </div>
  )
}

export default Front