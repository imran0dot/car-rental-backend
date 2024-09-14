import { Request, Response } from "express";
import catchAsync from "../../utils/catchAsync";
import { createCarIntoDb } from "./car.services";
import sendResponse from "../../utils/sendResponce";

export const createCar = catchAsync( async (req: Request, res: Response) => {
    const result = await createCarIntoDb(req.body);
    sendResponse(res, {
        data: result,
        message: 'Data successfully created',
        status: 200
    })
})