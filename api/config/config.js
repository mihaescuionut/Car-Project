import { Sequelize } from "sequelize";
import dotenv from 'dotenv';
import Car from '../models/car.js';

dotenv.config();

const configDB=()=>{
     
    try{
        let sequelize = new Sequelize(process.env.DATABASE, process.env.USER, process.env.USER_PASSWORD,
            {  
                host: process.env.HOST,
                dialect: process.env.DIALECT
            });

        let db = {
            models:{}
        }

        db.sequelize = sequelize;
        db.Sequelize = Sequelize;

        db.models.Car = Car(sequelize);
        
        return db;
    }catch(e){
        throw new Error(e);
    }
}

let db = configDB();
export default db;