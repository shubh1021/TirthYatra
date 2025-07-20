"use client";

import { useState } from 'react';
import { useForm, type SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { IndianRupee, Plane, Hotel, Train, Utensils, UserCheck, Loader2 } from 'lucide-react';

const FormSchema = z.object({
  budget: z.string().min(1, 'Budget is required.'),
});
type FormValues = z.infer<typeof FormSchema>;

type BudgetItem = {
  category: string;
  amount: string;
  icon: React.ElementType;
};

const mockBudgetPlan: BudgetItem[] = [
  { category: 'Flights', amount: '₹45,000 - ₹80,000', icon: Plane },
  { category: 'Hotels (10 nights)', amount: '₹15,000 - ₹50,000', icon: Hotel },
  { category: 'Intercity Travel', amount: '₹5,000 - ₹12,000', icon: Train },
  { category: 'Food & Misc.', amount: '₹10,000 - ₹20,000', icon: Utensils },
  { category: 'Guides & Entry Fees', amount: '₹3,000 - ₹7,000', icon: UserCheck },
];

export default function TripPlannerPage() {
  const [budgetPlan, setBudgetPlan] = useState<BudgetItem[] | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const { register, handleSubmit, formState: { errors } } = useForm<FormValues>({
    resolver: zodResolver(FormSchema),
  });

  const onSubmit: SubmitHandler<FormValues> = async (data) => {
    setIsLoading(true);
    // Simulate AI processing delay
    await new Promise(resolve => setTimeout(resolve, 1500));
    setBudgetPlan(mockBudgetPlan);
    setIsLoading(false);
  };

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
      <div className="max-w-2xl mx-auto text-center">
        <h1 className="text-4xl md:text-5xl font-headline text-primary">AI Budget Planner</h1>
        <p className="mt-4 text-lg text-muted-foreground">
          Enter your total budget, and our AI will create a suggested breakdown for your spiritual journey in India.
        </p>
      </div>

      <Card className="max-w-md mx-auto mt-12">
        <CardHeader>
          <CardTitle>Plan Your Budget</CardTitle>
          <CardDescription>Enter your total budget in ₹ or $.</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="budget">Total Budget</Label>
              <div className="relative">
                <IndianRupee className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                <Input
                  id="budget"
                  {...register('budget')}
                  placeholder="e.g., 100000 or 1200"
                  className="pl-10"
                />
              </div>
              {errors.budget && <p className="text-sm text-destructive">{errors.budget.message}</p>}
            </div>
            <Button type="submit" className="w-full" disabled={isLoading}>
              {isLoading ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : null}
              {isLoading ? 'Generating Plan...' : 'Generate Plan'}
            </Button>
          </form>
        </CardContent>
      </Card>

      {budgetPlan && (
        <div className="mt-12">
          <h2 className="text-3xl font-headline text-center mb-8">Your Suggested Budget Plan</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {budgetPlan.map((item, index) => (
              <Card key={index} className="text-center animate-fade-in" style={{ animationDelay: `${index * 100}ms` }}>
                <CardHeader>
                  <div className="mx-auto bg-primary/10 text-primary rounded-full w-12 h-12 flex items-center justify-center">
                    <item.icon className="w-6 h-6" />
                  </div>
                  <CardTitle className="mt-4">{item.category}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-2xl font-bold text-foreground">{item.amount}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
