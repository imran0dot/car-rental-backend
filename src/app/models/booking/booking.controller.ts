import { Request, Response } from "express";
import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import { createBookingIntoDb, getAllBookingsFromDb } from "./booking.services";
import TBooking from "./booking.interface";
import { Types } from "mongoose";

export const createBooking = catchAsync(async (req: Request, res: Response) => {
    const userId = req?.headers?.userId as Object;
    const {carId, startTime, date} = req.body;

    const bookingInfo: TBooking = {
        user: userId as Types.ObjectId,
        car: carId,
        date,
        startTime,
    };
    const result = await createBookingIntoDb(bookingInfo);
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
