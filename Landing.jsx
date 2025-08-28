import React from 'react'
import { FaExternalLinkSquareAlt } from "react-icons/fa";
import { FaCommentAlt } from "react-icons/fa";
import { useNavigate } from "react-router-dom"


const Landing = () => {
  const navigate = useNavigate();
  return (
  <>
   <div className='h-[600px] w-[300px] flex flex-col  bg-gray-200 m-auto mt-5 p-4 border-2 border-gray-300 shadow-md hover:shadow-lg'>
    <div className='bg-gray-200 mt-auto flex flex-col items-center'>
      <button className='bg-yellow-500 text-white hover:bg-blue-700 rounded-full h-8 w-8 ml-7 mb-1'>1</button><br/>
      <button className='bg-yellow-500 text-white hover:bg-blue-700  rounded-full h-8 w-8 mb-2'>2</button><br/>
      <button className='bg-yellow-500 text-white hover:bg-blue-700  rounded-full h-8 w-8 ml-8'>3</button><br/>
    </div>
    <div className='mt-auto mb-4 bg-gray-200'>
      <h1 className='font-bold text-gray-800 bg-gray-200 text-2xl mb-2'>Welcom to PopX</h1>
      <p className='text-gray-500 font-medium bg-gray-200 mb-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt, dolorem.</p>
      <button onClick={() => navigate('/signup')} className='bg-purple-600 font-bold text-white hover:bg-gray-300 hover:text-gray-900 w-full mb-2 p-2 rounded-lg'>Create Account</button>
      <button onClick={() => navigate('/login')}  className='bg-purple-600 font-semibold text-white hover:bg-gray-300 hover:text-gray-900 w-full  p-2 rounded-lg'>Already Registed? Login</button>
     
    </div>
   </div>
  </>
  )
}

export default Landing