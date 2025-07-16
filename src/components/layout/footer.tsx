import Link from "next/link"
import { MapPin, Clock, Mail } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-zinc-900 py-12 text-zinc-400">
      <div className="container mx-auto grid grid-cols-1 gap-8 px-4 md:grid-cols-3 lg:grid-cols-4">
        {/* Company Info */}
        <div className="space-y-4">
          <h3 className="text-xl font-bold text-primary">WISDOM SPRING SOURCE LIMITED</h3>
          <p className="text-sm">
            Your trusted partner in global import & export trade. Connecting businesses worldwide from the heart of Hong
            Kong.
          </p>
        </div>

        {/* Contact Info */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-zinc-50">Contact Us</h3>
          <div className="space-y-2 text-sm">
            <div className="flex items-start">
              <MapPin className="mr-2 h-5 w-5 flex-shrink-0 text-primary" />
              <span>Premises 704C, 7/F, Block 3, Nan Fung Industrial City, Tuen Mun, HK</span>
            </div>
            <div className="flex items-center">
              <Clock className="mr-2 h-5 w-5 text-primary" />
              <span>MON - FRI: 08:00 - 17:30</span>
            </div>
            <div className="flex items-center">
              <Mail className="mr-2 h-5 w-5 text-primary" />
              <a href="mailto:info@wisdomspringsource.com" className="hover:underline">
                info@wisdomspringsource.com
              </a>
            </div>
          </div>
        </div>

        {/* Quick Links */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-zinc-50">Quick Links</h3>
          <nav className="flex flex-col space-y-2 text-sm">
            <Link href="/" className="hover:text-primary hover:underline">
              Home
            </Link>
            <Link href="/about" className="hover:text-primary hover:underline">
              About Us
            </Link>
            <Link href="/contact" className="hover:text-primary hover:underline">
              Contacts
            </Link>
            {/* Add more links if needed, e.g., Services */}
            <Link href="/#services" className="hover:text-primary hover:underline">
              Services
            </Link>
          </nav>
        </div>

        {/* Social Media / Newsletter (Optional, keeping it simple as per request) */}
        {/* <div className="space-y-4">
          <h3 className="text-lg font-semibold text-zinc-50">Follow Us</h3>
          <div className="flex space-x-4">
            <Link href="#" className="text-zinc-400 hover:text-primary">
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path
                  fillRule="evenodd"
                  d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33V22C17.343 21.128 22 16.991 22 12z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="sr-only">Facebook</span>
            </Link>
            <Link href="#" className="text-zinc-400 hover:text-primary">
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.007-.532A8.318 8.318 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 014 9.659v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
              </svg>
              <span className="sr-only">Twitter</span>
            </Link>
          </div>
        </div> */}
      </div>

      <div className="mt-8 border-t border-zinc-800 pt-8 text-center text-sm text-zinc-500">
        &copy; {new Date().getFullYear()} WISDOM SPRING SOURCE LIMITED. All rights reserved.
      </div>
    </footer>
  )
}
