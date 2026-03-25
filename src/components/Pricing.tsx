"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Badge } from "@/components/ui/badge"

const tiers = [
  {
    name: "El Arranque",
    price: "27",
    originalPrice: "45",
    period: "por mes",
    description: "Ideal para dejar de contestar las mismas 10 preguntas al día.",
    colorClass: "border-slate-200 bg-slate-50/50 dark:bg-slate-900/10",
    accentColor: "text-slate-600 dark:text-slate-400",
    features: [
      "Auto-Respuesta 24/7 (FAQ básica)",
      "Personalidad Local (Amable y Pura Vida)",
      "Agenda Manual (Link a Calendar)",
      "Soporte por email",
      "Interfaz 100% en español"
    ],
    cta: "Empezar con El Arranque",
    featured: false
  },
  {
    name: "Bilingüe Pro",
    price: "57",
    originalPrice: "95",
    period: "por mes",
    description: "El bot detecta el idioma y cierra ventas automáticamente.",
    colorClass: "border-blue-500 bg-blue-50/50 dark:bg-blue-950/20 ring-2 ring-blue-500 ring-offset-2",
    accentColor: "text-blue-600 dark:text-blue-400",
    features: [
      "Traducción Automática (EN/ES) Fluida",
      "Recordatorios de Citas (2h antes)",
      "IA entrenada para Cierre de Ventas",
      "Galería de Productos en Chat",
      "Sincronización para 3 colaboradores",
      "Soporte prioritario"
    ],
    cta: "Elegir Bilingüe Pro",
    featured: true,
    badge: "El más recomendado"
  },
  {
    name: "Élite Business",
    price: "117",
    originalPrice: "190",
    period: "por mes",
    description: "Control total y consultoría para negocios de alta demanda.",
    colorClass: "border-amber-500/20 bg-amber-50/50 dark:bg-amber-950/10",
    accentColor: "text-amber-600 dark:text-amber-400",
    features: [
      "Reporte Mensual de Clientes y ROI",
      "Actualización Semanal de Datos",
      "Gestión de Múltiples Agentes/Staff",
      "Integración de Pagos (SINPE/Manual)",
      "Entrenamiento de IA personalizado",
      "Account Manager dedicado"
    ],
    cta: "Contactar por Élite",
    featured: false
  }
]

export function Pricing() {
  return (
    <section id="precios" className="py-24 sm:py-32 bg-background">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-primary">Oferta de Lanzamiento 2026</p>
          <h2 className="mt-4 font-headline text-3xl font-extrabold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
            Precios con 25% de descuento o más
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">
            Aproveche nuestras tarifas de preventa. Válido hasta el <strong>30 de abril</strong> por fase de lanzamiento regional.
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
                  <span className="text-lg text-muted-foreground line-through decoration-destructive/50">
                    ${tier.originalPrice}
                  </span>
                  <div className="flex items-baseline gap-1">
                    <span className="font-headline text-5xl font-extrabold tracking-tight text-foreground">${tier.price}</span>
                    <span className="text-sm text-muted-foreground">/{tier.period}</span>
                  </div>
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

        <div className="mt-12 text-center space-y-2">
          <p className="text-sm text-muted-foreground">
            * <strong>Setup Fee especial de $47</strong> (antes $150) para los primeros 5 negocios.
          </p>
          <p className="text-xs text-muted-foreground opacity-70">
            Precios válidos únicamente durante la fase de lanzamiento regional.
          </p>
        </div>
      </div>
    </section>
  )
}
