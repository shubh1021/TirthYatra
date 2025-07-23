
"use client";

import React, { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import { useEmblaCarousel } from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import { cn } from '@/lib/utils';
import { Loader2 } from 'lucide-react';

interface HeroSlideshowProps {
  images: {
    url: string;
    hint: string;
  }[];
}

export function HeroSlideshow({ images }: HeroSlideshowProps) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [Autoplay({ delay: 5000 })]);
  const [loadingStates, setLoadingStates] = useState(images.map(() => true));

  const handleLoadingComplete = (index: number) => {
    setLoadingStates(prev => {
        const newStates = [...prev];
        newStates[index] = false;
        return newStates;
    });
  };

  return (
    <div className="absolute inset-0 overflow-hidden" ref={emblaRef}>
      <div className="flex h-full">
        {images.map((image, index) => (
          <div key={index} className="relative flex-[0_0_100%] h-full">
             {loadingStates[index] && (
                <div className="absolute inset-0 bg-secondary flex items-center justify-center z-10">
                    <Loader2 className="h-12 w-12 animate-spin text-primary" />
                </div>
             )}
            <Image
              src={image.url}
              alt={image.hint}
              data-ai-hint={image.hint}
              fill
              className={cn(
                "object-cover transition-opacity duration-1000",
                loadingStates[index] ? 'opacity-0' : 'opacity-100'
                )}
              priority={index === 0}
              loading={index === 0 ? "eager" : "lazy"}
              onLoadingComplete={() => handleLoadingComplete(index)}
              sizes="100vw"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
