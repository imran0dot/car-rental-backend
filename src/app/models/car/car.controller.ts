import { Request, Response } from "express";
import catchAsync from "../../utils/catchAsync";
import { createCarIntoDb } from "./car.services";
import sendResponse from "../../utils/sendResponse";

export const createCar = catchAsync( async (req: Request, res: Response) => {
    const result = await createCarIntoDb(req.body);
    sendResponse(res, {
        success: true,
        data: result,
        message: "Car created successfully",
        statusCode: 201,
    });
})