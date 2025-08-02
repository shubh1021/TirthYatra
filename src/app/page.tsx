
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { getAllDestinations } from '@/lib/destinations';
import { ArrowRight, Plane, Hotel, Car, UserCheck, Heart, Sparkles, ShieldCheck, Star } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { IndiaMap } from '@/components/india-map';

const servicesData = [
    {
        icon: Plane,
        title: 'Flight Booking',
        description: 'Seamless flight arrangements to your sacred destination, ensuring a peaceful start to your journey.',
    },
    {
        icon: Hotel,
        title: 'Accommodation',
        description: 'Handpicked hotels and ashrams that offer comfort, serenity, and a touch of local culture.',
    },
    {
        icon: Car,
        title: 'Local Transport',
        description: 'Reliable and comfortable local transport to navigate the holy cities with ease and safety.',
    },
    {
        icon: UserCheck,
        title: 'Guided Tours',
        description: 'Knowledgeable guides to illuminate the history and spiritual significance of every site you visit.',
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

const testimonials = [
    {
        name: 'Ananya Sharma',
        location: 'Mumbai, India',
        avatar: 'https://placehold.co/100x100.png',
        avatarHint: 'indian woman portrait',
        rating: 5,
        quote: "TirthYatra planned our Kashi trip flawlessly. The Ganga Aarti was a divine experience, all thanks to their meticulous arrangements and knowledgeable guide. Truly a journey for the soul."
    },
    {
        name: 'David Chen',
        location: 'Singapore',
        avatar: 'https://placehold.co/100x100.png',
        avatarHint: 'asian man portrait',
        rating: 5,
        quote: "As a first-time visitor to India for a spiritual quest, I was amazed by the professionalism of TirthYatra. They handled everything, allowing me to fully immerse myself in the experience at Rishikesh."
    },
    {
        name: 'Fatima Al Jamil',
        location: 'Dubai, UAE',
        avatar: 'https://placehold.co/100x100.png',
        avatarHint: 'arab woman portrait',
        rating: 5,
        quote: "Our family's pilgrimage to Ayodhya was a dream come true. The team was incredibly supportive and considerate of our needs. Highly recommend for a stress-free spiritual vacation."
    }
]

export default async function Home() {
  const destinations = await getAllDestinations();

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative h-[90vh] min-h-[700px] flex items-center justify-center text-center bg-secondary/30 overflow-hidden">
        <div className="relative z-10 flex flex-col items-center animate-fade-in px-4 w-full h-full pt-20">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-headline font-bold text-primary text-shadow-lg text-balance">
                Find The Incredible You
            </h1>
            <p className="mt-4 text-lg md:text-xl max-w-3xl mx-auto text-foreground/80 text-balance">
                Discover India's rich spiritual tapestry. Hover over a destination to begin your journey.
            </p>
            <div className="flex-grow w-full relative">
                <IndiaMap destinations={destinations} />
            </div>
        </div>
      </section>

      {/* Destinations Carousel Section */}
      <section id="destinations" className="pt-20 pb-20 md:pt-28 md:pb-28 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
             <p className="text-primary font-semibold">Explore Sacred Lands</p>
            <h2 className="text-3xl md:text-4xl font-headline text-foreground mt-2">
              Must-Visit Spiritual Destinations
            </h2>
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
                  <div className="p-2 h-full">
                    <Link href={`/destinations/${destination.slug}`} className="block h-full">
                      <Card className="overflow-hidden group transition-all duration-300 hover:shadow-xl hover:-translate-y-1 h-full flex flex-col border rounded-lg bg-card">
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
                         <CardContent className="p-4 flex-grow">
                            <CardTitle className="text-xl font-headline text-primary group-hover:text-primary/90 transition-colors">{destination.name}</CardTitle>
                             <p className="text-muted-foreground text-sm mt-2">{destination.description.substring(0, 100)}...</p>
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
      <section id="services" className="py-20 md:py-28 bg-secondary/50">
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
            {servicesData.map((service) => (
              <Card key={service.title} className="text-center p-8 bg-card backdrop-blur-sm rounded-2xl shadow-lg border hover:shadow-primary/20 hover:-translate-y-1 transition-all">
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
      
      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 md:py-28 bg-secondary/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-headline text-primary">
              Voices of Our Pilgrims
            </h2>
            <p className="mt-4 text-lg text-muted-foreground text-balance">
              Hear from fellow travelers who have experienced the divine with TirthYatra.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {testimonials.map((testimonial) => (
              <Card key={testimonial.name} className="bg-card p-6 rounded-2xl shadow-lg">
                <CardContent className="p-0">
                    <div className="flex items-center gap-4">
                        <Avatar className="w-14 h-14">
                            <AvatarImage src={testimonial.avatar} alt={testimonial.name} data-ai-hint={testimonial.avatarHint}/>
                            <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
                        </Avatar>
                        <div>
                            <p className="font-bold text-lg">{testimonial.name}</p>
                            <p className="text-sm text-muted-foreground">{testimonial.location}</p>
                        </div>
                    </div>
                  <div className="flex items-center gap-1 mt-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className={`w-5 h-5 ${i < testimonial.rating ? 'text-yellow-400' : 'text-muted'}`} fill="currentColor"/>
                    ))}
                  </div>
                  <blockquote className="mt-4 text-muted-foreground italic border-l-2 border-primary pl-4">
                    "{testimonial.quote}"
                  </blockquote>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
