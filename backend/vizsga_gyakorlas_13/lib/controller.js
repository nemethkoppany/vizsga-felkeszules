"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.putProducts = exports.postProducts = exports.getProductsbyId = exports.getProducts = exports.login = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const promise_1 = __importDefault(require("mysql2/promise"));
const config_1 = __importDefault(require("./config"));
const login = async (req, res) => {
    const { email, password } = req.body;
    try {
        const connection = await promise_1.default.createConnection(config_1.default.database);
        const [results] = await connection.query(`
                SELECT login(?,?) as uid
            `, [email, password]);
        const uid = results[0].uid;
        if (!uid) {
            return res.status(401).json("Hibás email vagy jelszó!");
        }
        const token = jsonwebtoken_1.default.sign({ userId: results[0].uid }, config_1.default.JWTSecret, { expiresIn: "5h" });
        return res.status(200).json({ token: token });
    }
    catch (err) {
        console.log(err);
        return res.status(500).json("Szerver hiba");
    }
};
exports.login = login;
const getProducts = async (_req, res) => {
    const connection = await promise_1.default.createConnection(config_1.default.database);
    try {
        const [result] = await connection.query(`
            SELECT * FROM products
            `);
        return res.status(200).json(result);
    }
    catch (err) {
        console.log(err);
        return res.status(500).json("Szerver hiba");
    }
};
exports.getProducts = getProducts;
const getProductsbyId = async (req, res) => {
    const connection = await promise_1.default.createConnection(config_1.default.database);
    const id = Number(req.params.id);
    try {
        const [result] = await connection.query(`
            SELECT * FROM products WHERE id = ?
            `, [id]);
        if (result.length === 0) {
            return res.status(404).json("Az elem nem létezik");
        }
        return res.status(200).json(result);
    }
    catch (err) {
        console.log(err);
        return res.status(500).json("Szerver hiba");
    }
};
exports.getProductsbyId = getProductsbyId;
const postProducts = async (req, res) => {
    const connection = await promise_1.default.createConnection(config_1.default.database);
    if (!req.body.name || !req.body.description || !Number(req.body.price) || !Number(req.body.stock)) {
        return res.status(401).json("Hiányzó vagy hibás mezők");
    }
    try {
        const [result] = await connection.query(`
                INSERT INTO products VALUES(NULL,?,?,?,?,?)
            `, [req.body.name, req.body.description, Number(req.body.price), Number(req.body.stock), req.body.pictureurl]);
        if (result.affectedRows === 0) {
            return res.status(400).json("Az adatok nem megfelelőek");
        }
        return res.status(201).json({ id: result.insertId });
    }
    catch (err) {
        console.log(err);
        return res.status(500).json("Szerver hiba");
    }
};
exports.postProducts = postProducts;
const putProducts = async (req, res) => {
    const connection = await promise_1.default.createConnection(config_1.default.database);
    if (!req.body.name || !req.body.description || !Number(req.body.price) || !Number(req.body.stock)) {
        return res.status(400).json("Az adatok nem megfelelőek!");
    }
    try {
        const [result] = await connection.query(`
            UPDATE products SET name=?,description=?,price=?,stock=?,pictureurl=? WHERE id = ?
            `, [req.body.name, req.body.description, Number(req.body.price), Number(req.body.stock), req.body.pictureurl, Number(req.params.id)]);
        if (result.affectedRows === 0) {
            return res.status(404).json("Az elem nem létezik");
        }
        return res.status(201).json("Sikeres módosytás");
    }
    catch (err) {
        console.log(err);
        return res.status(500).json("Szerver hiba");
    }
};
exports.putProducts = putProducts;
