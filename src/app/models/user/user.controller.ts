import { Request, Response } from "express";
import { createUserIntoDB, loginUserIntoDb } from "./user.services";
import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import { TLoginInfo, TLoginUser, TUser } from "./user.interface";
import createToken from "../../utils/createToken";

export const createUser = catchAsync(async (req: Request, res: Response,) => {
    const result = await createUserIntoDB(req.body);

    sendResponse(res, {
        success: true,
        data: result,
        message: "User registered successfully",
        statusCode: 201,
    });
});


// Login user handler
export const loginUser = catchAsync(async (req: Request, res: Response,) => {
    const loginData: TLoginUser = {
        email: req.body.email,
        password: req.body.password
    }
    const result = await loginUserIntoDb(loginData as TLoginUser);;
    const token = createToken(result as unknown as TLoginInfo) as string;


    sendResponse(res, {
        success: true,
        data: result,
        message: "User logged in successfully",
        statusCode: 200,
        token: token
    });
});
