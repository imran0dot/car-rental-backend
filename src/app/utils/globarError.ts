import { NextFunction, Request, Response } from "express";
import sendResponse from "./sendResponce";

const globalErrorHandler = (err: any, req: Request, res: Response, next: NextFunction) => { 
    if(err){
      return  sendResponse(res, {
            data: '',
            message: `something went wrong: ${err}`,
            status: 300,
        })
    }
    return next();
};


export default globalErrorHandler;