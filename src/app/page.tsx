
"use client"

import { Navigation } from "@/components/Navigation"
import { Hero } from "@/components/Hero"
import { LogosStrip } from "@/components/LogosStrip"
import { Features } from "@/components/Features"
import { HowItWorks } from "@/components/HowItWorks"
import { BilingualDemo } from "@/components/BilingualDemo"
import { UseCases } from "@/components/UseCases"
import { AICapabilities } from "@/components/AICapabilities"
import { Pricing } from "@/components/Pricing"
import { FAQ } from "@/components/FAQ"
import { CTA } from "@/components/CTA"
import { Footer } from "@/components/Footer"
import { Testimonials } from "@/components/Testimonials"
import { Toaster } from "@/components/ui/toaster"

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <Hero />
        <LogosStrip />
        <Features />
        <HowItWorks />
        <BilingualDemo />
        <UseCases />
        <AICapabilities />
        <Testimonials />
        <Pricing />
        <FAQ />
        <CTA />
      </main>
      <Footer />
      <Toaster />
    </div>
  )
}
