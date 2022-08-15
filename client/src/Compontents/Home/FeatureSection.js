import React from "react";
import interactive from '../../images/img-interactive5.webp';
import 'aos/dist/aos.css';
import { useEffect } from "react";
import Aos from "aos";




export default()=>{

  useEffect(()=>{
    Aos.init({duration: 2000})
  }, []);


    return(

        <section id="feature">

        <div className="relative cnt flex flex-col max-w-6xl mx-auto my-32 px-6 text-gray-900 md:flex-row md:px-0">

          <img src={interactive} alt="" data-aos="fade-right"></img>

          <div
          className="top-48 pr-0 bg-white md:absolute md:right-0 md:py-20 md:pl-20 rounded-lg"
        >
          <h2
            className="max-w-full mt-10 mb-6 font-sans text-4xl text-center text-gray-900 uppercase md:text-5xl md:mt-0 md:text-left md:max-w-lg"
          >
            The leader in selling cars
          </h2>

          <p className="max-w-full text-center md:max-w-md" >
            Founded in 2011, Carstudios has been producing world-class selling cars  for some of the best companies around the globe.
            Our award-winning creations have transformed businesses through
            customers experiences that bind to their brand.
          </p>
        </div>
        </div>

      </section>

    )
}