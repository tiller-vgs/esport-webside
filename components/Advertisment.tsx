import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import { Card, CardContent } from "@/components/ui/card";

function Advertisment() {
  return (
    <div className="w-screen min-h-screen bg-black-600 flex flex-col items-center p-10">

      <h1 className="text-3xl text-white mb-10">
        Advertisment
      </h1>

      <Carousel className="w-full max-w-6xl">
        <CarouselContent>

          {/* ONLY SLIDE */}
          <CarouselItem>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

              <Card>
                <img src="image0.jpeg" className="w-full h-52 object-cover" />
                <CardContent className="p-4">
                  <p className="text-sm text-gray-500">Av Andreas Og Shope</p>
                  <h2 className="font-bold mt-2">Våre lag</h2>
                  <button className="mt-3 bg-blue-500 text-white px-3 py-1 rounded">
                    Les mer
                  </button>
                </CardContent>
              </Card>

              <Card>
                <img src="image0.jpeg" className="w-full h-52 object-cover" />
                <CardContent className="p-4">
                  <p className="text-sm text-gray-500">Av Andreas og Shope</p>
                  <h2 className="font-bold mt-2">Nyheter</h2>
                  <button className="mt-3 bg-blue-500 text-white px-3 py-1 rounded">
                    Les mer
                  </button>
                </CardContent>
              </Card>

              <Card>
                <img src="image0.jpeg" className="w-full h-52 object-cover" />
                <CardContent className="p-4">
                  <p className="text-sm text-gray-500">Av Andreas Og Shope</p>
                  <h2 className="font-bold mt-2">Videoer</h2>
                  <button className="mt-3 bg-blue-500 text-white px-3 py-1 rounded">
                    Les mer
                  </button>
                </CardContent>
              </Card>

            </div>
          </CarouselItem>

        </CarouselContent>

        <CarouselPrevious />
        <CarouselNext />
      </Carousel>   

    </div>
  );
}

export default Advertisment;