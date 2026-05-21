import { Router } from "express";
import { login, getItems,getItemsByID, postProducts,putProducts } from "./controller";
import { verifyToken } from "./auth";
const router = Router();


router.post("/login",login);
router.get("/get",verifyToken,getItems);
router.get("/getID/:id",getItemsByID);
router.post("/post", postProducts);
router.put("/put/:id", putProducts);

export default router;