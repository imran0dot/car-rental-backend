import { Request, Response } from "express";
import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import { createBookingIntoDb, getAllBookingsFromDb } from "./booking.services";

export const createBooking = catchAsync(async (req: Request, res: Response) => {
    const result = await createBookingIntoDb(req.body);
    sendResponse(res, {
        success: true,
        data: result,
        message: "Car booked successfully",
        statusCode: 200,
    })
});


export const getBookings = catchAsync(async (req: Request, res: Response) => {
    const queryParams = req.query;
    const result = await getAllBookingsFromDb(queryParams);
    sendResponse(res, {
        success: true,
        data: result,
        message: "Bookings retrieved successfully",
        statusCode: 200,
    });
})
