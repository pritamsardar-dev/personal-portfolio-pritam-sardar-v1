import { z } from "zod";

export const adminLoginSchema = z.object({
  loginId: z
    .string()
    .trim()
    .nonempty("Login ID is required")
    .min(3, "Minimum 3 characters")
    .max(50, "Maximum 50 characters"),

  password: z
    .string()
    .trim()
    .nonempty("Password is required")
    .min(6, "Password must be at least 6 characters")
    .max(100, "Maximum 100 characters"),
});
