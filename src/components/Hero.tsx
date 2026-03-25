"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { Play } from "lucide-react"

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-secondary pt-16 lg:pt-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-end gap-12 lg:grid-cols-2 lg:gap-20">
          <div className="pb-16 lg:pb-32">
            <Badge variant="outline" className="mb-6 gap-1.5 border-primary/20 bg-primary/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-primary">
              <span className="h-1.5 w-1.5 rounded-full bg-primary" />
              Bilingüe · 100% por WhatsApp
            </Badge>
            <h1 className="font-headline text-4xl font-extrabold leading-[1.1] tracking-tight text-foreground sm:text-5xl lg:text-6xl">
              Deje de perder clientes por <em className="not-italic text-primary">citas perdidas</em>
            </h1>
            <p className="mt-6 max-w-lg text-lg leading-relaxed text-muted-foreground sm:text-xl">
              AgendaPro maneja sus citas, responde preguntas frecuentes y comunica a sus clientes en español e inglés — de forma automática por WhatsApp.
            </p>
            <div className="mt-10 flex flex-col flex-wrap gap-4 sm:flex-row sm:items-center">
              <Button asChild size="lg" className="h-14 rounded-xl bg-primary px-8 text-base font-bold shadow-lg shadow-primary/20 hover:bg-primary/90">
                <Link href="#cta">Acceso anticipado — gratis</Link>
              </Button>
              <Button variant="ghost" asChild size="lg" className="h-14 gap-2 text-base font-semibold text-muted-foreground hover:text-primary">
                <Link href="#como">
                  <Play className="h-5 w-5 fill-current" />
                  Ver cómo funciona
                </Link>
              </Button>
            </div>
          </div>

          <div className="relative flex justify-center lg:justify-end">
            {/* Phone Mockup */}
            <div className="relative z-10 w-[280px] rounded-[3rem] bg-foreground p-3.5 shadow-2xl sm:w-[320px]">
              <div className="h-full w-full overflow-hidden rounded-[2.2rem] bg-white shadow-inner">
                {/* WhatsApp Header */}
                <div className="flex items-center gap-3 bg-[#075E54] p-4 pt-6 text-white">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#128C7E] font-bold text-white shadow-sm">
                    AP
                  </div>
                  <div>
                    <div className="text-sm font-bold">AgendaPro Bot</div>
                    <div className="text-[10px] opacity-70">en línea</div>
                  </div>
                </div>

                {/* Chat Body */}
                <div className="flex h-[380px] flex-col gap-3 overflow-y-auto bg-[#E5DDD5] p-3 text-[12px] leading-snug">
                  <div className="max-w-[85%] self-start rounded-r-lg rounded-bl-lg bg-white p-2.5 shadow-sm">
                    Hola, ¿tienen cita disponible el viernes? 🙏
                    <div className="mt-1 text-right text-[9px] text-muted-foreground">10:02</div>
                  </div>
                  <div className="max-w-[85%] self-end rounded-l-lg rounded-br-lg bg-[#DCF8C6] p-2.5 shadow-sm">
                    ¡Hola! Sí, el viernes tengo disponible a las 10 AM o a las 2 PM. ¿Cuál le queda mejor?
                    <div className="mt-1 text-right text-[9px] text-muted-foreground">10:02</div>
                  </div>
                  <div className="max-w-[85%] self-start rounded-r-lg rounded-bl-lg bg-white p-2.5 shadow-sm">
                    Las 2 pm perfecto, me llamo Carlos.
                    <div className="mt-1 text-right text-[9px] text-muted-foreground">10:03</div>
                  </div>
                  <div className="max-w-[85%] self-end rounded-l-lg rounded-br-lg bg-[#DCF8C6] p-2.5 shadow-sm">
                    ✅ ¡Listo, Carlos! Viernes a las 2:00 PM. Le envío un recordatorio 1 hora antes. 😊
                    <div className="mt-1 text-right text-[9px] text-muted-foreground">10:03</div>
                  </div>
                  <div className="max-w-[85%] self-start rounded-r-lg rounded-bl-lg bg-white p-2.5 shadow-sm">
                    Hi! Do you have someone who speaks English?
                    <div className="mt-1 text-right text-[9px] text-muted-foreground">10:05</div>
                  </div>
                  <div className="max-w-[85%] self-end rounded-l-lg rounded-br-lg bg-[#DCF8C6] p-2.5 shadow-sm">
                    Of course! We have availability Friday at 10 AM or 2 PM. Which works for you?
                    <div className="mt-1 text-right text-[9px] text-muted-foreground">10:05</div>
                  </div>
                </div>

                {/* WhatsApp Input */}
                <div className="flex items-center gap-3 bg-[#F0F0F0] p-3">
                  <div className="flex-1 rounded-full bg-white px-4 py-2 text-[11px] text-muted-foreground shadow-sm">
                    Escriba un mensaje...
                  </div>
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#25D366] text-white shadow-sm">
                    <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24">
                      <path d="M2 21l21-9L2 3v7l15 2-15 2v7z" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
            {/* Background Decoration */}
            <div className="absolute -bottom-12 -right-12 h-64 w-64 rounded-full bg-accent/20 blur-3xl lg:h-96 lg:w-96" />
          </div>
        </div>
      </div>
    </section>
  )
}