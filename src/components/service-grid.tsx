"use client"

import { motion } from "framer-motion"
import { Globe, MapPin, Shield, Package } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

export function ServiceGrid() {
  const services = [
    {
      icon: Globe,
      title: "Worldwide",
      color: "bg-orange-500",
      description: "Global logistics network covering all continents and major trade routes",
    },
    {
      icon: MapPin,
      title: "Tracking",
      color: "bg-purple-600",
      description: "Real-time shipment tracking and monitoring throughout the journey",
    },
    {
      icon: Shield,
      title: "Fast and reliable",
      color: "bg-orange-600",
      description: "Efficient delivery with comprehensive insurance and security measures",
    },
    {
      icon: Package,
      title: "Storage",
      color: "bg-green-600",
      description: "Secure warehousing and distribution facilities worldwide",
    },
  ]

  return (
    <section className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <p className="text-gray-600 text-lg mb-2">OUR SERVICE</p>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800">WHAT WE CAN DO FOR YOU</h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className={`${service.color} border-0 h-64 hover:scale-105 transition-transform duration-300`}>
                <CardContent className="p-8 text-center text-white h-full flex flex-col justify-center">
                  <div className="mb-6">
                    <service.icon className="w-16 h-16 mx-auto mb-4" />
                    <h3 className="text-2xl font-bold">{service.title}</h3>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
