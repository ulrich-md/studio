'use server';
/**
 * @fileOverview A Genkit flow for dynamic bilingual communication, detecting the user's language and responding in it.
 *
 * - dynamicBilingualCommunication - A function that handles detecting user language and responding appropriately.
 * - DynamicBilingualCommunicationInput - The input type for the dynamicBilingualCommunication function.
 * - DynamicBilingualCommunicationOutput - The return type for the dynamicBilingualCommunication function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

// Input Schema for the dynamic bilingual communication flow.
const DynamicBilingualCommunicationInputSchema = z.object({
  message: z.string().describe('The user\u0027s message in either Spanish or English.'),
});
export type DynamicBilingualCommunicationInput = z.infer<typeof DynamicBilingualCommunicationInputSchema>;

// Output Schema for the dynamic bilingual communication flow.
const DynamicBilingualCommunicationOutputSchema = z.object({
  detectedLanguage: z.enum(['es', 'en']).describe('The detected language of the user\u0027s message. "es" for Spanish, "en" for English.'),
  response: z.string().describe('The AgendaPro bot\u0027s response in the detected language.'),
});
export type DynamicBilingualCommunicationOutput = z.infer<typeof DynamicBilingualCommunicationOutputSchema>;

/**
 * Orchestrates the detection of user language and generation of a bilingual response.
 *
 * @param input The user's message.
 * @returns The detected language and the bot's response in that language.
 */
export async function dynamicBilingualCommunication(input: DynamicBilingualCommunicationInput): Promise<DynamicBilingualCommunicationOutput> {
  return dynamicBilingualCommunicationFlow(input);
}

// Genkit Prompt definition for bilingual communication.
const dynamicBilingualCommunicationPrompt = ai.definePrompt({
  name: 'dynamicBilingualCommunicationPrompt',
  input: { schema: DynamicBilingualCommunicationInputSchema },
  output: { schema: DynamicBilingualCommunicationOutputSchema },
  prompt: `You are AgendaPro, an automated WhatsApp bot for local businesses. Your main goal is to assist customers with scheduling appointments, answering FAQs, and providing information about the business.
Your key feature is bilingual communication. You must detect the language of the user's input message and respond in that same language. The supported languages are Spanish (es) and English (en).
If the user's message is primarily in Spanish, respond in Spanish.
If the user's message is primarily in English, respond in English.
If the message contains a mix of both, determine the dominant language and respond in that language.
Always provide a response that is helpful and polite, as an automated assistant, keeping in mind you are a bot for local businesses.

User message: {{{message}}}`,
});

// Genkit Flow definition for dynamic bilingual communication.
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
