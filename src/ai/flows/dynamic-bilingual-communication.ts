'use server';
/**
 * @fileOverview A Genkit flow for dynamic bilingual communication for Bridge.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const DynamicBilingualCommunicationInputSchema = z.object({
  message: z.string().describe('The user\u0027s message in either Spanish or English.'),
});
export type DynamicBilingualCommunicationInput = z.infer<typeof DynamicBilingualCommunicationInputSchema>;

const DynamicBilingualCommunicationOutputSchema = z.object({
  detectedLanguage: z.enum(['es', 'en']).describe('The detected language.'),
  response: z.string().describe('The Bridge bot\u0027s response.'),
});
export type DynamicBilingualCommunicationOutput = z.infer<typeof DynamicBilingualCommunicationOutputSchema>;

export async function dynamicBilingualCommunication(input: DynamicBilingualCommunicationInput): Promise<DynamicBilingualCommunicationOutput> {
  return dynamicBilingualCommunicationFlow(input);
}

const dynamicBilingualCommunicationPrompt = ai.definePrompt({
  name: 'dynamicBilingualCommunicationPrompt',
  input: { schema: DynamicBilingualCommunicationInputSchema },
  output: { schema: DynamicBilingualCommunicationOutputSchema },
  prompt: `You are Bridge, the bilingual bridge for businesses.
Detect the language of the user's message and respond in that language (Spanish or English).
Be helpful, professional, and natural.

User message: {{{message}}}`,
});

const dynamicBilingualCommunicationFlow = ai.defineFlow(
  {
    name: 'dynamicBilingualCommunicationFlow',
    inputSchema: DynamicBilingualCommunicationInputSchema,
    outputSchema: DynamicBilingualCommunicationOutputSchema,
  },
  async (input) => {
    const { output } = await dynamicBilingualCommunicationPrompt(input);
    if (!output) {
      throw new Error('Failed to get a response from the prompt.');
    }
    return output;
  }
);
