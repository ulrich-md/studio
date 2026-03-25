"use client"

const steps = [
  {
    number: "01",
    icon: "⚙️",
    title: "Configure su negocio",
    description: "Cuéntenos sus servicios, precios, horarios y preguntas frecuentes en unos 20 minutos."
  },
  {
    number: "02",
    icon: "📱",
    title: "Conecte su WhatsApp",
    description: "Le asignamos un número dedicado o conectamos el suyo mediante la API oficial."
  },
  {
    number: "03",
    icon: "🗣️",
    title: "Compártalo con sus clientes",
    description: "Los clientes empiezan a reservar de inmediato al ver su número en su local o redes."
  },
  {
    number: "04",
    icon: "✅",
    title: "Solo preséntese",
    description: "Revise su panel cada mañana. Las citas ya están ahí. El bot se encargó de todo."
  }
]

export function HowItWorks() {
  return (
    <section id="como" className="bg-foreground py-24 text-white sm:py-32">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-2xl">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-accent">Cómo funciona</p>
          <h2 className="mt-4 font-headline text-3xl font-extrabold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
            Configúrelo en una tarde.<br />Funciona para siempre.
          </h2>
          <p className="mt-6 text-lg text-white/60">
            No necesita conocimientos técnicos. Si puede enviar un mensaje de WhatsApp, puede usar AgendaPro.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 divide-y divide-white/10 overflow-hidden rounded-3xl border border-white/10 lg:grid-cols-4 lg:divide-x lg:divide-y-0">
          {steps.map((step, idx) => (
            <div key={idx} className="bg-white/[0.03] p-8 transition-colors hover:bg-white/[0.06]">
              <div className="font-headline text-5xl font-extrabold text-white/5">{step.number}</div>
              <div className="mt-4 text-3xl">{step.icon}</div>
              <h4 className="mt-6 font-headline text-lg font-bold">{step.title}</h4>
              <p className="mt-2 text-sm leading-relaxed text-white/40">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}