"use client"

import { motion } from "framer-motion"
import { Ship, Plane, Truck, Package } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function ServicesSection() {
  const services = [
    {
      icon: Ship,
      title: "Ocean Freight",
      description: "Cost-effective sea transportation for large volume shipments worldwide.",
      features: ["Full Container Load (FCL)", "Less Container Load (LCL)", "Door-to-door service"],
    },
    {
      icon: Plane,
      title: "Air Freight",
      description: "Fast and reliable air cargo services for time-sensitive shipments.",
      features: ["Express delivery", "Temperature controlled", "Dangerous goods handling"],
    },
    {
      icon: Truck,
      title: "Land Transport",
      description: "Comprehensive ground transportation across continents.",
      features: ["Cross-border trucking", "Rail freight", "Last-mile delivery"],
    },
    {
      icon: Package,
      title: "Warehousing",
      description: "Secure storage and distribution facilities in key locations.",
      features: ["Inventory management", "Pick & pack", "Cross-docking"],
    },
  ]

  return (
    <section className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Our Services</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Comprehensive logistics solutions designed to meet your international trade and transportation needs.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="bg-gray-800 border-gray-700 hover:border-purple-500 transition-all duration-300 h-full">
                <CardHeader>
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center">
                      <service.icon className="w-6 h-6 text-white" />
                    </div>
                    <CardTitle className="text-2xl text-white">{service.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300 mb-4">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="text-gray-400 flex items-center">
                        <div className="w-2 h-2 bg-purple-500 rounded-full mr-3" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
