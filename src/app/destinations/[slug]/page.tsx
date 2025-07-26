
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { Suspense } from 'react';
import { getDestinationBySlug, getAllDestinations, getDestinationById } from '@/lib/destinations';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Calendar, Users, BookOpen, MapPin, Loader2 } from 'lucide-react';
import NewsFeed from '@/components/news-feed';
import ChatbotPlanner from '@/components/chatbot-planner';

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
  const heroImage = destination.slideshowImages[0] ?? { url: 'https://placehold.co/1920x1080.png', hint: 'indian temple' };

  return (
    <div className="bg-background">
      {/* Hero Section */}
      <div className="relative h-[60vh] md:h-[70vh] w-full">
        <img
          src={heroImage.url}
          alt={`A view of ${destination.name}`}
          data-ai-hint={heroImage.hint}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-4xl md:text-6xl font-headline text-white p-4 rounded-lg bg-black/30 backdrop-blur-sm">
            {destination.name}
          </h1>
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
          {/* Left/Main Column */}
          <div className="lg:col-span-2">
            <section>
              <h2 className="text-3xl font-headline text-primary flex items-center gap-2">
                <BookOpen /> About {destination.name}
              </h2>
              <div className="mt-4 space-y-4 text-lg text-foreground/80 leading-relaxed">
                <p><span className="font-bold">History:</span> {destination.history}</p>
                <p><span className="font-bold">Mythology:</span> {destination.mythology}</p>
              </div>
            </section>

            <section className="mt-12">
              <h2 className="text-3xl font-headline text-primary flex items-center gap-2">
                <Calendar /> Upcoming Events & Festivals
              </h2>
              <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-6">
                {destination.events.map((event, index) => (
                  <Card key={index} className="bg-card">
                    <CardHeader>
                      <CardTitle>{event.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="font-semibold">{event.date}</p>
                      <p className="mt-2 text-muted-foreground">{event.info}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </section>

            <section className="mt-12">
                 <Suspense fallback={
                    <div className="flex justify-center items-center h-48">
                        <Loader2 className="h-12 w-12 animate-spin text-primary" />
                        <p className="ml-4 text-muted-foreground">Loading News...</p>
                    </div>
                 }>
                    <NewsFeed destinationName={destination.name} />
                 </Suspense>
            </section>
          </div>

          {/* Right/Sidebar Column */}
          <aside className="lg:sticky top-24 self-start space-y-8">
            <Card className="bg-secondary/50">
              <CardHeader>
                <CardTitle className="text-2xl font-headline text-primary flex items-center gap-2">
                  <Users /> Visitor Guide
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-bold">Dress Code</h4>
                  <p className="text-muted-foreground">{destination.etiquette.dressCode}</p>
                </div>
                <div>
                  <h4 className="font-bold">Cultural Tips</h4>
                  <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                    {destination.etiquette.tips.map((tip, i) => <li key={i}>{tip}</li>)}
                  </ul>
                </div>
              </CardContent>
            </Card>
             <Suspense fallback={<div className="flex justify-center items-center h-48"><Loader2 className="h-8 w-8 animate-spin text-primary" /></div>}>
                <ChatbotPlanner />
             </Suspense>
          </aside>
        </div>

        {/* Nearby Places */}
        <section className="mt-16">
          <h2 className="text-3xl md:text-4xl font-headline text-center mb-12 flex items-center justify-center gap-2">
            <MapPin /> Explore Nearby
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {nearbyPlaces.map(place => {
              const nearbyDestination = getDestinationById(place.id);
              if (!nearbyDestination) return null;
              
              return (
              <Link href={`/destinations/${nearbyDestination.slug}`} key={place.id}>
                 <Card className="overflow-hidden group transition-all duration-300 hover:shadow-xl hover:-translate-y-2">
                  <div className="relative h-60 w-full">
                    <img
                      src={place.image}
                      alt={place.name}
                      data-ai-hint={place.imageHint}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                     <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                     <h3 className="absolute bottom-4 left-4 text-xl font-headline text-white">{place.name}</h3>
                  </div>
                </Card>
              </Link>
            )})}
          </div>
        </section>
      </div>
    </div>
  );
}
