import { db } from "@/lib/db";
import { NextResponse } from "next/server";

export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url);
    const idParam = searchParams.get("id");

    if (idParam) {
      const id = Number(idParam);

      if (!Number.isInteger(id) || id <= 0) {
        return NextResponse.json(
          { error: "Category id must be a positive number" },
          { status: 400 },
        );
      }

      const category = await db.category.findUnique({
        where: {
          id,
        },
      });

      if (!category) {
        return NextResponse.json(
          { error: "Category not found" },
          { status: 404 },
        );
      }

      return NextResponse.json({ data: category });
    }

    const [categories, total] = await Promise.all([
      db.category.findMany({
        orderBy: {
          id: "desc",
        },
      }),
      db.category.count(),
    ]);

    return NextResponse.json({ data: categories, total });
  } catch {
    return NextResponse.json(
      { error: "Failed to fetch categories" },
      { status: 500 },
    );
  }
}
