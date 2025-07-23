'use server';
/**
 * @fileOverview AI budget planner flow that generates a narrative travel plan.
 *
 * - aiBudgetPlanner - A function that handles the budget planning process.
 * - AiBudgetPlannerInput - The input type for the aiBudgetPlanner function.
 * - AiBudgetPlannerOutput - The return type for the aiBudgetPlanner function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';
import { getAllDestinations } from '@/lib/destinations';

const AiBudgetPlannerInputSchema = z.object({
  budget: z.number().describe('The total budget for the trip.'),
  currency: z.enum(['INR', 'USD']).describe('The currency of the budget.'),
  destinations: z.array(z.string()).describe('A list of destination names the user wants to visit.'),
});
export type AiBudgetPlannerInput = z.infer<typeof AiBudgetPlannerInputSchema>;

const AiBudgetPlannerOutputSchema = z.object({
  itinerary: z.string().describe("A detailed, story-like travel narrative. It should be warm, professional, and traditional. It should include details about travel, accommodation, guides, and suggestions for events or rituals at the chosen destinations."),
  suggestedEvents: z.array(z.object({
    destination: z.string(),
    eventName: z.string(),
    eventInfo: z.string(),
  })).describe("A list of suggested events or rituals for the chosen destinations."),
});
export type AiBudgetPlannerOutput = z.infer<typeof AiBudgetPlannerOutputSchema>;

export async function aiBudgetPlanner(input: AiBudgetPlannerInput): Promise<AiBudgetPlannerOutput> {
  return aiBudgetPlannerFlow(input);
}

const prompt = ai.definePrompt({
  name: 'aiBudgetPlannerPrompt',
  input: {schema: AiBudgetPlannerInputSchema},
  output: {schema: AiBudgetPlannerOutputSchema},
  prompt: `You are a highly experienced and spiritual travel guide for "TirthYatra". A user has provided their budget and a list of destinations they wish to visit in India. Your task is to craft a warm, professional, and traditional narrative for their journey.

The user's budget is {{{budget}}} {{{currency}}}.
They wish to visit: {{{destinations}}}.

Based on this, create a story-like itinerary. Weave in the following elements:
- Acknowledge their chosen destinations and budget.
- Describe the seamless travel experience we provide, like arranging a cab from the airport to a comfortable, pre-booked hotel.
- Mention that a knowledgeable guide will be provided to explain the history, rituals, and spiritual significance of the places.
- Emphasize that we can facilitate participation in any special rituals or events they wish to attend.
- Based on the provided destination data, suggest specific, relevant upcoming events or timeless rituals for them to consider. For example, if they choose Kashi, mention the Ganga Aarti. If they choose Ayodhya, mention Ram Navami.

Your tone should be reassuring, deeply respectful of their spiritual quest, and reflect the high quality of service TirthYatra provides. Make it sound like a personal recommendation from an expert who cares about their journey.

Destination Data for context:
{{#each (lookup . 'destinationsData')}}
- Destination: {{this.name}}
  - Events: {{#each this.events}}{{this.title}} ({{this.date}}): {{this.info}}; {{/each}}
  - Mythology: {{this.mythology}}
{{/each}}
`,
});

const aiBudgetPlannerFlow = ai.defineFlow(
  {
    name: 'aiBudgetPlannerFlow',
    inputSchema: AiBudgetPlannerInputSchema,
    outputSchema: AiBudgetPlannerOutputSchema,
  },
  async (input) => {
    const destinationsData = await getAllDestinations();
    const relevantDestinations = destinationsData.filter(d => input.destinations.includes(d.name));
    
    const {output} = await prompt({
        ...input,
        destinationsData: relevantDestinations,
    });
    return output!;
  }
);