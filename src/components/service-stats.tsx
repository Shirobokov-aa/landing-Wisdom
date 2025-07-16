"use client"

import { motion } from "framer-motion"
import { TrendingUp, Globe, Users, Award } from "lucide-react" // Updated icons

export function ServiceStats() {
  const stats = [
    {
      icon: TrendingUp,
      number: "15,000+",
      label: "Successful Trades",
      description: "Transactions completed in the past year",
    },
    {
      icon: Globe,
      number: "50+",
      label: "Countries Traded",
      description: "Global market reach",
    },
    {
      icon: Users,
      number: "2,500+",
      label: "Satisfied Partners",
      description: "Trusted by businesses worldwide",
    },
    {
      icon: Award,
      number: "99.8%",
      label: "Trade Efficiency",
      description: "Streamlined processes for optimal trade flow",
    },
  ]

  return (
    <section className="py-20 bg-gray-800">
      <div className="container mx-auto px-4">
        <motion.div
          className="mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Number of orders and goods in the past year
          </h2>
          <div className="w-24 h-1 bg-orange-500 mb-8"></div>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <p className="text-orange-500 font-semibold text-lg mb-2">WE ARE THE BEST</p>
              <h3 className="text-2xl font-bold text-white mb-4">About the field of import and export</h3>
              <p className="text-gray-300 leading-relaxed">
                With over a decade of experience in international import and export trade, Wisdom has established itself
                as a leading provider of comprehensive sourcing and wholesale distribution solutions. Our commitment to
                excellence and partner satisfaction drives everything we do.
              </p>
            </div>
            <div>
              <p className="text-white font-semibold text-lg mb-4">Goods from Global Markets</p>
              <p className="text-gray-300 leading-relaxed">
                We facilitate the movement of millions of tons of goods annually, connecting businesses across
                continents with reliable and cost-effective trade solutions. From raw materials to finished products, we
                ensure your goods are sourced and distributed efficiently.
              </p>
            </div>
          </div>
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
              <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <stat.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-3xl font-bold text-white mb-2">{stat.number}</h3>
              <p className="text-orange-500 font-semibold mb-2">{stat.label}</p>
              <p className="text-gray-400 text-sm">{stat.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
