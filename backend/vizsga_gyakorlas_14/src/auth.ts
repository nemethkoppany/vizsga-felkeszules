import config from "./config";
import jwt from "jsonwebtoken";


export const verifyToken = (req:any, res:any, next:any) =>{

    const token = req.body.token

    try{

        if(!token){
            return res.status(404).json("Nincs token")
        }

        const decodedToken = jwt.verify(token, config.Jwt_Secret);
        req.user = decodedToken

        return next();


    }
    catch(err){
        console.log(err);
        return res.status(500).json("Rendszer hiba");
    }
}