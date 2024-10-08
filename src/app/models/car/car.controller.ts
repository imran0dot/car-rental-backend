import { Request, Response } from "express";
import catchAsync from "../../utils/catchAsync";
import { createCarIntoDb, deleteSingleCarIntoDb, getAllCarFromDb, getSingleCarFromDb, updateReturnCarIntoDb, updateSingleCarIntoDb } from "./car.services";
import sendResponse from "../../utils/sendResponse";

export const createCar = catchAsync(async (req: Request, res: Response) => {
    const result = await createCarIntoDb(req.body);
    sendResponse(res, {
        success: true,
        data: result,
        message: "Car created successfully",
        statusCode: 201,
    });
});


export const getCars = catchAsync(async (req: Request, res: Response) => {
    const result = await getAllCarFromDb();
    sendResponse(res, {
        success: true,
        data: result,
        message: "Cars retrieved successfully",
        statusCode: 201,
    });
})


export const getCar = catchAsync(async (req: Request, res: Response) => {
    const { id } = req.params;
    
    const result = await getSingleCarFromDb(id);
    sendResponse(res, {
        success: true,
        data: result,
        message: "Cars retrieved successfully",
        statusCode: 201,
    });
})


export const updateSingleCar = catchAsync(async (req: Request, res: Response) => {
    const { id } = req.params;
    
    const result = await updateSingleCarIntoDb(id, req.body);
    sendResponse(res, {
        success: true,
        data: result,
        message: "Car updated successfully",
        statusCode: 200,
    });
})


export const deleteSingleCar = catchAsync(async (req: Request, res: Response) => {
    const { id } = req.params;
    const result = await deleteSingleCarIntoDb(id);
    sendResponse(res, {
        success: true,
        data: result,
        message: "Car Deleted successfully",
        statusCode: 200,
    });
})


export const carReturn = catchAsync(async (req: Request, res: Response) => {
    const {bookingId, endTime} = req.body;
    const result = await updateReturnCarIntoDb(bookingId, endTime);

    sendResponse(res, {
        success: true,
        data: result,
        message: "Car returned successfully",
        statusCode: 200,
    });
})