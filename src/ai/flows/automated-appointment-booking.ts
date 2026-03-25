'use server';
/**
 * @fileOverview This file implements a Genkit flow for automated appointment booking, rescheduling, and cancellation via WhatsApp.
 * It provides a conversational AI agent that understands and responds in both Spanish and English,
 * and extracts appointment details to facilitate efficient management of service bookings.
 *
 * - automatedAppointmentBooking - The main function to interact with the AI bot for appointments.
 * - AutomatedAppointmentBookingInput - The input type for the automatedAppointmentBooking function.
 * - AutomatedAppointmentBookingOutput - The return type for the automatedAppointmentBooking function.
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
  response: z.string().describe('The natural language response from the AgendaPro bot.'),
  intent: z.enum(['book', 'reschedule', 'cancel', 'inquire', 'none']).describe('The detected intent of the user message.'),
  bookingDetails: z.object({
    service: z.string().optional().describe('The service requested by the customer.'),
    date: z.string().optional().describe('The desired date for the appointment (e.g., "tomorrow", "Friday", "2024-12-25").'),
    time: z.string().optional().describe('The desired time for the appointment (e.g., "3 PM", "14:00").'),
    customerName: z.string().optional().describe('The name of the customer.'),
    confirmationId: z.string().optional().describe('A unique ID for an existing appointment if rescheduling or canceling.'),
    language: z.enum(['en', 'es']).optional().describe('The detected language of the conversation, "en" for English, "es" for Spanish.'),
  }).optional().describe('Extracted details relevant to the detected intent.'),
  confirmationRequired: z.boolean().default(false).describe('True if the bot requires explicit user confirmation for the action.'),
  errorMessage: z.string().optional().describe('An optional error message if the bot could not process the request or needs more information.'),
});
export type AutomatedAppointmentBookingOutput = z.infer<typeof AutomatedAppointmentBookingOutputSchema>;

export async function automatedAppointmentBooking(input: AutomatedAppointmentBookingInput): Promise<AutomatedAppointmentBookingOutput> {
  return automatedAppointmentBookingFlow(input);
}

const automatedAppointmentBookingPrompt = ai.definePrompt({
  name: 'automatedAppointmentBookingPrompt',
  input: { schema: AutomatedAppointmentBookingInputSchema },
  output: { schema: AutomatedAppointmentBookingOutputSchema },
  prompt: `You are AgendaPro, a helpful and bilingual WhatsApp bot specializing in booking, rescheduling, and canceling appointments for local businesses.
  You communicate naturally in either Spanish or English, detecting the user's language and responding accordingly.
  Your goal is to manage appointments efficiently, extract necessary details, and confirm actions with the user.

  Current Date: {{new Date().toLocaleDateString('en-US')}}

  Here's some general business information (for now, assume common services like "haircut", "massage", "plumbing", "car repair", etc., and typical business hours 9 AM to 5 PM, Monday to Friday):
  - Services: Haircut, Massage, Plumbing, Car Repair, Gardening.
  - Operating Hours: Monday to Friday, 9 AM to 5 PM.
  - Typical Duration: 1 hour per service.

  If a user asks about services or availability, respond helpfully based on the above information. If specific details like service, date, or time are missing for a booking/rescheduling request, politely ask for them. For cancellation, ask for a confirmation ID or date/time to identify the appointment.

  When responding, always prioritize the user's language. If a user switches language mid-conversation, adapt to their preferred language.

  Conversation History:
  {{#each conversationHistory}}
  {{#if (eq role "user")}} 
  User: {{{content}}}
  {{/if}}
  {{#if (eq role "model")}} 
  AgendaPro: {{{content}}}
  {{/if}}
  {{/each}}

  User's current message: "{{{message}}}"

  Please provide a JSON output that includes:
  - 'response': Your natural language reply to the user.
  - 'intent': Detected intent ('book', 'reschedule', 'cancel', 'inquire', 'none').
  - 'bookingDetails': An object containing 'service', 'date', 'time', 'customerName', 'confirmationId', and 'language' if relevant to the intent. Populate these fields only if you have concrete information.
  - 'confirmationRequired': True if the current response asks the user for a confirmation before proceeding with an action.
  - 'errorMessage': An optional field for any issues.

  Example JSON output for booking:
  {
    "response": "¡Hola! ¿Qué día y hora le gustaría reservar un corte de cabello?",
    "intent": "book",
    "bookingDetails": {
      "service": "haircut",
      "language": "es"
    },
    "confirmationRequired": false
  }

  Example JSON output for cancellation:
  {
    "response": "Sure, I can help you cancel. Could you please provide the confirmation ID or the date and time of your appointment?",
    "intent": "cancel",
    "bookingDetails": {
      "language": "en"
    },
    "confirmationRequired": false
  }

  Example JSON output for inquiry:
  {
    "response": "We offer services like haircut, massage, plumbing, car repair, and gardening. Our operating hours are Monday to Friday, 9 AM to 5 PM.",
    "intent": "inquire",
    "bookingDetails": {
      "language": "en"
    },
    "confirmationRequired": false
  }

  Remember to respond naturally and maintain the conversation flow. If you have enough information for an action but still need final confirmation from the user, set 'confirmationRequired' to true.
  Make sure 'language' in bookingDetails is set to 'en' or 'es' based on the conversation.
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
