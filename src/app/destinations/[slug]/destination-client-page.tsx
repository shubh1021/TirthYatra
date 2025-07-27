'use client';

import { Card, CardContent } from '@/components/ui/card';
import { HeroSlideshow } from '@/components/hero-slideshow';
import { Destination } from '@/lib/destinations';
import Link from 'next/link';
import Image from 'next/image';
import { Calendar, Droplets, MapPin, Users, Sun } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';

interface DestinationClientPageProps {
  destination: Destination;
  nearbyDestinations: Destination[];
}

export function DestinationClientPage({ destination, nearbyDestinations }: DestinationClientPageProps) {
  if (!destination) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p>Destination not found.</p>
      </div>
    );
  }

  return (
    <div className="bg-background text-foreground">
      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[400px] flex items-center justify-center text-center text-white">
        <HeroSlideshow images={destination.slideshowImages} />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/50 to-transparent" />
        <div className="relative z-10 flex flex-col items-center animate-fade-in px-4">
          <h1 className="text-4xl md:text-6xl font-headline font-bold text-shadow-lg text-balance">
            {destination.name}
          </h1>
          <p className="mt-4 text-lg md:text-xl max-w-3xl mx-auto text-white/90 text-balance">
            {destination.description}
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-12">
            {/* History Section */}
            <div>
              <h2 className="text-3xl font-headline text-primary mb-4">The Sands of Time: History</h2>
              <p className="text-muted-foreground leading-relaxed">{destination.history}</p>
            </div>

            {/* Mythology Section */}
            <div>
              <h2 className="text-3xl font-headline text-primary mb-4">Whispers of the Gods: Mythology</h2>
              <p className="text-muted-foreground leading-relaxed">{destination.mythology}</p>
            </div>

            {/* Etiquette Section */}
            <div>
              <h2 className="text-3xl font-headline text-primary mb-4">Sacred Conduct: Etiquette</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
                 <div className="bg-secondary/50 p-6 rounded-lg">
                    <div className="flex items-center gap-3">
                        <Users className="w-6 h-6 text-primary"/>
                        <h3 className="font-semibold text-lg text-foreground">Dress Code</h3>
                    </div>
                    <p className="mt-2 text-muted-foreground">{destination.etiquette.dressCode}</p>
                 </div>
                 <div className="bg-secondary/50 p-6 rounded-lg">
                     <div className="flex items-center gap-3">
                        <Droplets className="w-6 h-6 text-primary"/>
                        <h3 className="font-semibold text-lg text-foreground">Cultural Tips</h3>
                     </div>
                    <ul className="mt-2 space-y-2 text-muted-foreground list-disc list-inside">
                        {destination.etiquette.tips.map((tip, i) => <li key={i}>{tip}</li>)}
                    </ul>
                 </div>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <aside className="lg:col-span-1 space-y-8">
            {/* Upcoming Events */}
            <Card className="bg-secondary/30 border-border/50">
              <CardContent className="p-6">
                <h3 className="text-2xl font-headline text-primary flex items-center gap-3 mb-4"><Calendar /> Upcoming Events</h3>
                <div className="space-y-4">
                  {destination.events.length > 0 ? (
                    destination.events.map((event, i) => (
                      <div key={i}>
                        <p className="font-bold text-foreground">{event.title}</p>
                        <p className="text-sm text-muted-foreground">{event.date}</p>
                        <p className="text-sm text-muted-foreground mt-1">{event.info}</p>
                        {i < destination.events.length - 1 && <Separator className="my-4" />}
                      </div>
                    ))
                  ) : (
                    <p className="text-muted-foreground">No major upcoming events scheduled. A perfect time for a peaceful visit.</p>
                  )}
                </div>
              </CardContent>
            </Card>

            {/* Nearby Places */}
            <Card className="bg-secondary/30 border-border/50">
              <CardContent className="p-6">
                <h3 className="text-2xl font-headline text-primary flex items-center gap-3 mb-4"><MapPin /> Explore Nearby</h3>
                <div className="space-y-4">
                  {nearbyDestinations && nearbyDestinations.length > 0 ? (
                    nearbyDestinations.map(place => (
                      <Link href={`/destinations/${place.slug}`} key={place.id} className="block group">
                        <div className="flex items-center gap-4 p-2 rounded-lg hover:bg-secondary/50 transition-colors">
                          <div className="relative w-20 h-16 rounded-lg overflow-hidden shrink-0">
                            <Image
                              src={place.image}
                              alt={place.name}
                              data-ai-hint={place.imageHint}
                              fill
                              className="object-cover transition-transform duration-300 group-hover:scale-105"
                              sizes="80px"
                            />
                          </div>
                          <div>
                            <p className="font-semibold text-foreground group-hover:text-primary transition-colors">{place.name}</p>
                            <p className="text-sm text-muted-foreground">{place.description.substring(0, 40)}...</p>
                          </div>
                        </div>
                      </Link>
                    ))
                  ) : (
                     <p className="text-muted-foreground">No nearby destinations listed.</p>
                  )}
                </div>
              </CardContent>
            </Card>
          </aside>
        </div>
      </div>
    </div>
  );
}
