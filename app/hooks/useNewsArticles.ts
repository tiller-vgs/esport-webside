import { useQuery } from "@tanstack/react-query";
import type { NewsArticle } from "../types/types";

type NewsArticlesResponse = {
  data: NewsArticle[];
  total: number;
};

export const useNewsArticles = (page: number) => {
  const limit = 5;
  const offset = (page - 1) * limit;

  return useQuery<NewsArticlesResponse>({
    queryKey: ["newsArticles", page],

    queryFn: async () => {
      const response = await fetch(
        `/api/news-articles?limit=${limit}&offset=${offset}`,
        {
          method: "GET",
        },
      );

      if (!response.ok) {
        throw new Error("Failed to fetch news articles");
      }

      const data = await response.json();

      return data;
    },
  });
};
