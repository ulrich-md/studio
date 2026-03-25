"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Badge } from "@/components/ui/badge"

const tiers = [
  {
    name: "El Local",
    price: "29",
    period: "por mes",
    description: "Automatización esencial para negocios en crecimiento.",
    colorClass: "border-green-500/20 bg-green-50/50 dark:bg-green-950/10",
    accentColor: "text-green-600 dark:text-green-400",
    features: [
      "WhatsApp Auto-Responder (FAQ Básicas)",
      "Sincronización con Google Calendar",
      "Interfaz 100% en Español",
      "Gestión de 1 colaborador",
      "Soporte por email"
    ],
    cta: "Empezar con El Local",
    featured: false
  },
  {
    name: "Conexión 506",
    price: "67",
    period: "por mes",
    description: "El puente bilingüe. Ideal para atraer clientes internacionales.",
    colorClass: "border-blue-500 bg-blue-50/50 dark:bg-blue-950/20 ring-2 ring-blue-500 ring-offset-2",
    accentColor: "text-blue-600 dark:text-blue-400",
    features: [
      "IA con Detección Bilingüe Automática",
      "Recordatorios de Citas (2h antes)",
      "Galería Visual de Productos en Chat",
      "Sincronización para 3 colaboradores",
      "Personalización de tono de voz",
      "Soporte prioritario"
    ],
    cta: "Elegir Conexión 506",
    featured: true,
    badge: "El más popular"
  },
  {
    name: "Élite Business",
    price: "147",
    period: "por mes",
    description: "Autonomía total para negocios de alta demanda.",
    colorClass: "border-orange-500/20 bg-orange-50/50 dark:bg-orange-950/10",
    accentColor: "text-orange-600 dark:text-orange-400",
    features: [
      "Integración SINPE Móvil / Tarjetas",
      "Entrenamiento de IA personalizado",
      "Sincronización ilimitada de Staff",
      "Reporte mensual de Retorno (ROI)",
      "Múltiples sucursales",
      "Account Manager dedicado"
    ],
    cta: "Contactar Ventas",
    featured: false
  }
]

export function Pricing() {
  return (
    <section id="precios" className="py-24 sm:py-32 bg-background">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-primary">Planes Bridge</p>
          <h2 className="mt-4 font-headline text-3xl font-extrabold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
            Precios diseñados para crecer
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">
            Desde sodas locales hasta servicios premium internacionales. Encuentre el plan que mejor se adapte a su volumen.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 items-stretch gap-8 lg:grid-cols-3">
          {tiers.map((tier, idx) => (
            <div
              key={idx}
              className={`relative flex flex-col rounded-3xl p-10 transition-all hover:-translate-y-1 border ${tier.colorClass}`}
            >
              {tier.featured && (
                <div className="absolute -top-4 right-8">
                  <Badge className="bg-blue-600 text-white hover:bg-blue-700">{tier.badge}</Badge>
                </div>
              )}
              <div className="mb-8">
                <p className={`font-headline text-sm font-bold uppercase tracking-widest ${tier.accentColor}`}>
                  {tier.name}
                </p>
                <div className="mt-4 flex items-baseline gap-1">
                  <span className="font-headline text-5xl font-extrabold tracking-tight text-foreground">${tier.price}</span>
                  <span className="text-sm text-muted-foreground">/{tier.period}</span>
                </div>
                <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
                  {tier.description}
                </p>
              </div>
              
              <div className="mb-8 h-px w-full bg-border" />

              <ul className="mb-10 flex-1 space-y-4">
                {tier.features.map((feature, fIdx) => (
                  <li key={fIdx} className="flex items-start gap-3 text-sm">
                    <span className={`font-bold ${tier.accentColor}`}>✓</span>
                    <span className="text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button
                asChild
                className={`h-12 w-full rounded-xl text-sm font-bold transition-all ${
                  tier.featured
                    ? "bg-blue-600 text-white hover:bg-blue-700"
                    : "bg-white text-foreground border border-border hover:bg-secondary"
                }`}
              >
                <Link href="#cta">{tier.cta}</Link>
              </Button>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-sm text-muted-foreground">
            * Se aplica un <strong>Setup Fee de $97</strong> (pago único) para todos los planes para garantizar la configuración profesional de su bot.
          </p>
        </div>
      </div>
    </section>
  )
}
