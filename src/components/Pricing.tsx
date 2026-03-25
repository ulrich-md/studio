"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Badge } from "@/components/ui/badge"

const tiers = [
  {
    name: "El Básico",
    price: "19",
    originalPrice: null,
    period: "por mes",
    description: "Presencia básica para su negocio.",
    colorClass: "border-slate-200 bg-slate-50/50 dark:bg-slate-900/10",
    accentColor: "text-slate-600 dark:text-slate-400",
    features: [
      "Responde 5 preguntas FAQ básicas",
      "Ubicación y Horarios automáticos",
      "Perfil de negocio en Bridge",
      "Soporte por email",
      "No incluye agendamiento automático"
    ],
    cta: "Empezar con El Básico",
    featured: false,
    psychology: "Precio Señuelo Inferior"
  },
  {
    name: "Conexión Bilingüe",
    price: "27",
    originalPrice: "45",
    period: "por mes",
    description: "La IA bilingüe que cierra ventas sola.",
    colorClass: "border-blue-500 bg-blue-50/50 dark:bg-blue-950/20 ring-2 ring-blue-500 ring-offset-2",
    accentColor: "text-blue-600 dark:text-blue-400",
    features: [
      "IA Bilingüe Automática (EN/ES)",
      "Agendamiento de Citas ilimitado",
      "Sincronización con Google Calendar",
      "Personalidad Pura Vida / Profesional",
      "Gestión de SINPE Móvil manual",
      "Rescata una sola cita y se paga solo"
    ],
    cta: "Elegir Conexión Bilingüe",
    featured: true,
    badge: "El más recomendado",
    tagline: "Ideal para captar expats y turistas"
  },
  {
    name: "Business Pro",
    price: "59",
    originalPrice: null,
    period: "por mes",
    description: "Todo incluido para autonomía total.",
    colorClass: "border-amber-500/20 bg-amber-50/50 dark:bg-amber-950/10",
    accentColor: "text-amber-600 dark:text-amber-400",
    features: [
      "Recordatorios automáticos ilimitados",
      "Reporte mensual de ventas e IA",
      "Galería de productos en el chat",
      "Sincronización para todo el staff",
      "Prioridad en entrenamiento de IA",
      "Soporte técnico 24/7"
    ],
    cta: "Obtener Business Pro",
    featured: false,
    psychology: "Anclaje Superior"
  }
]

export function Pricing() {
  return (
    <section id="precios" className="py-24 sm:py-32 bg-background">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-primary">Oferta de Lanzamiento Regional</p>
          <h2 className="mt-4 font-headline text-3xl font-extrabold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
            Precios especiales de preventa
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">
            Aproveche nuestras tarifas de lanzamiento. Válido hasta el <strong>30 de abril</strong> por fase de apertura en nuevas zonas.
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
                <div className="mt-4 flex flex-col gap-1">
                  {tier.originalPrice && (
                    <span className="text-lg text-muted-foreground line-through decoration-destructive/50">
                      ${tier.originalPrice}
                    </span>
                  )}
                  <div className="flex items-baseline gap-1">
                    <span className="font-headline text-5xl font-extrabold tracking-tight text-foreground">${tier.price}</span>
                    <span className="text-sm text-muted-foreground">/{tier.period}</span>
                  </div>
                </div>
                <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
                  {tier.description}
                </p>
                {tier.tagline && (
                  <p className={`mt-2 text-xs font-bold ${tier.accentColor}`}>
                    ★ {tier.tagline}
                  </p>
                )}
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

        <div className="mt-12 text-center space-y-2">
          <p className="text-sm text-muted-foreground italic">
            "Rescata una sola cita perdida al mes y el sistema se paga solo."
          </p>
          <p className="text-sm text-muted-foreground">
            * <strong>Setup Fee especial de $47</strong> (antes $150) para los primeros 5 negocios de la zona.
          </p>
        </div>
      </div>
    </section>
  )
}
