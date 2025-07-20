
import { NextResponse, type NextRequest } from 'next/server';
import { createApi } from 'unsplash-js';
import {type Basic} from 'unsplash-js/dist/methods/photos/types';

export const dynamic = 'force-dynamic'; // defaults to auto

// Polyfill for fetch in Node.js environment
if (typeof (global as any).fetch === 'undefined') {
  (global as any).fetch = require('node-fetch');
}

let unsplash: ReturnType<typeof createApi> | null = null;
if (process.env.UNSPLASH_ACCESS_KEY) {
    unsplash = createApi({ accessKey: process.env.UNSPLASH_ACCESS_KEY });
} else {
    console.error("Unsplash API key not configured. The image API will not work.");
}

const fallbackUrl = 'https://placehold.co/1024x768.png';

export async function GET(request: NextRequest) {
    if (!unsplash) {
        console.error("Unsplash API key not configured. Serving fallback image.");
        return NextResponse.redirect(fallbackUrl, 307);
    }

    const searchParams = request.nextUrl.searchParams;
    const query = searchParams.get('query');

    if (!query) {
        return new Response('Missing query parameter', { status: 400 });
    }

    try {
        const result = await unsplash.search.getPhotos({
            query: query,
            page: 1,
            perPage: 1,
            orientation: 'landscape',
        });
        
        if (result.errors) {
            console.error('Unsplash API Error:', result.errors.join(', '));
            return NextResponse.redirect(fallbackUrl, 307);
        }

        const photo = result.response?.results[0] as Basic | undefined;

        if (photo) {
            // Redirect to the regular-sized image URL
            return NextResponse.redirect(photo.urls.regular, 307);
        } else {
            console.warn(`No Unsplash image found for query: "${query}". Serving fallback.`);
            return NextResponse.redirect(fallbackUrl, 307);
        }

    } catch (error: any) {
        console.error(`Unsplash API error for query "${query}":`, error.message || error);
        return NextResponse.redirect(fallbackUrl, 307);
    }
}
