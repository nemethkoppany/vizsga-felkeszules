"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.verifyToken = void 0;
const config_1 = __importDefault(require("./config"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const verifyToken = (req, res, next) => {
    const token = req.headers["access-token"];
    try {
        if (!token) {
            return res.status(404).json("Nincs token");
        }
        const decodedTOken = jsonwebtoken_1.default.verify(token, config_1.default.JWTSecret);
        req.user = decodedTOken;
        return next();
    }
    catch (err) {
        console.log(err);
        return res.status(401).json("Nem engedélyezett");
    }
};
exports.verifyToken = verifyToken;
