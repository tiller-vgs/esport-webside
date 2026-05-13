"use client";

import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
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
import { useMemo, useState } from "react";
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
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Plus } from "lucide-react";

const newsArticles = [
  {
    id: 101,
    title: "Nytt kulturhus åpnet i Trondheim sentrum",
    category: "Kultur",
    date: "2026-05-13",
    status: "Publisert",
    image: "https://images.unsplash.com/photo-1516280440614-37939bbacd81",
    description:
      "Det nye kulturhuset i Trondheim åpnet offisielt i dag med konserter og taler fra lokale politikere.",
    content:
      "Etter flere år med planlegging og bygging ble det nye kulturhuset i Trondheim sentrum åpnet onsdag morgen. Hundrevis av besøkende møtte opp for å delta på åpningen, som inkluderte konserter, kunstutstillinger og taler fra både lokale politikere og kulturaktører. Kulturhuset skal fungere som en møteplass for både unge og voksne, med fokus på konserter, teater og kreative arrangementer gjennom hele året.",
  },
  {
    id: 102,
    title: "Kraftig økning i elbilsalg i Norge",
    category: "Teknologi",
    date: "2026-05-12",
    status: "Publisert",
    image: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7",
    description:
      "Nye tall viser at salget av elbiler fortsetter å øke over hele landet.",
    content:
      "Ifølge ferske tall fra Opplysningsrådet for veitrafikken har salget av elbiler økt betydelig sammenlignet med samme periode i fjor. Flere nordmenn velger nå elektriske biler på grunn av lavere driftskostnader og bedre ladeinfrastruktur. Eksperter mener utviklingen vil fortsette i årene fremover, spesielt ettersom flere bilprodusenter lanserer nye modeller med lengre rekkevidde.",
  },
  {
    id: 103,
    title: "Lokalt bakeri kåret til byens beste",
    category: "Mat",
    date: "2026-05-11",
    status: "Utkast",
    image: "https://images.unsplash.com/photo-1509440159596-0249088772ff",
    description:
      "Et familiedrevet bakeri i Trondheim har vunnet årets pris for beste bakverk.",
    content:
      "Det populære bakeriet i Midtbyen ble tirsdag kåret til byens beste bakeri under den årlige matfestivalen. Juryen trakk frem kvaliteten på håndverket, gode råvarer og kreativ bruk av lokale ingredienser. Eierne sier de er svært stolte over anerkjennelsen og takker kundene for støtten gjennom mange år.",
  },
  {
    id: 104,
    title: "Ny sykkelvei skal gjøre sentrum tryggere",
    category: "Samfunn",
    date: "2026-05-10",
    status: "Publisert",
    image: "https://images.unsplash.com/photo-1508973379184-7517410fb0f7",
    description:
      "Kommunen har startet arbeidet med en ny sykkelvei gjennom sentrum.",
    content:
      "Arbeidet med den nye sykkelveien startet denne uken og forventes ferdigstilt innen høsten. Prosjektet er en del av kommunens satsing på grønn transport og tryggere trafikkforhold for syklister. Den nye traseen vil knytte sammen flere viktige områder i sentrum og gjøre det enklere for innbyggere å velge sykkel fremfor bil.",
  },
  {
    id: 105,
    title: "Stor interesse for sommerfestival i Trondheim",
    category: "Underholdning",
    date: "2026-05-09",
    status: "Publisert",
    image: "https://images.unsplash.com/photo-1501386761578-eac5c94b800a",
    description:
      "Billetter til årets sommerfestival selger raskere enn forventet.",
    content:
      "Arrangørene av sommerfestivalen i Trondheim melder om rekordstor interesse bare dager etter at billettene ble lagt ut for salg. Flere kjente norske artister skal opptre under festivalen, som forventes å trekke tusenvis av besøkende til byen. Festivalområdet vil også inkludere matboder, aktiviteter og familievennlige arrangementer.",
  },
];

const itemsPerPage = 5;

