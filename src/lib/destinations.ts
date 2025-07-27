
import { destinationsData, type Destination } from './destinations-data';

export type { Destination };


export async function getAllDestinations(): Promise<Destination[]> {
    // We can add a delay here to simulate network latency if needed
    // await new Promise(resolve => setTimeout(resolve, 500));
    return destinationsData;
}

export async function getDestinationBySlug(slug: string): Promise<Destination | undefined> {
    return destinationsData.find((d) => d.slug === slug);
}

export async function getDestinationById(id: string): Promise<Destination | undefined> {
    const destination = destinationsData.find((d) => d.id === id);
    return destination;
}
