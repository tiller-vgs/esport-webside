export type NewsArticle = {
  id: number;
  title: string;
  description: string;
  content: string;

  categoryId: number;

  category: {
    id: number;
    name: string;
    slug: string;
  };

  date: string;

  image?: string | null;

  status: "PUBLISERT" | "UTKAST" | "ARKIVERT";
};
