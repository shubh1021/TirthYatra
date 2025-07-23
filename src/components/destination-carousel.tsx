
"use client";

import Image from 'next/image';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';

interface DestinationCarouselProps {
    images: { url: string; hint: string }[];
    destinationName: string;
}

export function DestinationCarousel({ images, destinationName }: DestinationCarouselProps) {
    return (
        <Carousel className="w-full h-full" opts={{ loop: true }}>
          <CarouselContent className="h-full">
            {images.map((img, index) => (
              <CarouselItem key={index} className="h-full">
                <Image
                  src={img.url}
                  alt={`${destinationName} view ${index + 1}`}
                  data-ai-hint={img.hint}
                  fill
                  className="object-cover"
                  priority={index === 0}
                  loading={index > 0 ? 'lazy' : 'eager'}
                  sizes="100vw"
                />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="left-4" />
          <CarouselNext className="right-4" />
        </Carousel>
    );
}
