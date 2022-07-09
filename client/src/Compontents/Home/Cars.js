import React from "react";
import PopulateCars from "./PopulateCars";
import { useState, useEffect } from "react";
import Api from "../../api";
import Spinner from "react-bootstrap/Spinner";
import { Link, useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";

export default () => {
  const [cars, setCars] = useState([]);
  const [filters, setFilters] = useState([]);
  const [fav, setFavourites] = useState([]);
  let navigate = useNavigate();
  const {carId} = useParams();

  let fetchCars = async () => {
    let api = new Api();
    let allCars = await api.getAllCars();
    setCars(allCars);
    setFilters(allCars);
  };
  let fetchFavourites = async ()=>{
    let api = new Api();
    let favourites = await api.getAllFavourites();
    setFavourites(favourites);
}
  useEffect(() => {
    fetchCars();
    fetchFavourites();
  }, []);
  
  let searchCar = (e)=>{
    let el = e.target;
    setCars(
      filters.filter((e) =>
        e.mark.toLowerCase().includes(el.value.toLowerCase())
      ))
  }

  let showFavourites = (e)=>{
    let el = e.target;
    if(el.value == "all"){
      fetchCars();
    }else if(el.value == "favourites"){
      setCars(
        filters.filter((e)=> e.favourite == true)
      )
    }
  }
  

  let deleteCar = async (e) => {
    let el = e.target;
    console.log(el);
    if (el.id == "delete_button") {
      let id = el.parentNode.parentNode.parentNode.parentNode.id;
      console.log(id);
      let api = new Api();
      api.deleteCar(id);
      window.location.reload();
    }else if(el.id == "fav_button"){
      let id = el.parentNode.parentNode.parentNode.parentNode.parentNode.id;
      console.log(id);
      let api = new Api();
      let fav = await api.addToFav(id);
    }
    
  };



  return (
    <section id="cars_section" className="bg-cyan-50  min-h-screen">
      <div class="container max-w-6xl mx-auto my-32 px-6 text-gray-900 pt-5 md:px-0">
        <div class="flex justify-around mb-20" onChange={searchCar}>
          <h2 class="animate-bounce text-4xl text-center font-alata uppercase md:text-left md:text-5xl">
            <i class="fa-solid fa-car"></i>
          </h2>

            <select class="p-3 w-1/5 rounded-lg text-center text-yellow-600 border-2 border-yellow-400 focus:outline-none" id="cars" onChange={showFavourites}>
              <option selected="value"disabled>View</option>
              <option value="all">All Cars</option>
              <option value="favourites">Favourites</option>
            </select>

          <input
            type="text"
            class="border-2 border-purple-500 w-60 text-center rounded-lg placeholder-purple-500 focus:outline-none"
            placeholder="Search for a car here"
            id="search-input"
          />
        </div>
      </div>

      <div
        className="flex flex-col w-full md:grid md:grid-cols-3 md:gap-3"
        onClick={deleteCar}
      >
        {cars.length == 0 ? (
          <Spinner animation="border" role="status">
            <span className="visually-hidden">Loading...</span>
          </Spinner>
        ) : (
          cars.map((e) => <PopulateCars car={e} />)
        )}
      </div>
    </section>
  );
};
