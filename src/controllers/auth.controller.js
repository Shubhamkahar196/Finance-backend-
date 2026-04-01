import User from "../models/user.model.js";
import bcrypt from "bcryptjs";
import { generateToken } from "../utils/generateToken.js";
import { registerSchema,loginSchema } from "../validators/auth.validator.js";


// Register user(Only viewer)

export const registerUser = async(req,res)=>{
    try {
        const parsedData = registerSchema.safeParse(req.body);

        if(!parsedData.success){
            return res.status(400).json({
                message: "Validation failed",
            })
        }

        const {name,email,password} = parsedData.data;
        
        // finding user exist or not

        const existingUser = await User.findOne({email});
        if(existingUser){
            return res.status(400).json({
                message: "User already exists"
            });
        }

        // hashed password
        const hashedPassword = await bcrypt.hash(password,10);

        // create user (force viewer role)
        const user = await User.create({
            name,
            email,
            password: hashedPassword,
            role: "viewer"
        })

        // generate token
        const token = generateToken(user);

        // setCookie
        res.cookie("token",token,{
            httpOnly: true,
            secure: false,
            sameSite: "lax",
            maxAge :3*24*60*60*1000
        })

        res.status(201).json({
            message: "User registered successfully",
            user: {
                id: user._id,
                name: user.name,
                email: user.email,
                role: user.role
            }
        })
    } catch (error) {
        res.status(500).json({
      message: error.message || "Server Error"
    });
  
    }
}