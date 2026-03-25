"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useToast } from "@/hooks/use-toast"

export function CTA() {
  const [phone, setPhone] = useState("")
  const [isSubmitted, setIsSubmitted] = useState(false)
  const { toast } = useToast()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!phone) {
      toast({
        title: "Error",
        description: "Por favor ingrese su número de WhatsApp.",
        variant: "destructive"
      })
      return
    }
    
    setIsSubmitted(true)
    toast({
      title: "¡Recibido!",
      description: "Le contactaremos pronto para mostrarle el poder de Bridge.",
    })
  }

  return (
    <section id="cta" className="bg-primary py-24 text-primary-foreground sm:py-32">
      <div className="container mx-auto px-4 sm:px-6 text-center">
        <h2 className="font-headline text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-5xl">
          Lleve su negocio al siguiente nivel.<br />Empiece con Bridge hoy mismo.
        </h2>
        <p className="mx-auto mt-6 max-w-2xl text-lg text-primary-foreground/70">
          Únase a los negocios que ya están automatizando su atención al cliente y agendamiento bilingüe.
        </p>

        <div className="mt-12">
          {!isSubmitted ? (
            <form onSubmit={handleSubmit} className="mx-auto flex max-w-md flex-col gap-4 sm:flex-row sm:items-center">
              <Input
                type="text"
                placeholder="Su número de WhatsApp"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="h-14 bg-white/10 border-white/20 text-white placeholder:text-white/50 focus-visible:ring-accent rounded-xl"
              />
              <Button type="submit" className="h-14 rounded-xl bg-white px-8 font-bold text-primary hover:bg-accent hover:text-foreground">
                Saber más →
              </Button>
            </form>
          ) : (
            <div className="mx-auto inline-block rounded-2xl bg-white/15 p-8 font-bold text-white shadow-xl backdrop-blur-sm">
              🎉 ¡Gracias por su interés! Le contactaremos pronto por WhatsApp para una demostración personalizada.
            </div>
          )}
        </div>
        
        <p className="mt-8 text-sm text-white/40">
          Sin compromisos. Solo una demostración de cómo Bridge puede ayudarle.
        </p>
      </div>
    </section>
  )
}
