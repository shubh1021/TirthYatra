import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Plane, Hotel, Car, UserCheck } from 'lucide-react';

const services = [
  {
    icon: Plane,
    title: 'Flight Booking',
    description: 'We help you find the best deals on international and domestic flights to your spiritual destinations.',
  },
  {
    icon: Hotel,
    title: 'Accommodation',
    description: 'From serene ashrams to comfortable hotels, we arrange stays that suit your budget and preferences.',
  },
  {
    icon: Car,
    title: 'Local Transport',
    description: 'Seamless intercity and local travel arrangements, including private cabs, trains, and more.',
  },
  {
    icon: UserCheck,
    title: 'Guided Tours',
    description: 'Knowledgeable local guides to enrich your experience with history, mythology, and cultural insights.',
  },
];

export default function ServicesPage() {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
      <div className="max-w-2xl mx-auto text-center">
        <h1 className="text-4xl md:text-5xl font-headline text-primary">Our Services</h1>
        <p className="mt-4 text-lg text-muted-foreground">
          We provide end-to-end services to make your spiritual journey comfortable, safe, and memorable.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto mt-12">
        {services.map((service, index) => (
          <Card key={index}>
            <CardHeader className="flex flex-row items-center gap-4">
              <div className="bg-primary/10 text-primary p-3 rounded-full">
                <service.icon className="w-6 h-6" />
              </div>
              <div>
                <CardTitle>{service.title}</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">{service.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
