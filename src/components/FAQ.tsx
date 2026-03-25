"use client"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const faqs = [
  {
    q: "¿Mis clientes tienen que descargar alguna app?",
    a: "No. Todo ocurre por WhatsApp, que sus clientes ya tienen. Solo escriben a su número como siempre — sin descargas, sin cuentas nuevas, sin fricciones."
  },
  {
    q: "¿Qué pasa si un cliente pregunta algo que el bot no sabe?",
    a: "El bot le avisa al cliente que le trasladará la pregunta y le envía a usted una notificación. Usted responde directamente, y el bot aprende de las preguntas más comunes con el tiempo."
  },
  {
    q: "¿Funciona para servicios a domicilio o sin local fijo?",
    a: "Perfectamente. Fontaneros, electricistas, estilistas a domicilio — AgendaPro funciona para cualquier negocio de servicios."
  },
  {
    q: "¿Puedo seguir chateando con clientes manualmente?",
    a: "Sí. Puede tomar el control de cualquier conversación desde el panel en cualquier momento. El bot se retira cuando detecta su intervención."
  },
  {
    q: "¿Cuánto tiempo tarda la configuración inicial?",
    a: "La mayoría de negocios quedan activos en menos de dos horas. Tenemos una guía paso a paso y ofrecemos llamadas de incorporación gratuitas en planes Pro."
  }
]

export function FAQ() {
  return (
    <section className="py-24 sm:py-32">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-primary">Preguntas frecuentes</p>
          <h2 className="mt-4 font-headline text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-5xl">
            Lo que nos preguntan
          </h2>
        </div>

        <div className="mx-auto mt-16 max-w-3xl">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, idx) => (
              <AccordionItem key={idx} value={`item-${idx}`} className="border-b-border py-2">
                <AccordionTrigger className="font-headline text-lg font-bold text-left hover:no-underline hover:text-primary">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-base leading-relaxed text-muted-foreground pt-2 pb-6">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}