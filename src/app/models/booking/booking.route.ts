import { Router } from "express";
import { createBooking, getBookings, myBookings } from "./booking.controller";
import verifyAdmin from "../../middleware/verifyAdmin";
import verifyUser from "../../middleware/verifyUser";

const router = Router();

//All Route of Car post type
router.post('/', verifyUser, createBooking);
router.get('/', verifyAdmin, getBookings);
router.get('/my-bookings', verifyUser, myBookings);

export const bookingRoute = router;