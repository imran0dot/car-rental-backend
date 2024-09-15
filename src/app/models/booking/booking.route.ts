import { Router } from "express";
import { createBooking, getBookings } from "./booking.controller";
import verifyAdmin from "../../middleware/verifyAdmin";
import verifyUser from "../../middleware/verifyUser";

const router = Router();

//All Route of Car post type
router.post('/', verifyUser, createBooking);
router.get('/', verifyAdmin, getBookings);

export const bookingRoute = router;