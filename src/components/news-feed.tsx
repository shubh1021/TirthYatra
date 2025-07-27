
"use client";

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { getNewsFeed, type NewsFeedOutput } from '@/ai/flows/news-feed-flow';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { Newspaper, Loader2, Link as LinkIcon } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import Link from 'next/link';
import { Button } from './ui/button';

type NewsItem = NewsFeedOutput['newsItems'][0];

export default function NewsFeed({ destinationName }: { destinationName: string }) {
  const [news, setNews] = useState<NewsItem[] | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const { toast } = useToast();

  useEffect(() => {
    async function fetchNews() {
      if (!destinationName) return;
      setIsLoading(true);
      try {
        const newsData = await getNewsFeed({ destinationName });
        setNews(newsData.newsItems);
      } catch (error) {
        console.error("Failed to fetch news feed:", error);
        toast({
          variant: 'destructive',
          title: 'Error Loading News',
          description: 'Could not load the latest updates. Please try again later.',
        });
        setNews([]); // Set to empty array on error to avoid infinite loading
      } finally {
        setIsLoading(false);
      }
    }
    fetchNews();
  }, [destinationName, toast]);

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-48">
        <Loader2 className="h-12 w-12 animate-spin text-primary" />
        <p className="ml-4 text-muted-foreground">Fetching Latest News...</p>
      </div>
    );
  }

  if (!news || news.length === 0) {
    return null; // Don't render anything if there's no news
  }

  return (
    <section>
      <h2 className="text-3xl font-headline text-primary flex items-center gap-2 mb-4">
        <Newspaper /> Latest News & Updates
      </h2>
      <Carousel
        opts={{
          align: 'start',
          loop: news.length > 1, // Only loop if there's more than one item
        }}
        className="w-full"
      >
        <CarouselContent>
          {news.map((item, index) => (
            <CarouselItem key={index}>
              <Card className="overflow-hidden h-full flex flex-col">
                <div className="relative h-64 w-full">
                  <Image
                    src={item.imageUrl || `https://placehold.co/600x400.png`}
                    alt={item.headline}
                    fill
                    className="object-cover"
                    loading="lazy"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                  <CardTitle className="absolute bottom-4 left-4 text-xl font-headline text-white p-2 bg-black/30 rounded">
                    {item.headline}
                  </CardTitle>
                </div>
                <CardContent className="p-4 flex-grow flex flex-col">
                  <p className="text-muted-foreground flex-grow">{item.story}</p>
                  <Button asChild variant="link" className="p-0 h-auto self-start mt-4">
                    <Link href={item.url} target="_blank" rel="noopener noreferrer">
                      Read Full Story <LinkIcon className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        {news.length > 1 && (
            <>
                <CarouselPrevious className="left-[-50px]" />
                <CarouselNext className="right-[-50px]" />
            </>
        )}
      </Carousel>
    </section>
  );
}
