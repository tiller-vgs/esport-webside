"use client";

import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { useNewsArticlesLandingPage } from "@/app/hooks/useNewsArticles";
import type { NewsArticle } from "@/app/types/types";

export default function Advertisment() {
  const [activeCard, setActiveCard] = useState<number | null>(null);

  const { data, isLoading } = useNewsArticlesLandingPage();

  const articles = data?.data ?? [];

  if (articles.length === 0) {
    return "";
  }

  return (
    <section className="w-full px-[5%] py-10 md:py-24">
      <div className="container mx-auto">
        <div className="mb-12 max-w-2xl">
          <p className="mb-3 font-semibold text-primary">Tiller E-Sport</p>

          <h1 className="text-5xl font-bold md:text-7xl">Våre nyheter</h1>

          <p className="mt-4 text-gray-300">
            Hold deg oppdatert på lagene våre, events og aktiviteter.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
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
    </section>
  );
}
