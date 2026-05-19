"use client";

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Field,
  FieldError,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field";
import { Controller, useForm } from "react-hook-form";
import { toast } from "sonner";
import { zodResolver } from "@hookform/resolvers/zod";
import { newsArticleSchema } from "@/lib/schema";
import z from "zod";
import { useQueryClient } from "@tanstack/react-query";
import { useState } from "react";
import type { NewsArticle } from "../../types/types";

type NewsArticleFormValues = z.infer<typeof newsArticleSchema>;

export default function EditNewsForm({ article }: { article: NewsArticle }) {
  const [open, setOpen] = useState(false);
  const queryClient = useQueryClient();
  const form = useForm<NewsArticleFormValues>({
    resolver: zodResolver(newsArticleSchema),
    values: {
      title: article.title,
      category: article.category?.name ?? "",
      date: article.dateInput,
      status: article.status,
      image: article.image ?? "",
      description: article.description,
      content: article.content,
    },
  });

  async function updateNews(data: NewsArticleFormValues) {
    try {
      const response = await fetch("/api/news-articles", {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          id: article.id,
          ...data,
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to update article");
      }

      toast.success("Nyhetsartikkelen ble oppdatert");
      queryClient.invalidateQueries({ queryKey: ["newsArticles"] });
      setOpen(false);
    } catch (error) {
      toast.error("Klarte ikke å oppdatere nyhetsartikkelen", {
        description:
          error instanceof Error
            ? error.message
            : "Feil ved oppdatering av nyhetsartikkel",
      });
    }
  }

  function showValidationError() {
    toast.error("Sjekk feltene i skjemaet", {
      description: "Noen felt mangler eller har for kort tekst.",
    });
  }

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant="outline">Rediger</Button>
      </SheetTrigger>

      <SheetContent>
        <SheetHeader className="shrink-0">
          <SheetTitle>Rediger Nyhet</SheetTitle>
          <SheetDescription>
            Oppdater artikkelen og lagre endringer.
          </SheetDescription>
        </SheetHeader>

        <form
          id={`edit-news-${article.id}`}
          className="min-h-0 flex-1 overflow-y-auto px-6 py-4"
          onSubmit={form.handleSubmit(updateNews, showValidationError)}
        >
          <FieldGroup>
            <Controller
              name="title"
              control={form.control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel htmlFor={`edit-news-title-${article.id}`}>
                    Tittel
                  </FieldLabel>
                  <Input
                    {...field}
                    id={`edit-news-title-${article.id}`}
                    aria-invalid={fieldState.invalid}
                    autoComplete="off"
                    placeholder="Skriv inn tittel"
                  />
                  {fieldState.invalid && (
                    <FieldError errors={[fieldState.error]} />
                  )}
                </Field>
              )}
            />
            <Controller
              name="category"
              control={form.control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel htmlFor={`edit-news-category-${article.id}`}>
                    Kategori
                  </FieldLabel>
                  <Input
                    {...field}
                    id={`edit-news-category-${article.id}`}
                    aria-invalid={fieldState.invalid}
                    autoComplete="off"
                    placeholder="Skriv inn kategori"
                  />
                  {fieldState.invalid && (
                    <FieldError errors={[fieldState.error]} />
                  )}
                </Field>
              )}
            />
            <Controller
              name="date"
              control={form.control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel htmlFor={`edit-news-date-${article.id}`}>
                    Dato
                  </FieldLabel>
                  <Input
                    {...field}
                    id={`edit-news-date-${article.id}`}
                    type="date"
                    aria-invalid={fieldState.invalid}
                    autoComplete="off"
                  />
                  {fieldState.invalid && (
                    <FieldError errors={[fieldState.error]} />
                  )}
                </Field>
              )}
            />
            <Controller
              name="status"
              control={form.control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel htmlFor={`edit-news-status-${article.id}`}>
                    Status
                  </FieldLabel>
                  <Input
                    {...field}
                    id={`edit-news-status-${article.id}`}
                    aria-invalid={fieldState.invalid}
                    autoComplete="off"
                    placeholder="UTKAST, PUBLISERT eller ARKIVERT"
                  />
                  {fieldState.invalid && (
                    <FieldError errors={[fieldState.error]} />
                  )}
                </Field>
              )}
            />
            <Controller
              name="image"
              control={form.control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel htmlFor={`edit-news-image-${article.id}`}>
                    Bilde
                  </FieldLabel>
                  <Input
                    {...field}
                    id={`edit-news-image-${article.id}`}
                    aria-invalid={fieldState.invalid}
                    autoComplete="off"
                    placeholder="Skriv inn bilde link"
                  />
                  {fieldState.invalid && (
                    <FieldError errors={[fieldState.error]} />
                  )}
                </Field>
              )}
            />
            <Controller
              name="description"
              control={form.control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel htmlFor={`edit-news-description-${article.id}`}>
                    Beskrivelse
                  </FieldLabel>
                  <Input
                    {...field}
                    id={`edit-news-description-${article.id}`}
                    aria-invalid={fieldState.invalid}
                    autoComplete="off"
                    placeholder="Skriv inn beskrivelse"
                  />
                  {fieldState.invalid && (
                    <FieldError errors={[fieldState.error]} />
                  )}
                </Field>
              )}
            />
            <Controller
              name="content"
              control={form.control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel htmlFor={`edit-news-content-${article.id}`}>
                    Artikkel
                  </FieldLabel>
                  <Input
                    {...field}
                    id={`edit-news-content-${article.id}`}
                    aria-invalid={fieldState.invalid}
                    autoComplete="off"
                    placeholder="Skriv inn artikkel"
                  />
                  {fieldState.invalid && (
                    <FieldError errors={[fieldState.error]} />
                  )}
                </Field>
              )}
            />
          </FieldGroup>
        </form>

        <SheetFooter className="shrink-0 border-t">
          <Button
            type="submit"
            form={`edit-news-${article.id}`}
            disabled={form.formState.isSubmitting}
          >
            {form.formState.isSubmitting ? "Lagrer..." : "Lagre endringer"}
          </Button>
          <SheetClose asChild>
            <Button variant="outline">Lukk</Button>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}
