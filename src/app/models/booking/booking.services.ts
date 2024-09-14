import TBooking from "./booking.interface";
import Booking from "./booking.modal";

export const createBookingIntoDb = async (bookingData: TBooking): Promise<TBooking | Error> => {
    const result = await Booking.create(bookingData);
    return result;
}