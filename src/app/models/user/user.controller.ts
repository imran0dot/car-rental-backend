import { Request, Response } from "express";
import { createUserIntoDB } from "./user.services";
import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";

export const createUser = catchAsync(async (req: Request, res: Response,) => {
    const result = await createUserIntoDB(req.body);
    
    sendResponse(res, {
        success: true,
        data: result,
        message: "User registered successfully",
        statusCode: 201,
    });
})