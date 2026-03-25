
"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Brain, Languages, Calendar, ShieldCheck, Zap, Heart } from "lucide-react"

const capabilities = [
  {
    icon: <Languages className="h-6 w-6" />,
    title: "Detección de Idioma en Tiempo Real",
    description: "Nuestra IA no traduce; identifica. Si el cliente escribe 'Do you have field today?' o '¿Tienen campo hoy?', Bridge entiende la intención y el idioma instantáneamente sin errores de traducción automática.",
    detail: "Análisis gramatical profundo para diferenciar entre turistas y locales."
  },
  {
    icon: <Brain className="h-6 w-6" />,
    title: "Memoria Contextual de Conversación",
    description: "Bridge recuerda detalles de mensajes anteriores. Si un cliente dice 'como hablamos ayer', el bot recupera el contexto para una atención fluida y humana.",
    detail: "Mantiene el hilo de la venta durante múltiples días."
  },
  {
    icon: <ShieldCheck className="h-6 w-6" />,
    title: "Lógica de Validación de Pagos",
    description: "Detecta cuando un cliente envía un comprobante de SINPE o transferencia. El bot analiza el mensaje para confirmar que el pago ha sido reportado antes de bloquear el espacio en la agenda.",
    detail: "Gestión de depósitos para evitar 'no-shows'."
  },
  {
    icon: <Calendar className="h-6 w-6" />,
    title: "Resolución de Conflictos de Agenda",
    description: "Si dos clientes intentan reservar el mismo slot simultáneamente, Bridge gestiona la prioridad y ofrece alternativas inteligentes basadas en el historial del negocio.",
    detail: "Sincronización bidireccional perfecta."
  },
  {
    icon: <Heart className="h-6 w-6" />,
    title: "Personalidad Adaptativa 'Pura Vida'",
    description: "No es un robot frío. Bridge está configurado con el tono de voz de su negocio: desde la calidez del 'Pura Vida' costarricense hasta la profesionalidad ejecutiva de Lindora.",
    detail: "Ajuste de tono según el perfil del cliente detectado."
  },
  {
    icon: <Zap className="h-6 w-6" />,
    title: "Entrenamiento Específico del Negocio",
    description: "Usted no se adapta a la IA; la IA se adapta a usted. Entrenamos el modelo con sus precios, jerga técnica y catálogo de productos específico.",
    detail: "Actualizaciones semanales de conocimiento."
  }
]

export function AICapabilities() {
  return (
    <section id="capacidades" className="py-24 sm:py-32">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-primary">Arquitectura de IA</p>
          <h2 className="mt-4 font-headline text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-5xl">
            Más allá de una respuesta automática
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">
            Explore las capacidades profundas que hacen de Bridge el empleado más eficiente de su negocio.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {capabilities.map((cap, idx) => (
            <Card key={idx} className="relative overflow-hidden border-none bg-secondary/30 transition-all hover:bg-secondary/50">
              <CardHeader className="pb-2">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary text-primary-foreground shadow-lg shadow-primary/20">
                  {cap.icon}
                </div>
                <CardTitle className="font-headline text-xl font-bold">{cap.title}</CardTitle>
              </CardHeader>
              <CardContent className="pt-4">
                <p className="text-sm leading-relaxed text-muted-foreground mb-4">
                  {cap.description}
                </p>
                <div className="flex items-center gap-2 text-xs font-bold text-primary">
                  <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                  {cap.detail}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
