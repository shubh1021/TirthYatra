// src/ai/scripts/generate-and-save-images.ts
import 'dotenv/config';
import { ai } from '@/ai/genkit';
import { destinationsData } from '@/lib/destinations-data-stubs';
import { servicesData } from '@/lib/services-data-stubs';
import * as fs from 'fs';
import * as path from 'path';

// This script is designed to be run from the root of the project.
const publicDir = path.resolve(process.cwd(), 'public');

async function generateAndSaveImage(prompt: string, filePath: string) {
  const fullPath = path.join(publicDir, filePath);
  const dirName = path.dirname(fullPath);

  // Check if image already exists
  if (fs.existsSync(fullPath)) {
    console.log(`Image already exists, skipping: ${filePath}`);
    return;
  }

  console.log(`Generating image for prompt: "${prompt}"...`);

  try {
    const { media } = await ai.generate({
      model: 'googleai/gemini-2.0-flash-preview-image-generation',
      prompt: `A high-resolution, photorealistic, spiritual image for a travel website: ${prompt}. Centered, vibrant, professional photography.`,
      config: {
        responseModalities: ['IMAGE'],
      },
    });

    if (!media || !media.url) {
      throw new Error('No media returned from the AI.');
    }

    // The media.url is a data URI: "data:image/png;base64,<b64_encoded_image>"
    const base64Data = media.url.split(',')[1];
    if (!base64Data) {
        throw new Error('Invalid data URI format.');
    }

    const imageBuffer = Buffer.from(base64Data, 'base64');
    
    // Ensure directory exists
    fs.mkdirSync(dirName, { recursive: true });
    
    // Save the file
    fs.writeFileSync(fullPath, imageBuffer);

    console.log(`Successfully saved image to: ${filePath}`);

  } catch (error) {
    console.error(`Failed to generate or save image for prompt "${prompt}":`, error);
  }
}


async function main() {
    console.log("Starting image generation process...");

    // Generate images for destinations
    for (const destination of destinationsData) {
        // Main destination image
        await generateAndSaveImage(destination.imageHint, destination.image);
        
        // Slideshow images
        for (const slide of destination.slideshowImages) {
            await generateAndSaveImage(slide.hint, slide.url);
        }
    }

    // Generate images for services
    for (const service of servicesData) {
        await generateAndSaveImage(service.imageHint, service.image);
    }
    
    console.log("Image generation process complete.");
}

main().catch(console.error);
