"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"

export function ImageGallery() {
  const galleryItems = [
    {
      title: "Ocean Freight Operations",
      description: "Modern container ships handling international cargo across global trade routes",
      image: "/images/OceanFreightOperations.webp",
    },
    {
      title: "Air Cargo Services",
      description: "Fast and reliable air freight solutions for time-sensitive shipments",
      image: "/images/AirCargoServices.jpg",
    },
    {
      title: "Warehouse Facilities",
      description: "State-of-the-art storage and distribution centers worldwide",
      image: "/images/WarehouseFacilities.jpg",
    },
    {
      title: "Ground Transportation",
      description: "Comprehensive trucking and rail services for land-based logistics",
      image: "/images/GroundTransportation.png",
    },
    {
      title: "Port Operations",
      description: "Efficient loading and unloading operations at major international ports",
      image: "/images/PortOperations.jpg",
    },
    {
      title: "Logistics Technology",
      description: "Advanced tracking and management systems for real-time shipment monitoring",
      image: "/images/LogisticsTechnology.jpg",
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
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Our Operations</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Take a look at our comprehensive logistics operations spanning across the globe
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
                    src={item.image}
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
