import { Router } from "express";
import { userRoute } from "../app/models/user/user.route";

export const router = Router();
const routes = [
    {
        path: '/user' ,
        rout: userRoute
    }
];

routes.forEach(route => router.use(route.path, route.rout));