export default function AdminAdTable() {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(newsArticles.length / itemsPerPage);

  const paginatedNewsArticles = useMemo(() => {
    const start = (currentPage - 1) * itemsPerPage;
    const end = start + itemsPerPage;

    return newsArticles.slice(start, end);
  }, [newsArticles, currentPage]);

  const handlePageChange = (page: number) => {
    if (page < 1 || page > totalPages) return;
    setCurrentPage(page);
  };

  return (
    <div className="w-full p-[5%]">
      <h1 className="text-3xl text-center font-bold">Nyhetsartikler</h1>
      <div className="accent-line m-auto justify-center my-5"></div>
      <div className="overflow-hidden rounded-md border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="pl-4">ID</TableHead>
              <TableHead>Tittel</TableHead>
              <TableHead>Kategori</TableHead>
              <TableHead>Bilde Link</TableHead>
              <TableHead>Dato</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>
                <Sheet>
                  <SheetTrigger asChild>
                    <Button>
                      <Plus />
                      Lag Nyhet
                    </Button>
                  </SheetTrigger>
                  <SheetContent>
                    <SheetHeader>
                      <SheetTitle>Lag en ny Nyhet</SheetTitle>
                      <SheetDescription>
                        Legg til informasjonen for denne nyheten. Så trykk
                        "Lagre endringer" for å oppdatere.
                      </SheetDescription>
                    </SheetHeader>
                    <div className="grid flex-1 auto-rows-min gap-6 px-4">
                      <div className="grid gap-3">
                        <Label htmlFor="nyhets-tittel">Tittel</Label>
                        <Input id="nyhets-tittel" defaultValue="" />
                      </div>
                      <div className="grid gap-3">
                        <Label htmlFor="nyhets-kategori">Kategori</Label>
                        <Input id="nyhets-kategori" defaultValue="" />
                      </div>
                      <div className="grid gap-3">
                        <Label htmlFor="nyhets-dato">Dato</Label>
                        <Input id="nyhets-dato" defaultValue="" />
                      </div>
                      <div className="grid gap-3">
                        <Label htmlFor="nyhets-status">Status</Label>
                        <Input id="nyhets-status" defaultValue="" />
                      </div>
                      <div className="grid gap-3">
                        <Label htmlFor="nyhets-bilde">Bilde</Label>
                        <Input id="nyhets-bilde" defaultValue="" />
                      </div>
                      <div className="grid gap-3">
                        <Label htmlFor="nyhets-beskrivelse">Beskrivelse</Label>
                        <Input id="nyhets-beskrivelse" defaultValue="" />
                      </div>
                      <div className="grid gap-3">
                        <Label htmlFor="nyhets-artikkel">Artikkel</Label>
                        <Input id="nyhets-artikkel" defaultValue="" />
                      </div>
                    </div>
                    <SheetFooter>
                      <Button type="submit">Lag Nyhet</Button>
                      <SheetClose asChild>
                        <Button variant="outline">Lukk</Button>
                      </SheetClose>
                    </SheetFooter>
                  </SheetContent>
                </Sheet>
              </TableHead>
            </TableRow>
          </TableHeader>

          <TableBody>
            {paginatedNewsArticles.map((article) => (
              <TableRow className="odd:bg-muted/50" key={article.id}>
                <TableCell className="pl-4">{article.id}</TableCell>
                <TableCell className="font-medium">{article.title}</TableCell>
                <TableCell>{article.category}</TableCell>
                <TableCell>{article.image}</TableCell>
                <TableCell>{article.date}</TableCell>
                <TableCell>{article.status}</TableCell>
                <TableCell className="flex gap-1">
                  <Sheet>
                    <SheetTrigger asChild>
                      <Button variant="outline">Rediger</Button>
                    </SheetTrigger>
                    <SheetContent>
                      <SheetHeader>
                        <SheetTitle>Rediger Nyhet</SheetTitle>
                        <SheetDescription>
                          Rediger informasjonen for denne nyheten. Så trykk
                          "Lagre endringer" for å oppdatere.
                        </SheetDescription>
                      </SheetHeader>
                      <div className="grid flex-1 auto-rows-min gap-6 px-4">
                        <div className="grid gap-3">
                          <Label htmlFor="nyhets-tittel">Tittel</Label>
                          <Input
                            id="nyhets-tittel"
                            defaultValue={article.title}
                          />
                        </div>
                        <div className="grid gap-3">
                          <Label htmlFor="nyhets-kategori">Kategori</Label>
                          <Input
                            id="nyhets-kategori"
                            defaultValue={article.category}
                          />
                        </div>
                        <div className="grid gap-3">
                          <Label htmlFor="nyhets-dato">Dato</Label>
                          <Input id="nyhets-dato" defaultValue={article.date} />
                        </div>
                        <div className="grid gap-3">
                          <Label htmlFor="nyhets-status">Status</Label>
                          <Input
                            id="nyhets-status"
                            defaultValue={article.status}
                          />
                        </div>
                        <div className="grid gap-3">
                          <Label htmlFor="nyhets-bilde">Bilde</Label>
                          <Input
                            id="nyhets-bilde"
                            defaultValue={article.image}
                          />
                        </div>
                        <div className="grid gap-3">
                          <Label htmlFor="nyhets-beskrivelse">
                            Beskrivelse
                          </Label>
                          <Input
                            id="nyhets-beskrivelse"
                            defaultValue={article.description}
                          />
                        </div>
                        <div className="grid gap-3">
                          <Label htmlFor="nyhets-artikkel">Artikkel</Label>
                          <Input
                            id="nyhets-artikkel"
                            defaultValue={article.content}
                          />
                        </div>
                      </div>
                      <SheetFooter>
                        <Button type="submit">Lagre Endringer</Button>
                        <SheetClose asChild>
                          <Button variant="outline">Lukk</Button>
                        </SheetClose>
                      </SheetFooter>
                    </SheetContent>
                  </Sheet>
                  <Button variant="destructive">Slett</Button>
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
              href="#"
              onClick={(e) => {
                e.preventDefault();
                handlePageChange(currentPage - 1);
              }}
              className={
                currentPage === 1 ? "pointer-events-none opacity-50" : ""
              }
            />
          </PaginationItem>

          {Array.from({ length: totalPages }, (_, i) => {
            const page = i + 1;

            return (
              <PaginationItem key={page}>
                <PaginationLink
                  href="#"
                  isActive={currentPage === page}
                  onClick={(e) => {
                    e.preventDefault();
                    handlePageChange(page);
                  }}
                >
                  {page}
                </PaginationLink>
              </PaginationItem>
            );
          })}

          <PaginationItem>
            <PaginationNext
              href="#"
              onClick={(e) => {
                e.preventDefault();
                handlePageChange(currentPage + 1);
              }}
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
