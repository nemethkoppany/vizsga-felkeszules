import { Router } from "express";
import { login, getUsers,post,putUser, patchUser } from "./controller";
import { verifyToken } from "./auth";
const router = Router();


router.post("/login",login);
router.get("/get",verifyToken,getUsers);
router.post("/post",post);
router.put("/put/:id",putUser);
router.patch("/patch/:id", patchUser)
export default router;