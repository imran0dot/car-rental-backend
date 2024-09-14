import { Request, Response } from "express";
import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import { createBookingIntoDb } from "./booking.services";

export const createBooking = catchAsync( async(req: Request, res: Response) => {
    const result = await createBookingIntoDb(req.body);
    sendResponse(res, {
        success: true,
        data: result,
        message: "Car booked successfully",
        statusCode: 200,
    })
})