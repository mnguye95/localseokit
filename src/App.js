import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Signin from './pages/Signin';
import Signup from './pages/Signup';
import Dashboard from './pages/Dashboard';
import Pricing from './pages/Pricing';
import ProtectedRoute from './components/ProtectedRoute'

import Front from './pages/Front';
import { AuthContextProvider } from './context/AuthContext';


function App() {
  return (
    <div>
      <AuthContextProvider>
        <Routes>
          <Route path='/' element={<Front/>}/>
          <Route path='/signin' element={<Signin/>}/>
          <Route path='/register' element={<Signup/>}/>
          <Route path='/pricing-plans' element={<Pricing />}/>
          <Route path='/account' element={<ProtectedRoute><Dashboard view="Settings"/></ProtectedRoute>}/>
          <Route path='/audit' element={<ProtectedRoute><Dashboard view="SEO Audit"/></ProtectedRoute>}/>
          <Route path='/meta-generator' element={<ProtectedRoute><Dashboard view="Meta Generator"/></ProtectedRoute>}/>
          <Route path='/suggestions' element={<ProtectedRoute><Dashboard view="Blog Suggestions"/></ProtectedRoute>}/>
          <Route path='/image-geotag' element={<ProtectedRoute><Dashboard view="Image Local Geotag"/></ProtectedRoute>}/>
          <Route path='/dashboard' element={<ProtectedRoute><Dashboard /></ProtectedRoute>}/>
        </Routes>
      </AuthContextProvider>
    </div>
  );
}

export default App;
