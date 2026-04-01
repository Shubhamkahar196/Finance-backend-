import { z } from "zod";

// Password regex
const passwordRegex =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

// register schema
export const registerSchema = z.object({
  name: z.string().min(4, "Name must be at least 4 characters"),

  email: z
    .string()
    .email("Invalid email format"),

  password: z
    .string()
    .min(8, "Password must be at least 8 characters")
    .max(13, "Password should not be more than 13 characters")
    .regex(
      passwordRegex,
      "Password must include uppercase, lowercase, number & special character"
    )
});

// login schema
export const loginSchema = z.object({
  email: z
    .string()
    .email("Invalid email format"),

  password: z
    .string()
    .min(8, "Password must be at least 8 characters")
    .max(13, "Password should not be more than 13 characters")
    .regex(
      passwordRegex,
      "Password must include uppercase, lowercase, number & special character"
    )
});