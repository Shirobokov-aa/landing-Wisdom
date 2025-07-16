"use client"
import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { ServicesSection } from "@/components/services-section"
import { Footer } from "@/components/footer"
import { CompanyStats } from "@/components/company-stats"
import { ProductGallery } from "@/components/image-gallery"
import { ProcessSection } from "@/components/process-section"
// import { ExpandedAbout } from "@/components/expanded-about"

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-900">
      <Header />
      <main>
        <HeroSection />
        {/* <ExpandedAbout /> */}
        <CompanyStats />
        <ProcessSection />
        <ProductGallery />
        <ServicesSection />
      </main>
      <Footer />
    </div>
  )
}
