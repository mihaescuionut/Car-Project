import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import db from './api/config/config.js';
import carRoute from './api/routes/carRoute.js';
import path from 'path';

dotenv.config();
const app = express();
app.use(express.json());
app.use(cors());

app.use('/api/v1', carRoute);

const __dirname = path.resolve();
app.use(express.static(path.join(__dirname, './frontend')));
app.get('*', (req, res)=>
    res.sendFile(path.resolve(__dirname, 'frontend', 'index.html')));

db.sequelize.sync().then(()=>{
app.listen(5000, ()=>{
    console.log('ceva');
})
})