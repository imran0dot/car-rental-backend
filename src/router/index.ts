import { Router } from "express";
import { userRoute } from "../app/models/user/user.route";
import { carRoute } from "../app/models/car/car.route";

export const router = Router();
const routes = [
    {
        path: '/user' ,
        rout: userRoute
    },
    {
        path: '/car',
        rout: carRoute
    }
];

routes.forEach(route => router.use(route.path, route.rout));