import { Request, Response } from "express"
import sendResponse from "./sendResponce"

const notFound = (req: Request, res: Response) => {
    sendResponse(res, {
        data: '',
        message: 'data not found',
        status: 404,
    })
};


export default notFound;