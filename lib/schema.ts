import z from "zod";

export const loginSchema = z.object({
  username: z.string().min(1, "Brukernavn kan ikke være tomt"),
  password: z.string().min(1, "Passord kan ikke være tomt"),
});

export const newsArticleSchema = z.object({
  title: z.string().min(5, "Tittelen må være minst 5 tegn"),
  slug: z.string().min(5, "Slug må være minst 5 tegn"),

  description: z.string().min(10, "Beskrivelsen må være minst 10 tegn"),

  content: z.string().min(20, "Innholdet må være minst 20 tegn"),

  dato: z.string().min(10, "Dato må være i formatet YYYY-MM-DD"),

  category: z.string().min(2, "Kategori kan ikke være tomt"),

  image: z.string(),

  status: z.enum(["UTKAST", "PUBLISERT", "ARKIVERT"]),
});
