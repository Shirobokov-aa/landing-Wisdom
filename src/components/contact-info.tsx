"use client"

import { motion } from "framer-motion"
import { MapPin, Mail, Star } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

export function ContactInfo() {
  return (
    <section className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Left side - Contact Information */}
          <div className="lg:col-span-2">
            <motion.div
              className="mb-12"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <p className="text-gray-600 text-lg mb-2">Get in touch</p>
              <h2 className="text-4xl md:text-5xl font-bold text-orange-500 mb-8">Contact Information</h2>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Location Card */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <Card className="bg-white shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <CardContent className="p-8 text-center">
                    <div className="w-20 h-20 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-6">
                      <MapPin className="w-10 h-10 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-800 mb-4">Location</h3>
                    <div className="text-gray-600 leading-relaxed">
                      <p>Global Business Center</p>
                      <p>Level 15, Tower A</p>
                      <p>International Trade District</p>
                      <p>New York, USA</p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Email Card */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="bg-white shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <CardContent className="p-8 text-center">
                    <div className="w-20 h-20 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-6">
                      <Mail className="w-10 h-10 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-800 mb-4">Send Email</h3>
                    <a
                      href="mailto:info@wisdom.pro"
                      className="text-purple-600 hover:text-purple-800 text-lg font-medium underline"
                    >
                      info@wisdom.pro
                    </a>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>

          {/* Right side - Trust Score */}
          <div className="lg:col-span-1">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="bg-white shadow-lg">
                <CardContent className="p-8 text-center">
                  <h3 className="text-xl font-bold text-gray-800 mb-6">Our Best Logistics Services, Trust Score 4.9</h3>
                  <div className="flex justify-center space-x-1 mb-6">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star key={star} className="w-8 h-8 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <div className="space-y-4 text-gray-600">
                    <div className="flex justify-between">
                      <span>On-time delivery</span>
                      <span className="font-semibold">99.8%</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Customer satisfaction</span>
                      <span className="font-semibold">98.5%</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Global coverage</span>
                      <span className="font-semibold">50+ countries</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Years of experience</span>
                      <span className="font-semibold">15+ years</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
