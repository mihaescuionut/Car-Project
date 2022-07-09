import React from 'react';
import './App.css';
import Header from './Compontents/Home/Header';
import FeatureSection from './Compontents/Home/FeatureSection';
import Footer from './Compontents/Home/Footer';
import Cars from './Compontents/Home/Cars';
import EditCar from './Compontents/Edit/EditCar';
import { BrowserRouter, Route, Routes } from "react-router-dom";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<> <Header></Header> <FeatureSection></FeatureSection> <Cars></Cars> <Footer></Footer></>}></Route>
        <Route path="/edit/:id" element={<EditCar />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
