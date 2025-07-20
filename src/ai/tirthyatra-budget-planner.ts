'use server';
/**
 * @fileOverview AI budget planner flow.
 *
 * - aiBudgetPlanner - A function that handles the budget planning process.
 * - AiBudgetPlannerInput - The input type for the aiBudgetPlanner function.
 * - AiBudgetPlannerOutput - The return type for the aiBudgetPlanner function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const AiBudgetPlannerInputSchema = z.object({
  budget: z.number().describe('The total budget in INR or USD.'),
  currency: z.enum(['INR', 'USD']).describe('The currency of the budget.'),
});
export type AiBudgetPlannerInput = z.infer<typeof AiBudgetPlannerInputSchema>;

const AiBudgetPlannerOutputSchema = z.object({
  flights: z.number().describe('Estimated cost for flights (international + domestic).'),
  hotel: z.number().describe('Estimated cost for hotel (budget/standard/luxury).'),
  intercityTravel: z.number().describe('Estimated cost for intercity travel (cab/train/flight).'),
  guideAndTranslatorFee: z.number().describe('Estimated cost for guide & translator fee.'),
  foodAndMisc: z.number().describe('Estimated cost for food & misc expenses.'),
});
export type AiBudgetPlannerOutput = z.infer<typeof AiBudgetPlannerOutputSchema>;

export async function aiBudgetPlanner(input: AiBudgetPlannerInput): Promise<AiBudgetPlannerOutput> {
  return aiBudgetPlannerFlow(input);
}

const prompt = ai.definePrompt({
  name: 'aiBudgetPlannerPrompt',
  input: {schema: AiBudgetPlannerInputSchema},
  output: {schema: AiBudgetPlannerOutputSchema},
  prompt: `You are a trip planning expert specializing in spiritual tourism in India.  A user will provide you their total budget, and you will break down the costs into flights, hotel, intercity travel, guide and translator fees, and food and miscellaneous expenses.  Return the response as a JSON object.

Budget: {{{budget}}} {{{currency}}}`,
});

const aiBudgetPlannerFlow = ai.defineFlow(
  {
    name: 'aiBudgetPlannerFlow',
    inputSchema: AiBudgetPlannerInputSchema,
    outputSchema: AiBudgetPlannerOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
