import { z } from 'zod';

export const carSchemaValidation = z.object({
  name: z.string().min(1, "Name is required"),
  description: z.string().min(1, "Description is required"),
  color: z.string().min(1, "Color is required"),
  isElectric: z.boolean().optional(),
  status: z.enum(["available", "unavailable"]).default("available"),
  features: z.array(z.string()).optional().default([]),
  pricePerHour: z.number().min(0, "Price must be a positive number"),
  isDeleted: z.boolean().optional().default(false),
});