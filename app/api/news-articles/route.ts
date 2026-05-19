import { db } from "@/lib/db";
import { newsArticleSchema } from "@/lib/schema";
import { NextResponse } from "next/server";

function slugify(value: string) {
  return value
    .trim()
    .toLowerCase()
    .normalize("NFKD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

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

    const [articles, total] = await Promise.all([
      db.newsArticle.findMany({
        include: {
          category: true,
        },
        orderBy: {
          date: "desc",
        },
        take: limit,
        skip: offset,
      }),
      db.newsArticle.count(),
    ]);

    const safeArticles = articles.map(serializeArticleDate);

    return NextResponse.json({ data: safeArticles, total });
  } catch {
    return NextResponse.json(
      { error: "Failed to fetch articles" },
      { status: 500 },
    );
  }
}

export async function POST(req: Request) {
  try {
    const data = newsArticleSchema.parse(await req.json());

    const result = await db.newsArticle.create({
      data: {
        title: data.title,
        category: {
          connectOrCreate: {
            where: {
              name: data.category,
            },
            create: {
              name: data.category,
              slug: slugify(data.category),
            },
          },
        },
        date: new Date(data.date),
        status: data.status,
        image: data.image,
        description: data.description,
        content: data.content,
      },
      include: {
        category: true,
      },
    });

    return NextResponse.json(serializeArticleDate(result));
  } catch {
    return NextResponse.json(
      { error: "Failed to create article" },
      { status: 500 },
    );
  }
}

export async function PATCH(req: Request) {
  try {
    const { id, ...input } = await req.json();

    if (typeof id !== "number" || id === 0) {
      return NextResponse.json(
        { error: "Article id is required" },
        { status: 400 },
      );
    }

    const data = newsArticleSchema.parse(input);

    const result = await db.newsArticle.update({
      where: {
        id,
      },
      data: {
        title: data.title,
        category: {
          connectOrCreate: {
            where: {
              name: data.category,
            },
            create: {
              name: data.category,
              slug: slugify(data.category),
            },
          },
        },
        date: new Date(data.date),
        status: data.status,
        image: data.image,
        description: data.description,
        content: data.content,
      },
      include: {
        category: true,
      },
    });

    return NextResponse.json(serializeArticleDate(result));
  } catch {
    return NextResponse.json(
      { error: "Failed to update article" },
      { status: 500 },
    );
  }
}

export async function DELETE(req: Request) {
  try {
    const { id } = await req.json();

    if (typeof id !== "number" || id === 0) {
      return NextResponse.json(
        { error: "Article id is required" },
        { status: 400 },
      );
    }

    await db.newsArticle.delete({
      where: {
        id,
      },
    });

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json(
      { error: "Failed to delete article" },
      { status: 500 },
    );
  }
}
