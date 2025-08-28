import React from 'react'
import { FaExternalLinkSquareAlt } from "react-icons/fa";
import { FaCommentAlt } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';


const Login_screen = () => {
  const navigate = useNavigate();
  return (
    <>
     <div 
    onClick={() => navigate("/login")} 
    className=" cursor-pointer transition">


     <div className='bg-gray-200 overflow-hidden hover:border-2 hover:border-blue-500 border rounded-md  '>
          <div className='text-gray-200 bg-gray-200'>hi</div>
          <div className='h-[250px] w-3/4 bg-white justify-center flex m-auto p-1'>
            <div className='pt-2 mt-0 w-full pl-1 text-gray-800'>
              <h1 className='font-bold '>Signin to your <br /> PopX account</h1>
              <p className='text-xs text-gray-600'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eveniet?</p>
              <h1 className='border-gray-300 border-2 text-xs border-rounded-lg w-40 mb-1'>Email address<span className='text-red-600'>*</span></h1>
              <h1 className='border-gray-300 border-2 text-xs border-rounded-lg w-40 mb-1'>Password<span className='text-red-600'>*</span></h1>
              <div className='w-40 bg-purple-800 p-1 rounded-sm pr-2 text-white text-center items-center'>Login</div>
            </div>
          </div>
    
          <div className='bg-white h-1/3 w-full flex justify-between items-center p-4 '>
          <div className="flex flex-col items-start space-y-1 mb-2 gap-3 bg-white">
          <h2 className='text-gray-800 bg-white font-medium '>Login screen</h2>
          <div className='flex gap-3 items-center bg-white cursor-pointer'>
          <FaCommentAlt  className='bg-white text-gray-400 ' /> 
          <span className='text-gray-400 bg-white'>18</span>
          </div>
          </div>
          <div className="relative group inline-block">
          <FaExternalLinkSquareAlt className='text-gray-400 bg-white text-xl cursor-pointer '/>
          <span className="absolute bottom-full mb-1 left-1/2 -translate-x-1/2 
           bg-black text-white text-xs rounded-md px-2 py-1 font-medium
          opacity-0 group-hover:opacity-40 transition duration-300">
          Linked screens
          </span>
          </div>
          </div>
          
          
          
        </div>
    </div>
  </>
  )
}

export default Login_screen