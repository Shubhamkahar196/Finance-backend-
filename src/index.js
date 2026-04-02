import dotenv from "dotenv";
dotenv.config();


import express from 'express'
import cookieParser from 'cookie-parser';


import connectDb from './config/db.js';
import authRoutes from './routes/auth.routes.js'
import userRoutes from "./routes/user.routes.js";
import recordRoutes from "./routes/record.routes.js"
import dashboardRoutes from "./routes/dashboard.routes.js";

const app = express();
const PORT = process.env.PORT || 8000
connectDb();

app.use(express.json());
app.use(cookieParser());



app.use("/api/auth",authRoutes);
app.use("/api/users", userRoutes);
app.use("/api/records",recordRoutes);
app.use("/api/dashboard", dashboardRoutes);

app.listen(PORT,()=>{
    console.log(`Server is running on ${PORT}`);
})