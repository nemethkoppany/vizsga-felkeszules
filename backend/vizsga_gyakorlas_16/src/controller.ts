import mysql from "mysql2/promise";
import config from "./config";
import jwt from "jsonwebtoken";

export const login = async(req:any, res:any )=>{

    const {email, password} = req.body;
    const connection = await mysql.createConnection(config.database);

    try{
        const [result]:any = await connection.query(`
                SELECT login(?,?) as uid
            `,[email,password])

            const id = result[0].uid

            if(!id){
                return res.status(401).json("Hibás email vagy jelszó!");
            }

            const token = jwt.sign({userId: id},config.JwtSecret,{expiresIn:"5h"});

            return res.status(200).json({token:token})
    }
    catch(err){
        console.log(err);
        return res.status(500).json("Szerver hiba")
    }
}

export const getPet = async(_req:any, res:any )=>{


    const connection = await mysql.createConnection(config.database);

    try{
        const [result]:any = await connection.query(`
                SELECT * from pet
            `)

            return res.status(200).json(result)
    }
    catch(err){
        console.log(err);
        return res.status(500).json("Szerver hiba")
    }
}

export const postPet = async(req:any, res:any )=>{


    const connection = await mysql.createConnection(config.database);

    if(!req.body.name|| !req.body.description|| !Number(req.body.price)||!Number(req.body.stock)){
        return res.status(404).json("Nincs megadva minden");
    }
    try{
        const [result]:any = await connection.query(`
               INSERT INTO pet VALUES(NULL,?,?,?,?,?)
            `,[req.body.name, req.body.description, Number(req.body.price), Number(req.body.stock), req.body.picture])

            return res.status(200).json(result.insertId);
    }
    catch(err){
        console.log(err);
        return res.status(500).json("Szerver hiba")
    }
}


export const putPet = async(req:any, res:any )=>{


    const connection = await mysql.createConnection(config.database);

    if(!req.body.name|| !req.body.description|| !Number(req.body.price)||!Number(req.body.stock)){
        return res.status(404).json("Nincs megadva minden");
    }
    try{
        const [result]:any = await connection.query(`
               UPDATE pet SET name=?,description=?,price=?,stock=?,picture=? WHERE id = ?
            `,[req.body.name, req.body.description, Number(req.body.price), Number(req.body.stock), req.body.picture,req.params.id])


            if(result.affectedRows === 0){
                return res.status(404).json("Nem sikerült");
            }
            return res.status(200).json("Sikerült");
    }
    catch(err){
        console.log(err);
        return res.status(500).json("Szerver hiba")
    }
}

export const patchPet = async(req:any, res:any )=>{


    const connection = await mysql.createConnection(config.database);

  
    try{
        const [result]:any = await connection.query(`
               UPDATE pet SET name=COALESCE(?,name),description=COALESCE(?,description),price=COALESCE(?,price),stock=COALESCE(?,stock),picture=COALESCE(?,picture) WHERE id = ?
            `,[req.body.name, req.body.description, Number(req.body.price)?Number(req.body.price):null, Number(req.body.stock)?Number(req.body.stock):null, req.body.picture,req.params.id])


            if(result.affectedRows === 0){
                return res.status(404).json("Nem sikerült");
            }
            return res.status(200).json("Sikerült");
    }
    catch(err){
        console.log(err);
        return res.status(500).json("Szerver hiba")
    }
}
