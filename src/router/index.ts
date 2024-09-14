import { Router } from "express";
import { userRoute } from "../app/models/user/user.route";
import { carRoute } from "../app/models/car/car.route";
import { bookingRoute } from "../app/models/booking/booking.route";

export const router = Router();
const routes = [
    {
        path: '/auth' ,
        rout: userRoute
    },
    {
        path: '/cars',
        rout: carRoute
    },
    {
        path: '/booking',
        rout: bookingRoute
    }
];

routes.forEach(route => router.use(route.path, route.rout));