import { ObjectId } from "mongoose";
import TCar from "./car.interface";
import Car from "./car.modal";

export const createCarIntoDb = async (carData: TCar): Promise<TCar | Error> => {
    const createCar = await Car.create(carData as TCar);
    return createCar
}

export const getAllCarFromDb = async () => {
    const cars = await Car.find();
    return cars
}

export const getSingleCarFromDb = async (id: string) => {
    const car = await Car.findOne({_id: id, isDeleted: {$ne: true}})
    return car
}

export const updateSingleCarIntoDb = async (id: string, body: {}) => {
    const updateCar = await Car.updateOne(
        {_id: id},
        {$set: body}
    );

    return updateCar;
}

export const deleteSingleCarIntoDb = async (id: string) => {
    const updateCar = await Car.updateOne(
        {_id: id},
        {$set: {
            isDeleted: true
        }}
    );

    return updateCar;
}