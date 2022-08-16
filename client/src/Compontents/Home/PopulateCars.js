import React from "react";
import { Link } from "react-router-dom";
import Aos from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";
import { FaTrashAlt } from 'react-icons/fa';


export default ({ car }) => {

  useEffect(()=>{
    Aos.init({duration: 2000})
  }, []);

  return (
    <div className="flex mx-auto items-center justify-center h-1/2 bg-slade-1000 md:mt-10">
      <div className="flex flex-col p-6 m-3 space-y-10 bg-white h-fit rounded-2xl shadow-lg hover:-translate-y-1 transition-all duration-150 hover:shadow-purple-500 md:flex-row md:space-y-0 md:space-x-10 md:m-0 md:p-16" id={car.id} data-aos="zoom-in">
        <div className="flex flex-col space-y-6">
          <div className="flex flex-col mb-4 space-y-3 text-center md:text-left">
            <div>
              <div className="inline-block px-3 py-1 text-sm text-white bg-black rounded-full">
                Free shipping
              </div>
            </div>

            <div className="max-w font-bold">
              <h3 className="text-xl">{car.mark}</h3>
              <p>{car.model}</p>
            </div>

            <div className="flex flex-col mb-4 space-y-3 text-center md:text-left">
              <p className="text-sm line-through">${car.price + 1500}</p>
              <p className="text-3xl font-bold">${car.price}</p>
              <p className="text-sm font-light text-gray-400">
                This offer is valid until the final of the current month or as
                long as stock lasts!
              </p>
            </div>

            <div className="group">
              <button className="w-full bg-purple-800 text-white border-b-8 border-b-purple-800 rounded-lg transition-all duration-150 group-hover:border-t-8 group-hover:border-b-0 group-hover:bg-purple-600 group-hover:border-t-purple-800 group-hover:shadow-lg" >
                <div className="px-8 py-4 duration-150s bg-purple-500 rounded-lg group-hover:bg-purple-600" id="fav_button">
                  <i className="fa-solid fa-heart"></i>
                </div>
              </button>
            </div>

            <div className="flex items-center space-x-3 group">
              <div className="w-3 h-3 bg-green-400 rounded-full group-hover:animate-ping"></div>
              <div className="text-sm">50+ in stock</div>
            </div>

            <div className="flex flex-row space-x-4 justify-center items-center">
              <div id="edit_button" className="flex items-center justify-center w-1/2 py-3 px-5 space-x-3 border-2 border-yellow-200 rounded-lg shadow-sm hover:bg-opacity-30 hover:shadow-lg hover:shadow-purple-500 hover:-translate-y-0.5 transition-all duration-150">
              <Link to={`/edit/${car.id}`}><i className="fa-solid fa-pen"></i></Link>
                
              </div>

              <button id="delete_car" className="flex items-center justify-center w-1/2 py-3 px-5 space-x-3 border-2 border-purple-500 rounded-lg  shadow-sm hover:bg-opacity-30 hover:shadow-lg hover:shadow-yellow-400 hover:-translate-y-0.5 transition-all duration-150">
                <FaTrashAlt/>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  
  
  );
};
