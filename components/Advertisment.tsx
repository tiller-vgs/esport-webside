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
    <div className="w-screen min-h-screen bg-black text-white flex items-center justify-center p-10">

      <Carousel className="w-full max-w-6xl">
        <CarouselContent>
          <CarouselItem>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

              <Card className="bg-[#111] border border-yellow-500 rounded-2xl overflow-hidden">

                <img
                  src="image0.jpeg"
                  className="w-full h-52 object-cover"
                />

                <CardContent className="p-5">    
                  <h2 className="text-2xl font-bold text-yellow-400 mt-2">
                    Våre lag
                  </h2>
                  <p className="text-sm text-gray-400">
                    Mer info om lagene
                  </p>

              

                  <button
                    className="mt-4 px-5 py-2 bg-yellow-500 text-black rounded-full"
                    onClick={() => setOpen1(!open1)}
                  >
                    Les mer
                  </button>

                  {open1 && (
                    <p className="mt-3 text-gray-300">
                      Mer info om lagene
                    </p>
                  )}
                </CardContent>
              </Card>

             
              <Card className="bg-[#111] border border-yellow-500 rounded-2xl overflow-hidden">

                <img
                  src="image0.jpeg"
                  className="w-full h-52 object-cover"
                />

                <CardContent className="p-5">
                  <h2 className="text-2xl font-bold text-yellow-400 mt-2">
                    Nyheter
                  </h2>
                  <p className="text-sm text-gray-400">
                    Mer info om nyheter
                  </p>


                  <button
                    className="mt-4 px-5 py-2 bg-yellow-500 text-black rounded-full"
                    onClick={() => setOpen2(!open2)}
                  >
                    Les mer
                  </button>

                  {open2 && (
                    <p className="mt-3 text-gray-300">
                      Mer info om nyheter
                    </p>
                  )}
                </CardContent>
              </Card>

              <Card className="bg-[#111] border border-yellow-500 rounded-2xl overflow-hidden">

                <img
                  src="image0.jpeg"
                  className="w-full h-52 object-cover"
                />

                <CardContent className="p-5">  
                  <h2 className="text-2xl font-bold text-yellow-400 mt-2">
                    Videoer
                  </h2>
                  <p className="text-sm text-gray-400">
                    Her ser du Videoer
                  </p>

                

                  <button
                    className="mt-4 px-5 py-2 bg-yellow-500 text-black rounded-full"
                    onClick={() => setOpen3(!open3)}
                  >
                    Les mer
                  </button>

                  {open3 && (
                    <div className="mt-3">
                      <p className="text-gray-300">
                        Mer info om videoer
                      </p>

                      <img
                        src="tiller-esport-logo.png"
                        className="w-20 mt-3"
                      />
                    </div>
                  )}
                </CardContent>
              </Card>

            </div>

          </CarouselItem>
        </CarouselContent>

        <CarouselPrevious className="bg-yellow-500 text-black border-none" />
        <CarouselNext className="bg-yellow-500 text-black border-none" />

      </Carousel>
    </div>
  );
}

export default Advertisment;