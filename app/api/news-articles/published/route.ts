import { db } from "@/lib/db";
import { NextResponse } from "next/server";

const displayDateFormatter = new Intl.DateTimeFormat("nb-NO", {
  day: "2-digit",
  month: "2-digit",
  year: "numeric",
  timeZone: "Europe/Oslo",
});

function serializeArticleDate<T extends { date: Date }>(article: T) {
  return {
    ...article,
    date: displayDateFormatter.format(article.date),
    dateInput: article.date.toISOString().slice(0, 10),
  };
}

export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url);

    const limit = Number(searchParams.get("limit")) || 5;
    const offset = Number(searchParams.get("offset")) || 0;
    const where = {
      status: "PUBLISERT" as const,
    };

    const [articles, total] = await Promise.all([
      db.newsArticle.findMany({
        where,
        include: {
          category: true,
        },
        orderBy: {
          date: "desc",
        },
        take: limit,
        skip: offset,
      }),
      db.newsArticle.count({
        where,
      }),
    ]);

    const safeArticles = articles.map(serializeArticleDate);

    return NextResponse.json({ data: safeArticles, total });
  } catch {
    return NextResponse.json(
      { error: "Failed to fetch published articles" },
      { status: 500 },
    );
  }
}
