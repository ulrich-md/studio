"use client"

const businessTypes = [
  "Fontaneros", "Salones de belleza", "Viveros", "Clínicas", 
  "Tutores", "Mecánicos", "Limpieza", "Contratistas", "Fisioterapeutas", "Electricistas"
]

export function LogosStrip() {
  return (
    <div className="border-b border-border bg-secondary/80 py-8 backdrop-blur-sm">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-6">
          <span className="text-xs font-bold uppercase tracking-widest text-muted-foreground/50">Para</span>
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-4">
            {businessTypes.map((type, idx) => (
              <span key={idx} className="font-headline text-sm font-bold text-muted-foreground/60">
                {type}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}