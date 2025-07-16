"use client"

import type React from "react"

import Link from "next/link"
import { Menu, Mail, Clock } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

export default function Header() {
  return (
    <header className="w-full bg-zinc-900 text-zinc-50 shadow-md">
      {/* Top Bar */}
      <div className="bg-zinc-800 py-2 text-sm text-zinc-400">
        <div className="container mx-auto flex flex-col items-center justify-between px-4 md:flex-row">
          <div className="flex items-center space-x-4">
            <span className="flex items-center">
              <Clock className="mr-1 h-4 w-4" /> MON - FRI: 08:00 - 17:30
            </span>
            <a href="mailto:info@wisdomspringsource.com" className="flex items-center hover:underline">
              <Mail className="mr-1 h-4 w-4" /> info@wisdomspringsource.com
            </a>
          </div>
          <div className="hidden md:flex items-center space-x-4">{/* Add any other top bar links if needed */}</div>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="container mx-auto flex h-20 items-center justify-between px-4">
        <Link href="/" className="flex items-center text-2xl font-bold text-primary">
          WISDOM SPRING SOURCE
        </Link>

        <nav className="hidden md:flex space-x-6">
          <NavLink href="/">Home</NavLink>
          <NavLink href="/about">About Us</NavLink>
          <NavLink href="/contact">Contacts</NavLink>
        </nav>

        {/* Mobile Navigation */}
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="md:hidden">
              <Menu className="h-6 w-6" />
              <span className="sr-only">Toggle navigation menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="bg-zinc-900 text-zinc-50">
            <div className="flex flex-col gap-4 py-6">
              <NavLink href="/">Home</NavLink>
              <NavLink href="/about">About Us</NavLink>
              <NavLink href="/contact">Contacts</NavLink>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  )
}

function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link
      href={href}
      className="text-lg font-medium transition-colors hover:text-primary focus:text-primary focus:outline-none"
    >
      {children}
    </Link>
  )
}
