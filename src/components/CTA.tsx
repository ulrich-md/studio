"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useToast } from "@/hooks/use-toast"

export function CTA() {
  const [phone, setPhone] = useState("")
  const [email, setEmail] = useState("")
  const [isSubmitted, setIsSubmitted] = useState(false)
  const { toast } = useToast()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!phone || !email) {
      toast({
        title: "Error",
        description: "Por favor complete ambos campos.",
        variant: "destructive"
      })
      return
    }
    
    setIsSubmitted(true)
    toast({
      title: "¡Éxito!",
      description: "Le contactaremos pronto sobre su cupo con 25% de descuento.",
    })
  }

  return (
    <section id="cta" className="bg-primary py-24 text-primary-foreground sm:py-32">
      <div className="container mx-auto px-4 sm:px-6 text-center">
        <h2 className="font-headline text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-5xl">
          Obtenga un 25% de descuento.<br />Oferta especial de lanzamiento.
        </h2>
        <p className="mx-auto mt-6 max-w-2xl text-lg text-primary-foreground/70">
          Únase a la lista de acceso anticipado y asegure su descuento exclusivo para automatizar su negocio con Bridge.
        </p>

        <div className="mt-12">
          {!isSubmitted ? (
            <form onSubmit={handleSubmit} className="mx-auto flex max-w-xl flex-col gap-4 sm:flex-row sm:items-center">
              <Input
                type="text"
                placeholder="Su número de WhatsApp"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="h-14 bg-white/10 border-white/20 text-white placeholder:text-white/50 focus-visible:ring-accent rounded-xl"
              />
              <Input
                type="email"
                placeholder="Su correo electrónico"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="h-14 bg-white/10 border-white/20 text-white placeholder:text-white/50 focus-visible:ring-accent rounded-xl"
              />
              <Button type="submit" className="h-14 rounded-xl bg-white px-8 font-bold text-primary hover:bg-accent hover:text-foreground">
                Quiero mi 25% de descuento →
              </Button>
            </form>
          ) : (
            <div className="mx-auto inline-block rounded-2xl bg-white/15 p-8 font-bold text-white shadow-xl backdrop-blur-sm">
              🎉 ¡Ya está en la lista! Le contactaremos en menos de 48 horas para activar su descuento.
            </div>
          )}
        </div>
        
        <p className="mt-8 text-sm text-white/40">
          Cupos limitados por zona. Solo le contactaremos sobre su acceso anticipado.
        </p>
      </div>
    </section>
  )
}
