import dotenv from 'dotenv';
dotenv.config();


import express from 'express'
import cookieParser from 'cookie-parser';


import connectDb from './config/db.js';
import authRoutes from './routes/auth.routes.js'


const app = express();
const PORT = process.env.PORT || 8000
connectDb();

app.use(cookieParser());
app.use(express.json());


app.use("/api/auth",authRoutes);

app.listen(PORT,()=>{
    console.log(`Server is running on ${PORT}`);
})