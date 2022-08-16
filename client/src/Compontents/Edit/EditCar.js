import React from "react";
import Api from "../../api";
import { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";

export default () => {

   let { id } = useParams();
   console.log(useParams());
   console.log(id);
   let navigate = useNavigate();

   const[mark, setMark] = useState();
   const[model, setModel] = useState();
   const[year, setYear] = useState();
   const[price, setPrice] = useState();

   let handleChange = (e) => {
    let el = e.target;
    if (el.id == "mark_input") {
      setMark(el.value);
    } 
    if (el.id == "model_input") {
      setModel(el.value);
    } 
    if (el.id == "price_input") {
      setPrice(el.value);
    } 
    if (el.id == "year_input") {
      setYear(el.value);
    } 
  };

  let editCar = async () =>{
    let car = {
      mark: mark,
      model: model,
      price: price,
      year: year,
      favourite: false
    };
    console.log(car);

    let api = new Api();
    await api.editCar(id, car);
    navigate('/');
    
  }

  let handleNav=()=>{
    navigate('/');
  }


  return (
    <div className="flex mx-auto items-center justify-center h-screen bg-slade-1000 bg-cyan-50">
      <div
        className="flex flex-col items-center justify-center p-6 m-3 space-y-10 bg-white w-full h-fit rounded-2xl shadow-lg transition-all duration-150 hover:shadow-purple-500 md:flex-row md:w-2/3 md:space-y-0 md:space-x-10 md:m-0 md:p-16"
        id={id}
      >
        <div className="flex flex-col space-y-6">
          <div className="flex flex-col gap-5 mb-4 space-y-3 text-center md:text-left" onChange={handleChange}>
            <div className="w-full">
              <div className="flex items-center justify-center w-full h-10 text-center px-3 py-1 text-sm text-white bg-black rounded-full uppercase shadow-lg shadow-gray-500">
                EDIT CAR
              </div>
            </div>

            <div className="flex w-full font-bold gap-3">
              <input
                type="text"
                className="border-2 border-purple-500 w-1/2 h-16 text-center rounded-lg placeholder-purple-500 focus:outline-none shadow-lg shadow-purple-400 hover:-translate-y-1 duration-150"
                placeholder="Mark"
                id="mark_input"
              />
              <input
                type="text"
                className="border-2 border-purple-500 w-1/2 h-16 text-center rounded-lg placeholder-purple-500 focus:outline-none shadow-lg shadow-purple-400 hover:-translate-y-1 duration-150"
                placeholder="Model"
                id="model_input"
              />
            </div>

            <div className="flex flex-col mb-4 space-y-3 text-center md:text-left">
              <div className="flex max-w font-bold gap-3">
                <input
                  type="number"
                  className="border-2 border-purple-500 w-1/2 h-16 text-center font-bold rounded-lg placeholder-purple-500 focus:outline-none shadow-lg shadow-purple-400 hover:-translate-y-1 duration-150"
                  placeholder="Price"
                  id="price_input"
                />
                <input
                  type="number"
                  className="border-2 border-purple-500 w-1/2 h-16 text-center font-bold rounded-lg placeholder-purple-500 focus:outline-none shadow-lg shadow-purple-400 hover:-translate-y-1 duration-150"
                  placeholder="Year"
                  id="year_input"
                />
              </div>
            </div>

            <div className="flex flex-row space-x-4 justify-center items-center">
              <button onClick={editCar} className="flex items-center justify-center w-1/2 py-3 px-5 space-x-3 border-2 border-yellow-200 rounded-lg shadow-sm hover:bg-opacity-30 hover:shadow-lg hover:shadow-purple-500 hover:-translate-y-0.5 transition-all duration-150">
                <i className="fa-solid fa-cloud-arrow-up"></i>
              </button>

              <button
                onClick={handleNav}
                id="delete_button"
                className="flex items-center justify-center w-1/2 py-3 px-5 space-x-3 border-2 border-purple-500 rounded-lg  shadow-sm hover:bg-opacity-30 hover:shadow-lg hover:shadow-yellow-400 hover:-translate-y-0.5 transition-all duration-150"
              >
                <i className="fa-solid fa-xmark"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
