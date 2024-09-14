import mongoose from 'mongoose';
import TBooking from './booking.interface';


const bookingSchema = new mongoose.Schema<TBooking>({
  date: {
    type: String,
    required: true,
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  car: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Car',
    required: true,
  },
  startTime: {
    type: String,
    required: true,
  },
  endTime: {
    type: String,
    required: true,
  },
  totalCost: {
    type: Number,
    default: 0,
  },
});

const Booking = mongoose.model<TBooking>('Booking', bookingSchema);
export default Booking;