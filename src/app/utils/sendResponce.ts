import { Response } from "express"

type TSendResponse = {
    status?: number,
    data: any,
    message: string,
};


const sendResponse = (res: Response, {
    status,
    data,
    message
}: TSendResponse) => {
    res.send({
        status,
        data,
        message
    })
};


export default sendResponse;