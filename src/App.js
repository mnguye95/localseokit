import React from 'react';
import FortySixty from './components/FortySixty';
import Hero from './components/Hero';
import NavBar from './components/NavBar';
import Newsletter from './components/Newsletter';

function App() {
  return (
    <div>
      <NavBar/>
      <Hero/>
      <FortySixty/>
      <Newsletter/>
    </div>
  );
}

export default App;
