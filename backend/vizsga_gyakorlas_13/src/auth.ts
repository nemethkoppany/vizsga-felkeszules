import config from "./config";
import jwt from "jsonwebtoken";

export const verifyToken = (req:any, res:any, next:any) =>{
    const token = req.headers["access-token"];

    try{
        if(!token){
            return res.status(404).json("Nincs token");
        }

        const decodedTOken = jwt.verify(token,config.JWTSecret);
        req.user = decodedTOken;

        return next();
    }
    catch(err){
        console.log(err);
        return res.status(401).json("Nem engedélyezett")
    }
}