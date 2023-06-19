import React from 'react'
import {FaGithub, FaLinkedin} from 'react-icons/fa'
import { HiOutlineMail } from 'react-icons/hi'


const Sociallinks = () => {
    const links=[
        {
            id: 1,
            child:(
                <>
                LinkedIn <FaLinkedin size={30}/>
                </>
            ),
            href: 'https://www.linkedin.com/in/yogesh-mundra-7126a322a',
            style: 'rounded-tr-md'
        },
        {
            id: 2,
            child:(
                <>
                GitHub <FaGithub size={30}/>
                </>
            ),
            href: 'https://github.com/YogeshMun0304',
          
        },{
            id: 3,
            child:(
                <>
               Mail <HiOutlineMail size={30}/>
                </>
            ),
            href: 'mailto:techyogimun@gmail.com',
            
        },
        {
            id: 4,
            child:(
                <>
                Resume <HiOutlineMail size={30}/>
                </>
            ),
            href: 'https://linkedin.com',
            style: 'rounded-br-md',
            download: true

        }

    ]
  return (
    <div className='hidden lg:flex flex-col top-[35%] left-0 fixed'>
        <ul>
            {links.map(({id,child,href,style,download})=>{
                return(<li key={id} className={`flex justify-between items-center w-40 h-14 px-4 bg-gray-500 ml-[-100px] hover:ml-[-10px] hover:rounded-md duration-300 ${style}`}>
                <a href={href} className='flex justify-between items-center w-full text-white 'download={download} target='_blank' rel="noreferrer">
                    
                   {child}
                    
                </a>
            </li>)
            })}

            
        </ul>
    </div>
  )
}

export default Sociallinks