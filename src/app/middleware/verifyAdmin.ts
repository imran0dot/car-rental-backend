import jwt from 'jsonwebtoken';
import { NextFunction, Request, Response } from 'express';
import sendResponse from '../utils/sendResponse';
import config from '../config';

const verifyAdmin = (req: Request, res: Response, next: NextFunction) => {
    const token = req.headers.authorization?.split(' ')[1];

    if (!token) {
        return sendResponse(res, {
            data: "",
            message: "Access denied. No token provided.",
            statusCode: 401,
            success: false
        })
    }

    try {
        const decoded = jwt.verify(token, config.jwt_secret as string) as { role: "admin" | "user" };
        if (decoded?.role === "admin") {
            next();
        }else{
            return sendResponse(res, {
                data: "",
                message: "This api granted for admin user only!",
                statusCode: 401,
                success: false
            })
        }
    } catch (err) {
        return sendResponse(res, {
            data: "",
            message: "Invalid or expired token.",
            statusCode: 401,
            success: false
        })
    }
};


export default verifyAdmin;
