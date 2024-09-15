import { Router } from "express";
import { carReturn, createCar, deleteSingleCar, getCar, getCars, updateSingleCar } from "./car.controller";
import verifyAdmin from "../../middleware/verifyAdmin";

const router = Router();

//All Route of Car post type
router.post('/', verifyAdmin, createCar);
router.get('/', getCars);
router.get('/:id', getCar);
router.put('/return', carReturn);
router.put('/:id', verifyAdmin, updateSingleCar);
router.delete('/:id', verifyAdmin, deleteSingleCar);

// update return car  
// router.get('/t', carReturn)


export const carRoute = router;