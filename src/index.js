import dotenv from 'dotenv';
dotenv.config();

import express from 'express'
import connectDb from './config/db.js';

const app = express();
const PORT = process.env.PORT || 8000
connectDb();


app.listen(PORT,()=>{
    console.log(`Server is running on ${PORT}`);
})