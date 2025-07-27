import {genkit} from 'genkit';
import {googleAI} from '@genkit-ai/googleai';
import { GenkitError } from 'genkit/errors';

const plugins = [];
if (process.env.GEMINI_API_KEY) {
  plugins.push(googleAI());
} else {
  console.warn("GEMINI_API_KEY is not set. Google AI plugin will not be available.");
}

export const ai = genkit({
  plugins,
  model: 'googleai/gemini-pro', // Explicitly set a default model
  errorHandler: async (err: GenkitError) => {
    // Log all Genkit errors to the console.
    console.error('Genkit Error:', err.message, err.stack, err.details);
    // You could add more sophisticated error handling here, like sending to a logging service.
  },
});
