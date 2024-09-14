import mongoose from "mongoose";
import TCar from "./car.interface";

const carSchema = new mongoose.Schema<TCar>({
    name: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    color: {
        type: String,
        required: true,
    },
    isElectric: {
        type: Boolean,
        default: false,
    },
    status: {
        type: String,
        enum: ['available', 'unavailable'],
        default: 'available',
    },
    features: {
        type: [String],
        default: [],
    },
    pricePerHour: {
        type: Number,
        required: true,
        min: 0,
    },
    isDeleted: {
        type: Boolean,
        default: false,
    },
});

const Car = mongoose.model<TCar>('Car', carSchema);
export default Car;