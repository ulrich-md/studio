
"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"

export function Navigation() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 sm:px-6">
        <Link href="/" className="flex items-center gap-2">
          <span className="h-2.5 w-2.5 rounded-full bg-primary" />
          <span className="font-headline text-xl font-extrabold tracking-tight">Bridge</span>
        </Link>
        
        <nav className="hidden md:flex items-center gap-8">
          <Link href="#funciones" className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary">
            Funciones
          </Link>
          <Link href="#como" className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary">
            Cómo funciona
          </Link>
          <Link href="#capacidades" className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary">
            IA Avanzada
          </Link>
          <Link href="#precios" className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary">
            Precios
          </Link>
        </nav>

        <div className="flex items-center gap-4">
          <Button asChild variant="default" className="hidden sm:inline-flex bg-primary text-primary-foreground font-semibold hover:bg-primary/90">
            <Link href="#cta">Ver Demo</Link>
          </Button>
          <Button variant="ghost" size="icon" className="md:hidden">
            <span className="sr-only">Toggle menu</span>
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </Button>
        </div>
      </div>
    </header>
  )
}
