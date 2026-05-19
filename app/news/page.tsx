"use client";

import { Card, CardContent } from "@/components/ui/card";
import { useState } from "react";
import { useNewsArticlesNewsPage } from "../hooks/useNewsArticles";
import { NewsArticle } from "../types/types";

function Nyheter() {
  const [activeCard, setActiveCard] = useState<number | null>(null);

  const { data, isLoading } = useNewsArticlesNewsPage();

  const articles = data?.data ?? [];

  if (articles.length === 0) {
    return "";
  }

  return (
    <main className="min-h-screen px-6 md:px-20 py-20 relative overflow-hidden">
      <div className="relative z-10">
        <h1 className="text-6xl md:text-8xl font-bold">
          Våre <span className="text-primary">nyheter</span>
        </h1>

        <p className="text-gray-300 text-xl mt-6">
          Hold deg oppdatert på lagene våre, events og aktiviteter.
        </p>

        <div className="mt-10 grid grid-cols-1 gap-8 md:grid-cols-3">
          {isLoading ? (
            <div className="p-10 text-center">Laster artikler...</div>
          ) : (
            articles.map((article: NewsArticle) => (
              <Card
                key={article.id}
                className="overflow-hidden border border-primary/20 bg-zinc-900 transition-all duration-300 hover:-translate-y-1 hover:border-primary"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={article.image || "/esport-background.png"}
                    alt={article.title}
                    className="h-60 w-full object-cover transition duration-300 hover:scale-105"
                  />
                </div>

                <CardContent className="p-6">
                  <div className="mb-4 flex items-center gap-3">
                    <span className="rounded bg-primary px-2 py-1 text-xs font-semibold text-black">
                      {article.date}
                    </span>
                  </div>

                  <p className="mb-2 text-sm text-gray-500">
                    {article.category?.name}
                  </p>

                  <h2 className="mb-3 text-2xl font-bold">{article.title}</h2>

                  <p className="text-gray-300">{article.description}</p>

                  <button
                    onClick={() =>
                      setActiveCard(
                        activeCard === article.id ? null : article.id,
                      )
                    }
                    className="mt-6 inline-flex items-center gap-2 text-primary hover:text-primary transition"
                  >
                    Les mer
                  </button>
                  {activeCard === article.id && (
                    <div className="mt-4 border-t border-zinc-700 pt-4 text-gray-300">
                      {article.content}
                    </div>
                  )}
                </CardContent>
              </Card>
            ))
          )}
        </div>
      </div>
    </main>
  );
}

export default Nyheter;
