import React, { useState } from "react";
import bus from "../assets/portfolio/busbooking.webp";
import crypto from "../assets/portfolio/crypto.avif";
import ecommerce from "../assets/portfolio/ecommerce.png";
import doctor from "../assets/portfolio/doctor.jpg";
import social from "../assets/portfolio/social.png";
import reactWeather from "../assets/portfolio/weather.webp";
import urlshrinker from "../assets/portfolio/urlshrinker.avif";
import movie from "../assets/portfolio/movie.png";
import ScrollTrigger from 'react-scroll-trigger';

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: bus,
      name: "bus booking app",
      code: "https://github.com/YogeshMun0304/BusBooking",
    },
    {
      id: 2,
      src: doctor,
      name: "Doctor apointment",
      code: "https://github.com/YogeshMun0304/Doctor-G",
    },
    {
      id: 3,
      src: ecommerce,
      name: "E-commerce app",
      code: "https://github.com/YogeshMun0304/E-COMMERCE",
    },
    {
      id: 4,
      src: social,
      name: "social media app",
      code: "https://github.com/YogeshMun0304/social-app",
    },
    {
      id: 5,
      src: crypto,
      name: "Crypto Insight",
      code: "https://github.com/YogeshMun0304/CryptoInsight/tree/master",
    },
    {
      id: 6,
      src: reactWeather,
      name: "Weather app",
      code: "https://github.com/YogeshMun0304/weather-app",
    },
    {
      id: 7,
      src: urlshrinker,
      name: "url-shrinker",
      code: "https://github.com/YogeshMun0304/Url_Shrinker",
    },
    {
      id: 8,
      src: movie,
      name: "movie-guide app",
      code: "https://github.com/YogeshMun0304/movie-guide",
    },
  ];
  const [isVisible, setIsVisible] = useState(false);

  const handleScrollEnter = () => {
    setIsVisible(true);
  };
  return (
    <div name="projects"  className=" w-full md:h-screen text-white py-3 flex flex-col justify-center py-40 md:mb-40 ">
       <ScrollTrigger onEnter={handleScrollEnter}>
      <div className= {`sliding-comp ${isVisible ? 'visible' : ''} max-w-screen-lg p-4 mx-auto  flex flex-col justify-center  w-full h-full`}
      >
        <div className="pb-8 pt-20">
          <p className="text-4xl font-bold inline border-b-4 border-white">
            Portfolio
          </p>
          <p className="py-6">Check out some of my work right here</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8 px-12 sm:px-0">
          {portfolios.map(({ id, src, name, code }) => (
            <div
              key={id}
              className=" shadow-md shadow-yellow-500 rounded-lg hover:scale-105 duration-200"
            >
              <img src={src} alt="" className="rounded-md  " />
              <div className="flex justify-center h-10 items-center text-xl font-bold capitalize">
                <h2 className=" border-b-2 border-gray-500">{name}</h2>
              </div>
              <div className="flex items-center justify-center">
                <a href={code} target="_blank" rel="noopener noreferrer">
                  <button className="px-6  w-3/4 m-4 duration-200 hover:scale-105 bg-gradient-to-r from-gray-500 to-gray-900 cursor-pointer rounded-md">
                    Code
                  </button>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
      </ScrollTrigger>
    </div>
  );
};

export default Portfolio;
