// 
import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import HeroImage from "../assets/heroImage.jpg";
import { Link } from "react-scroll";

import {FaGithub, FaLinkedin} from 'react-icons/fa'
import {HiDocument} from 'react-icons/hi'
import { HiOutlineMail } from 'react-icons/hi'

const Home = () => {
  
    const links=[
        {
            id: 1,
            child:(
                <>
                <FaLinkedin size={30}/>
                </>
            ),
            href: 'https://www.linkedin.com/in/yogesh-mundra-7126a322a',
            style: 'rounded-tr-md'
        },
        {
            id: 2,
            child:(
                <>
                <FaGithub size={30}/>
                </>
            ),
            href: 'https://github.com/YogeshMun0304',
          
        },{
            id: 3,
            child:(
                <>
                <HiOutlineMail size={30}/>
                </>
            ),
            href: 'mailto:techyogimun@gmail.com',
            
        },
        {
            id: 4,
            child:(
                <>
                <HiDocument size={30}/>
                </>
            ),
            href: '/resume.pdf',
            style: 'rounded-br-md',
            download: true

        }

    ]
  
  return (
    <div
      name="home"
      className="w-full h-screen "
    >
      <div className=" max-w-screen-lg mx-auto flex flex-col md:flex-row items-center justify-center h-full px-4">
        <div className="flex flex-col justify-center h-full">
          <h2 className="text-4xl sm:text-7xl font-bold text-white slide-out-image">
            I'm a Full Stack Developer
          </h2>
          <p className="text-white py-4 max-w-md">
            I have 8 years of experience building and desgining software.
            Currently, I love to work on web application using technologies like
            React, Tailwind, Next JS and GraphQL.
          </p>
          <div>
            <button
              to="portfolio"
              smooth
              duration={500}
              className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer"
            ><Link  to='projects' smooth duration-500>
              Portfolio</Link>
              <span className="group-hover:rotate-90 duration-300">
                <HiArrowNarrowRight className="ml-1" />
              </span>
            </button>
          </div>
          <div className="flex  lg:hidden"> 
          <ul className="flex justify-start gap-1/4">
            {links.map(({id,child,href,style,download})=>{
                return(<li key={id} className={`group flex justify-between items-center w-20 h-14 px-4  hover:rounded-md duration-300 hover:bg-white ${style}`}>
                <a href={href} className='flex justify-between items-center text-white group-hover:text-black 'download={download} target='_blank' rel="noreferrer">
                    
                   {child}
                    
                </a>
            </li>)
            })}

            
        </ul>

          </div>

        </div>
        <div className="mt-4" >
          <img
            src={HeroImage}
            alt="my profile"
            className="rounded-2xl mx-auto w-2/3 md:w-full slide-in-image"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
