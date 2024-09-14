import { Router } from "express";
import { userRoute } from "../app/models/user/user.route";

export const authRouter = Router();

const routes = [
    {
        path: '/' ,
        rout: userRoute
    }
];

routes.forEach(route => authRouter.use(route.path, route.rout));