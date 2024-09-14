import { Router } from "express";
import { createCar } from "./car.controller";

const router = Router();

//All Route of Car post type
router.post('/', createCar);

export const carRoute = router;