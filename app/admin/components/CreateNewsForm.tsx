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
import { Plus } from "lucide-react";
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

export default function AdminAdTable() {
  const queryClient = useQueryClient();
  const form = useForm<z.infer<typeof newsArticleSchema>>({
    resolver: zodResolver(newsArticleSchema),
    defaultValues: {
      title: "",
      category: "",
      date: "",
      status: "UTKAST",
      image: "",
      description: "",
      content: "",
    },
  });

  async function createNews(data: z.infer<typeof newsArticleSchema>) {
    try {
      const response = await fetch("/api/news-articles", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error("Failed to create article");
      }

      toast.success("Du har laget en nyhetsartikkel!");
      form.reset();
      queryClient.invalidateQueries({ queryKey: ["newsArticles"] });
    } catch (error) {
      toast.error("Klarte ikke å lage nyhetsartikkel", {
        description:
          error instanceof Error
            ? error.message
            : "Feil ved oppretting av nyhetsartikkel",
      });
    }
  }

  function showValidationError() {
    toast.error("Sjekk feltene i skjemaet", {
      description: "Noen felt mangler eller har for kort tekst.",
    });
  }

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button>
          <Plus />
          Lag Nyhet
        </Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader className="shrink-0">
          <SheetTitle>Lag en ny Nyhet</SheetTitle>
          <SheetDescription>
            Legg til informasjonen for denne nyheten. Så trykk Lagre endringer
            for å oppdatere.
          </SheetDescription>
        </SheetHeader>
        <form
          id="create-news"
          className="min-h-0 flex-1 overflow-y-auto px-6 py-4"
          onSubmit={form.handleSubmit(createNews, showValidationError)}
        >
          <FieldGroup>
            <Controller
              name="title"
              control={form.control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel htmlFor="create-news-title">Tittel</FieldLabel>
                  <Input
                    {...field}
                    id="create-news-title"
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
                  <FieldLabel htmlFor="create-news-category">
                    Kategori
                  </FieldLabel>
                  <Input
                    {...field}
                    id="create-news-category"
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
                  <FieldLabel htmlFor="create-news-date">Dato</FieldLabel>
                  <Input
                    {...field}
                    id="create-news-date"
                    aria-invalid={fieldState.invalid}
                    autoComplete="off"
                    placeholder="Skriv inn dato"
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
                  <FieldLabel htmlFor="create-news-status">Status</FieldLabel>
                  <Input
                    {...field}
                    id="create-news-status"
                    aria-invalid={fieldState.invalid}
                    autoComplete="off"
                    placeholder="Skriv inn status"
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
                  <FieldLabel htmlFor="create-news-image">Bilde</FieldLabel>
                  <Input
                    {...field}
                    id="create-news-image"
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
                  <FieldLabel htmlFor="create-news-description">
                    Beskrivelse
                  </FieldLabel>
                  <Input
                    {...field}
                    id="create-news-description"
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
                  <FieldLabel htmlFor="create-news-content">
                    Artikkel
                  </FieldLabel>
                  <Input
                    {...field}
                    id="create-news-content"
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
            form="create-news"
            disabled={form.formState.isSubmitting}
          >
            {form.formState.isSubmitting ? "Lagrer..." : "Lag Nyhet"}
          </Button>
          <SheetClose asChild>
            <Button variant="outline">Lukk</Button>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}
