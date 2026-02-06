import z from "zod";

export const contactSchema = z.object({
  name: z.string().min(1, 'Name is required'),
  company: z.string().min(1, 'Company is required'),
  email: z.email('Invalid email address'),
  phone: z.string().regex(/^\d{10,15}$/, 'Phone must be 10-15 digits'),
  topic: z.string().min(1, 'Topic is required'),
  budget: z.string().min(1, 'Budget is required'),
  description: z.string().min(1, 'This field is required').max(1000, 'Needs description must be less than 1000 chars'),
});

export type ContactFormData = z.infer<typeof contactSchema>;