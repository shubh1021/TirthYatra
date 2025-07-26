
import { NextResponse, type NextRequest } from 'next/server';

export const dynamic = 'force-dynamic';

const PIXABAY_API_KEY = process.env.PIXABAY_API_KEY;

// A fallback image to show when Pixabay fails
const fallbackImage = async () => {
    // This is a transparent 1x1 pixel PNG
    const transparentPixel = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII=";
    const resp = await fetch(transparentPixel);
    return new Response(resp.body, {
        headers: { 'Content-Type': 'image/png' },
    });
}

export async function GET(request: NextRequest) {
    if (!PIXABAY_API_KEY) {
        console.error("Pixabay API key not configured. Serving fallback image.");
        return fallbackImage();
    }

    const searchParams = request.nextUrl.searchParams;
    const query = searchParams.get('query');

    if (!query) {
        return new Response('Missing query parameter', { status: 400 });
    }

    const API_URL = `https://pixabay.com/api/?key=${PIXABAY_API_KEY}&q=${encodeURIComponent(query)}&image_type=photo&safesearch=true&per_page=5`;

    try {
        const pixabayResponse = await fetch(API_URL);
        if (!pixabayResponse.ok) {
            console.error(`Pixabay API error for query "${query}":`, pixabayResponse.statusText);
            return fallbackImage();
        }

        const data = await pixabayResponse.json();

        if (data.hits && data.hits.length > 0) {
            // Pick a random image from the results
            const randomImage = data.hits[Math.floor(Math.random() * data.hits.length)];
            const imageUrl = randomImage.webformatURL;
            const imageResponse = await fetch(imageUrl);

            if (!imageResponse.ok || !imageResponse.body) {
                console.error(`Failed to fetch image from Pixabay URL: ${imageUrl}`);
                return fallbackImage();
            }
            
            // Stream the image back to the client
            const contentType = imageResponse.headers.get('content-type') || 'image/jpeg';
            return new Response(imageResponse.body, {
                headers: { 'Content-Type': contentType },
            });
        } else {
            console.warn(`No Pixabay image found for query: "${query}". Serving fallback.`);
            return fallbackImage();
        }

    } catch (error: any) {
        console.error(`Pixabay API request failed for query "${query}":`, error.message || error);
        return fallbackImage();
    }
}
