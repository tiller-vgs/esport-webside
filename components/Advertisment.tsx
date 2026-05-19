"use client";

import { useState } from "react";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

import { Card, CardContent } from "@/components/ui/card";

type ContentCard = {
  title: string;
  author: string;
  description: string;
  image: string;
};

const cards: ContentCard[] = [
  {
    title: "Våre lag",
    author: "Av Andreas og Shope",
    description:
      "Les mer om våre konkurranselag, treninger og turneringer.",
    image: "/esport-background.png",
  },
  {
    title: "Nyheter",
    author: "Av Andreas og Shope",
    description:
      "Få med deg siste nytt fra Tiller E-Sport og kommende events.",
    image: "/esport-background.png",
  },
];

export default function Advertisment() {
  const [activeCard, setActiveCard] = useState<number | null>(null);

  return (
    <section className="w-full bg-black text-white px-[5%] py-16 md:py-24">
      <div className="container mx-auto">

        {/* Header */}
        <div className="mb-12 max-w-2xl">
          <p className="mb-3 font-semibold text-yellow-400">
            Tiller E-Sport
          </p>

          <h1 className="text-5xl font-bold md:text-7xl">
            Våre nyheter
          </h1>

          <p className="mt-4 text-gray-300">
            Hold deg oppdatert på lagene våre, events og aktiviteter.
          </p>
        </div>

        
        
            
              <div className="grid grid-cols-1 gap-8 md:grid-cols-2">

                {cards.map((card, index) => (
                  <Card
                    key={index}
                    className="overflow-hidden border border-yellow-400/20 bg-zinc-900 transition-all duration-300 hover:-translate-y-1 hover:border-yellow-400"
                  >

                    <div className="relative overflow-hidden">
                      <img
                        src={card.image}
                        alt={card.title}
                        className="h-60 w-full object-cover transition duration-300 hover:scale-105"
                      />
                    </div>

                    <CardContent className="p-6">

                      <div className="mb-4 flex items-center gap-3">
                        <span className="rounded bg-yellow-400 px-2 py-1 text-xs font-semibold text-black">
                          E-Sport
                        </span>

                        <p className="text-sm text-gray-400">
                          
                        </p>
                      </div>

                      <p className="mb-2 text-sm text-gray-500">
                        {card.author}
                      </p>

                      <h2 className="mb-3 text-2xl font-bold">
                        {card.title}
                      </h2>

                      <p className="text-gray-300">
                        {card.description}
                      </p>

                      <button
                        onClick={() =>
                          setActiveCard(
                            activeCard === index ? null : index
                          )
                        }
                        className="mt-6 inline-flex items-center gap-2 text-yellow-400 hover:text-yellow-300 transition"
                      >
                        Les mer
                      </button>

                      {activeCard === index && (
                        <div className="mt-4 border-t border-zinc-700 pt-4 text-gray-300">
                          Dette er ekstra informasjon om{" "}
                          <span className="font-semibold">
                            {card.title}
                          </span>.
                        </div>
                      )}

                    </CardContent>
                  </Card>
                ))}

              </div>
            
          
        
      </div>
    </section>
  );
}   