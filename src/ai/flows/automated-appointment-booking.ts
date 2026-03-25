'use server';
/**
 * @fileOverview This file implements a Genkit flow for automated appointment booking with SINPE management for Bridge.
 *
 * - automatedAppointmentBooking - The main function to interact with the AI bot for appointments.
 */

import { ai } from '@/ai/genkit';
import { z } from 'genkit';

const AutomatedAppointmentBookingInputSchema = z.object({
  message: z.string().describe('The current message from the customer via WhatsApp.'),
  conversationHistory: z.array(z.object({
    role: z.enum(['user', 'model']),
    content: z.string(),
  })).default([]).describe('Previous messages in the conversation to maintain context.'),
});
export type AutomatedAppointmentBookingInput = z.infer<typeof AutomatedAppointmentBookingInputSchema>;

const AutomatedAppointmentBookingOutputSchema = z.object({
  response: z.string().describe('The natural language response from the Bridge bot.'),
  intent: z.enum(['book', 'reschedule', 'cancel', 'inquire', 'none']).describe('The detected intent of the user message.'),
  bookingDetails: z.object({
    service: z.string().optional().describe('The service requested by the customer.'),
    date: z.string().optional().describe('The desired date for the appointment.'),
    time: z.string().optional().describe('The desired time for the appointment.'),
    customerName: z.string().optional().describe('The name of the customer.'),
    confirmationId: z.string().optional().describe('A unique ID for an existing appointment.'),
    language: z.enum(['en', 'es']).optional().describe('The detected language of the conversation.'),
    paymentRequested: z.boolean().optional().describe('True if the bot is asking for a SINPE payment.'),
  }).optional().describe('Extracted details relevant to the detected intent.'),
  confirmationRequired: z.boolean().default(false).describe('True if the bot requires explicit user confirmation.'),
  errorMessage: z.string().optional().describe('An optional error message.'),
});
export type AutomatedAppointmentBookingOutput = z.infer<typeof AutomatedAppointmentBookingOutputSchema>;

export async function automatedAppointmentBooking(input: AutomatedAppointmentBookingInput): Promise<AutomatedAppointmentBookingOutput> {
  return automatedAppointmentBookingFlow(input);
}

const automatedAppointmentBookingPrompt = ai.definePrompt({
  name: 'automatedAppointmentBookingPrompt',
  input: { schema: AutomatedAppointmentBookingInputSchema },
  output: { schema: AutomatedAppointmentBookingOutputSchema },
  prompt: `You are Bridge, a professional and bilingual WhatsApp bot for local businesses.
  Your goal is to manage appointments efficiently, detecting whether to respond in Spanish or English based on the user's input.
  
  Business context: Local service businesses.
  Tone: Helpful, "Pura Vida", professional, and natural.
  
  IMPORTANT - PAYMENT INSTRUCTIONS (SINPE MÓVIL):
  If the business requires a deposit or payment to confirm the appointment, do NOT use external APIs.
  Instead, instruct the client as follows:
  - "¡Excelente! Para confirmar tu cita, por favor realiza el SINPE al número [NÚMERO DEL NEGOCIO] y envíame el comprobante por aquí."
  In English: "Great! To confirm your appointment, please send the payment via SINPE Móvil to [BUSINESS NUMBER] and send me the screenshot right here."

  Conversation History:
  {{#each conversationHistory}}
  {{#if (eq role "user")}} 
  User: {{{content}}}
  {{/if}}
  {{#if (eq role "model")}} 
  Bridge: {{{content}}}
  {{/if}}
  {{/each}}

  User's current message: "{{{message}}}"

  Instructions:
  1. Detect the user's language.
  2. If booking a service, ask for service, date, and time if missing.
  3. Once details are clear, request the SINPE payment and proof as the confirmation step.
  `,
});

const automatedAppointmentBookingFlow = ai.defineFlow(
  {
    name: 'automatedAppointmentBookingFlow',
    inputSchema: AutomatedAppointmentBookingInputSchema,
    outputSchema: AutomatedAppointmentBookingOutputSchema,
  },
  async (input) => {
    const { output } = await automatedAppointmentBookingPrompt(input);
    return output!;
  },
);
