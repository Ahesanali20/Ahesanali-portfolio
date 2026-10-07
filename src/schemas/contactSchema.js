// TODO: Define contact form validation.
import { z } from "zod";

export const contactSchema = z.object({
  name: z
    .string()
    .min(2, "Name must be at least 2 characters.")
    .max(50, "Name must be less than 50 characters."),

  email: z.string().email("Please enter a valid email address."),

  subject: z
    .string()
    .min(5, "Subject must be at least 5 characters.")
    .max(100, "Subject must be less than 100 characters."),

  message: z
    .string()
    .min(20, "Message must be at least 20 characters.")
    .max(1000, "Message must be less than 1000 characters."),
});
