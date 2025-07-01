"use client"

import { motion } from "framer-motion"
import { FileText, Truck, MapPin, CheckCircle } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

export function ProcessSection() {
  const steps = [
    {
      icon: FileText,
      title: "Request Quote",
      description: "Submit your shipping requirements and get a detailed quote within 24 hours",
      step: "01",
    },
    {
      icon: Truck,
      title: "Pickup & Processing",
      description: "We collect your goods and handle all documentation and customs procedures",
      step: "02",
    },
    {
      icon: MapPin,
      title: "Transportation",
      description: "Your cargo is transported via the most efficient route using our global network",
      step: "03",
    },
    {
      icon: CheckCircle,
      title: "Delivery",
      description: "Safe delivery to destination with real-time tracking and confirmation",
      step: "04",
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
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">How We Work</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Our streamlined process ensures efficient and reliable logistics solutions from start to finish
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative"
            >
              <Card className="bg-gray-800 border-gray-700 hover:border-purple-500 transition-colors duration-300 relative">
                <CardContent className="p-6 text-center">
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center">
                      <span className="text-white font-bold text-sm">{step.step}</span>
                    </div>
                  </div>
                  <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4 mt-4">
                    <step.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{step.title}</h3>
                  <p className="text-gray-400 leading-relaxed">{step.description}</p>
                </CardContent>
              </Card>
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gray-600 transform -translate-y-1/2" />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
