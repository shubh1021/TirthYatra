// @ts-nocheck
'use server';

// IMPORTANT: This line MUST be at the very top to ensure env vars are loaded before anything else.
import * as dotenv from 'dotenv';
dotenv.config({ path: '.env' });

import { createApi } from 'unsplash-js';

// Cache to avoid hitting API rate limits during development
const imageCache = new Map();

// Initialize the Unsplash client.
// This will now correctly read from process.env due to the dotenv config above.
const unsplash = createApi({
  accessKey: process.env.UNSPLASH_ACCESS_KEY,
});

function getPlaceholderUrl(orientation, query) {
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
  
  // If the Unsplash client isn't configured, return placeholders.
  if (!process.env.UNSPLASH_ACCESS_KEY) {
    return Array(count).fill(getPlaceholderUrl(orientation, query));
  }

  try {
    const result = await unsplash.search.getPhotos({
      query,
      page: 1,
      perPage: count,
      orientation,
    });

    if (result.errors || result.response.results.length === 0) {
      console.error('Unsplash API Error or no results:', result.errors || `No results for ${query}`);
      return Array(count).fill(getPlaceholderUrl(orientation, query));
    }

    const photos = result.response.results;
    imageCache.set(cacheKey, photos);
    return photos;
  } catch (error) {
    console.error(`Failed to fetch images from Unsplash for query "${query}":`, error);
    return Array(count).fill(getPlaceholderUrl(orientation, query));
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
        const url = result[0].urls.regular || 'https://placehold.co/1920x1080.png';
        imageCache.set(cacheKey, url);
        return url;
    } catch(e) {
        console.error('Error fetching homepage hero image:', e);
        return 'https://placehold.co/1920x1080.png';
    }
}
