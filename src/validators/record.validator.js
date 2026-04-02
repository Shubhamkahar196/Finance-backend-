import { z } from 'zod';

// createSchema & updateSchema

export const recordSchema = z.object({
    amount: z.number().positive("Amount must be greater than 0"),
    type: z.enum(["income", "expense"], {
        message: "Type must be income or expense"
    }),
    category: z
        .string()
        .min(2, "Category must be at least 2 characters")
        .max(50, "Category too long")
        .trim(),
    date: z
        .string()
        .optional(),
    notes: z
        .string()
        .max(200, "Notes cannot exceed 200 characters")
        .optional()
});