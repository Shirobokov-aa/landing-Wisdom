"use client"

import { motion } from "framer-motion"
import { Globe, Package, FileCheck, TrendingUp } from "lucide-react" // Updated icons
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function TradeServicesSection() {
  const services = [
    {
      icon: Globe,
      title: "Global Sourcing & Procurement",
      description: "Connecting you with reliable suppliers and high-quality products worldwide.",
      features: ["Extensive supplier network", "Quality assurance", "Competitive pricing"],
    },
    {
      icon: Package,
      title: "Wholesale Distribution",
      description: "Efficient distribution channels for bulk goods to various markets.",
      features: ["Market access & penetration", "Inventory management", "Order fulfillment"],
    },
    {
      icon: FileCheck,
      title: "Customs & Compliance",
      description: "Navigating international trade regulations and customs procedures seamlessly.",
      features: ["Import/Export documentation", "Tariff & duty management", "Regulatory adherence"],
    },
    {
      icon: TrendingUp,
      title: "Market Entry Support",
      description: "Assisting businesses in expanding into new international markets.",
      features: ["Market research & analysis", "Strategic planning", "Partnership development"],
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
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Our Trade Services</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Specializing in Import & Export Trade - wholesale trade and sourcing of goods, we offer
            comprehensive solutions to facilitate your global business.
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
