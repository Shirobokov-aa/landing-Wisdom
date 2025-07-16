import type React from "react"
import Image from "next/image"
import { MapPin, Clock, Mail } from "lucide-react"

export default function ContactPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section for Contact */}
      <section className="relative h-[400px] w-full overflow-hidden bg-zinc-900">
        <Image
          src="/images/modern-office-interior.jpg"
          alt="Contact us background"
          layout="fill"
          objectFit="cover"
          className="absolute inset-0 z-0 opacity-30"
        />
        <div className="relative z-10 flex h-full flex-col items-center justify-center px-4 text-center text-zinc-50">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">Contact Us</h1>
          <p className="mt-4 max-w-2xl text-lg md:text-xl">
            We are here to help you with your import and export needs.
          </p>
        </div>
      </section>

      {/* Contact Details Section */}
      <section className="bg-zinc-950 py-16 md:py-24">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-primary sm:text-4xl">Get in Touch</h2>
          <p className="mt-4 text-lg text-zinc-300 max-w-2xl mx-auto">
            Reach out to WISDOM SPRING SOURCE LIMITED using the details below. We look forward to assisting you.
          </p>

          <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            <ContactInfoCard
              icon={<MapPin className="h-8 w-8 text-primary" />}
              title="Our Address"
              content="Premises 704C, 7/F, Block 3, Nan Fung Industrial City, Tuen Mun, HK"
            />
            <ContactInfoCard
              icon={<Clock className="h-8 w-8 text-primary" />}
              title="Working Hours"
              content="Monday - Friday: 08:00 - 17:30"
            />
            <ContactInfoCard
              icon={<Mail className="h-8 w-8 text-primary" />}
              title="Email Us"
              content="info@wisdomspringsource.com"
              isLink={true}
              linkHref="mailto:info@wisdomspringsource.com"
            />
            {/* Optional: Add a phone number if desired, keeping it simple as per request */}
            {/* <ContactInfoCard
            icon={<Phone className="h-8 w-8 text-primary" />}
            title="Call Us"
            content="+852 1234 5678"
            isLink={true}
            linkHref="tel:+85212345678"
          /> */}
          </div>
        </div>
      </section>
    </div>
  )
}

interface ContactInfoCardProps {
  icon: React.ReactNode
  title: string
  content: string
  isLink?: boolean
  linkHref?: string
}

function ContactInfoCard({ icon, title, content, isLink = false, linkHref }: ContactInfoCardProps) {
  return (
    <div className="flex flex-col items-center space-y-4 rounded-lg bg-zinc-800 p-6 shadow-lg">
      {icon}
      <h3 className="text-xl font-semibold text-primary">{title}</h3>
      {isLink ? (
        <a href={linkHref} className="text-lg text-zinc-300 hover:underline">
          {content}
        </a>
      ) : (
        <p className="text-lg text-zinc-300">{content}</p>
      )}
    </div>
  )
}
