
"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"
import { MessageSquare, ExternalLink } from "lucide-react"

export function CTA() {
  return (
    <section id="cta" className="bg-primary py-24 text-primary-foreground sm:py-32">
      <div className="container mx-auto px-4 sm:px-6 text-center">
        <h2 className="font-headline text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-5xl">
          El futuro de su negocio empieza aquí.
        </h2>
        <p className="mx-auto mt-6 max-w-2xl text-lg text-primary-foreground/70">
          Bridge no es solo un bot; es un empleado bilingüe incansable que entiende su cultura y a sus clientes.
        </p>

        <div className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Button asChild size="lg" className="h-16 rounded-2xl bg-white px-10 text-lg font-bold text-primary hover:bg-accent hover:text-foreground">
            <Link href="https://wa.me/your-number" target="_blank" className="flex items-center gap-2">
              <MessageSquare className="h-5 w-5" />
              Probar Demo en WhatsApp
            </Link>
          </Button>
          <Button variant="outline" asChild size="lg" className="h-16 rounded-2xl border-white/20 bg-transparent px-10 text-lg font-bold text-white hover:bg-white/10">
            <Link href="#capacidades" className="flex items-center gap-2">
              Ver Capacidades Técnicas
              <ExternalLink className="h-5 w-5" />
            </Link>
          </Button>
        </div>
        
        <p className="mt-8 text-sm text-white/40 italic">
          Disponible 24/7. Sin esperas. Pura Vida.
        </p>
      </div>
    </section>
  )
}
