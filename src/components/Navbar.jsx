import React, { useState } from 'react'
import {FaBars, FaTimes} from 'react-icons/fa'
import { Link } from 'react-scroll'

const Navbar = () => {
    const [nav,setnav] = useState(false)
    const links =[
        {
            id:1,
            link:'home'
        },
        {
            id:2,
            link:'about'
        },
        {
            id:3,
            link:'projects'
        },
        {
            id:4,
            link:'experience'
        },
        {
            id:5,
            link:'contact'
        },
         


    ]
  return (
    <div className='flex justify-between items-center w-full h-20 fixed text-white bg-black px-4 navbar opacity-0.5 '>
        <div>
          <h1 className='text-5xl font-signature ml-2'>Yogesh</h1>
        </div>
        <ul className='hidden md:flex'>

            {links.map(({id,link})=>{
                return(
                 <li key={id} className='px-4 cursor-pointer capitalize font-medium text-white hover:scale-110 duration-200'><Link to={link} smooth duration-500>{link}</Link></li>
            

            )})}
            
           

        </ul>
        <div onClick={()=>{
            setnav(!nav)
        }} className='cursor-pointer pr-4 z-10 text-white md:hidden'>
            {nav ? <FaTimes className='text-2xl '/> : <FaBars className='text-2xl'/>}

        </div>
        {nav && <ul className='flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-yellow-300 to-yellow-900 transition-transform duration-500 ease-in-out '>
            {links.map(({id,link})=>{
                return(
                    <li key={id}className='px-4 cursor-pointer capitalize py-6 text-4xl'><Link onClick={()=>setnav(!nav)} to={link} smooth duration-500>{link}</Link></li>
           

            )})}
            
            

        </ul>}


    </div>
  )
}

export default Navbar