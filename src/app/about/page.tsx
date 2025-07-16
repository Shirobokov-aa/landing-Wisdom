import { CardContent } from "@/components/ui/card"
import { CardTitle } from "@/components/ui/card"
import { Card } from "@/components/ui/card"
import type React from "react"
import Image from "next/image"
import { CheckCircle } from "lucide-react"

export default function AboutPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section for About */}
      <section className="relative h-[400px] w-full overflow-hidden bg-zinc-900">
        <Image
          src="/images/desktop-1920x918-v01-shipping-internationally.webp"
          alt="Global logistics background"
          layout="fill"
          objectFit="cover"
          className="absolute inset-0 z-0 opacity-30"
        />
        <div className="relative z-10 flex h-full flex-col items-center justify-center px-4 text-center text-zinc-50">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">About Us</h1>
          <p className="mt-4 max-w-2xl text-lg md:text-xl">Your trusted partner in global import & export trade.</p>
        </div>
      </section>

      {/* Company Overview */}
      <section className="bg-zinc-950 py-16 md:py-24">
        <div className="container mx-auto grid items-center gap-8 px-4 md:grid-cols-2 lg:gap-16">
          <div className="relative h-64 w-full md:h-96">
            <Image
              src="/images/operations.jpg"
              alt="Team working in a warehouse"
              layout="fill"
              objectFit="cover"
              className="rounded-lg shadow-lg"
            />
          </div>
          <div className="space-y-6">
            <h2 className="text-3xl font-bold tracking-tight text-primary sm:text-4xl">Our Story & Mission</h2>
            <p className="text-lg text-zinc-300">
              WISDOM SPRING SOURCE LIMITED was founded in Hong Kong with a clear vision: to simplify and optimize
              international trade for businesses worldwide. We understand the complexities of global logistics and
              customs, and our mission is to provide seamless, efficient, and reliable import and export solutions.
            </p>
            <p className="text-lg text-zinc-300">
              With years of experience in the industry, we have built a reputation for excellence, integrity, and a
              client-centric approach. We pride ourselves on being a bridge that connects diverse markets, enabling our
              clients to expand their reach and achieve their business goals.
            </p>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="bg-zinc-900 py-16 md:py-24">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-primary sm:text-4xl">Our Core Values</h2>
          <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <ValueCard
              icon={<CheckCircle className="h-8 w-8 text-primary" />}
              title="Reliability"
              description="We are committed to delivering on our promises, ensuring your goods arrive safely and on time."
            />
            <ValueCard
              icon={<CheckCircle className="h-8 w-8 text-primary" />}
              title="Efficiency"
              description="Our streamlined processes and expert team ensure quick and cost-effective trade operations."
            />
            <ValueCard
              icon={<CheckCircle className="h-8 w-8 text-primary" />}
              title="Integrity"
              description="We operate with the highest ethical standards, fostering trust and transparency in all dealings."
            />
            <ValueCard
              icon={<CheckCircle className="h-8 w-8 text-primary" />}
              title="Client Focus"
              description="Your success is our priority. We tailor solutions to meet your unique needs and challenges."
            />
            <ValueCard
              icon={<CheckCircle className="h-8 w-8 text-primary" />}
              title="Global Reach"
              description="Leveraging our extensive network to connect you with markets across the globe."
            />
            <ValueCard
              icon={<CheckCircle className="h-8 w-8 text-primary" />}
              title="Innovation"
              description="Continuously seeking new ways to enhance our services and adapt to market changes."
            />
          </div>
        </div>
      </section>

      {/* Expertise Section */}
      <section className="bg-zinc-950 py-16 md:py-24">
        <div className="container mx-auto grid items-center gap-8 px-4 md:grid-cols-2 lg:gap-16">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold tracking-tight text-primary sm:text-4xl">Our Expertise</h2>
            <p className="text-lg text-zinc-300">
              With deep knowledge of international trade regulations, logistics, and market dynamics, WISDOM SPRING
              SOURCE LIMITED is equipped to handle diverse trade requirements. Our team comprises specialists in:
            </p>
            <ul className="space-y-2 text-lg text-zinc-300">
              <li className="flex items-center">
                <CheckCircle className="mr-2 h-5 w-5 text-primary" /> Customs & Compliance
              </li>
              <li className="flex items-center">
                <CheckCircle className="mr-2 h-5 w-5 text-primary" /> Supply Chain Management
              </li>
              <li className="flex items-center">
                <CheckCircle className="mr-2 h-5 w-5 text-primary" /> Global Market Analysis
              </li>
              <li className="flex items-center">
                <CheckCircle className="mr-2 h-5 w-5 text-primary" /> Freight Forwarding
              </li>
              <li className="flex items-center">
                <CheckCircle className="mr-2 h-5 w-5 text-primary" /> Risk Management in Trade
              </li>
            </ul>
          </div>
          <div className="relative h-64 w-full md:h-96">
            <Image
              src="/images/operations.jpg"
              alt="Global trade map"
              layout="fill"
              objectFit="cover"
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
      </section>
    </div>
  )
}

interface ValueCardProps {
  icon: React.ReactNode
  title: string
  description: string
}

function ValueCard({ icon, title, description }: ValueCardProps) {
  return (
    <Card className="flex flex-col items-center p-6 text-center bg-zinc-800 text-zinc-50 shadow-lg">
      <div className="mb-4">{icon}</div>
      <CardTitle className="text-xl font-semibold text-primary">{title}</CardTitle>
      <CardContent className="mt-2 p-0">
        <p className="text-zinc-300">{description}</p>
      </CardContent>
    </Card>
  )
}
