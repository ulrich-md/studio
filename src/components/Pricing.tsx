"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Badge } from "@/components/ui/badge"

const tiers = [
  {
    name: "Básico",
    price: "19",
    period: "por mes",
    features: [
      "Hasta 100 citas al mes",
      "Bot bilingüe en WhatsApp",
      "5 preguntas frecuentes",
      "Recordatorios básicos",
      "Panel de control simple"
    ],
    cta: "Comenzar",
    featured: false
  },
  {
    name: "Pro",
    price: "39",
    period: "por mes",
    features: [
      "Citas ilimitadas",
      "Bot bilingüe en WhatsApp",
      "Preguntas frecuentes ilimitadas",
      "Recordatorios inteligentes (24h + 1h)",
      "Panel + sincronización calendario",
      "Seguimiento de citas perdidas",
      "Soporte prioritario"
    ],
    cta: "Comenzar",
    featured: true,
    badge: "Más popular"
  },
  {
    name: "Agencia",
    price: "99",
    period: "por mes",
    features: [
      "Hasta 5 locales o negocios",
      "Todo lo del plan Pro",
      "Marca blanca (white-label)",
      "Panel de revendedor",
      "Incorporación personalizada"
    ],
    cta: "Contáctenos",
    featured: false
  }
]

export function Pricing() {
  return (
    <section id="precios" className="py-24 sm:py-32">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-primary">Precios</p>
          <h2 className="mt-4 font-headline text-3xl font-extrabold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
            Precios simples y transparentes
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">
            Sin contratos. Sin sorpresas. Cancele cuando quiera. Precios en USD.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 items-stretch gap-8 lg:grid-cols-3">
          {tiers.map((tier, idx) => (
            <div
              key={idx}
              className={`relative flex flex-col rounded-3xl p-10 transition-all hover:-translate-y-1 ${
                tier.featured
                  ? "bg-foreground text-white shadow-2xl lg:scale-105"
                  : "bg-secondary/50 border border-border"
              }`}
            >
              {tier.featured && (
                <div className="absolute -top-4 right-8">
                  <Badge className="bg-accent text-foreground hover:bg-accent">{tier.badge}</Badge>
                </div>
              )}
              <div className="mb-8">
                <p className={`font-headline text-sm font-bold uppercase tracking-widest ${tier.featured ? "text-white/60" : "text-muted-foreground"}`}>
                  {tier.name}
                </p>
                <div className="mt-4 flex items-baseline gap-1">
                  <span className="font-headline text-5xl font-extrabold tracking-tight">${tier.price}</span>
                  <span className={`text-sm ${tier.featured ? "text-white/60" : "text-muted-foreground"}`}>/{tier.period}</span>
                </div>
              </div>
              
              <div className={`mb-8 h-px w-full ${tier.featured ? "bg-white/10" : "bg-border"}`} />

              <ul className="mb-10 flex-1 space-y-4">
                {tier.features.map((feature, fIdx) => (
                  <li key={fIdx} className="flex items-start gap-3 text-sm">
                    <span className={`font-bold ${tier.featured ? "text-accent" : "text-primary"}`}>✓</span>
                    <span className={tier.featured ? "text-white/70" : "text-muted-foreground"}>{feature}</span>
                  </li>
                ))}
              </ul>

              <Button
                asChild
                className={`h-12 w-full rounded-xl text-sm font-bold transition-all ${
                  tier.featured
                    ? "bg-primary text-white hover:bg-primary/90"
                    : "bg-white text-foreground border border-border hover:bg-secondary"
                }`}
              >
                <Link href="#cta">{tier.cta}</Link>
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}