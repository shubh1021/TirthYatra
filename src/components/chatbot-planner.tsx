// src/components/chatbot-planner.tsx
"use client";

import { useState } from 'react';
import { useForm, type SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { IndianRupee, DollarSign, Plane, Hotel, Train, Utensils, UserCheck, Loader2 } from 'lucide-react';
import { aiBudgetPlanner } from '@/ai/tirthyatra-budget-planner';
import { useToast } from '@/hooks/use-toast';

const FormSchema = z.object({
  budget: z.coerce.number().min(1, 'Budget is required.'),
  currency: z.enum(['INR', 'USD']),
});
type FormValues = z.infer<typeof FormSchema>;

type BudgetItem = {
  category: string;
  amount: string;
  icon: React.ElementType;
};

export default function ChatbotPlanner() {
  const [budgetPlan, setBudgetPlan] = useState<BudgetItem[] | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [selectedCurrency, setSelectedCurrency] = useState<'INR' | 'USD'>('INR');
  const { toast } = useToast();

  const { register, handleSubmit, setValue, formState: { errors } } = useForm<FormValues>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      currency: 'INR',
    },
  });

  const onSubmit: SubmitHandler<FormValues> = async (data) => {
    setIsLoading(true);
    setBudgetPlan(null);
    try {
      const result = await aiBudgetPlanner({ budget: data.budget, currency: data.currency });
      const currencySymbol = data.currency === 'INR' ? '₹' : '$';
      const formattedPlan: BudgetItem[] = [
        { category: 'Flights', amount: `${currencySymbol}${result.flights.toLocaleString()}`, icon: Plane },
        { category: 'Hotels', amount: `${currencySymbol}${result.hotel.toLocaleString()}`, icon: Hotel },
        { category: 'Intercity', amount: `${currencySymbol}${result.intercityTravel.toLocaleString()}`, icon: Train },
        { category: 'Food/Misc', amount: `${currencySymbol}${result.foodAndMisc.toLocaleString()}`, icon: Utensils },
        { category: 'Guides', amount: `${currencySymbol}${result.guideAndTranslatorFee.toLocaleString()}`, icon: UserCheck },
      ];
      setBudgetPlan(formattedPlan);
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
      <Card className="bg-secondary/50">
        <CardHeader>
          <CardTitle className="text-2xl font-headline text-primary">Budget Planner</CardTitle>
          <CardDescription>Get a suggested budget breakdown.</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="budget">Total Budget</Label>
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
            <Button type="submit" className="w-full" disabled={isLoading}>
              {isLoading ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : null}
              {isLoading ? 'Generating...' : 'Generate Plan'}
            </Button>
          </form>

            {budgetPlan && (
                <div className="mt-6">
                    <h4 className="font-bold text-center mb-4">Suggested Breakdown</h4>
                    <div className="grid grid-cols-3 gap-x-2 gap-y-4 text-center">
                        {budgetPlan.map((item) => (
                        <div key={item.category} className="flex flex-col items-center">
                            <div className="bg-primary/10 text-primary rounded-full w-10 h-10 flex items-center justify-center">
                                <item.icon className="w-5 h-5" />
                            </div>
                            <p className="text-xs mt-1 text-muted-foreground">{item.category}</p>
                            <p className="text-sm font-bold text-foreground">{item.amount}</p>
                        </div>
                        ))}
                    </div>
                </div>
            )}
        </CardContent>
      </Card>
  );
}
