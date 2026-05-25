import jwt from "jsonwebtoken";
import config from "./config";

export const verifyToken = (req:any, res:any, next:any) =>{
    const token = req.body.token;

    try{
        if(!token){
            return res.status(401).json("Nincs token");
        }

        const decodedTOken = jwt.verify(token,config.JwtSecret);

        req.user = decodedTOken

        return next();
    }
    catch(err){
        console.log(err);
        return res.status(500).json("Auth hiba")
    }
}