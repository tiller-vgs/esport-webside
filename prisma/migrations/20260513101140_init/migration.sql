-- CreateEnum
CREATE TYPE "Status" AS ENUM ('PUBLISERT', 'UTKAST', 'ARKIVERT');

-- CreateTable
CREATE TABLE "NewsArticle" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "content" TEXT NOT NULL,
    "category" TEXT NOT NULL,
    "date" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "image" TEXT,
    "status" "Status" NOT NULL DEFAULT 'UTKAST',

    CONSTRAINT "NewsArticle_pkey" PRIMARY KEY ("id")
);
