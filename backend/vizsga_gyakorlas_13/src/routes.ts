import { Router } from "express";
import { login,getProducts,getProductsbyId,postProducts,putProducts } from "./controller";
import { verifyToken } from "./auth";


const router = Router();

router.post("/api/login",login);
router.get("/api/products",getProducts);
router.get("/api/products/:id",getProductsbyId);
router.post("/api/products",verifyToken,postProducts);
router.put("/api/products/:id",verifyToken,putProducts);
export default router;