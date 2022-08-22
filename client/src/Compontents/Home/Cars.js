import React from "react";
import PopulateCars from "./PopulateCars";
import { useState, useEffect } from "react";
import Api from "../../api";
import Spinner from "react-bootstrap/Spinner";
import { Link, useNavigate } from "react-router-dom";


export default () => {

  let navigate = useNavigate();

  const [cars, setCars] = useState([]);
  const [searchCars, setSearchCars] = useState([]);
  const [isFav, setFav] = useState(false);
  const [fav, setFavourites] = useState([]);
  const [search, setSearch] = useState();
  

  let handleSearch=(e)=>{
    let obj = e.target;
    setCars(
      searchCars.filter((e)=>
        e.mark.toString().toLowerCase().includes(obj.value.toString().toLowerCase())
      )
    )
    
  }
  let fetchCars = async () => {
    let api = new Api();
    let all = await api.getAllCars();
    setCars(all);
    setSearchCars(all);
  };

  let fetchFavourites = async () => {
    let api = new Api();
    let favourites = await api.getAllFavourites();
    setFavourites(favourites);
  };

  useEffect(() => {
    fetchCars();
    fetchFavourites();
  }, []);

  let showFavourites = (e) => {
    let el = e.target;
    if (el.value == "all") {
      setFav(false);
    } else if (el.value == "favourites") {
      setFav(true);
    }

    console.log(isFav);
  };

  let handleDeleteAndFav = async (e) => {
    let el = e.target;
    console.log(el.id);
    if (el.id == "delete_car") {
      let car = document.querySelector('.carid');
      let id = car.id;
      let api = new Api();
      await api.deleteCar(id);
      window.location.reload();
    } else if (el.id == "fav_button") {
      let id = el.parentNode.parentNode.parentNode.parentNode.parentNode.id;
      let api = new Api();
      let fav = await api.addToFav(id);
      window.location.reload();
    }
  };

  return (
    <section id="cars_section" className="bg-cyan-50  min-h-screen">
      <div className="container max-w-6xl mx-auto my-32 px-6 text-gray-900 pt-5 md:px-0">
        <div className="flex flex-col justify-center items-center gap-8 md:flex-row md:justify-between md:gap-0 md:mb-20">

          <h2 className="animate-bounce text-4xl text-center font-alata uppercase md:text-left md:text-5xl">
            <i className="fa-solid fa-car"></i>
          </h2>

          <select
            className="p-3 w-1/2  rounded-lg text-center text-yellow-600 border-2 border-yellow-400 focus:outline-none md:w-1/5"
            id="cars"
            onChange={showFavourites}
          >
            <option selected="value" disabled>
              View
            </option>
            <option value="all">All Cars</option>
            <option value="favourites">Favourites</option>
          </select>

          <input onChange={handleSearch}
            type="text"
            className="border-2 border-purple-500 w-60 text-center rounded-lg placeholder-purple-500 focus:outline-none"
            placeholder="Search for a car here"
            id="search-input"
          />
        </div>
      </div>

      <div
        className="flex flex-col w-full md:grid md:grid-cols-3 md:gap-3"
        onClick={handleDeleteAndFav}
      >
        {cars.length == 0 ? (
          <Spinner animation="border" role="status">
            <span className="visually-hidden">Loading...</span>
          </Spinner>
        ) : (
          <>
            {!isFav
              ? cars.map((e) => <PopulateCars car={e} />)
              : fav.map((e) => <PopulateCars car={e} />)}
          </>
        )}
      </div>
    </section>
  );
};
