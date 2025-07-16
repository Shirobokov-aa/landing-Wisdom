"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"

export function ProductGallery() {
  const galleryItems = [
    {
      title: "Global Trade Networks",
      description: "Connecting markets and businesses through extensive international trade networks.",
      image: "/placeholder.svg?height=300&width=400",
    },
    {
      title: "Product Sourcing Expertise",
      description: "Efficiently sourcing high-quality products from diverse global origins.",
      image: "/placeholder.svg?height=300&width=400",
    },
    {
      title: "Wholesale Distribution Hubs",
      description: "Strategic distribution centers for seamless bulk product movement.",
      image: "/placeholder.svg?height=300&width=400",
    },
    {
      title: "Quality Control & Inspection",
      description: "Ensuring product quality and compliance with rigorous inspection processes.",
      image: "/placeholder.svg?height=300&width=400",
    },
    {
      title: "International Partnerships",
      description: "Building strong relationships with partners across the globe for mutual growth.",
      image: "/placeholder.svg?height=300&width=400",
    },
    {
      title: "Market Insights & Analysis",
      description: "Providing valuable market intelligence for informed trade decisions.",
      image: "/placeholder.svg?height=300&width=400",
    },
  ]

  return (
    <section className="py-20 bg-gray-800">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Our Trade Operations</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Explore our comprehensive import and export trade operations, focusing on wholesale and product sourcing.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {galleryItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="bg-gray-900 border-gray-700 hover:border-purple-500 transition-all duration-300 overflow-hidden group">
                <div className="relative overflow-hidden">
                  <Image
                    src={item.image || "/placeholder.svg"}
                    width={400}
                    height={300}
                    alt={item.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-300" />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-white mb-3">{item.title}</h3>
                  <p className="text-gray-400 leading-relaxed">{item.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
