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

export const getProducts = async (_req:any, res:any) =>{
    const connection = await mysql.createConnection(config.database);

    try{

        const [result]:any = await connection.query(`
            SELECT * FROM products
            `)


            return res.status(200).json(result);
    }
    catch(err){
        console.log(err);
        return res.status(500).json("Szerver hiba")
    }
}

export const getProductsbyId = async (req:any, res:any) =>{
    const connection = await mysql.createConnection(config.database);
    const id = Number(req.params.id);
    try{

        const [result]:any = await connection.query(`
            SELECT * FROM products WHERE id = ?
            `,[id])

            if(result.length === 0){
                return res.status(404).json("Az elem nem létezik");
            }
            
            return res.status(200).json(result);
    }
    catch(err){
        console.log(err);
        return res.status(500).json("Szerver hiba")
    }
}

export const postProducts = async(req:any, res:any ) =>{
    const connection = await mysql.createConnection(config.database);

    if(!req.body.name || !req.body.description || !Number(req.body.price) || !Number(req.body.stock)){
        return res.status(401).json("Hiányzó vagy hibás mezők");
    }
    try{
        const [result]:any = await connection.query(`
                INSERT INTO products VALUES(NULL,?,?,?,?,?)
            `,[req.body.name, req.body.description, Number(req.body.price), Number(req.body.stock), req.body.pictureurl])

            if(result.affectedRows === 0){
                return res.status(400).json("Az adatok nem megfelelőek");
            }

            return res.status(201).json({id: result.insertId});
    }
    catch(err){
        console.log(err);
        return res.status(500).json("Szerver hiba");
    }
}

export const putProducts = async(req:any, res:any )=>{
    const connection = await mysql.createConnection(config.database);

    if(!req.body.name || !req.body.description || !Number(req.body.price) || !Number(req.body.stock)){
        return res.status(400).json("Az adatok nem megfelelőek!");
    }    

    try{
        const [result]:any = await connection.query(`
            UPDATE products SET name=?,description=?,price=?,stock=?,pictureurl=? WHERE id = ?
            `,[req.body.name, req.body.description, Number(req.body.price), Number(req.body.stock), req.body.pictureurl, Number(req.params.id)])

            if(result.affectedRows === 0){
                return res.status(404).json("Az elem nem létezik");
            
            
            }

            return res.status(201).json("Sikeres módosytás");
    }
    catch(err){
        console.log(err);
        return res.status(500).json("Szerver hiba")
    }
}