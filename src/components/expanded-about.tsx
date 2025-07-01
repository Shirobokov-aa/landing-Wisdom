"use client"

import { motion } from "framer-motion"
import { Shield, Clock, Users, Award } from "lucide-react"
import Image from "next/image"

export function ExpandedAbout() {
  return (
    <section className="py-20 bg-gray-800">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left side - Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Leading the Future of Global Logistics</h2>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              For over 15 years, Wisdom has been at the forefront of international logistics, connecting businesses
              across continents with reliable, efficient, and innovative shipping solutions.
            </p>

            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Shield className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">Secure & Insured</h3>
                  <p className="text-gray-400">
                    All shipments are fully insured and handled with the highest security standards to ensure your goods
                    arrive safely.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Clock className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">Time-Critical Delivery</h3>
                  <p className="text-gray-400">
                    Our advanced logistics network ensures on-time delivery with real-time tracking and proactive
                    communication.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">Expert Team</h3>
                  <p className="text-gray-400">
                    Our experienced logistics professionals provide personalized service and expert guidance for all
                    your shipping needs.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Award className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">Industry Recognition</h3>
                  <p className="text-gray-400">
                    Certified by international logistics associations and recognized for excellence in customer service
                    and reliability.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right side - Image */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative">
              <Image
                src="/images/operations.jpg"
                width={500}
                height={500}
                alt="Logistics operations"
                className="w-full h-96 object-cover rounded-lg"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-lg" />

              {/* Floating stats card */}
              <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-sm rounded-lg p-6">
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div>
                    <h4 className="text-2xl font-bold text-gray-800">15+</h4>
                    <p className="text-gray-600 text-sm">Years Experience</p>
                  </div>
                  <div>
                    <h4 className="text-2xl font-bold text-gray-800">50+</h4>
                    <p className="text-gray-600 text-sm">Countries</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
