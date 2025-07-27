
// src/ai/scripts/generate-and-save-images.ts
import 'dotenv/config';
import { ai } from '@/ai/genkit';
import { destinationsData } from '@/lib/destinations-data-stubs';
import { servicesData } from '@/lib/services-data-stubs';
import * as fs from 'fs';
import * as path from 'path';

// This script is designed to be run from the root of the project.
const publicDir = path.resolve(process.cwd(), 'public');

// Helper function to add a delay
const sleep = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

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
    // Correctly configure the model for image generation
    const { media } = await ai.generate({
      model: 'googleai/gemini-2.0-flash-preview-image-generation',
      prompt: `A high-resolution, photorealistic, spiritual image for a travel website: ${prompt}. Centered, vibrant, professional photography.`,
      config: {
        responseModalities: ['IMAGE', 'TEXT'],
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
    // Re-throw the error to stop the script if something goes wrong
    throw error;
  }
}


async function main() {
    console.log("Starting image generation process...");
    
    const allImageTasks = [
        ...destinationsData.flatMap(destination => [
            { prompt: destination.imageHint, path: destination.image },
            ...destination.slideshowImages.map(slide => ({ prompt: slide.hint, path: slide.url }))
        ]),
        ...servicesData.map(service => ({ prompt: service.imageHint, path: service.image }))
    ];

    for (const task of allImageTasks) {
        try {
            await generateAndSaveImage(task.prompt, task.path);
            console.log("Waiting for 10 seconds before next request to avoid rate limiting...");
            await sleep(10000); // Wait for 10 seconds
        } catch(error) {
            console.error(`A critical error occurred. Stopping script. Please check the error above. You may need to wait a while before running the script again.`);
            // Exit the process if a request fails. This prevents hammering the API.
            process.exit(1); 
        }
    }
    
    console.log("Image generation process complete.");
}

main().catch(console.error);
