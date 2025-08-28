import React from 'react'
import Landing_screen from '../components/Landing_screen'
import Login_screen from '../components/Login_screen'
import SinUp_screen from '../components/SinUp_screen'
import Profile from '../components/Profile'
import { BiSolidGridAlt } from "react-icons/bi";
import { FaExternalLinkSquareAlt } from "react-icons/fa";
import { useNavigate } from 'react-router-dom'


const Home = () => {
  const navigate = useNavigate();
  return (
    <div>
      <div className='flex justify-between items-center'>
      <div>
      <h1 className='mx-5 mt-5 text-gray-800'>4 Screens</h1>
      <h4 className='text-sm mx-5 text-gray-500'>Link updated:May 9, 2023, 8:43 AM</h4>
      </div>
      <div className='flex items-center text-2xl text-gray-500 mr-8 gap-2'>
      <BiSolidGridAlt className='cursor-pointer'/>
      <FaExternalLinkSquareAlt onClick={() => navigate('/')} className='cursor-pointer'/>
      </div>
      
      </div>
      <div className=' grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-5 ml-5 transition ease-in-out transition-duration-1000 
       
      '>
        
        <Landing_screen />
        <Login_screen />
        <SinUp_screen />
        <Profile />
      </div>
    </div>
  )
}

export default Home