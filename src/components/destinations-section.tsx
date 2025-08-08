
"use client";

import { useState, useEffect, useCallback } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Card, CardContent, CardTitle } from '@/components/ui/card';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious, type CarouselApi } from '@/components/ui/carousel';
import type { Destination } from '@/lib/destinations';
import { cn } from '@/lib/utils';

interface DestinationsSectionProps {
  destinations: Destination[];
}

export function DestinationsSection({ destinations }: DestinationsSectionProps) {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [backgroundImage, setBackgroundImage] = useState(destinations[0]?.image || '');

  const updateBackground = useCallback((api: CarouselApi) => {
    const currentSlide = api.selectedScrollSnap();
    setCurrent(currentSlide);
    const inViewSlides = api.slidesInView();

    let centralSlideIndex;
    if (inViewSlides.length === 1) {
        centralSlideIndex = inViewSlides[0];
    } else if (inViewSlides.length > 1) {
        centralSlideIndex = inViewSlides[Math.floor(inViewSlides.length / 2)];
    } else {
        centralSlideIndex = currentSlide;
    }
    
    setBackgroundImage(destinations[centralSlideIndex]?.image || '');
  }, [destinations]);


  useEffect(() => {
    if (!api) {
      return;
    }

    updateBackground(api);
    api.on("select", updateBackground);
    api.on("reInit", updateBackground);

    return () => {
      api.off("select", updateBackground);
      api.off("reInit", updateBackground);
    };
  }, [api, updateBackground]);

  return (
    <section id="destinations" className="relative pt-20 pb-20 md:pt-28 md:pb-28 bg-background overflow-hidden transition-all duration-1000">
        <div className="absolute inset-0 w-full h-full transition-all duration-1000 ease-in-out">
            {backgroundImage && (
                <Image
                    src={backgroundImage}
                    alt="Destination background"
                    fill
                    className="object-cover scale-110 blur-lg opacity-30"
                />
            )}
            <div className="absolute inset-0 bg-background/70 backdrop-blur-sm"></div>
        </div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-headline text-primary">
              Discover Sacred Destinations
            </h2>
          </div>
          <Carousel
            setApi={setApi}
            opts={{
              align: 'center',
              loop: true,
            }}
            className="w-full mt-12"
          >
            <CarouselContent>
              {destinations.map((destination, index) => (
                <CarouselItem key={destination.id} className="md:basis-1/2 lg:basis-1/3">
                  <div className="p-2 h-full">
                    <Link href={`/destinations/${destination.slug}`} className="block h-full">
                      <Card className={cn(
                          "overflow-hidden group transition-all duration-500 h-full flex flex-col border-none rounded-lg bg-secondary/80 backdrop-blur-sm",
                          index === current ? "shadow-2xl scale-105" : "shadow-lg scale-95 opacity-70"
                      )}>
                         <div className="relative h-80 w-full">
                            <Image
                              src={destination.image}
                              alt={destination.name}
                              data-ai-hint={destination.imageHint}
                              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                              loading="lazy"
                              fill
                              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                            />
                         </div>
                         <CardContent className="p-6 flex-grow">
                            <CardTitle className="text-xl font-headline text-primary group-hover:text-primary/90 transition-colors">{destination.name}</CardTitle>
                             <p className="text-muted-foreground text-sm mt-2">{destination.description.substring(0, 100)}...</p>
                         </CardContent>
                      </Card>
                    </Link>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden sm:flex bg-background/50 hover:bg-background/80" />
            <CarouselNext className="hidden sm:flex bg-background/50 hover:bg-background/80" />
          </Carousel>
        </div>
      </section>
  );
}
