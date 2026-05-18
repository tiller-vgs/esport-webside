import { Button } from "./ui/button";

function HeroHeader() {
  return (
    <section className="pt-16 md:pt-24 lg:pt-28">
      <div className="container relative">
        <div className="flex flex-col items-center">
          <div className="rb-12 mb-12 text-center md:mb-18 lg:mb-20">
            <div className="w-full max-w-lg">
              <img
                src="tiller-esport-logo.png"
                className="mx-auto mb-6 lg:h-64 md:h-48 sm:h-24 w-auto"
                alt="Tiller E-Sport Hero Image"
              />
              <h1 className="mb-5 text-2xl font-bold md:mb-6 md:text-4xl lg:text-6xl">
                Velkommen til
                <br />
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
                >
                  Videoer
                </Button>
              </div>
            </div>
          </div>
          <div className="border-y-2 border-primary">
            <img
              src="esport-background.png"
              className="size-full object-cover"
              alt="Tiller E-Sport Hero Image"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroHeader;
