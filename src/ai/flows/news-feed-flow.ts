// src/ai/flows/news-feed-flow.ts
'use server';

/**
 * @fileOverview An AI flow to generate dynamic news items for a given destination.
 *
 * - getNewsFeed - A function that generates news items.
 * - NewsFeedInput - The input type for the getNewsFeed function.
 * - NewsFeedOutput - The return type for the getNewsFeed function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const NewsFeedInputSchema = z.object({
  destinationName: z.string().describe('The name of the spiritual destination.'),
});
export type NewsFeedInput = z.infer<typeof NewsFeedInputSchema>;

const NewsItemSchema = z.object({
    headline: z.string().describe('A catchy news headline.'),
    story: z.string().describe('A short, one-paragraph news story related to the headline.'),
    imageQuery: z.string().describe('A 2-3 word query for Unsplash to find a relevant image.')
});

const NewsFeedOutputSchema = z.object({
  newsItems: z.array(NewsItemSchema).describe('An array of 3-4 news items.'),
});
export type NewsFeedOutput = z.infer<typeof NewsFeedOutputSchema>;

export async function getNewsFeed(input: NewsFeedInput): Promise<NewsFeedOutput> {
  return newsFeedFlow(input);
}

const prompt = ai.definePrompt({
  name: 'newsFeedPrompt',
  input: {schema: NewsFeedInputSchema},
  output: {schema: NewsFeedOutputSchema},
  prompt: `You are a travel news writer for a spiritual tourism website. Generate 3-4 interesting, positive, and engaging news items related to the destination: {{{destinationName}}}.

  The news can be about:
  - Recent developments or infrastructure improvements.
  - Newly discovered historical facts or archaeological findings.
  - Positive community stories or initiatives.
  - Preparations for an upcoming festival.
  - A cultural or artistic event happening in the city.

  For each news item, provide a catchy headline, a short story, and a simple 2-3 word image query for Unsplash. Make the stories feel current and relevant.
  `,
});

const newsFeedFlow = ai.defineFlow(
  {
    name: 'newsFeedFlow',
    inputSchema: NewsFeedInputSchema,
    outputSchema: NewsFeedOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
