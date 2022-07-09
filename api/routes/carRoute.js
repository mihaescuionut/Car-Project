import express from "express";
import db from "../config/config.js";

const router = express.Router();



router.get("/allCars", async (req, res, next) => {
  try {
    let allCars = await db.models.Car.findAll();
    res.status(200).json(allCars);
  } catch (e) {
    throw new Error(e);
  }
});

router.delete('/delete/:id', async(req, res, next)=>{
  try{
      const id = req.params.id;
      let obj = await db.models.Car.findByPk(id);
      if(obj){
          await obj.destroy();
          res.status(200).json(id);
      }
  }catch(err){
      next(err);
  }
})

router.get("/allFavourites", async (req, res, next) => {
  try {
    let favorites = await db.models.Car.findAll();
    let arr = [];
    favorites.forEach((e) => {
      if (e.favourite == true) {
        arr.push(e);
      }
    });
    res.status(200).json(arr);
  } catch (e) {
    throw new Error(e);
  }
});

router.put("/addToFav/:id", async (req, res, next) => {
  try {
    let { id } = req.params;
    let obj = await db.models.Car.findByPk(id);
    if (obj) {
      obj.favourite = true;
    }

    await obj.save();
    res.status(200).json(obj);
  } catch (e) {
    throw new Error(e);
  }
});

router.put('/editCar/:id', async(req, res, next)=>{
  try{
      const id = req.params.id;
      let car = req.body;
      let obj = await db.models.Car.findByPk(id);
      if(obj){
          if(car.mark){
              obj.mark = car.mark;
          }
          if(car.model){
              obj.model = car.model;
          }
          if(car.price){
              obj.price = car.price;
          }
          if(car.year){
              obj.year = car.year;
          }
          if(car.favourite){
            obj.favourite = car.favourite;
          }
          await obj.save();
          res.status(200).json(id);
      }
  }catch(err){
          next(err);
      }
  
})





export default router;
