import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function HomePage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative h-[600px] w-full overflow-hidden bg-zinc-900">
        <Image
          src="/images/hero.png"
          alt="Truck on a highway"
          layout="fill"
          objectFit="cover"
          className="absolute inset-0 z-0 opacity-30"
        />
        <div className="relative z-10 flex h-full flex-col items-center justify-center px-4 text-center text-zinc-50">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
          WISDOM SPRING SOURCE
          </h1>
          <p className="mt-4 max-w-3xl text-lg md:text-xl">
            WISDOM SPRING SOURCE LIMITED is a Hong Kong-based company specializing in international import and export
            trade. Our expertise spans a wide range of industries, ensuring efficient solutions for your business.
          </p>
          <Button asChild className="mt-8 bg-primary text-primary-foreground hover:bg-primary/90">
            <Link href="/about">Learn More</Link>
          </Button>
        </div>
      </section>

      {/* About Section */}
      <section className="bg-zinc-950 py-16 md:py-24">
        <div className="container mx-auto grid items-center gap-8 px-4 md:grid-cols-2 lg:gap-16">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold tracking-tight text-primary sm:text-4xl">About WISDOM SPRING SOURCE</h2>
            <p className="text-lg text-zinc-300">
              WISDOM SPRING SOURCE LIMITED is a Hong Kong-based company specializing in import and export trade. Our
              services cover a wide range of industries, including electronics, machinery, and consumer goods, ensuring
              efficient trade operations.
            </p>
            <p className="text-lg text-zinc-300">
              We are committed to delivering top-quality service, backed by a team of experienced professionals who
              understand the intricacies of international trade.
            </p>
            <Button
              asChild
              variant="outline"
              className="border-primary text-primary hover:bg-primary/10 bg-transparent"
            >
              <Link href="/about">
                See Detail <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
          <div className="relative h-64 w-full md:h-96">
            <Image
              src="/images/OceanFreightOperations.webp"
              alt="Person handling a package"
              layout="fill"
              objectFit="cover"
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="bg-zinc-900 py-16 md:py-24">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-primary sm:text-4xl">Our Services</h2>
          <p className="mt-4 text-lg text-zinc-300">
            WISDOM SPRING SOURCE offers a wide range of services in international trade, including import/export, global
            sourcing, customs clearance, and more.
          </p>
          <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <ServiceCard
              title="Import/Export"
              description="Seamless global trade solutions for various goods."
              imageSrc="/images/PortOperations.jpg"
            />
            <ServiceCard
              title="Global Sourcing"
              description="Connecting you with reliable suppliers worldwide."
              imageSrc="/images/AirCargoServices.jpg"
            />
            <ServiceCard
              title="Customs Clearance"
              description="Efficient handling of all customs procedures."
              imageSrc="/images/custom.webp"
            />
            <ServiceCard
              title="Warehousing Solutions"
              description="Secure and optimized storage for your goods."
              imageSrc="/images/WarehouseFacilities.jpg"
            />
            <ServiceCard
              title="Trade Consulting"
              description="Expert advice to navigate complex trade regulations."
              imageSrc="/images/LogisticsTechnology.jpg"
            />
            <ServiceCard
              title="Supply Chain Optimization"
              description="Streamlining your logistics for maximum efficiency."
              imageSrc="/images/modern-office-interior.jpg"
            />
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="bg-zinc-950 py-16 md:py-24">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold tracking-tight text-primary sm:text-4xl text-center">
            Why Choose WISDOM SPRING SOURCE
          </h2>
          <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-2">
            <div className="flex flex-col items-center gap-6 md:flex-row">
              <div className="relative h-48 w-full md:h-32 md:w-48 flex-shrink-0">
                <Image
                  src="/images/service-hero.png"
                  alt="Global Trade"
                  layout="fill"
                  objectFit="cover"
                  className="rounded-lg shadow-md"
                />
              </div>
              <div className="text-center md:text-left">
                <h3 className="text-xl font-semibold text-zinc-50">Seamless Global Trade</h3>
                <p className="mt-2 text-zinc-300">
                  We simplify import/export processes, ensuring your goods reach their destination without delays. Our
                  focus is on providing exceptional service and unmatched reliability.
                </p>
              </div>
            </div>
            <div className="flex flex-col items-center gap-6 md:flex-row">
              <div className="relative h-48 w-full md:h-32 md:w-48 flex-shrink-0">
                <Image
                  src="/images/GroundTransportation.png"
                  alt="Customized Solutions"
                  layout="fill"
                  objectFit="cover"
                  className="rounded-lg shadow-md"
                />
              </div>
              <div className="text-center md:text-left">
                <h3 className="text-xl font-semibold text-zinc-50">Customized Solutions</h3>
                <p className="mt-2 text-zinc-300">
                  We understand the unique needs of every client and provide tailor-made solutions to meet your trade
                  requirements. From sourcing to delivery, we handle it all.
                </p>
              </div>
            </div>
            <div className="flex flex-col items-center gap-6 md:flex-row">
              <div className="relative h-48 w-full md:h-32 md:w-48 flex-shrink-0">
                <Image
                  src="/images/1695621316038.jfif"
                  alt="Trusted Partner"
                  layout="fill"
                  objectFit="cover"
                  className="rounded-lg shadow-md"
                />
              </div>
              <div className="text-center md:text-left">
                <h3 className="text-xl font-semibold text-zinc-50">Trusted Partner in Asia-Pacific</h3>
                <p className="mt-2 text-zinc-300">
                  As a Hong Kong-based company, we leverage our regional expertise to connect businesses across the
                  globe. Trust WISDOM SPRING SOURCE to grow your presence in the Asia-Pacific market.
                </p>
              </div>
            </div>
            <div className="flex flex-col items-center gap-6 md:flex-row">
              <div className="relative h-48 w-full md:h-32 md:w-48 flex-shrink-0">
                <Image
                  src="/images/Global-Trade-EA-Thumb.jpg"
                  alt="Global Trade Expansion"
                  layout="fill"
                  objectFit="cover"
                  className="rounded-lg shadow-md"
                />
              </div>
              <div className="text-center md:text-left">
                <h3 className="text-xl font-semibold text-zinc-50">Global Trade Expansion</h3>
                <p className="mt-2 text-zinc-300">
                  WISDOM SPRING SOURCE is expanding its operations to new markets, increasing its presence globally.
                  Stay updated on our latest developments and news.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

interface ServiceCardProps {
  title: string
  description: string
  imageSrc: string
}

function ServiceCard({ title, description, imageSrc }: ServiceCardProps) {
  return (
    <Card className="overflow-hidden rounded-lg bg-zinc-800 text-zinc-50 shadow-lg transition-transform hover:scale-105">
      <div className="relative h-48 w-full">
        <Image
          src={imageSrc || "/placeholder.svg"}
          alt={title}
          layout="fill"
          objectFit="cover"
          className="rounded-t-lg"
        />
      </div>
      <CardHeader>
        <CardTitle className="text-primary">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-zinc-300">{description}</p>
      </CardContent>
    </Card>
  )
}
