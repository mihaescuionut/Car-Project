import React from "react";
import facebook from "../../images/icon-facebook.svg";
import twitter from "../../images/icon-twitter.svg";
import pinterest from "../../images/icon-pinterest.svg";
import instagram from "../../images/icon-instagram.svg";

export default ()=>{

    return (

        <section className="bg-black">
        <div className="container max-w-6xl py-10 mx-auto">
          <div className="flex flex-col items-center mb-8 space-y-6 md:flex-row md:space-y-0 md:justify-between md:items-start">
            <div className="flex flex-col items-center space-y-8 md:items-start md:space-y-4">
              <div className="h-8">
              <h2 className="text-3xl text-white size-lg ml-5 font-alata animate-pulse">carstudios</h2>
              </div>
    
              <div className="flex flex-col items-center space-y-4 font-bold text-white md:flex-row md:space-y-0 md:space-x-6 md:ml-3">
                <div className="h-10 group">
                  <a href="#">About</a>
                  <div className="mx-2 group-hover:border-b group-hover:border-blue-50"></div>
                </div>
    
                <div className="h-10 group">
                  <a href="#">Careers</a>
                  <div className="mx-2 group-hover:border-b group-hover:border-blue-50"></div>
                </div>
    
                <div className="h-10 group">
                  <a href="#">Events</a>
                  <div className="mx-2 group-hover:border-b group-hover:border-blue-50"></div>
                </div>
    
                <div className="h-10 group">
                  <a href="#">Cars</a>
                  <div className="mx-2 group-hover:border-b group-hover:border-blue-50"></div>
                </div>
    
                <div className="h-10 group">
                  <a href="#">Support</a>
                  <div className="mx-2 group-hover:border-b group-hover:border-blue-50"></div>
                </div>
              </div>
            </div>
    
            <div className="flex flex-col items-start justify-between space-y-4 text-gray-500">
              <div className="flex items-center justify-center mx-auto space-x-4 md:justify-end md:mx-0">
                <div className="h-8 group">
                  <a href="#">
                    <img src={facebook} alt="" className="h-6 hover:-translate-y-0.5 transition-all duration-150" />
                  </a>
                </div>
    
                <div className="h-8 group">
                  <a href="#">
                    <img src={twitter} alt="" className="h-6 hover:-translate-y-0.5 transition-all duration-150" />
                  </a>
                </div>
    
                <div className="h-8 group">
                  <a href="#">
                    <img src={pinterest} alt="" className="h-6 hover:-translate-y-0.5 transition-all duration-150" />
                  </a>
                </div>
    
                <div className="h-8 group">
                  <a href="#">
                    <img src={instagram} alt="" className="h-6 hover:-translate-y-0.5 transition-all duration-150" />
                  </a>
                </div>
              </div>
    
              <div className="font-bold">
                &copy; 2022 Mihaescu Ionut-Alexandru. All Rights Reserved
              </div>
            </div>
          </div>
        </div>
      </section>
    )
}