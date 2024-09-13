import {Request, Response } from "express";
import { createUserIntoDB } from "./user.service";

export const createUser = async(req: Request, res: Response) => {
    const result = await createUserIntoDB(req.body);
    res.status(200).json({
        result
    })
}