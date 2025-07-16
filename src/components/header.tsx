"use client"

import { motion } from "framer-motion"
import { Clock, Mail } from "lucide-react"
import Link from "next/link"

export function Header() {
  return (
    <header className="bg-gray-800 border-b border-gray-700">
      {/* Top bar */}
      <div className="bg-gray-900 text-gray-300 py-2">
        <div className="container mx-auto px-4 flex justify-between items-center text-sm">
          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-2">
              <Clock className="w-4 h-4" />
              <span>MON - FRI: 08:00 AM - 17:30 PM</span>
            </div>
          </div>
          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-2">
              <Mail className="w-4 h-4" />
              <span>Support: info@wisdom.pro</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main header */}
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <motion.div
            className="flex items-center space-x-3"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="w-10 h-10 bg-purple-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">W</span>
            </div>
            <div>
              <h1 className="text-white font-bold text-xl">WISDOM</h1>
              <p className="text-gray-400 text-sm">SPRING SOURCE LIMITED</p>
            </div>
          </motion.div>

          <nav className="hidden md:flex space-x-8">
            <Link href="/" className="text-white hover:text-purple-400 px-3 py-2 transition-colors">
              HOME
            </Link>
            <Link href="/service" className="text-gray-300 hover:text-purple-400 px-3 py-2 transition-colors">
              SERVICES
            </Link>
            <Link href="/contacts" className="text-gray-300 hover:text-purple-400 px-3 py-2 transition-colors">
              CONTACTS
            </Link>
          </nav>
        </div>
      </div>
    </header>
  )
}
