export type NewsArticleCategory = {
  id: number;
  name: string;
  slug: string;
};

export type NewsArticle = {
  id: number;
  title: string;
  description: string;
  content: string;

  categoryId: number;

  category: NewsArticleCategory;

  date: string;
  dateInput: string;

  image?: string | null;

  status: "PUBLISERT" | "UTKAST" | "ARKIVERT";
};
