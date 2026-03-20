import { z } from "zod";

export const contactSchema = z.object({
  name: z.string()
    .trim()
    .nonempty("Name is required")
    .max(50, "Max 50 characters")
    .regex(/^[a-zA-Z\s]+$/, "Name can only contain letters"),

  email: z.string()
    .trim()
    .nonempty("Email is required")
    .max(50, "Max 50 characters")
    .email("Invalid email"),

  subject: z.string()
    .trim()
    .nonempty("Subject is required")
    .max(100, "Max 100 characters"),

  message: z.string()
    .trim()
    .nonempty("Message is required")
    .min(5, "Message must be at least 5 characters")
    .max(1000, "Max 1000 characters")
    .refine(val => !/<script>/i.test(val), "Invalid content")
});