import { Router } from "express";
import { createBooking } from "./booking.controller";

const router = Router();

//All Route of Car post type
router.post('/', createBooking);

export const bookingRoute = router;