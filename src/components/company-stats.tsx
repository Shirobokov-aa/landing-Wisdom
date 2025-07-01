"use client"

import { motion } from "framer-motion"
import { TrendingUp, Users, Globe, Award } from "lucide-react"

export function CompanyStats() {
  const stats = [
    {
      icon: TrendingUp,
      number: "15K+",
      label: "Successful Deliveries",
      description: "Completed shipments worldwide",
    },
    {
      icon: Users,
      number: "2.5K+",
      label: "Happy Clients",
      description: "Trusted business partners",
    },
    {
      icon: Globe,
      number: "50+",
      label: "Countries Served",
      description: "Global network coverage",
    },
    {
      icon: Award,
      number: "99.8%",
      label: "Success Rate",
      description: "On-time delivery guarantee",
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
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Our Achievements</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Numbers that speak for our commitment to excellence in global logistics
          </p>
        </motion.div>

        <div className="grid md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className="text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="w-20 h-20 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <stat.icon className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-4xl font-bold text-white mb-2">{stat.number}</h3>
              <p className="text-orange-500 font-semibold text-lg mb-2">{stat.label}</p>
              <p className="text-gray-400">{stat.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
