
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

export async function getDestinationById(id: string): Promise<Pick<Destination, 'id' | 'slug' | 'name' | 'image' | 'imageHint'> | undefined> {
    const destination = destinationsData.find((d) => d.id === id);
    if (!destination) return undefined;

    return {
        id: destination.id,
        slug: destination.slug,
        name: destination.name,
        image: destination.image, 
        imageHint: destination.imageHint,
    };
}
