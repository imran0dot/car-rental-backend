import { ObjectId } from "mongoose";

interface TBooking {
    date: string; // In ISO format or YYYY-MM-DD
    user: ObjectId; // Reference to user ID
    car: ObjectId; // Reference to car ID
    startTime: string; // In 24hr format (HH:mm)
    endTime: string; // In 24hr format (HH:mm)
    totalCost?: number; // Optional, defaults to 0
  };


export default TBooking;