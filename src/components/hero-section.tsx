"use client"

import { motion } from "framer-motion"

export function HeroSection() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/images/hero.png')",
          filter: "brightness(0.3)",
        }}
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/60" />

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
        <motion.h1
          className="text-5xl md:text-7xl font-bold mb-6"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Welcome to Wisdom
        </motion.h1>

        <motion.p
          className="text-xl md:text-2xl text-gray-200 leading-relaxed max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          Wisdom is a global import and export trade company specializing in wholesale distribution and
          for markets around the world. Our expertise spans a wide range of industries, ensuring efficient and reliable
          trade solutions.
        </motion.p>
      </div>
    </section>
  )
}
