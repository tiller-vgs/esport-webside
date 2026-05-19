import { Button } from "./ui/button";

function HeroHeader() {
  return (
    <section className="pt-16 md:pt-24 lg:pt-28">
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-[-10rem] top-[-10rem] h-[25rem] w-[25rem] rounded-full lg:bg-primary/15 md:bg-primary/10 sm:bg-primary/5 blur-3xl" />

        <div className="absolute top-[5rem] h-[20rem] w-[20rem] rounded-full lg:bg-primary/15 md:bg-primary/10 sm:bg-primary/5 blur-3xl" />

        <div className="absolute bottom-[-12rem] left-1/2 h-[30rem] w-[30rem] -translate-x-1/2 rounded-full lg:bg-primary/20 md:bg-primary/15 sm:bg-primary/10 blur-3xl" />

        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px]" />
      </div>

      <div className="container relative">
        <div className="flex flex-col items-center">
          <div className="rb-12 mb-12 text-center md:mb-18 lg:mb-20">
            <div className="w-full max-w-lg">
              <h1 className="mb-5 text-2xl font-bold md:mb-6 md:text-4xl lg:text-6xl">
                Velkommen til{" "}
                <span className="text-primary">Tiller E-Sport</span>!
              </h1>

              <p className="md:text-md">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse varius enim in eros elementum tristique. Duis
                cursus, mi quis viverra ornare, eros dolor interdum nulla, ut
                commodo diam libero vitae erat.
              </p>

              <div className="mt-6 flex items-center justify-center gap-x-4 md:mt-8">
                <Button size="lg" className="p-4 text-lg">
                  Nyheter
                </Button>

                <Button
                  size="lg"
                  variant="outline"
                  className="border-primary border-2 p-4 text-lg"
                  asChild
                >
                  <a href="#videos">Videoer</a>
                </Button>
              </div>
            </div>
          </div>

         
        </div>
      </div>
    </section>
  );
}

export default HeroHeader;
