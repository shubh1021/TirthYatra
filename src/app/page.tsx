
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { getAllDestinations } from '@/lib/destinations';
import { Suspense } from 'react';
import { Loader2, Plane, Hotel, Car, UserCheck } from 'lucide-react';
import { HeroSlideshow } from '@/components/hero-slideshow';


const services = [
  {
    icon: Plane,
    title: 'Flight Booking',
    description: 'We help you find the best deals on international and domestic flights to your spiritual destinations.',
    imageHint: 'airplane window view of mountains',
  },
  {
    icon: Hotel,
    title: 'Accommodation',
    description: 'From serene ashrams to comfortable hotels, we arrange stays that suit your budget and preferences.',
    imageHint: 'luxury hotel lobby with indian design',
  },
  {
    icon: Car,
    title: 'Local Transport',
    description: 'Seamless intercity and local travel arrangements, including private cabs, trains, and more.',
    imageHint: 'car on mountain road in india',
  },
  {
    icon: UserCheck,
    title: 'Guided Tours',
    description: 'Knowledgeable local guides to enrich your experience with history, mythology, and cultural insights.',
    imageHint: 'tour guide with tourists at indian temple',
  },
];


export default async function Home() {
  const destinations = await getAllDestinations();
  const heroDestination = destinations.find(d => d.slug === 'kashi');
  const heroImages = heroDestination?.slideshowImages ?? [{ url: `/api/image-generator?prompt=${encodeURIComponent('indian temple architecture')}`, hint: 'indian temple architecture' }];

  return (
    <>
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center text-center text-white">
        <HeroSlideshow images={heroImages} />
        <div className="absolute inset-0 bg-black/50" />
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
                      <Card className="overflow-hidden group transition-all duration-300 hover:shadow-xl hover:-translate-y-2 h-full flex flex-col">
                         <div className="relative h-60 w-full">
                            <img
                              src={`/api/image-generator?prompt=${encodeURIComponent(destination.imageHint)}`}
                              alt={destination.name}
                              data-ai-hint={destination.imageHint}
                              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                              loading="lazy"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                            <CardTitle className="absolute bottom-4 left-4 text-2xl font-headline text-white drop-shadow-md">{destination.name}</CardTitle>
                         </div>
                        <CardContent className="p-4 flex flex-col flex-grow">
                            <p className="text-muted-foreground line-clamp-3 flex-grow mt-2">{destination.description}</p>
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

      {/* Services Section */}
      <section id="services" className="py-16 md:py-24 bg-secondary/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
           <h2 className="text-3xl md:text-4xl font-headline text-center mb-12 text-primary">
            Our Services
          </h2>
           <p className="mt-4 text-lg text-center max-w-3xl mx-auto text-muted-foreground mb-12">
            We provide end-to-end services to make your spiritual journey comfortable, safe, and memorable.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service) => (
              <Card key={service.title} className="overflow-hidden group transition-all duration-300 hover:shadow-xl hover:-translate-y-2">
                <div className="relative h-48 w-full">
                  <img
                    src={`/api/image-generator?prompt=${encodeURIComponent(service.imageHint)}`}
                    alt={service.title}
                    data-ai-hint={service.imageHint}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                </div>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <service.icon className="w-6 h-6 text-primary" />
                    <span>{service.title}</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
