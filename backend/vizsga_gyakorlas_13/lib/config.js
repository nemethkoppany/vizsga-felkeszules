"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
class DBConfig {
    constructor() {
        return {
            host: process.env.DB_HOST,
            user: process.env.DB_USER,
            database: process.env.DATABASE,
            password: process.env.DB_PASSWORD
        };
    }
}
const config = {
    database: new DBConfig(),
    JWTSecret: process.env.JWT_TOKEN
};
exports.default = config;
