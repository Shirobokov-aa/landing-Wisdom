"use client"

import { Header } from "@/components/header"
import { ServiceHero } from "@/components/service-hero"
import { ServiceGrid } from "@/components/service-grid"
import { ServiceStats } from "@/components/service-stats"
import { Footer } from "@/components/footer"

export default function ServicePage() {
  return (
    <div className="min-h-screen bg-gray-900">
      <Header />
      <main>
        <ServiceHero />
        <ServiceGrid />
        <ServiceStats />
      </main>
      <Footer />
    </div>
  )
}
