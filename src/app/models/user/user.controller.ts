import { Request, Response } from "express";
import { createUserIntoDB } from "./user.service";
import catchAsync from "../../utils/catchAsync";

export const createUser = catchAsync(async (req: Request, res: Response,) => {
    const result = await createUserIntoDB(req.body);
    res.status(200).json({
        result
    })
})