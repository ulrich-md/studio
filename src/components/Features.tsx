"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const features = [
  {
    icon: "📅",
    title: "Citas automáticas",
    description: "Sus clientes reservan solos. El bot revisa disponibilidad, confirma y envía recordatorios sin dobles reservas.",
    color: "bg-primary/5"
  },
  {
    icon: "🌐",
    title: "Bilingüe por defecto",
    description: "Detecta si el cliente escribe en español o inglés y responde en su idioma con fluidez natural.",
    color: "bg-accent/20"
  },
  {
    icon: "🤖",
    title: "Respuestas automáticas",
    description: "Configura una vez los precios, horarios y ubicación. El bot responde de inmediato liberando tu tiempo.",
    color: "bg-primary/5"
  },
  {
    icon: "📲",
    title: "Funciona en WhatsApp",
    description: "Sin descargas ni cuentas nuevas. Sus clientes ya tienen WhatsApp, solo tienen que escribir.",
    color: "bg-muted"
  },
  {
    icon: "📊",
    title: "Panel de control simple",
    description: "Vea todas sus citas en un solo lugar. Gestione reservas manuales desde cualquier dispositivo.",
    color: "bg-primary/5"
  },
  {
    icon: "⏰",
    title: "Recordatorios automáticos",
    description: "Reduzca ausencias con recordatorios por WhatsApp 24h y 1h antes de cada cita programada.",
    color: "bg-accent/20"
  }
]

export function Features() {
  return (
    <section id="funciones" className="py-24 sm:py-32">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-2xl">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-primary">Funciones principales</p>
          <h2 className="mt-4 font-headline text-3xl font-extrabold leading-tight tracking-tight text-foreground sm:text-4xl lg:text-5xl">
            Todo lo que su negocio necesita. Sin complicaciones.
          </h2>
          <p className="mt-6 text-lg text-muted-foreground">
            Un solo número de WhatsApp lo hace todo — sin apps nuevas, sin capacitar empleados, sin llamadas perdidas.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, idx) => (
            <Card key={idx} className="group overflow-hidden border-none bg-secondary/50 transition-all hover:-translate-y-1 hover:shadow-xl hover:shadow-primary/5">
              <CardHeader className="pb-2">
                <div className={`flex h-14 w-14 items-center justify-center rounded-2xl text-2xl ${feature.color}`}>
                  {feature.icon}
                </div>
              </CardHeader>
              <CardContent className="pt-4">
                <CardTitle className="font-headline text-xl font-bold">{feature.title}</CardTitle>
                <p className="mt-3 text-muted-foreground leading-relaxed text-[15px]">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}