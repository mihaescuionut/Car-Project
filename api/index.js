import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import db from './config/config.js';
import carRoute from './routes/carRoute.js';

dotenv.config();
const app = express();
app.use(express.json());
app.use(cors());

app.use('/api/v1', carRoute);


db.sequelize.sync().then(()=>{
app.listen(3000, ()=>{
    console.log('ceva');
})
})