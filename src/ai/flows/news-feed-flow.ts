// src/ai/flows/news-feed-flow.ts
'use server';

/**
 * @fileOverview An AI flow to generate dynamic news items for a given destination using a real news API.
 *
 * - getNewsFeed - A function that generates news items.
 * - NewsFeedInput - The input type for the getNewsFeed function.
 * - NewsFeedOutput - The return type for the getNewsFeed function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';
import { fetchNews, type NewsArticle } from '@/services/news-service';

// Define the schema for the tool that fetches news
const NewsFetcherToolSchema = z.object({
  destinationName: z.string().describe("The name of the destination to fetch news for, e.g., 'Varanasi' or 'Ayodhya'."),
});

// Define the schema for the output of our main flow
const NewsFeedOutputSchema = z.object({
  newsItems: z.array(z.object({
    headline: z.string(),
    story: z.string(),
    url: z.string().url(),
    imageUrl: z.string().url().nullable(),
  })).describe('An array of 3-4 news items, rewritten to be engaging for a spiritual traveler.'),
});
export type NewsFeedOutput = z.infer<typeof NewsFeedOutputSchema>;


// Define the input for our main flow function
const NewsFeedInputSchema = z.object({
  destinationName: z.string().describe('The name of the spiritual destination.'),
});
export type NewsFeedInput = z.infer<typeof NewsFeedInputSchema>;

// This is the exported function that the UI will call
export async function getNewsFeed(input: NewsFeedInput): Promise<NewsFeedOutput> {
  return newsFeedFlow(input);
}


// 1. Define the Genkit Tool for fetching news
const fetchNewsTool = ai.defineTool(
  {
    name: 'fetchNewsForDestination',
    description: 'Fetches recent news articles related to a specific travel destination.',
    inputSchema: NewsFetcherToolSchema,
    outputSchema: z.array(z.object({
        title: z.string(),
        description: z.string().nullable(),
        url: z.string().url(),
        urlToImage: z.string().url().nullable(),
    })),
  },
  async ({ destinationName }) => {
    console.log(`Fetching news for: ${destinationName}...`);
    // The tool calls our service function, passing the API key from environment variables
    const articles = await fetchNews({
      query: `${destinationName} travel spiritual`,
      apiKey: process.env.NEWS_API_KEY!,
    });
    // Return a cleaned-up version of the articles
    return articles.map(a => ({ title: a.title, description: a.description, url: a.url, urlToImage: a.urlToImage }));
  }
);


// 2. Define the Genkit Prompt that uses the tool
const prompt = ai.definePrompt({
  name: 'newsFeedPrompt',
  input: { schema: NewsFeedInputSchema },
  output: { schema: NewsFeedOutputSchema },
  tools: [fetchNewsTool], // Make the tool available to the AI
  prompt: `You are a travel news editor for "TirthYatra", a spiritual tourism website.
A user wants to see news about {{{destinationName}}}.
1. Use the 'fetchNewsForDestination' tool to get the latest articles.
2. From the returned articles, select the 3 most interesting, positive, and relevant ones for a spiritual traveler.
3. For each selected article, rewrite the headline and description to be more engaging, positive, and mystical. Frame it as an exciting update or a point of interest.
4. Return the rewritten data, including the original URL and image URL.`,
});

// 3. Define the Genkit Flow that orchestrates the prompt
const newsFeedFlow = ai.defineFlow(
  {
    name: 'newsFeedFlow',
    inputSchema: NewsFeedInputSchema,
    outputSchema: NewsFeedOutputSchema,
  },
  async (input) => {
    const { output } = await prompt(input);
    if (!output) {
      throw new Error("The AI failed to generate a news feed.");
    }

    // Map the AI's output to ensure all fields are correctly named.
    const mappedItems = output.newsItems.map(item => ({
        headline: item.headline,
        story: item.story,
        url: item.url,
        // The AI output might have a null imageUrl, so we provide a placeholder.
        imageUrl: item.imageUrl || `https://placehold.co/600x400.png`,
        imageQuery: '' // No longer needed as we have real images
    }));

    return { newsItems: mappedItems };
  }
);
