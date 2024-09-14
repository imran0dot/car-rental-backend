import { Router } from "express";
import { createCar, deleteSingleCar, getCar, getCars, updateSingleCar } from "./car.controller";
import verifyAdmin from "../../middleware/verifyAdmin";

const router = Router();

//All Route of Car post type
router.post('/', verifyAdmin, createCar);
router.get('/', getCars);
router.get('/:id', getCar);
router.put('/:id', verifyAdmin, updateSingleCar);
router.delete('/:id', verifyAdmin, deleteSingleCar);


export const carRoute = router;