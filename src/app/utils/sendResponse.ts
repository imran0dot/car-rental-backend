import { Response } from "express"

type TSendResponse = {
    success: boolean,
    statusCode: number,
    message: string,
    data: any
};


const sendResponse = (res: Response, {
    success,
    statusCode,
    message,
    data
}: TSendResponse) => {
    res.send({
        success,
        statusCode,
        message,
        data
    })
};


export default sendResponse;