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
    <div className="w-screen h-screen flex items-center justify-center">

      <Carousel className="w-full max-w-lg">

        <CarouselContent>

          <CarouselItem>
            <Card>
              <CardContent className="flex items-center justify-center p-20 text-3xl">
                Adrian tapte vm i fortnite
              </CardContent>
            </Card>
          </CarouselItem>

          <CarouselItem>
            <Card>
              <CardContent className="flex items-center justify-center p-20 text-3xl">
                Ny spiller signert
              </CardContent>
            </Card>
          </CarouselItem>

          <CarouselItem>
            <Card>
              <CardContent className="flex items-center justify-center p-20 text-3xl">
                Kamp i morgen
              </CardContent>
            </Card>
          </CarouselItem>

          <CarouselItem>
            <Card>
              <CardContent className="flex items-center justify-center p-20 text-3xl">
                Tilbud i dag er 20% på alt
              </CardContent>
            </Card>
          </CarouselItem>

        </CarouselContent>

        <CarouselPrevious />
        <CarouselNext />

      </Carousel>

    </div>
  );
}

export default Advertisment;