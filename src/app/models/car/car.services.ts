import { ObjectId } from "mongoose";
import TCar from "./car.interface";
import Car from "./car.modal";
import Booking from "../booking/booking.modal";

export const createCarIntoDb = async (carData: TCar): Promise<TCar | Error> => {
    const createCar = await Car.create(carData as TCar);
    return createCar
}

export const getAllCarFromDb = async () => {
    const cars = await Car.find();
    return cars
}

export const getSingleCarFromDb = async (id: string) => {
    const car = await Car.findOne({ _id: id, isDeleted: { $ne: true } })
    return car
}

export const updateSingleCarIntoDb = async (id: string, body: {}) => {
    const updateCar = await Car.updateOne(
        { _id: id },
        { $set: body }
    );

    return updateCar;
}

export const deleteSingleCarIntoDb = async (id: string) => {
    const updateCar = await Car.updateOne(
        { _id: id },
        {
            $set: {
                isDeleted: true
            }
        }
    );

    return updateCar;
}

export const updateReturnCarIntoDb = async (bookingId: string, endTime: string) => {
        const booking = await Booking.findById(bookingId).select('startTime');
        if (!booking) {
            throw new Error('Booking not found');
        }
        const { startTime } = booking;
        const [startHours, startMinutes] = startTime.split(':').map(Number);
        const [endHours, endMinutes] = endTime.split(':').map(Number);

        // Create Date objects
        const startDate: Date = new Date();
        startDate.setHours(startHours, startMinutes);

        const endDate: Date = new Date();
        endDate.setHours(endHours, endMinutes);

        // Calculate the difference in milliseconds
        const differenceInMillis: number = endDate.getTime() - startDate.getTime();
        const differenceInHours: number = differenceInMillis / (1000 * 60 * 60);

        const totalCost: number = differenceInHours * 60;

        // Update the booking and return the updated document
        const updatedBooking = await Booking.findByIdAndUpdate(
            bookingId,
            {
                $set: {
                    endTime,
                    totalCost,
                }
            },
            { new: true } 
        )
        .populate('car')
        .populate({path: 'user', select: '-password'}) 
        .exec();

        return updatedBooking;
};