import mongoose from "mongoose";

const connectDb =async()=>{
    try {
        const connectionInstance = await mongoose.connect(process.env.MONGODB_URI);
        console.log(`Mongodb connected HOST db !! ${connectionInstance.connection.host}`)
    } catch (error) {
        console.log('Mongodb connection failed',error)
        process.exit(1)
    }
}

export default connectDb