import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main className="relative h-[calc(100vh-72px)]">
      <div>
        <div className="absolute inset-0 bg-[url(/esport-background.png)] bg-cover bg-center" />

        <div className="absolute inset-0 bg-linear-to-r from-black via-transparent to-black" />
      </div>
      <div className="relative h-full text-white flex flex-col items-center justify-center">
        <h1 className="text-5xl font-bold">Tiller E-Sport</h1>
        <p className="mt-[1.5vh] text-lg w-1/2 text-center">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
          pulvinar, odio sit amet luctus vulputate, turpis purus lobortis quam,
          et tempus massa enim non orci. Nullam quis arcu lorem. Donec sit amet
          finibus lorem. Aliquam auctor vehicula libero, eget ultrices.
        </p>

        <div className="flex mt-6 gap-2">
          <Button size="lg">Nyheter</Button>
          <Button
            size="lg"
            variant="outline"
            className="border-primary border-2"
          >
            Vidoer
          </Button>
        </div>
      </div>
    </main>
  );
}
