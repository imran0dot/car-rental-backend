import { Request, Response } from "express";
import { createUserIntoDB } from "./user.service";
import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponce";

export const createUser = catchAsync(async (req: Request, res: Response,) => {
    const result = await createUserIntoDB(req.body);
    sendResponse(res, {
        data: result,
        message: '',
        status: 200,
    })
})