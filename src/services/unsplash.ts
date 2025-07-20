// @ts-nocheck
'use server';

import { createApi } from 'unsplash-js';

// Cache to avoid hitting API rate limits during development
const imageCache = new Map();

// Initialize the Unsplash client. Next.js automatically makes variables from .env available via process.env.
const unsplashAccessKey = process.env.UNSPLASH_ACCESS_KEY;

const unsplash = unsplashAccessKey
  ? createApi({
      accessKey: unsplashAccessKey,
    })
  : null;

export async function getImages(
  query: string,
  count = 1,
  orientation: 'landscape' | 'portrait' | 'squarish' = 'landscape'
) {
  const cacheKey = `${query}_${count}_${orientation}`;
  if (imageCache.has(cacheKey)) {
    return imageCache.get(cacheKey);
  }

  // If the Unsplash client isn't configured, return placeholders.
  if (!unsplash) {
    console.warn('UNSPLASH_ACCESS_KEY is not set. Returning placeholder images.');
    const width = orientation === 'portrait' ? 600 : (orientation === 'squarish' ? 400 : 1200);
    const height = orientation === 'portrait' ? 800 : (orientation === 'squarish' ? 400 : 800);
    
    return Array(count).fill({
        urls: {
            regular: `https://placehold.co/${width}x${height}.png`,
            small: `https://placehold.co/400x300.png`
        },
        user: {
          name: 'Placeholder Image'
        },
        alt_description: query,
    });
  }

  try {
    const result = await unsplash.search.getPhotos({
      query,
      page: 1,
      perPage: count,
      orientation,
    });

    if (result.errors) {
      console.error('Unsplash API Error:', result.errors);
      return [];
    }

    const photos = result.response.results;
    if (photos.length > 0) {
      // Only cache successful results
      imageCache.set(cacheKey, photos);
    }
    return photos;
  } catch (error) {
    console.error('Failed to fetch images from Unsplash:', error);
    return [];
  }
}

export async function getHomepageHeroImage() {
    const query = 'ganges sunrise';
    const cacheKey = `hero_${query}`;
    if (imageCache.has(cacheKey)) {
        return imageCache.get(cacheKey);
    }
    
    if (!unsplash) {
      return 'https://placehold.co/1920x1080.png';
    }

    try {
        const result = await getImages(query, 1, 'landscape');
        if (result && result.length > 0) {
            const url = result[0].urls.regular;
            imageCache.set(cacheKey, url);
            return url;
        }
        return 'https://placehold.co/1920x1080.png';
    } catch(e) {
        console.error('Error fetching homepage hero image:', e);
        return 'https://placehold.co/1920x1080.png';
    }
}
