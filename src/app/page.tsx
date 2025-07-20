import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { getAllDestinations } from '@/lib/destinations';
import { getHomepageHeroImage } from '@/services/unsplash';
import { Suspense } from 'react';
import { Loader2 } from 'lucide-react';

export default async function Home() {
  const [destinations, heroImageUrl] = await Promise.all([
    getAllDestinations(),
    getHomepageHeroImage()
  ]);

  return (
    <>
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center text-center text-white">
        <div className="absolute inset-0">
          <Suspense fallback={<div className="w-full h-full bg-secondary flex items-center justify-center"><Loader2 className="h-12 w-12 animate-spin text-primary" /></div>}>
            <Image
              src={heroImageUrl}
              alt="Indian temple architecture"
              data-ai-hint="indian temple architecture"
              fill
              className="object-cover"
              priority
              loading="eager"
            />
          </Suspense>
          <div className="absolute inset-0 bg-black/50" />
        </div>
        <div className="relative z-10 animate-fade-in px-4">
          <h1 className="text-4xl md:text-6xl font-headline font-bold text-shadow-lg">
            Your Spiritual Journey Starts Here
          </h1>
          <p className="mt-4 text-lg md:text-2xl max-w-3xl mx-auto">
            Curated divine experiences for global explorers.
          </p>
          <Button asChild size="lg" className="mt-8 bg-primary hover:bg-primary/90 text-primary-foreground">
            <Link href="#destinations">Explore Destinations</Link>
          </Button>
        </div>
      </section>

      {/* Destinations Carousel Section */}
      <section id="destinations" className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-headline text-center mb-12 text-primary">
            Discover Sacred Destinations
          </h2>
          <Carousel
            opts={{
              align: 'start',
            }}
            className="w-full"
          >
            <CarouselContent>
              {destinations.map((destination) => (
                <CarouselItem key={destination.id} className="md:basis-1/2 lg:basis-1/3">
                  <div className="p-1">
                    <Link href={`/destinations/${destination.slug}`}>
                      <Card className="overflow-hidden group transition-all duration-300 hover:shadow-xl hover:scale-105">
                        <CardHeader className="p-0">
                          <div className="relative h-80 w-full">
                            <Image
                              src={destination.image}
                              alt={destination.name}
                              data-ai-hint={destination.imageHint}
                              fill
                              className="object-cover transition-transform duration-500 group-hover:scale-110"
                              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                              loading="lazy"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                          </div>
                          <CardTitle className="absolute bottom-4 left-4 text-2xl font-headline text-white">
                            {destination.name}
                          </CardTitle>
                        </CardHeader>
                        <CardContent className="p-4">
                          <p className="text-muted-foreground line-clamp-3">{destination.description}</p>
                        </CardContent>
                      </Card>
                    </Link>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden sm:flex" />
            <CarouselNext className="hidden sm:flex" />
          </Carousel>
        </div>
      </section>
    </>
  );
}
