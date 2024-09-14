import { z } from 'zod';

const bookingValidationSchema = z.object({
  date: z.string().regex(/^\d{4}-\d{2}-\d{2}$/, "Date must be in YYYY-MM-DD format"),
  user: z.string().min(1, "User ID is required"),
  car: z.string().min(1, "Car ID is required"),
  startTime: z.string().regex(/^([01]\d|2[0-3]):([0-5]\d)$/, "Start time must be in HH:mm format"),
  endTime: z.string().regex(/^([01]\d|2[0-3]):([0-5]\d)$/, "End time must be in HH:mm format"),
  totalCost: z.number().optional().default(0),
});

export default bookingValidationSchema;