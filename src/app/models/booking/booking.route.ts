import { Router } from "express";
import { createBooking, getBookings } from "./booking.controller";
import verifyAdmin from "../../middleware/verifyAdmin";

const router = Router();

//All Route of Car post type
router.post('/', createBooking);
router.get('/', verifyAdmin, getBookings);

export const bookingRoute = router;