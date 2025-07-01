"use client"

import { motion } from "framer-motion"
import { Truck, Globe, Shield, Clock } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

export function AboutSection() {
  const features = [
    {
      icon: Globe,
      title: "Global Reach",
      description: "Worldwide logistics network covering all major markets and trade routes.",
    },
    {
      icon: Truck,
      title: "Reliable Transport",
      description: "Modern fleet and trusted partners ensuring safe delivery of your goods.",
    },
    {
      icon: Shield,
      title: "Secure Operations",
      description: "Comprehensive insurance and security measures for all shipments.",
    },
    {
      icon: Clock,
      title: "Timely Delivery",
      description: "Efficient scheduling and tracking systems for on-time deliveries.",
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
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Why Choose Wisdom?</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            With years of experience in international logistics, we provide comprehensive solutions tailored to your
            business needs.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="bg-gray-900 border-gray-700 hover:border-purple-500 transition-colors duration-300">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                  <p className="text-gray-400">{feature.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
