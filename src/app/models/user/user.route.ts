import { Router } from "express";
import { createUser, loginUser } from "./user.controller";

const router = Router();

router.post('/signup', createUser);
router.post('/signin', loginUser)


export const userRoute = router;