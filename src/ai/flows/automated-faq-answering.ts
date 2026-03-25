'use server';
/**
 * @fileOverview An AI agent for automatically answering common business questions via WhatsApp.
 *
 * - automatedFaqAnswering - A function that handles answering customer FAQs.
 * - AutomatedFaqAnsweringInput - The input type for the automatedFaqAnswering function.
 * - AutomatedFaqAnsweringOutput - The return type for the automatedFaqAnswering function.
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

interface FaqEntry {
  questionEn: string;
  answerEn: string;
  questionEs: string;
  answerEs: string;
}

// Mock FAQ database
const mockFaqs: FaqEntry[] = [
  {
    questionEn: 'Do I need to download an app?',
    answerEn: 'No. Everything happens via WhatsApp, which your customers already have. They just text your number as always \u2014 no downloads, no new accounts, no friction.',
    questionEs: '¿Mis clientes tienen que descargar alguna app?',
    answerEs: 'No. Todo ocurre por WhatsApp, que sus clientes ya tienen. Solo escriben a su número como siempre \u2014 sin descargas, sin cuentas nuevas, sin fricciones.',
  },
  {
    questionEn: 'What if a customer asks something the bot doesn\u0027t know?',
    answerEn: 'The bot informs the customer that it will transfer the question and sends you a notification. You respond directly, and the bot learns from the most common questions over time.',
    questionEs: '¿Qué pasa si un cliente pregunta algo que el bot no sabe?',
    answerEs: 'El bot le avisa al cliente que le trasladará la pregunta y le envía a usted una notificación. Usted responde directamente, y el bot aprende de las preguntas más comunes con el tiempo.',
  },
  {
    questionEn: 'Does it work for home services or without a fixed location?',
    answerEn: 'Perfectly. Plumbers, electricians, home stylists \u2014 AgendaPro works for any service business. You can configure it so the bot asks the customer for the address during booking.',
    questionEs: '¿Funciona para servicios a domicilio o sin local fijo?',
    answerEs: 'Perfectamente. Fontaneros, electricistas, estilistas a domicilio \u2014 AgendaPro funciona para cualquier negocio de servicios. Puede configurarlo para que el bot le pida la dirección al cliente durante la reserva.',
  },
  {
    questionEn: 'Can I continue chatting with customers manually?',
    answerEn: 'Yes. You can take control of any conversation from the panel at any time. The bot retreats when it detects your intervention and resumes automation afterward.',
    questionEs: '¿Puedo seguir chateando con clientes manualmente?',
    answerEs: 'Sí. Puede tomar el control de cualquier conversación desde el panel en cualquier momento. El bot se retira cuando detecta que usted intervino y retoma la automatización después.',
  },
  {
    questionEn: 'How long does the initial setup take?',
    answerEn: 'Most businesses are active in less than two hours. We have a step-by-step guide and a setup wizard. For Pro and Agency plans, we offer a free 30-minute onboarding call.',
    questionEs: '¿Cuánto tiempo tarda la configuración inicial?',
    answerEs: 'La mayoría de negocios quedan activos en menos de dos horas. Tenemos una guía paso a paso y un asistente de configuración. En los planes Pro y Agencia, hacemos una llamada gratuita de incorporación de 30 minutos.',
  },
  {
    questionEn: 'Is the control panel in Spanish?',
    answerEn: 'Yes, the panel is completely in Spanish. The bot can also be configured to respond primarily in Spanish, primarily in English, or in automatic bilingual mode depending on each customer\u0027s language.',
    questionEs: '¿El panel de control está en español?',
    answerEs: 'Sí, el panel está completamente en español. El bot también puede configurarse para responder principalmente en español, principalmente en inglés, o en modo bilingüe automático según el idioma de cada cliente.',
  },
  {
    questionEn: 'What are your prices?',
    answerEn: 'We offer three plans: Basic ($19/month), Pro ($39/month), and Agency ($99/month). Each plan includes different features and limits. You can find more details on our website.',
    questionEs: '¿Cuáles son sus precios?',
    answerEs: 'Ofrecemos tres planes: Básico ($19/mes), Pro ($39/mes) y Agencia ($99/mes). Cada plan incluye diferentes características y límites. Puede encontrar más detalles en nuestro sitio web.',
  },
  {
    questionEn: 'How can I get early access?',
    answerEn: 'You can sign up for early access on our website. The first month is free and no credit card is required to join the waiting list.',
    questionEs: '¿Cómo puedo obtener acceso anticipado?',
    answerEs: 'Puede registrarse para acceso anticipado en nuestro sitio web. El primer mes es gratis y no se requiere tarjeta de crédito para unirse a la lista de espera.',
  },
];

const getFaqAnswers = ai.defineTool(
  {
    name: 'getFaqAnswers',
    description: 'Retrieves relevant FAQ answers based on a customer\u0027s query and preferred language.',
    inputSchema: z.object({
      query: z.string().describe('The customer\u0027s query to search for in FAQs.'),
      language: z.enum(['en', 'es']).describe('The preferred language for the answer (\u0027en\u0027 for English, \u0027es\u0027 for Spanish).'),
    }),
    outputSchema: z.array(
      z.object({
        question: z.string().describe('The original FAQ question in the requested language.'),
        answer: z.string().describe('The answer to the FAQ in the requested language.'),
      })
    ),
  },
  async (input) => {
    const lowerCaseQuery = input.query.toLowerCase();
    const languageKey = input.language === 'en' ? 'En' : 'Es';
    const foundAnswers: { question: string; answer: string }[] = [];

    for (const faq of mockFaqs) {
      const questionInLang = (faq as any)[`question${languageKey}`].toLowerCase();
      if (questionInLang.includes(lowerCaseQuery) || lowerCaseQuery.includes(questionInLang)) {
        foundAnswers.push({
          question: (faq as any)[`question${languageKey}`],
          answer: (faq as any)[`answer${languageKey}`],
        });
      }
    }
    // Fallback: If no direct match, try to find answers based on keywords that might broadly relate.
    // This is a simplification; a real system would use a more robust search algorithm.
    if (foundAnswers.length === 0) {
        for (const faq of mockFaqs) {
            const questionInOtherLang = (faq as any)[`question${input.language === 'en' ? 'Es' : 'En'}`].toLowerCase();
            if (questionInOtherLang.includes(lowerCaseQuery) || lowerCaseQuery.includes(questionInOtherLang)) {
                foundAnswers.push({
                    question: (faq as any)[`question${languageKey}`],
                    answer: (faq as any)[`answer${languageKey}`],
                });
                break; // Take the first relevant one
            }
        }
    }

    return foundAnswers;
  }
);

const automatedFaqAnsweringPrompt = ai.definePrompt({
  name: 'automatedFaqAnsweringPrompt',
  input: { schema: AutomatedFaqAnsweringInputSchema },
  output: { schema: AutomatedFaqAnsweringOutputSchema },
  tools: [getFaqAnswers],
  prompt: `You are AgendaPro, an automated, bilingual WhatsApp bot for local businesses. Your goal is to provide quick and accurate answers to customer questions about business services, prices, or policies.

First, identify the language of the customer's query. The possible languages are Spanish ('es') and English ('en').

Use the 'getFaqAnswers' tool to find relevant information from the business's FAQ database based on the customer's query and the detected language.

If the 'getFaqAnswers' tool returns relevant information:
- Provide a concise and helpful answer to the customer in their detected language.
- If multiple answers are relevant, try to synthesize them into a single, coherent response.
- Keep the tone friendly and professional.

If the 'getFaqAnswers' tool does not return relevant information:
- Politely state that you don't have that specific information in your FAQ database.
- Offer to transfer the query to a human agent or suggest they contact the business directly for more complex or unlisted questions.
- Respond in the detected language.

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
