import { Types } from "mongoose";

interface TBooking {
  date: string;
  user: Types.ObjectId;
  car: Types.ObjectId;
  startTime: string;
  endTime?: string;
  totalCost?: number;
};


export default TBooking;