// src/services/news-service.ts
'use server';

import { z } from 'zod';

const NewsArticleSchema = z.object({
  title: z.string(),
  description: z.string().nullable(),
  url: z.string().url(),
  urlToImage: z.string().url().nullable(),
  publishedAt: z.string(),
  source: z.object({
    name: z.string(),
  }),
});

export type NewsArticle = z.infer<typeof NewsArticleSchema>;

interface FetchNewsOptions {
  query: string;
  apiKey: string;
}

/**
 * Fetches news articles from the NewsAPI.
 * @param options - The options for fetching news.
 * @returns A promise that resolves to an array of news articles.
 */
export async function fetchNews({ query, apiKey }: FetchNewsOptions): Promise<NewsArticle[]> {
  if (!apiKey) {
    console.error("NewsAPI key is not configured. Please add it to your .env file.");
    // Return a default "error" article so the UI doesn't break.
    return [
      {
        title: "News Service Not Configured",
        description: "The NewsAPI key is missing. Please add NEWS_API_KEY to your .env file to fetch live news.",
        url: "#",
        urlToImage: `https://placehold.co/600x400.png`,
        publishedAt: new Date().toISOString(),
        source: { name: "TirthYatra System" },
      }
    ]
  }

  // Construct the URL for the NewsAPI 'everything' endpoint.
  // We sort by 'relevancy' to get the most pertinent articles first.
  const url = `https://newsapi.org/v2/everything?q=${encodeURIComponent(query)}&apiKey=${apiKey}&language=en&sortBy=relevancy&pageSize=5`;

  try {
    const response = await fetch(url);
    if (!response.ok) {
      const errorBody = await response.json();
      console.error("NewsAPI request failed:", errorBody);
      throw new Error(`NewsAPI request failed with status ${response.status}`);
    }

    const data = await response.json();
    
    // Validate the articles with Zod. This filters out any articles
    // that don't match our expected shape.
    const validatedArticles = z.array(NewsArticleSchema).safeParse(data.articles);

    if (!validatedArticles.success) {
      console.error("Failed to validate news articles:", validatedArticles.error);
      return [];
    }

    return validatedArticles.data;
  } catch (error) {
    console.error("Error fetching news:", error);
    throw error;
  }
}
