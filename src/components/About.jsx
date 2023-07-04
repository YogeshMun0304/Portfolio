import React, { useState } from "react";
import ScrollTrigger from 'react-scroll-trigger';


const About = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleScrollEnter = () => {
    setIsVisible(true);
  };
  return (
    <div name="about" className="w-full h-screen  text-white flex flex-col justify-center mt-20 md:mt-10">
      <ScrollTrigger onEnter={handleScrollEnter}>
      <div className= {`sliding-comp ${isVisible ? 'visible' : ''} max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full`} >
        <div className="pb-8">
            <p className="text-4xl font-bold inline border-b-4 border-white">About</p>
        </div>
        <p className="text-xl mt-5">
        "Hello, I'm Yogesh, a passionate Full Stack MERN Developer with a creative twist. Beyond coding, I find inspiration in art, music, and travel, which infuses my work with a unique perspective. With a solid foundation in HTML, CSS, JavaScript, and MongoDB, I'm committed to crafting engaging user experiences and scalable solutions."
        </p>
        <br />
        <div className="pb-8">
            <p className="text-4xl font-bold inline border-b-4 mt-5 border-white">Educational Qualifications</p>
        </div>
        <p className="text-xl mt-1 ">
            <ul className="bullet-list flex flex-col gap-10">
              <li>BTech in Computer Science And Engineering,
                <br />
                <div className="flex justify-between w-1/2 text-md">
                <span className="text-white">IIIT BBSR(2021-2025)</span>
                <span className="text-white">CGPA 8.90</span>
                </div>
                

              </li>
              <li>CBSE Senior Secondary School,
                <br />
                <div className="flex justify-between w-1/2 text-md">
                <span className="text-white">Bhubaneshwar Model Public School,</span>
                <span className="text-white">12th Board-96%</span>
                </div>
                

              </li>
            </ul>
        </p>

      </div>
      </ScrollTrigger>
    </div>
  );
};

export default About;
