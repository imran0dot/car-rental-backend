import { Router } from "express";
import { createCar } from "./car.controller";
import verifyAdmin from "../../middleware/veryfyAdmin";

const router = Router();

//All Route of Car post type
router.post('/', verifyAdmin, createCar);

export const carRoute = router;