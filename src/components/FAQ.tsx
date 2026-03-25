
"use client"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const faqs = [
  {
    q: "¿Bridge reemplaza a mis empleados actuales?",
    a: "No, Bridge es un asistente bilingüe que libera a su equipo de las tareas repetitivas de contestar preguntas básicas y agendar citas, permitiéndoles enfocarse en brindar el servicio."
  },
  {
    q: "¿Qué incluye el Setup Fee de lanzamiento?",
    a: "Actualmente tenemos una oferta de $47 (precio normal $150). Esto incluye la configuración personalizada del tono de voz de su IA, la carga de su catálogo/FAQ y la sincronización con sus calendarios."
  },
  {
    q: "¿Mis clientes tienen que descargar alguna app?",
    a: "No. Todo ocurre por el canal que sus clientes ya usan. Solo escriben al número asignado — sin descargas ni cuentas nuevas."
  },
  {
    q: "¿Qué pasa si un cliente pregunta algo que el bot no sabe?",
    a: "El bot le avisa al cliente que le trasladará la pregunta y le envía a usted una notificación. Usted puede intervenir en cualquier momento desde su panel."
  },
  {
    q: "¿Cuánto tiempo tarda la configuración inicial?",
    a: "Con nuestro equipo de implementación, su negocio puede estar activo y optimizado en muy poco tiempo, generalmente menos de 48 horas."
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
