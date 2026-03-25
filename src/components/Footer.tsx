"use client"

import Link from "next/link"

export function Footer() {
  return (
    <footer className="bg-foreground py-16 text-white/40">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex flex-col items-center justify-between gap-10 lg:flex-row">
          <Link href="/" className="flex items-center gap-2 text-white">
            <span className="h-2 w-2 rounded-full bg-primary" />
            <span className="font-headline text-lg font-extrabold">Bridge</span>
          </Link>
          
          <nav className="flex flex-wrap justify-center gap-8">
            <Link href="#funciones" className="text-sm transition-colors hover:text-white">Funciones</Link>
            <Link href="#precios" className="text-sm transition-colors hover:text-white">Precios</Link>
            <Link href="#cta" className="text-sm transition-colors hover:text-white">Acceso anticipado</Link>
            <Link href="mailto:hola@bridge.app" className="text-sm transition-colors hover:text-white">hola@bridge.app</Link>
          </nav>

          <div className="text-center text-xs lg:text-right">
            © 2025 Bridge. Conectando negocios en Santa Ana, Costa Rica.
          </div>
        </div>
      </div>
    </footer>
  )
}
