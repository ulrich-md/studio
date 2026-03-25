"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Utensils, Scissors, Wrench, Stethoscope } from "lucide-react"

const useCases = [
  {
    title: "Sodas y Cafeterías",
    icon: <Utensils className="h-6 w-6" />,
    description: "Maneje pedidos y consultas de menú bilingües sin interrumpir el servicio en mesa.",
    example: "Expat: 'Do you have gluten-free options?' -> Bridge: '¡Hola! Sí, tenemos...'"
  },
  {
    title: "Barberías y Salones",
    icon: <Scissors className="h-6 w-6" />,
    description: "Agende citas y envíe recordatorios automáticos para reducir el ausentismo.",
    example: "Local: '¿Tienen campo hoy?' -> Bridge: '¡Claro! Disponibles a las 3 PM.'"
  },
  {
    title: "Servicios Técnicos",
    icon: <Wrench className="h-6 w-6" />,
    description: "Reciba solicitudes de presupuestos y fotos de reparaciones directamente en WhatsApp.",
    example: "Client: 'My AC is leaking' -> Bridge: 'Sure! Please send a photo...'"
  },
  {
    title: "Consultorios",
    icon: <Stethoscope className="h-6 w-6" />,
    description: "Gestione disponibilidad de especialistas y confirme citas mediante comprobantes SINPE.",
    example: "Paciente: 'Confirmo mi cita' -> Bridge: 'Perfecto, envíeme el comprobante.'"
  }
]

export function UseCases() {
  return (
    <section className="py-24 sm:py-32 bg-secondary/30">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-primary">Versatilidad</p>
          <h2 className="mt-4 font-headline text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-5xl">
            Diseñado para cada negocio
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">
            Bridge se adapta al lenguaje y las necesidades específicas de su industria.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {useCases.map((useCase, idx) => (
            <Card key={idx} className="border-none shadow-sm hover:shadow-md transition-shadow">
              <CardContent className="pt-8">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  {useCase.icon}
                </div>
                <h3 className="font-headline text-xl font-bold mb-3">{useCase.title}</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  {useCase.description}
                </p>
                <div className="rounded-lg bg-muted p-3 text-xs italic text-muted-foreground">
                  {useCase.example}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
