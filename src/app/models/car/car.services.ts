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