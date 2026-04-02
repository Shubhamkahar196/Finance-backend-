import jwt, { decode } from 'jsonwebtoken';


export const protect = (req,res,next)=>{
    try {
        const token = req.cookie.token;

        if(!token){
return res.status(401).json({
    message: "Not authorized,no token"
})
        }

// verify token
const decoded = jwt.verify(token,process.env.JWT_SECRET);

// attach user info to request
req.user = decoded;  //{id , role}
 next();
        
    } catch (error) {
       return res.status(401).json({
      message: "Invalid or expired token"
    });  
    }
}