"use client"

import { motion } from "framer-motion"
import { Mail, Phone, MapPin, Clock } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-black text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-12">
          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-10 h-10 bg-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">W</span>
              </div>
              <div>
                <h3 className="text-xl font-bold">WISDOM</h3>
                <p className="text-gray-400 text-sm">SPRING SOURCE LIMITED</p>
              </div>
            </div>
            <p className="text-gray-300 leading-relaxed">
              Your trusted partner in global logistics and international trade. We deliver excellence in every shipment.
            </p>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h4 className="text-xl font-semibold mb-6">Contact Information</h4>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-purple-400" />
                <span className="text-gray-300">info@wisdom.pro</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-purple-400" />
                <span className="text-gray-300">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-purple-400" />
                <span className="text-gray-300">Premises 704C, 7/F, Block 3, Nan Fung Industrial City, Tuen Mun, HK</span>
              </div>
            </div>
          </motion.div>

          {/* Business Hours */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="text-xl font-semibold mb-6">Business Hours</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Clock className="w-5 h-5 text-purple-400" />
                <div>
                  <p className="text-gray-300">Monday - Friday</p>
                  <p className="text-gray-400 text-sm">08:00 AM - 17:30 PM</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Clock className="w-5 h-5 text-purple-400" />
                <div>
                  <p className="text-gray-300">24/7 Support</p>
                  <p className="text-gray-400 text-sm">Emergency logistics</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center">
          <p className="text-gray-400">© 2025 Wisdom Logistics Limited. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
