import { z } from 'zod';

export const ContactFormSchema = z.object({
    name: z.string().max(50, { message: '50 characters max' }),
    email: z.string().email('Please enter a valid email'),
    message: z.string().max(500, { message: '500 characters max' }),
});

export type ContactFormValues = z.infer<typeof ContactFormSchema>;