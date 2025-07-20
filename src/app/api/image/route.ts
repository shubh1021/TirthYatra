
import { NextResponse, type NextRequest } from 'next/server';

export const dynamic = 'force-dynamic';

const PIXABAY_API_KEY = process.env.PIXABAY_API_KEY;
const fallbackUrl = 'https://placehold.co/1024x768.png';

export async function GET(request: NextRequest) {
    if (!PIXABAY_API_KEY) {
        console.error("Pixabay API key not configured. Serving fallback image.");
        return NextResponse.redirect(fallbackUrl, 307);
    }

    const searchParams = request.nextUrl.searchParams;
    const query = searchParams.get('query');

    if (!query) {
        return new Response('Missing query parameter', { status: 400 });
    }

    const API_URL = `https://pixabay.com/api/?key=${PIXABAY_API_KEY}&q=${encodeURIComponent(query)}&image_type=photo&orientation=horizontal&per_page=3`;

    try {
        const pixabayResponse = await fetch(API_URL);
        if (!pixabayResponse.ok) {
            console.error(`Pixabay API error for query "${query}":`, pixabayResponse.statusText);
            return NextResponse.redirect(fallbackUrl, 307);
        }

        const data = await pixabayResponse.json();

        if (data.hits && data.hits.length > 0) {
            // Redirect to the regular-sized image URL
            return NextResponse.redirect(data.hits[0].webformatURL, 307);
        } else {
            console.warn(`No Pixabay image found for query: "${query}". Serving fallback.`);
            return NextResponse.redirect(fallbackUrl, 307);
        }

    } catch (error: any) {
        console.error(`Pixabay API request failed for query "${query}":`, error.message || error);
        return NextResponse.redirect(fallbackUrl, 307);
    }
}
