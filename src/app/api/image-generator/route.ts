// src/app/api/image-generator/route.ts
import { NextRequest, NextResponse } from 'next/server';
import { generateImage } from '@/ai/flows/generate-image-flow';
import { ZodError } from 'zod';

export async function GET(req: NextRequest) {
  try {
    const url = new URL(req.url);
    const prompt = url.searchParams.get('prompt');

    if (!prompt) {
      return NextResponse.json({ error: 'Prompt is required' }, { status: 400 });
    }

    const result = await generateImage({ prompt });
    const [header, base64] = result.imageUrl.split(',');

    if (!base64) {
      return NextResponse.json({ error: 'Invalid image data URI' }, { status: 500 });
    }
    
    const mimeType = header.match(/data:(.*);base64/)?.[1] || 'image/png';
    const buffer = Buffer.from(base64, 'base64');
    
    return new NextResponse(buffer, {
        headers: {
            'Content-Type': mimeType,
            'Content-Length': buffer.length.toString(),
        },
        status: 200,
    });

  } catch (error) {
    console.error('Image generation API error:', error);
    if (error instanceof ZodError) {
      return NextResponse.json({ error: 'Invalid input', details: error.errors }, { status: 400 });
    }
    return NextResponse.json({ error: 'Failed to generate image' }, { status: 500 });
  }
}
