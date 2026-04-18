import { Router } from "express";
import { login } from "./controller";


const router = Router();

router.post("/api/login",login);

export default router;