import mongoose from "mongoose";
import  config  from './app/config'
import app from "./app";

const main = async () => {
    try {
        const connectDb = await mongoose.connect(config.database_url as string);
        if(!connectDb){
            throw new Error('Error occurred because of Database Connection');
        }
        app.listen(config.port as string, () => {
            console.log(`your server is running on this port http://localhost:${config.port as string}`)
        });
    }
    catch (err) {
        console.log(err);
    }
};

main();