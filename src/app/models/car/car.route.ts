import { Router } from "express";
import { createCar, getCars } from "./car.controller";
import verifyAdmin from "../../middleware/verifyAdmin";

const router = Router();

//All Route of Car post type
router.post('/', verifyAdmin, createCar);
router.get('/', getCars);

export const carRoute = router;