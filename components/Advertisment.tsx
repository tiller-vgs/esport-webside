"use client";

import { useState } from "react";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import { Card, CardContent } from "@/components/ui/card";

function Advertisment() {
  const [open1, setOpen1] = useState(false);
  const [open2, setOpen2] = useState(false);
  const [open3, setOpen3] = useState(false);

  return (
    <div className="w-screen min-h-screen flex flex-col items-center p-10">

      <Carousel className="w-full max-w-6xl">
        <CarouselContent>

          <CarouselItem>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

        
              <Card>
                <img src="image0.jpeg" className="w-full h-52 object-cover" />
                <CardContent className="p-4">
                  <p className="text-sm text-gray-500">Av Andreas og Shope</p>
                  <h2 className="font-bold mt-2">Våre lag</h2>

                  <button className="border-4  bg-sky-500 border-sky-600" onClick={() => setOpen1(!open1)}>
                    Les mer
                  </button>

                  {open1 && (
                    <p className="mt-2">Mer info om lagene</p>
                  )}
                </CardContent>
              </Card>

              
              <Card>
                <img src="image0.jpeg" className="w-full h-52 object-cover" />
                <CardContent className="p-4">
                  <p className="text-sm text-gray-500">Av Andreas og Shope</p>
                  <h2 className="font-bold mt-2">Nyheter</h2>

                  <button className="border-4 bg-sky-500 border-sky-600" onClick={() => setOpen2(!open2)}>
                    Les mer
                  </button>

                  {open2 && (
                    <p className="mt-2">Mer info om nyheter</p>
                  )}
                </CardContent>
              </Card>

              
              <Card>
                <img src="image0.jpeg" className="w-full h-52 object-cover" />
                <CardContent className="p-4">
                  <p className="text-sm text-gray-500">Av Andreas og Shope</p>
                  <h2 className="font-bold mt-2">Videoer</h2>

                  <button className="border-4 border-sky-600 bg-sky-500" onClick={() => setOpen3(!open3)}>
                    Les mer
                  </button>

                  {open3 && (
                    <div><p className="mt-2">Mer info om videoer</p> <img src="tiller-esport-logo.png" /></div>
                  )}
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