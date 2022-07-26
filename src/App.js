import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Signin from './pages/Signin';
import Signup from './pages/Signup';

import Front from './pages/Front';


function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Front/>}/>
        <Route path='/signin' element={<Signin/>}/>
        <Route path='/register' element={<Signup/>}/>
      </Routes>
    </div>
  );
}

export default App;
