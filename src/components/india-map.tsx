
"use client";
import { useState, useMemo } from 'react';
import type { Destination } from '@/lib/destinations';
import { Card, CardContent, CardTitle } from '@/components/ui/card';
import { Carousel, CarouselContent, CarouselItem } from '@/components/ui/carousel';
import Image from 'next/image';
import Link from 'next/link';
import Autoplay from 'embla-carousel-autoplay';

interface IndiaMapProps {
  destinations: Destination[];
}

const destinationCoordinates: Record<string, { top: string; left: string }> = {
  'ayodhya': { top: '38%', left: '55%' },
  'kashi': { top: '42%', left: '58%' },
  'mathura-vrindavan': { top: '35%', left: '48%' },
  'dwarka': { top: '48%', left: '15%' },
  'rameswaram': { top: '85%', left: '48%' },
  'haridwar-rishikesh': { top: '28%', left: '50%' },
  'puri': { top: '55%', left: '62%' },
  'tirupati': { top: '75%', left: '50%' },
  'amritsar': { top: '22%', left: '42%' },
  'kedarnath': { top: '26%', left: '51%' },
};

export function IndiaMap({ destinations }: IndiaMapProps) {
  const [hoveredSlug, setHoveredSlug] = useState<string | null>(null);

  const memoizedDestinations = useMemo(() => 
    destinations.map(dest => ({
      ...dest,
      coordinates: destinationCoordinates[dest.slug]
    })).filter(dest => dest.coordinates), 
  [destinations]);

  const hoveredDestination = useMemo(() => 
    memoizedDestinations.find(d => d.slug === hoveredSlug),
  [memoizedDestinations, hoveredSlug]);

  return (
    <div 
      className="relative w-full h-full"
    >
      <div 
        className="relative w-full h-full"
        onMouseLeave={() => setHoveredSlug(null)}
      >
        <Image 
          src="/images/india-map-outline.png"
          alt="Map of India"
          fill
          className="object-contain drop-shadow-2xl"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
        {memoizedDestinations.map(destination => (
          <div
            key={destination.id}
            className="absolute transform -translate-x-1/2 -translate-y-1/2"
            style={{ top: destination.coordinates.top, left: destination.coordinates.left }}
            onMouseEnter={() => setHoveredSlug(destination.slug)}
          >
            <div className="w-4 h-4 bg-primary rounded-full cursor-pointer animate-pulse border-2 border-white shadow-lg"></div>
          </div>
        ))}
      </div>
      
      {hoveredDestination && (
        <div
          className="absolute z-10 w-80 transform -translate-x-1/2 -translate-y-full transition-all duration-300 pointer-events-none"
          style={{ 
            top: `calc(${hoveredDestination.coordinates.top} - 1rem)`, 
            left: hoveredDestination.coordinates.left 
          }}
        >
          <Link href={`/destinations/${hoveredDestination.slug}`} className="pointer-events-auto">
            <Card className="overflow-hidden shadow-2xl bg-white/80 backdrop-blur-sm animate-fade-in">
              <Carousel
                opts={{ loop: true }}
                plugins={[Autoplay({ delay: 2000, stopOnInteraction: false })]}
                className="w-full"
              >
                <CarouselContent>
                  {hoveredDestination.slideshowImages.map((image, index) => (
                    <CarouselItem key={index}>
                      <div className="relative h-40">
                        <Image
                          src={image.url}
                          alt={image.hint}
                          data-ai-hint={image.hint}
                          fill
                          className="object-cover"
                          sizes="320px"
                        />
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
              </Carousel>
              <CardContent className="p-4">
                <CardTitle className="font-headline text-lg text-primary">{hoveredDestination.name}</CardTitle>
                <p className="text-sm text-muted-foreground mt-1">{hoveredDestination.description.substring(0, 100)}...</p>
              </CardContent>
            </Card>
          </Link>
        </div>
      )}
    </div>
  );
}
