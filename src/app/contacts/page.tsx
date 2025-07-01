"use client"

import { Header } from "@/components/header"
import { ContactHero } from "@/components/contact-hero"
import { ContactInfo } from "@/components/contact-info"
import { Footer } from "@/components/footer"

export default function ContactsPage() {
  return (
    <div className="min-h-screen bg-gray-900">
      <Header />
      <main>
        <ContactHero />
        <ContactInfo />
      </main>
      <Footer />
    </div>
  )
}
