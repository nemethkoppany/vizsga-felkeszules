import jwt from "jsonwebtoken";
import mysql from "mysql2/promise";
import config from "./config";

export const login = async(req:any, res:any) =>{
    const {email,password} = req.body;


    try{
            const connection = await mysql.createConnection(config.database);
        const [results]:any = await connection.query(`
                SELECT login(?,?) as uid
            `,[email,password]);

            const uid = results[0].uid;

            if(!uid){
                return res.status(401).json("Hibás email vagy jelszó!")
            }

            const token = jwt.sign({userId: results[0].uid},config.JWTSecret,{expiresIn:"5h"});

            return res.status(200).json({token:token});

    }
    catch(err){
        console.log(err);
        return res.status(500).json("Szerver hiba");
    }
}