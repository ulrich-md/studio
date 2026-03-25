'use server';
/**
 * @fileOverview An AI agent for automatically answering common business questions via WhatsApp for Bridge.
 */

import { ai } from '@/ai/genkit';
import { z } from 'genkit';

const AutomatedFaqAnsweringInputSchema = z.object({
  customerQuery: z.string().describe('The customer\u0027s question via WhatsApp.'),
});
export type AutomatedFaqAnsweringInput = z.infer<typeof AutomatedFaqAnsweringInputSchema>;

const AutomatedFaqAnsweringOutputSchema = z.object({
  response: z.string().describe('The AI-generated response to the customer\u0027s query.'),
});
export type AutomatedFaqAnsweringOutput = z.infer<typeof AutomatedFaqAnsweringOutputSchema>;

const automatedFaqAnsweringPrompt = ai.definePrompt({
  name: 'automatedFaqAnsweringPrompt',
  input: { schema: AutomatedFaqAnsweringInputSchema },
  output: { schema: AutomatedFaqAnsweringOutputSchema },
  prompt: `You are Bridge, an automated, bilingual WhatsApp bot for local businesses. 
Your goal is to provide quick and accurate answers to customer questions. 

Identify the language of the query (Spanish or English) and respond in that same language.
If you don't know the answer, politely say you'll transfer the question to a human agent.

Customer Query: {{{customerQuery}}}`,
});

const automatedFaqAnsweringFlow = ai.defineFlow(
  {
    name: 'automatedFaqAnsweringFlow',
    inputSchema: AutomatedFaqAnsweringInputSchema,
    outputSchema: AutomatedFaqAnsweringOutputSchema,
  },
  async (input) => {
    const { output } = await automatedFaqAnsweringPrompt(input);
    return output!;
  }
);

export async function automatedFaqAnswering(
  input: AutomatedFaqAnsweringInput
): Promise<AutomatedFaqAnsweringOutput> {
  return automatedFaqAnsweringFlow(input);
}
