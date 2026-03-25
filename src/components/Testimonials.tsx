"use client"

import { Card, CardContent } from "@/components/ui/card"

const testimonials = [
  {
    quote: "Antes pasaba el día entero contestando WhatsApp mientras intentaba trabajar. Ahora el teléfono está tranquilo y tengo la agenda llena. Increíble.",
    author: "Mario Vargas",
    role: "Fontanero Independiente",
    initials: "MV",
    color: "bg-primary"
  },
  {
    quote: "Mis clientes extranjeros reservan en inglés y mis clientes locales en español. El bot maneja los dos a la perfección. Yo solo me dedico a las uñas.",
    author: "Ana Leal",
    role: "Propietaria de Salón de Belleza",
    initials: "AL",
    color: "bg-orange-700"
  },
  {
    quote: "Era escéptico, no soy persona de tecnología. Pero la configuración tomó una tarde y lleva 3 meses funcionando solo. Las citas perdidas bajaron a la mitad.",
    author: "Carlos Rojas",
    role: "Fisioterapeuta",
    initials: "CR",
    color: "bg-blue-800"
  }
]

export function Testimonials() {
  return (
    <section className="py-24 sm:py-32">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-primary">Casos reales</p>
          <h2 className="mt-4 font-headline text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-5xl">
            Negocios que ya ahorran<br />más de 10 horas a la semana
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">
            Desde servicios técnicos hasta salones de belleza — resultados reales de negocios que escalan.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-8 lg:grid-cols-3">
          {testimonials.map((testi, idx) => (
            <Card key={idx} className="border-none bg-secondary/50 p-8 transition-shadow hover:shadow-lg">
              <CardContent className="p-0">
                <div className="text-accent text-xl mb-4">★★★★★</div>
                <p className="text-[15px] italic leading-relaxed text-muted-foreground mb-8">
                  "{testi.quote}"
                </p>
                <div className="flex items-center gap-4">
                  <div className={`flex h-10 w-10 items-center justify-center rounded-full text-xs font-bold text-white ${testi.color}`}>
                    {testi.initials}
                  </div>
                  <div>
                    <div className="font-headline text-sm font-bold">{testi.author}</div>
                    <div className="text-xs text-muted-foreground">{testi.role}</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
