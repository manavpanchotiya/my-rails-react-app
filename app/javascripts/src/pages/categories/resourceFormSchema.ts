import * as z from "zod";

export const resourceFormSchema = z.object({
  name: z.string().min(1, "Category name is required"), // Validation rule for name
});

export type ResourceFormValues = z.infer<typeof resourceFormSchema>;
