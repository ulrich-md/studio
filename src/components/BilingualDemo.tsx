"use client"

import { Badge } from "@/components/ui/badge"

export function BilingualDemo() {
  return (
    <section className="bg-secondary py-24 sm:py-32">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-20">
          {/* Chat Demo Card */}
          <div className="overflow-hidden rounded-3xl border border-border bg-white shadow-2xl">
            <div className="bg-[#075E54] p-4 text-white">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#128C7E] font-bold">
                  V
                </div>
                <div>
                  <div className="text-sm font-bold">Vivero Vargas</div>
                  <div className="text-[11px] opacity-70">Powered by Bridge</div>
                </div>
              </div>
            </div>
            
            <div className="flex h-[400px] flex-col gap-4 overflow-y-auto bg-[#ECE5DD] p-6 text-[13px]">
              <div className="max-w-[80%] self-start rounded-r-xl rounded-bl-xl bg-white p-3 shadow-sm">
                Do you have hanging plants in stock? 
                <Badge variant="secondary" className="ml-2 h-4 bg-blue-100 text-[9px] text-blue-700">EN</Badge>
                <div className="mt-1 text-[10px] text-muted-foreground">10:15 AM</div>
              </div>
              <div className="max-w-[80%] self-end rounded-l-xl rounded-br-xl bg-[#DCF8C6] p-3 shadow-sm">
                Hi! Yes, we have helechos, pothos and begonias available. Would you like to come visit this week?
                <div className="mt-1 text-[10px] text-muted-foreground text-right">10:15 AM ✓✓</div>
              </div>
              <div className="max-w-[80%] self-start rounded-r-xl rounded-bl-xl bg-white p-3 shadow-sm">
                Yes please, ¿el sábado? 
                <Badge variant="secondary" className="ml-2 h-4 bg-orange-100 text-[9px] text-orange-700">ES</Badge>
                <div className="mt-1 text-[10px] text-muted-foreground">10:16 AM</div>
              </div>
              <div className="max-w-[80%] self-end rounded-l-xl rounded-br-xl bg-[#DCF8C6] p-3 shadow-sm">
                ¡Perfecto! El sábado estamos abiertos de 8 AM a 2 PM. ¿Me da su nombre para la reserva?
                <div className="mt-1 text-[10px] text-muted-foreground text-right">10:16 AM ✓✓</div>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-8">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-primary">Inteligencia bilingüe</p>
              <h2 className="mt-4 font-headline text-3xl font-extrabold leading-tight tracking-tight text-foreground sm:text-4xl lg:text-5xl">
                Un solo Puente.<br />Dos idiomas.
              </h2>
              <p className="mt-6 text-lg text-muted-foreground">
                Muchos negocios mezclan clientes locales y extranjeros. Bridge detecta el idioma de cada mensaje y responde con naturalidad — sin traducciones automáticas torpes.
              </p>
            </div>

            <ul className="space-y-4">
              {[
                "Detección inteligente de idioma por mensaje",
                "Usa lenguaje natural y profesional",
                "Envía recordatorios en el idioma preferido",
                "Ideal para zonas turísticas y comunidades mixtas"
              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-4 text-[15px] font-medium text-foreground">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/10 text-xs text-primary">✓</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
