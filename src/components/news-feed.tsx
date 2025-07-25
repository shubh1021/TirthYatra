
"use client";

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { getNewsFeed, type NewsFeedOutput } from '@/ai/flows/news-feed-flow';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { Newspaper, Loader2 } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

type NewsItemWithImage = NewsFeedOutput['newsItems'][0] & { imageUrl: string };

export default function NewsFeed({ destinationName }: { destinationName: string }) {
  const [news, setNews] = useState<NewsItemWithImage[] | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const { toast } = useToast();

  useEffect(() => {
    async function fetchNews() {
      setIsLoading(true);
      try {
        const newsData = await getNewsFeed({ destinationName });
        
        const newsWithImages = await Promise.all(newsData.newsItems.map(async (item) => {
            const imageUrl = `/api/image?query=${encodeURIComponent(item.imageQuery)}`;
            return { ...item, imageUrl };
        }));

        setNews(newsWithImages);
      } catch (error) {
        console.error("Failed to fetch news feed:", error);
        toast({
          variant: 'destructive',
          title: 'Error',
          description: 'Could not load the latest news. Please try again later.',
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
        <p className="ml-4 text-muted-foreground">Loading Latest News...</p>
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
          loop: true,
        }}
        className="w-full"
      >
        <CarouselContent>
          {news.map((item, index) => (
            <CarouselItem key={index}>
              <Card className="overflow-hidden">
                <div className="relative h-64 w-full">
                  <Image
                    src={item.imageUrl}
                    alt={item.headline}
                    data-ai-hint={item.imageQuery}
                    fill
                    className="object-cover"
                    loading="lazy"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                  <CardTitle className="absolute bottom-4 left-4 text-xl font-headline text-white">
                    {item.headline}
                  </CardTitle>
                </div>
                <CardContent className="p-4">
                  <p className="text-muted-foreground">{item.story}</p>
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="left-[-50px]" />
        <CarouselNext className="right-[-50px]" />
      </Carousel>
    </section>
  );
}
