
// src/ai/scripts/generate-map-image.ts
import 'dotenv/config';
import { ai } from '@/ai/genkit';
import { googleAI } from '@genkit-ai/googleai';
import * as fs from 'fs';
import * as path from 'path';

// This script is designed to be run from the root of the project.
const publicDir = path.resolve(process.cwd(), 'public');
const imagePath = 'images/india-map-outline.png';
const fullPath = path.join(publicDir, imagePath);

async function generateAndSaveMapImage() {
  // Check if image already exists
  if (fs.existsSync(fullPath)) {
    console.log(`Map image already exists, skipping: ${imagePath}`);
    return;
  }

  const prompt = `Generate an image of a clean, minimalist outline map of India with a transparent background. The map outline should be a single solid saffron color (#f4a261). The final output must be a PNG file with a transparent background.`;
  console.log(`Generating map image with prompt: "${prompt}"...`);

  try {
    const { media } = await ai.generate({
      model: googleAI.model('gemini-2.0-flash-preview-image-generation'),
      prompt: prompt,
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
    const dirName = path.dirname(fullPath);
    fs.mkdirSync(dirName, { recursive: true });
    
    // Save the file
    fs.writeFileSync(fullPath, imageBuffer);

    console.log(`Successfully saved map image to: ${imagePath}`);

  } catch (error) {
    console.error(`Failed to generate or save map image:`, error);
    throw error;
  }
}

generateAndSaveMapImage().catch(console.error);
