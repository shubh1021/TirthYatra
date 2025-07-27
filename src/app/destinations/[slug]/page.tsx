
import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { Suspense } from 'react';
import { getDestinationBySlug, getAllDestinations, getDestinationById } from '@/lib/destinations';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Calendar, Users, BookOpen, MapPin, Loader2, Sparkles, Footprints } from 'lucide-react';

type DestinationPageProps = {
  params: {
    slug: string;
  };
};

export async function generateStaticParams() {
  const destinations = await getAllDestinations();
  return destinations.map((destination) => ({
    slug: destination.slug,
  }));
}

export default async function DestinationPage({ params }: DestinationPageProps) {
  const destination = await getDestinationBySlug(params.slug);

  if (!destination) {
    notFound();
  }
  
  const nearbyPlaces = destination.nearby;
  const heroImage = destination.slideshowImages[0] ?? { url: `https://placehold.co/1280x720.png`, hint: 'indian temple' };

  return (
    <div className="bg-background">
      {/* Hero Section */}
      <section className="relative h-[60vh] md:h-[70vh] w-full">
        <Image
          src={heroImage.url}
          alt={`A majestic view of ${destination.name}`}
          data-ai-hint={heroImage.hint}
          className="w-full h-full object-cover"
          fill
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white p-4">
          <div className="bg-black/30 backdrop-blur-sm rounded-xl p-6">
            <h1 className="text-4xl md:text-6xl font-headline">
              {destination.name}
            </h1>
            <p className="mt-2 text-lg md:text-xl max-w-2xl mx-auto text-white/90 text-balance">{destination.description}</p>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
          {/* Main Content Column */}
          <div className="lg:col-span-2 space-y-12">
            <section>
              <h2 className="text-3xl font-headline text-primary flex items-center gap-3">
                <BookOpen className="w-8 h-8" /> The Story of {destination.name}
              </h2>
              <div className="mt-6 space-y-6 text-lg text-foreground/80 leading-relaxed prose prose-lg max-w-none">
                <p><strong>History:</strong> {destination.history}</p>
                <p><strong>Mythology:</strong> {destination.mythology}</p>
              </div>
            </section>

            <section>
              <h2 className="text-3xl font-headline text-primary flex items-center gap-3">
                <Calendar className="w-8 h-8" /> Upcoming Events & Festivals
              </h2>
              <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
                {destination.events.map((event, index) => (
                  <Card key={index} className="bg-card border-none rounded-xl shadow-md transition-shadow hover:shadow-lg">
                    <CardHeader>
                      <CardTitle className="text-xl font-semibold">{event.title}</CardTitle>
                      <CardDescription>{event.date}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">{event.info}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </section>
          </div>

          {/* Sidebar Column */}
          <aside className="lg:sticky top-28 self-start space-y-8">
            <Card className="bg-secondary/70 rounded-2xl border-none shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl font-headline text-primary flex items-center gap-3">
                  <Footprints className="w-7 h-7" /> Visitor Etiquette
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-base">
                <div>
                  <h4 className="font-bold text-lg">Dress Code</h4>
                  <p className="text-muted-foreground mt-1">{destination.etiquette.dressCode}</p>
                </div>
                <div>
                  <h4 className="font-bold text-lg">Cultural Tips</h4>
                  <ul className="list-disc list-inside space-y-2 text-muted-foreground mt-2">
                    {destination.etiquette.tips.map((tip, i) => <li key={i}>{tip}</li>)}
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-primary/10 rounded-2xl border border-primary/20 shadow-lg">
                <CardHeader>
                    <CardTitle className="font-headline text-primary flex items-center gap-3">
                        <Sparkles className="w-7 h-7" /> Plan Your Visit
                    </CardTitle>
                    <CardDescription>Ready to experience the divinity of {destination.name}? Let us help you craft the perfect journey.</CardDescription>
                </CardHeader>
                <CardContent>
                    <Link href="/trip-planner" className="w-full inline-block">
                        <button className="w-full bg-primary text-primary-foreground font-bold py-3 px-4 rounded-lg hover:bg-primary/90 transition-colors">
                           Go to AI Trip Planner
                        </button>
                    </Link>
                </CardContent>
            </Card>
          </aside>
        </div>

        {/* Nearby Places Section */}
        <section className="mt-20 md:mt-28">
          <h2 className="text-3xl md:text-4xl font-headline text-center mb-12 flex items-center justify-center gap-3">
            <MapPin className="w-8 h-8 text-primary" /> Explore Nearby Destinations
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {nearbyPlaces.map(async place => {
              const nearbyDestination = await getDestinationById(place.id);
              if (!nearbyDestination) return null;
              
              return (
              <Link href={`/destinations/${nearbyDestination.slug}`} key={place.id}>
                 <Card className="overflow-hidden group transition-all duration-300 hover:shadow-xl hover:-translate-y-2 rounded-xl border-none">
                  <div className="relative h-80 w-full">
                    <Image
                      src={nearbyDestination.image}
                      alt={place.name}
                      data-ai-hint={place.imageHint}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                     <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                     <h3 className="absolute bottom-5 left-5 text-2xl font-headline text-white">{place.name}</h3>
                  </div>
                </Card>
              </Link>
            )})}
          </div>
        </section>
      </div>
    </div>
  );
