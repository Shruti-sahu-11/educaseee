import React from 'react'
import { FaExternalLinkSquareAlt } from "react-icons/fa";
import { FaCommentAlt } from "react-icons/fa";
import pic from '../assets/pic.jpg' 
import { useNavigate } from "react-router-dom"



const Profile = () => {
  const navigate = useNavigate();
  return (

    <>

    <div 
    onClick={() => navigate("/profile")} 
    className=" cursor-pointer transition"
  >
    <div className='bg-gray-200 overflow-hidden hover:border-2 hover:border-blue-500 border rounded-md  '>
         <div className='text-gray-200 bg-gray-200'>h</div>
         <div className='h-[250px] w-3/4 bg-white justify-center flex m-auto p-2'>
           <div className='pt-2 mt-0 w-full pl-1'>
            <div className='shadow-inner p-1 bg-white'>
             <h1 className='font-bold text-gray-800 bg-white'>Account Settings</h1>
            </div>

            <div>
            <div className='flex flex-row'>
              <img src={pic}  className='h-12 w-12 rounded-full'/>
            <div className='text-xs text-gray-700'>
               <h2 className='font-bold'>Marry Deo</h2>
               <h3 className='font-medium'>Marry@Gmail.com</h3>
            </div>
            </div>
            <p className='text-xs font-normal text-gray-600'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laudantium, consectetur.</p>
            </div>
           
           </div>
         </div>
          
         <div className='bg-white h-1/3 w-full flex-col  justify-between items-center p-7 '>
         <h2 className='text-gray-800 bg-white font-medium mb-2'>Profile</h2>
         <div className='flex items-center justify-start gap-3 bg-white text-gray-400 cursor-pointer'>
          <FaCommentAlt  />
          <span className='bg-white'>41</span>
         </div>
         
         
         
         </div>
         
         
       </div> 
       </div>
    </>
  )
}

export default Profile