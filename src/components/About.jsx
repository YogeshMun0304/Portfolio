import React, { useState } from "react";
import ScrollTrigger from 'react-scroll-trigger';


const About = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleScrollEnter = () => {
    setIsVisible(true);
  };
  return (
    <div name="about" className="w-full h-screen  text-white flex flex-col justify-center">
      <ScrollTrigger onEnter={handleScrollEnter}>
      <div className= {`sliding-comp ${isVisible ? 'visible' : ''} max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full`} >
        <div className="pb-8">
            <p className="text-4xl font-bold inline border-b-4 border-white">About</p>
        </div>
        <p className="text-xl mt-20">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, ipsa eaque ut nostrum nam temporibus tempora assumenda inventore itaque impedit culpa voluptas sint ea reprehenderit excepturi ipsam a quaerat modi nisi quidem voluptatibus explicabo, delectus possimus! Quaerat asperiores fugit reiciendis?

        </p>
        <br />
        <p className="text-xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa quas, repudiandae omnis architecto dolore iste repellendus cumque libero ad nam fugiat at cum amet dicta ipsam accusantium, vel voluptas in rerum adipisci. Excepturi dolorum non delectus exercitationem eius pariatur explicabo inventore velit, fuga itaque nihil sapiente at commodi iure voluptatibus.

        </p>

      </div>
      </ScrollTrigger>
    </div>
  );
};

export default About;
