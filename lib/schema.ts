import z from "zod";

export const loginSchema = z.object({
  username: z.string().min(1, "Brukernavn kan ikke være tomt"),
  password: z.string().min(1, "Passord kan ikke være tomt"),
});
