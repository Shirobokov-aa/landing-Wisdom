"use client"

import { motion } from "framer-motion"

export function ContactHero() {
  return (
    <section className="relative h-96 flex items-center justify-start overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/images/modern-office-interior.jpg')",
          filter: "brightness(0.3)",
        }}
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/60" />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4">
        <motion.h1
          className="text-6xl md:text-7xl font-bold text-white"
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          Contacts
        </motion.h1>
      </div>
    </section>
  )
}
