import Router from "express"
import { login,getPet,postPet,putPet,patchPet } from "./controller";
import { verifyToken } from "./auth";
const router = Router();


router.post("/login",login);
router.get("/get",verifyToken,getPet);
router.post("/post",postPet);
router.put("/put/:id",putPet);
router.patch("/patch/:id",patchPet);

export default router;