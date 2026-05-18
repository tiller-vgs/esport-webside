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

    const safeArticles = articles.map((a) => ({
      ...a,
      date: a.date.toISOString(),
    }));

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

    return NextResponse.json({
      ...result,
      date: result.date.toISOString(),
    });
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

    return NextResponse.json({
      ...result,
      date: result.date.toISOString(),
    });
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
