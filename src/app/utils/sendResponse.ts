import { Response } from "express"

type TSendResponse = {
    success: boolean,
    statusCode: number,
    message: string,
    data: any,
    token?: string
};


const sendResponse = (res: Response, {
    success,
    statusCode,
    message,
    data,
    token
}: TSendResponse) => {
    res.send({
        success,
        statusCode,
        message,
        data,
        token
    })
};


export default sendResponse;