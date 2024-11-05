import * as z from "zod";

export const resourceFormSchema = z.object({
  email: z.string().min(1, "Email is required"),
  firstName: z.string().min(1, "First name is required"),
  lastName: z.string().min(1, "Last name is required"),
  role_ids: z.array(z.number()).min(1, "At least one role must be selected")
});

export type ResourceFormValues = z.infer<typeof resourceFormSchema>;