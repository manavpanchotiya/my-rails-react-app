import * as z from "zod";

export const categoryFormSchema = z.object({
  name: z.string().min(1, "Category name is required"), // Validation rule for name
});

export type CategoryFormValues = z.infer<typeof categoryFormSchema>;
