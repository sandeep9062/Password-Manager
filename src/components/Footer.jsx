import React from 'react'
import { NavLink } from 'react-router-dom'

const Footer = () => {
    return (
<div className='bg-slate-800 text-white flex flex-col justify-center items-center  w-full'>
            <div className="logo font-bold text-white text-2xl">
                
                <span>TOM</span><span className='text-red-500'>passwords</span>


            </div>
            <div className='flex justify-center items-center'> Created by Sandeep Saini </div>
      
        <div className='flex cursor-pointer justify-center items-center'>
             <img className='w-7 invert hover:text-red-500 mx-2' src="icons/email.png" alt="" />Mail to: 
             
             <a className= 'hover:text-green-500' href='mailto:sandeep2001saini01@gmail.com'>    sandeep2001saini01@gmail.com</a>
             </div>


        </div>


        
    )
}

export default Footer
