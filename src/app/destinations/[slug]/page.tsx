import { getDestinationBySlug, getDestinationById, Destination } from '@/lib/destinations';
import { DestinationClientPage } from './destination-client-page';
import { notFound } from 'next/navigation';

export async function generateStaticParams() {
  // No static params needed as we are using dynamic rendering
  return [];
}

export default async function DestinationPage({ params }: { params: { slug: string } }) {
  const destination = await getDestinationBySlug(params.slug);

  if (!destination) {
    notFound();
  }

  // Fetch full data for nearby destinations
  const nearbyDestinations = await Promise.all(
    destination.nearby.map(nearby => getDestinationById(nearby.id))
  ).then(results => results.filter((d): d is Destination => d !== undefined));


  return <DestinationClientPage destination={destination} nearbyDestinations={nearbyDestinations} />;
}
