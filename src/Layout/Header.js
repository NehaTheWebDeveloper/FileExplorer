import React from 'react'
import logo from "../Assets/logo.jpg"
import { Link } from "react-router-dom";


const Header = () => {
  return (
    <div className='bg-black w-full h-20 px-10 py-4 border border-w-0 rounded'>
        <div className='grid grid-cols-12'>
            <div className='col-span-4 flex items-center gap-2'>
            <img src={logo}  alt='' height={30} width={50} className='rounded-full p-2 bg-white flex  items-center justify-between '/>
            <span className='text-white font-mono'>CodesForTommorow</span>
            </div>
            <div className='col-span-8 text-white flex items-center gap-6'> 
            <Link to="/home">File</Link>
            <Link to="/contact">Edit</Link>
            <Link to="/contact">Selection</Link>
            <Link to="/contact">View</Link>
            </div>
        </div>

    </div>
  )
}

export default Header