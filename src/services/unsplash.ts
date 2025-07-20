'use server';

import { createApi } from 'unsplash-js';

const unsplash = createApi({
  accessKey: process.env.UNSPLASH_ACCESS_KEY!,
});

const imageCache = new Map<string, any>();

function getPlaceholderUrl(orientation: string, query: string) {
    const width = orientation === 'portrait' ? 600 : (orientation === 'squarish' ? 400 : 1200);
    const height = orientation === 'portrait' ? 800 : (orientation === 'squarish' ? 400 : 800);
    console.warn(`Unsplash API key missing or invalid for query: "${query}". Returning placeholder.`);
    return {
        urls: {
            regular: `https://placehold.co/${width}x${height}.png`,
            small: `https://placehold.co/400x300.png`
        },
        user: { name: 'Placeholder Image' },
        alt_description: query,
    };
}

export async function getImages(
  query: string,
  count = 1,
  orientation: 'landscape' | 'portrait' | 'squarish' = 'landscape'
) {
  const cacheKey = `${query}_${count}_${orientation}`;
  if (imageCache.has(cacheKey)) {
    return imageCache.get(cacheKey);
  }

  if (!process.env.UNSPLASH_ACCESS_KEY) {
    console.warn('UNSPLASH_ACCESS_KEY is not set. Returning placeholder images.');
    return Array(count).fill(null).map(() => getPlaceholderUrl(orientation, query));
  }

  try {
    const result = await unsplash.search.getPhotos({
      query,
      page: 1,
      perPage: count,
      orientation,
    });

    if (result.errors || result.response?.results.length === 0) {
      console.error('Unsplash API Error or no results:', result.errors || `No results for ${query}`);
      return Array(count).fill(null).map(() => getPlaceholderUrl(orientation, query));
    }

    const photos = result.response.results;
    imageCache.set(cacheKey, photos);
    return photos;
  } catch (error) {
    console.error(`Failed to fetch images from Unsplash for query "${query}":`, error);
    return Array(count).fill(null).map(() => getPlaceholderUrl(orientation, query));
  }
}

export async function getHomepageHeroImage() {
    const query = 'Indian temple architecture';
    const cacheKey = `hero_${query}`;
    if (imageCache.has(cacheKey)) {
        return imageCache.get(cacheKey);
    }

    if (!process.env.UNSPLASH_ACCESS_KEY) {
      return 'https://placehold.co/1920x1080.png';
    }

    try {
        const result = await getImages(query, 1, 'landscape');
        if (result && result.length > 0 && result[0].urls) {
            const url = result[0].urls.regular || 'https://placehold.co/1920x1080.png';
            imageCache.set(cacheKey, url);
            return url;
        }
        throw new Error("No image found");
    } catch(e) {
        console.error('Error fetching homepage hero image:', e);
        return 'https://placehold.co/1920x1080.png';
    }
}
