import { React, useState} from 'react'
import Person from '../assets/images/person.jpg'
import { FaCheck } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import { UserAuth } from '../context/AuthContext';

const Signup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const {createUser} = UserAuth();
  const navigate = useNavigate();

  function validate(email) {
    return /\S+@\S+\.\S+/.test(email);
  }

  const handleSubmit = async (e) => {
    if (validate(email)) {
      e.preventDefault();
      setError('')
      try {
        await createUser(email, password)
        navigate('/account')
      } catch (e) {
        setError(e.message)
        console.log(e.message)
      }
    } else {
      e.preventDefault();
      setError('Please enter a valid email')
    }
  }

  return (
    <div className='max-w-[1240px] w-full h-screen mx-auto mb-24 flex flex-col'>
    <div className='mx-auto text-center'>
    <Link to='/'><h2 className='w-full my-12 md:text-6xl text-4xl font-bold text-[#00df9a]'>LocalSEOKit.</h2></Link>
    </div>
    <div className='grid md:grid-cols-3 mx-5'>
        <div className='md:col-span-2 col-span-1'>
          <div className='bg-white p-10 mx-1 border-2 border-gray-200'>
            <h6 className="lg:text-4xl md:text-2xl text-xl pb-4 font-sans font-bold text-center">Start your 14 day free trial</h6>
            {error && <div className='border-rose-600 bg-rose-200 text-rose-500 rounded-md p-2 text-center'>{error}</div>}
            <form onSubmit={handleSubmit} className='text-center'>
              <div className='flex flex-col py-2'>
                <input className='border p-3 m-2' type='text' placeholder='First and Last Name *'/>
                <input onChange={(e) => setEmail(e.target.value)} className='border p-3 m-2' type='email' placeholder='Email Address *'/>
                <input onChange={(e) => setPassword(e.target.value)} className='border p-3 m-2' type='password' placeholder='Password * (Minimum: 8 characters)'/>
                <input className='border p-3 m-2' type='text' placeholder='Company Name *'/>
                <input className='border p-3 m-2' type='text' placeholder='Website URL *'/>
                <input className='border p-3 m-2' type='text' placeholder='Phone Number *'/>
              </div>
              <button type='success' className='bg-[#00df9a] w-full rounded-md text-lg font-medium mx-auto my-3 p-6 text-white'>Create Your Account &nbsp; &rarr;</button>
            </form>
          </div>
          <div className='mt-6 text-center'>
            Already have an account? <Link className='cursor-pointer hover:underline font-bold text-[#00df9a]' to='/signin'>Login here</Link>
          </div>
        </div>
        <div className='col-span-1 w-full'>
          <div className='bg-white p-2 mx-0 md:mx-5 md:my-0 my-16 border-2 border-gray-200'>
            <div className='flex p-7 mx-2 items-center border-b'>
              <div className='flex'>
                <h6 className='text-2xl pr-4 '>Pro Plan</h6>
                <a href="/">Change Plan</a>
              </div>
              <div className='flex'>
              <p className='font-medium'>Your Free Trial includes $30 in Usage Credit.</p>
              </div>
            </div>
            <div className='p-7'>
              <p className='font-bold mb-2'>What's also included?</p>
              <ul>
                <li className='flex mb-5'><FaCheck color='#00df9a' className='mr-3'/><p className='text-sm'>Call, Form and Chat Tracking.</p></li>
                <li className='flex mb-5'><FaCheck color='#00df9a' className='mr-3'/><p className='text-sm'>Instant Call Tracking Numbers.</p></li>
                <li className='flex mb-5'><FaCheck color='#00df9a' className='mr-3'/><p className='text-sm'>Lead Management &amp; Reporting.</p></li>
                <li className='flex mb-5'><FaCheck color='#00df9a' className='mr-3'/><p className='text-sm'>Keyword &amp; Campaign Tracking.</p></li>
              </ul> 
            </div>
          </div>
          <div className='flex flex-col'>
            <div className='flex p-5 items-center'>
              <img className='w-[100px] h-full rounded-full' src={Person} alt="/" />
              <div className='col-span-2 ml-2'>
                <p className='text-md font-bold'>Excellent product and even better customer services.</p>
                <p className='text-sm pt-2'>Jerry L., Local SEO Specialist</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Signup