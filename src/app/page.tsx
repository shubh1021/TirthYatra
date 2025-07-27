
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { getAllDestinations } from '@/lib/destinations';
import { ArrowRight, Plane, Hotel, Car, UserCheck, Heart, Sparkles, ShieldCheck } from 'lucide-react';
import { HeroSlideshow } from '@/components/hero-slideshow';
import { flightBookingImageData, accommodationImageData, localTransportImageData, guidedToursImageData } from '@/lib/image-data';

const services = [
  {
    icon: Plane,
    title: 'Flight Booking',
    description: 'Seamless flight arrangements to your chosen spiritual destinations.',
  },
  {
    icon: Hotel,
    title: 'Accommodation',
    description: 'Comfortable and serene stays, from ashrams to premium hotels.',
  },
  {
    icon: Car,
    title: 'Local Transport',
    description: 'Hassle-free local and intercity travel with our trusted partners.',
  },
  {
    icon: UserCheck,
    title: 'Guided Tours',
    description: 'Enrich your journey with our knowledgeable and friendly local guides.',
  },
];

const whyChooseUs = [
    {
        icon: Heart,
        title: 'Personalized Journeys',
        description: 'Every itinerary is crafted with your spiritual goals in mind, ensuring a deeply personal and meaningful experience.'
    },
    {
        icon: Sparkles,
        title: 'Authentic Experiences',
        description: 'We connect you with local traditions, rituals, and communities for a genuine cultural immersion.'
    },
    {
        icon: ShieldCheck,
        title: 'Peace of Mind',
        description: 'With our 24/7 support and seamless logistics, you can focus entirely on your spiritual quest.'
    }
]

export default async function Home() {
  const destinations = await getAllDestinations();
  const heroDestination = destinations.find(d => d.slug === 'kashi');
  const heroImages = heroDestination?.slideshowImages ?? [{ url: `https://placehold.co/1280x853.png`, hint: 'indian temple architecture' }];

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center text-center text-white">
        <HeroSlideshow images={heroImages} />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/40 to-transparent" />
        <div className="relative z-10 animate-fade-in px-4">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-headline font-bold text-shadow-lg text-balance">
            Your Spiritual Journey Starts Here
          </h1>
          <p className="mt-4 text-lg md:text-xl max-w-3xl mx-auto text-white/90 text-balance">
            We craft curated divine experiences for global explorers seeking peace, purpose, and connection in the heart of India.
          </p>
          <Button asChild size="lg" className="mt-8 bg-primary hover:bg-primary/90 text-primary-foreground text-base rounded-full px-8 py-6">
            <Link href="/trip-planner">Plan Your Journey <ArrowRight className="ml-2" /></Link>
          </Button>
        </div>
      </section>

      {/* Destinations Carousel Section */}
      <section id="destinations" className="py-20 md:py-28 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-headline text-primary">
              Discover Sacred Destinations
            </h2>
            <p className="mt-4 text-lg text-muted-foreground text-balance">
              Explore ancient cities, vibrant temples, and serene landscapes that have been centers of spirituality for millennia. Each destination offers a unique path to enlightenment.
            </p>
          </div>
          <Carousel
            opts={{
              align: 'start',
              loop: true,
            }}
            className="w-full mt-12"
          >
            <CarouselContent>
              {destinations.map((destination) => (
                <CarouselItem key={destination.id} className="md:basis-1/2 lg:basis-1/3">
                  <div className="p-2">
                    <Link href={`/destinations/${destination.slug}`}>
                      <Card className="overflow-hidden group transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 h-full flex flex-col border-none rounded-2xl">
                         <div className="relative h-96 w-full">
                            <Image
                              src={destination.image}
                              alt={destination.name}
                              data-ai-hint={destination.imageHint}
                              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                              loading="lazy"
                              fill
                              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                            <CardTitle className="absolute bottom-6 left-6 text-3xl font-headline text-white drop-shadow-md">{destination.name}</CardTitle>
                         </div>
                        <CardContent className="p-6 bg-card flex-grow">
                            <p className="text-muted-foreground line-clamp-3">{destination.description}</p>
                            <span className="inline-flex items-center text-primary font-semibold mt-4 group-hover:underline">
                                Explore <ArrowRight className="ml-2 w-4 h-4" />
                            </span>
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
      <section id="services" className="py-20 md:py-28 bg-secondary/70">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
           <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-headline text-primary">
                End-to-End Spiritual Services
            </h2>
            <p className="mt-4 text-lg text-muted-foreground text-balance">
                We handle every detail of your pilgrimage so you can focus on what truly matters. From seamless travel to expert guidance, your comfort and peace of mind are our priority.
            </p>
           </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
            {services.map((service) => (
              <Card key={service.title} className="text-center p-8 bg-card/80 backdrop-blur-sm rounded-2xl shadow-lg border-none">
                <div className="inline-block bg-primary/10 text-primary p-4 rounded-full">
                    <service.icon className="w-8 h-8" />
                </div>
                <CardHeader className="p-0 mt-4">
                  <CardTitle className="text-xl font-headline">{service.title}</CardTitle>
                </CardHeader>
                <CardContent className="p-0 mt-2">
                  <p className="text-muted-foreground text-sm">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

        {/* Why Choose Us Section */}
      <section id="why-us" className="py-20 md:py-28 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
           <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-headline text-primary">
                Why Embark on Your Journey with TirthYatra?
            </h2>
             <p className="mt-4 text-lg text-muted-foreground text-balance">
                We are more than a travel company; we are your dedicated partners in crafting a transformative spiritual experience.
             </p>
           </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            {whyChooseUs.map((item) => (
              <div key={item.title} className="p-6">
                <div className="flex items-center gap-4">
                    <div className="bg-secondary/70 text-primary p-3 rounded-xl">
                        <item.icon className="w-6 h-6" />
                    </div>
                    <h3 className="text-xl font-headline">{item.title}</h3>
                </div>
                <p className="mt-4 text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
