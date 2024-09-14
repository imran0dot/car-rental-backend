import { Router } from "express";
import { userRoute } from "../app/models/user/user.route";
import { carRoute } from "../app/models/car/car.route";
import { bookingRoute } from "../app/models/booking/booking.route";

export const router = Router();
const routes = [
    {
        path: '/user' ,
        rout: userRoute
    },
    {
        path: '/car',
        rout: carRoute
    },
    {
        path: '/booking',
        rout: bookingRoute
    }
];

routes.forEach(route => router.use(route.path, route.rout));