import {React, useState} from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { UserAuth } from '../context/AuthContext';

const Signin = () => {
  document.body.style.background = '#EBF2F8';

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const { logIn } = UserAuth();
  const navigate = useNavigate();

  const handleSignIn = async (e) => {
    e.preventDefault();
    setError('')
    try {
      await logIn(email, password)
      navigate('/dashboard')
    } catch (er) {
      console.log(er.message);
      setError(er.message)
      console.log(error);
    }
  }

  return (
    <div className='max-w-[624px] w-full h-screen mx-auto my-24 flex flex-col'>
    <div className='mx-auto text-center'>
    <Link to='/'><h2 className='w-full my-12 md:text-6xl text-4xl font-bold text-[#00df9a]'>LocalSEOKit.</h2></Link>
    </div>
    <div className='mx-5'>
          <div className='bg-white p-10 mx-1 border-2 border-gray-200 text-center'>
            <h6 className="lg:text-4xl md:text-2xl text-xl pb-4 font-sans font-bold text-center">Log into your account</h6>
            <form onSubmit={handleSignIn} className='text-center'>
              <div className='flex flex-col py-2'>
                <input onChange={(e) => setEmail(e.target.value)} className='border p-3 m-2' type='email' placeholder='Email Address'/>
                <input onChange={(e) => setPassword(e.target.value)} className='border p-3 m-2' type='password' placeholder='Password'/>
              </div>
              <button type='success' className='bg-[#00df9a] w-full rounded-md text-lg font-medium mx-auto my-4 p-6 text-white'>Log In</button>
            </form>
            <Link className='underline font-bold text-[#00df9a]' to='/register'>Forgot password?</Link>
          </div>
          <div className='mt-6 text-center'>
            <Link className='underline font-bold text-[#00df9a]' to='/register'>Don't have an account? Create one.</Link>
          </div>
      </div>
    </div>
  )
}

export default Signin