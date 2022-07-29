import React from 'react'
import { useNavigate } from 'react-router-dom';
import { UserAuth } from '../context/AuthContext';


const Account = () => {
  const {user, logOut} = UserAuth();
  document.body.style.background = '#EBF2F8';
  const navigate = useNavigate();

  const handleClick = async () => {
    try {
      await logOut();
      navigate('/')
    } catch (error) {
      console.log(error.message);
    }
  }

  return (
    <div className='max-w-[1240px] py-16 px-4 mx-auto text-center'>
      <h1 className='lg:text-6xl md:text-2xl text-xl'>User Account</h1>
      <h2 className='lg:text-4xl'>Email: {user && user.email}</h2>
      <button className='bg-[#00df9a] p-4 font-normal rounded-md mt-3' onClick={handleClick}>Log out</button>
    </div>
  )
}

export default Account