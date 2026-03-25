
"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Badge } from "@/components/ui/badge"

const tiers = [
  {
    name: "El Básico",
    price: "19",
    period: "por mes",
    description: "Para negocios que solo quieren presencia básica.",
    colorClass: "border-slate-200 bg-slate-50/50 dark:bg-slate-900/10",
    accentColor: "text-slate-600 dark:text-slate-400",
    features: [
      "Responde 5 preguntas FAQ básicas",
      "Ubicación y Horarios automáticos",
      "Perfil de negocio en Bridge",
      "Soporte por email",
      "No incluye agendamiento automático"
    ],
    cta: "Elegir El Básico",
    featured: false,
  },
  {
    name: "Conexión Bilingüe",
    price: "27",
    period: "por mes",
    listPrice: "45",
    description: "La IA bilingüe que cierra ventas sola.",
    colorClass: "border-blue-500 bg-blue-50/50 dark:bg-blue-950/20 ring-2 ring-blue-500 ring-offset-2",
    accentColor: "text-blue-600 dark:text-blue-400",
    features: [
      "IA Bilingüe Automática (EN/ES)",
      "Agendamiento de Citas inteligente",
      "Sincronización con Calendarios",
      "Personalidad Personalizada",
      "Atención 24/7 ininterrumpida",
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
    period: "por mes",
    description: "Todo incluido para autonomía total.",
    colorClass: "border-amber-500/20 bg-amber-50/50 dark:bg-amber-950/10",
    accentColor: "text-amber-600 dark:text-amber-400",
    features: [
      "Recordatorios automáticos ilimitados",
      "Reporte mensual de métricas",
      "Galería de productos en el chat",
      "Sincronización para todo el staff",
      "Prioridad en entrenamiento de IA",
      "Soporte técnico preferencial"
    ],
    cta: "Elegir Business Pro",
    featured: false,
  }
]

export function Pricing() {
  return (
    <section id="precios" className="py-24 sm:py-32 bg-background">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-primary">Inversión Inteligente</p>
          <h2 className="mt-4 font-headline text-3xl font-extrabold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
            Planes adaptados a su ritmo
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">
            Elija el puente que mejor conecte con sus clientes. Sin contratos ocultos.
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
                  <div className="flex items-baseline gap-1">
                    {tier.listPrice && (
                      <span className="text-sm text-muted-foreground line-through mr-2">${tier.listPrice}</span>
                    )}
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

        <div className="mt-12 text-center">
          <p className="text-sm text-muted-foreground italic">
            "Rescata una sola cita perdida al mes y el sistema se paga solo."
          </p>
        </div>
      </div>
    </section>
  )
}
