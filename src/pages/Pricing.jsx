import {React, useRef} from 'react'
import NavBar from '../components/NavBar';
import Cards from '../components/Cards';
import Footer from '../components/Footer';

const Pricing = () => {
  const servicesRef = useRef();

  const handleClick = () => {
    servicesRef.current.scrollIntoView({ behavior: "smooth" });
  }
  return (
    <div className='bg-[#000300]'>
      <NavBar handleClick={handleClick}/>
      <div ref={servicesRef}><Cards/></div>
      <Footer/>
    </div>
  )
}

export default Pricing