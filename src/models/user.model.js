import mongoose,{Schema} from "mongoose";
import { maxLength, minLength } from "zod";

const userSchema = mongoose.Schema({
    name: {
        type:String,
        required: true,
        trim: true
    },
    email:{
        type:String,
        required: true,
        unique: true
    },
    password: {
        type:String,
        required:true,
        minLength: 8,
        
    },
    role:{
        type: String,
        enum: ["viewer","analyst","admin"],
        default: "viewer"
    },
    status: {
        type:String,
        enum:['active','inactive'],
        default: "active"
    }
},{timestamps: true});

const User = mongoose.model("User",userSchema);

export default User;