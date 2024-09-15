import TBooking from "./booking.interface";
import Booking from "./booking.modal";

export const createBookingIntoDb = async (bookingData: TBooking): Promise<TBooking | Error> => {
    const result = await Booking.create(bookingData);
    return result;
};



export const getAllBookingsFromDb = async (query: { carId?: string, date?: string }) => {
    let booking = [];

    if (query?.carId && query?.date) {
        booking = await Booking.find({ _id: query.carId, date: { $eq: query.date } });
    }
    else if (query?.carId) {
        booking = await Booking.find({ _id: query.carId });
    } 
    else if (query?.date) {
        booking = await Booking.find({ date: { $eq: query.date } });
    } 
    else {
        booking = await Booking.find();
    }

    return booking;
};


