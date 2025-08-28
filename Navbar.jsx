import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { BiSolidGridAlt } from "react-icons/bi";
import { IoSearchSharp } from "react-icons/io5";
import { IoIosHelpCircleOutline } from "react-icons/io";


const Navbar = () => {
    const navigate = useNavigate();
    const [showSearch, setShowSearch] = useState(false);
  return (
    <div>
        <nav className='justify-between flex bg-white p-4 shadow-lg'>
            <div className='flex gap-3 items-center'>
            <BiSolidGridAlt className='text-gray-500 text-2xl bg-white'/>
            <h3 className='bg-white text-gray-500'>devtask</h3>
            </div>
            <div className='flex cursor-pointer gap-2 text-gray-200 bg-white' >
                <IoSearchSharp className='text-xl text-gray-600' onClick={() => setShowSearch(!showSearch)}/>
            {showSearch && (
            <input 
            type="search" 
            id="search" 
            placeholder="Search..."
            className="border border-gray-300 rounded-md px-2 py-1 outline-none transition duration-300"
            />
            )}
            <IoIosHelpCircleOutline className='text-2xl text-gray-600'/>
            <button onClick={() => navigate('/login')} className='text-md font-semibold text-gray-800 px-2 rounded-2xl border-2 hover:bg-gray-300'>Sign in</button>
            </div>

        </nav>
    </div>
  )
}

export default Navbar