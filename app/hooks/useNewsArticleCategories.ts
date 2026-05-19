import { useQuery } from "@tanstack/react-query";
import type { NewsArticleCategory } from "../types/types";

type NewsArticleCategoriesResponse = {
  data: NewsArticleCategory[];
  total: number;
};

type NewsArticleCategoryResponse = {
  data: NewsArticleCategory;
};

export const useNewsArticleCategories = () => {
  return useQuery<NewsArticleCategoriesResponse>({
    queryKey: ["newsArticleCategories"],

    queryFn: async () => {
      const response = await fetch("/api/news-article-categories", {
        method: "GET",
      });

      if (!response.ok) {
        throw new Error("Failed to fetch news article categories");
      }

      return response.json();
    },
  });
};

export const useNewsArticleCategory = (id?: number) => {
  return useQuery<NewsArticleCategoryResponse>({
    queryKey: ["newsArticleCategories", id],
    enabled: typeof id === "number" && id > 0,

    queryFn: async () => {
      const response = await fetch(`/api/news-article-categories?id=${id}`, {
        method: "GET",
      });

      if (!response.ok) {
        throw new Error("Failed to fetch news article category");
      }

      return response.json();
    },
  });
};
