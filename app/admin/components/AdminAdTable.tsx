"use client";

import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import CreateNewsForm from "./CreateNewsForm";
import EditNewsForm from "./EditNewsForm";
import { useNewsArticles } from "@/app/hooks/useNewsArticles";
import type { NewsArticle } from "../../types/types";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";

const ITEMS_PER_PAGE = 5;

function DeleteNewsButton({ article }: { article: NewsArticle }) {
  const queryClient = useQueryClient();
  const deleteMutation = useMutation({
    mutationFn: async () => {
      const response = await fetch("/api/news-articles", {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          id: article.id,
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to delete article");
      }
    },
    onSuccess: () => {
      toast.success("Nyhetsartikkelen ble slettet");
      queryClient.invalidateQueries({ queryKey: ["newsArticles"] });
    },
    onError: (error) => {
      toast.error("Klarte ikke å slette nyhetsartikkelen", {
        description:
          error instanceof Error
            ? error.message
            : "Feil ved sletting av nyhetsartikkel",
      });
    },
  });

  function handleDelete() {
    const confirmed = window.confirm(
      `Er du sikker på at du vil slette "${article.title}"?`,
    );

    if (!confirmed) return;

    deleteMutation.mutate();
  }

  return (
    <Button
      variant="destructive"
      onClick={handleDelete}
      disabled={deleteMutation.isPending}
    >
      {deleteMutation.isPending ? "Sletter..." : "Slett"}
    </Button>
  );
}

export default function AdminAdTable() {
  const [currentPage, setCurrentPage] = useState(1);

  const { data, isLoading } = useNewsArticles(currentPage);

  const articles = data?.data ?? [];
  const total = data?.total ?? 0;

  const totalPages = Math.ceil(total / ITEMS_PER_PAGE);

  const handlePageChange = (page: number) => {
    if (page < 1 || page > totalPages) return;
    setCurrentPage(page);
  };

  if (isLoading) {
    return <div className="p-10 text-center">Laster artikler...</div>;
  }

  return (
    <div className="w-full p-[5%]">
      <h1 className="text-3xl text-center font-bold">Nyhetsartikler</h1>
      <div className="accent-line m-auto justify-center my-5" />

      <div className="overflow-hidden rounded-md border bg-background">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="pl-4">ID</TableHead>
              <TableHead>Tittel</TableHead>
              <TableHead>Kategori</TableHead>
              <TableHead>Bilde</TableHead>
              <TableHead>Dato</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>
                <CreateNewsForm />
              </TableHead>
            </TableRow>
          </TableHeader>

          <TableBody>
            {articles.map((article: NewsArticle) => (
              <TableRow key={article.id} className="odd:bg-muted/50">
                <TableCell className="pl-4">{article.id}</TableCell>
                <TableCell className="font-medium">{article.title}</TableCell>
                <TableCell>{article.category?.name}</TableCell>
                <TableCell className="max-w-[200px] truncate">
                  {article.image}
                </TableCell>
                <TableCell>{article.date}</TableCell>
                <TableCell>{article.status}</TableCell>

                <TableCell className="flex gap-1">
                  <EditNewsForm article={article} />
                  <DeleteNewsButton article={article} />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      <Pagination className="mt-4">
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious
              onClick={() => handlePageChange(currentPage - 1)}
              className={
                currentPage === 1 ? "pointer-events-none opacity-50" : ""
              }
            />
          </PaginationItem>

          {Array.from({ length: totalPages }, (_, i) => (
            <PaginationItem key={i + 1}>
              <PaginationLink
                isActive={currentPage === i + 1}
                onClick={() => handlePageChange(i + 1)}
              >
                {i + 1}
              </PaginationLink>
            </PaginationItem>
          ))}

          <PaginationItem>
            <PaginationNext
              onClick={() => handlePageChange(currentPage + 1)}
              className={
                currentPage === totalPages
                  ? "pointer-events-none opacity-50"
                  : ""
              }
            />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </div>
  );
}
