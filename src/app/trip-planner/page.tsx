
"use client";

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { useForm, type SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { IndianRupee, DollarSign, Loader2, Calendar, ChevronRight } from 'lucide-react';
import { aiBudgetPlanner, type AiBudgetPlannerOutput } from '@/ai/tirthyatra-budget-planner';
import { useToast } from '@/hooks/use-toast';
import { getAllDestinations, type Destination } from '@/lib/destinations';
import { MultiSelect, type MultiSelectOption } from '@/components/ui/multi-select';

const BudgetStepSchema = z.object({
  budget: z.coerce.number().min(1, 'Budget is required.'),
  currency: z.enum(['INR', 'USD']),
});
type BudgetStepValues = z.infer<typeof BudgetStepSchema>;

const FullFormSchema = BudgetStepSchema.extend({
    destinations: z.array(z.string()).min(1, 'Please select at least one destination.'),
});
type FullFormValues = z.infer<typeof FullFormSchema>;


export default function TripPlannerPage() {
  const [step, setStep] = useState(1);
  const [plannerResult, setPlannerResult] = useState<AiBudgetPlannerOutput | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [selectedCurrency, setSelectedCurrency] = useState<'INR' | 'USD'>('INR');
  const [destinations, setDestinations] = useState<MultiSelectOption[]>([]);
  const [allDestinations, setAllDestinations] = useState<Destination[]>([]);
  const { toast } = useToast();

  const { register, handleSubmit, setValue, trigger, getValues, watch, formState: { errors } } = useForm<FullFormValues>({
    resolver: zodResolver(FullFormSchema),
    defaultValues: {
      currency: 'INR',
      destinations: [],
    },
  });
  
  const selectedDestinationNames = watch('destinations');

  useEffect(() => {
    const fetchDestinations = async () => {
        const fetchedDestinations = await getAllDestinations();
        setAllDestinations(fetchedDestinations);
        const options = fetchedDestinations.map(d => ({
            label: d.name,
            value: d.name,
            image: d.image
        }));
        setDestinations(options);
    };
    fetchDestinations();
  }, []);

  const handleNextStep = async () => {
    const isValid = await trigger(['budget', 'currency']);
    if (isValid) {
      setStep(2);
    }
  };
  
  const getSelectedDestinationImages = () => {
    if (!allDestinations.length || !selectedDestinationNames?.length) return [];
    
    return selectedDestinationNames.flatMap(name => {
        const dest = allDestinations.find(d => d.name === name);
        return dest ? dest.slideshowImages : [];
    });
  }

  const onSubmit: SubmitHandler<FullFormValues> = async (data) => {
    setIsLoading(true);
    setPlannerResult(null);
    try {
      const result = await aiBudgetPlanner(data);
      setPlannerResult(result);
    } catch (error) {
      console.error("Budget Planner Error:", error);
      toast({
        variant: 'destructive',
        title: 'Error',
        description: 'Failed to generate the budget plan. Please try again.',
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
      <div className="max-w-2xl mx-auto text-center">
        <h1 className="text-4xl md:text-5xl font-headline text-primary">AI Trip Narrator</h1>
        <p className="mt-4 text-lg text-muted-foreground">
          Let us craft the story of your spiritual journey.
        </p>
      </div>

      <Card className="max-w-2xl mx-auto mt-12 transition-all duration-500">
        <CardHeader>
          <CardTitle>Plan Your Journey</CardTitle>
          <CardDescription>Follow the steps to create your personalized travel narrative.</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit(onSubmit)}>
            {step === 1 && (
              <div className="space-y-6 animate-fade-in">
                <div className="space-y-2">
                  <Label htmlFor="budget">Step 1: Your Budget</Label>
                  <div className="flex gap-2">
                    <div className="relative flex-grow">
                      {selectedCurrency === 'INR' ? (
                        <IndianRupee className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                      ) : (
                        <DollarSign className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                      )}
                      <Input
                        id="budget"
                        type="number"
                        {...register('budget')}
                        placeholder="e.g., 100000"
                        className="pl-10"
                      />
                    </div>
                    <Select
                      defaultValue="INR"
                      onValueChange={(value: 'INR' | 'USD') => {
                        setValue('currency', value);
                        setSelectedCurrency(value);
                      }}
                    >
                      <SelectTrigger className="w-[100px]">
                        <SelectValue placeholder="Currency" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="INR">INR</SelectItem>
                        <SelectItem value="USD">USD</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  {errors.budget && <p className="text-sm text-destructive">{errors.budget.message}</p>}
                </div>
                <Button onClick={handleNextStep} className="w-full">
                  Next: Choose Destinations <ChevronRight className="ml-2" />
                </Button>
              </div>
            )}

            {step === 2 && (
              <div className="space-y-6 animate-fade-in">
                <div className="space-y-2">
                    <Label>Step 2: Where would you like to go?</Label>
                    <MultiSelect
                        options={destinations}
                        onValueChange={(value) => setValue('destinations', value)}
                        defaultValue={getValues('destinations')}
                        placeholder=""
                        variant="inverted"
                        animation={2}
                    />
                    {errors.destinations && <p className="text-sm text-destructive">{errors.destinations.message}</p>}
                </div>

                <div className="flex gap-4">
                     <Button variant="outline" onClick={() => setStep(1)} className="w-1/3">Back</Button>
                    <Button type="submit" className="w-2/3" disabled={isLoading}>
                      {isLoading ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : null}
                      {isLoading ? 'Crafting Your Story...' : 'Craft My Journey'}
                    </Button>
                </div>
              </div>
            )}
          </form>
        </CardContent>
      </Card>

      {isLoading && (
        <div className="text-center mt-12 animate-fade-in">
            <Loader2 className="mx-auto h-12 w-12 animate-spin text-primary mb-4" />
            <p className="text-muted-foreground">Our guides are writing your personal travel story...</p>
        </div>
      )}

      {plannerResult && (
        <Card className="max-w-3xl mx-auto mt-12 animate-fade-in">
            <CardHeader>
                <CardTitle className="font-headline text-3xl text-primary">Your Spiritual Journey Awaits</CardTitle>
                <CardDescription>A personalized narrative for your pilgrimage, with sights from your chosen destinations.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-8">
                 <Carousel className="w-full" opts={{ loop: true }}>
                  <CarouselContent>
                    {getSelectedDestinationImages().map((img, index) => (
                      <CarouselItem key={index} className="md:basis-1/2">
                         <div className="relative aspect-video rounded-lg overflow-hidden shadow-md">
                           <Image src={img.url} alt={img.hint} data-ai-hint={img.hint} fill className="object-cover" sizes="(max-width: 768px) 100vw, 50vw" />
                        </div>
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                  <CarouselPrevious className="left-[-50px]" />
                  <CarouselNext className="right-[-50px]" />
                </Carousel>

                <div className="prose prose-lg max-w-none text-foreground/90 leading-relaxed">
                    <p>{plannerResult.itinerary}</p>
                </div>

                {plannerResult.suggestedEvents && plannerResult.suggestedEvents.length > 0 && (
                    <div>
                        <h3 className="text-2xl font-headline text-primary flex items-center gap-2 mb-4"><Calendar /> Suggested Rituals & Events</h3>
                        <div className="space-y-4">
                            {plannerResult.suggestedEvents.map((event, index) => (
                                <div key={index} className="p-4 bg-secondary/50 rounded-lg">
                                    <p className="font-bold text-foreground">{event.eventName} <span className="text-sm font-normal text-muted-foreground">in {event.destination}</span></p>
                                    <p className="text-muted-foreground mt-1">{event.eventInfo}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                )}
            </CardContent>
        </Card>
      )}
    </div>
  );
}
