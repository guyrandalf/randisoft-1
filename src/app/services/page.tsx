"use client"

import { motion } from "framer-motion"
import { useState, useEffect } from "react"
import Container from "@/components/layout/container"
import Breadcrumb from "@/components/layout/breadcrumb"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import {
  RiComputerLine,
  RiSmartphoneLine,
  RiCodeBoxLine,
  RiTimeLine,
  RiLightbulbLine,
  RiTeamLine,
  RiPlantLine,
  RiHeartPulseLine,
  RiBuilding4Line,
  RiCheckLine,
} from "react-icons/ri"

const services = [
  {
    id: "skills",
    title: "Skills Marketplace",
    description: "Our platform bridges the gap between skilled professionals and those who need their services, ensuring quality through verification and ratings.",
    icon: RiTeamLine,
    palette: "skills-palette",
    features: [
      "Verified service provider profiles",
      "Secure payment processing",
      "Rating and review system",
      "Service quality guarantee",
    ],
  },
  {
    id: "information",
    title: "Information Platform",
    description: "A centralized hub for verified public and government information to combat misinformation and improve citizen access to resources.",
    icon: RiCodeBoxLine,
    palette: "information-palette",
    features: [
      "Verified government information",
      "Simplified process guides",
      "Document templates and generators",
      "Updates on policy changes",
    ],
  },
  {
    id: "agrotech",
    title: "Agrotech Platform",
    description: "A solution focused on solving farming challenges in Nigeria including market access, productivity improvements, and supply chain optimization.",
    icon: RiPlantLine,
    palette: "agrotech-palette",
    features: [
      "Market access for farmers",
      "Supply chain optimization",
      "Productivity tools and resources",
      "Agricultural best practices",
    ],
  },
  {
    id: "healthcare",
    title: "Healthcare Solutions",
    description: "A digital ecosystem for accessible and affordable healthcare in Nigeria, connecting patients with providers and improving health information access.",
    icon: RiHeartPulseLine,
    palette: "healthcare-palette",
    features: [
      "Electronic health records",
      "Appointment scheduling",
      "Medication tracking",
      "Telemedicine capabilities",
    ],
  },
  {
    id: "staffing",
    title: "Staffing/Recruiting",
    description: "We connect businesses with skilled professionals across various industries, helping them find the right talent for their specific needs.",
    icon: RiBuilding4Line,
    palette: "outsourcing-palette",
    features: [
      "Talent sourcing and recruitment",
      "Cross-industry expertise",
      "Professional development",
      "Scalable workforce solutions",
    ],
  },
]

export default function ServicesPage() {
  const [activeService, setActiveService] = useState("skills")
  const [mounted, setMounted] = useState(false)

  // Set mounted state to true after component mounts to avoid hydration issues
  useEffect(() => {
    setMounted(true)
  }, [])

  // Get the active service object
  const currentService = services.find(service => service.id === activeService) || services[0]

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className={`pt-24 ${mounted ? currentService.palette : ''}`}
    >
      <Container>
        <Breadcrumb />

        <div className="py-12">
          {/* Service Navigation */}
          <div className="flex flex-wrap gap-2 mb-12 border-b pb-4">
            {services.map((service) => (
              <Button
                key={service.id}
                variant={activeService === service.id ? "default" : "outline"}
                onClick={() => setActiveService(service.id)}
                className="mb-2"
              >
                <service.icon className="mr-2 h-4 w-4" />
                {service.title}
              </Button>
            ))}
          </div>

          {/* Hero Banner */}
          <div className="bg-muted/30 p-8 rounded-xl mb-12">
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-lg bg-primary/10 text-primary">
                <currentService.icon className="w-6 h-6" />
              </div>
              <div>
                <h2 className="text-2xl font-semibold mb-2">{currentService.title}</h2>
                <p className="text-muted-foreground mb-4">
                  {currentService.description}
                </p>
                <div className="flex flex-wrap gap-3">
                  <Button asChild size="sm">
                    <Link href="/products">Explore Our Products</Link>
                  </Button>
                  <Button asChild variant="outline" size="sm">
                    <Link href="/products#beta">Join Our Beta</Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>

          <h1 className="text-4xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            {currentService.id === "staffing" ? "Talent & Business Solutions" : "Digital Platform"}
          </h1>

          <p className="text-xl text-muted-foreground mb-12 max-w-3xl">
            {currentService.id === "staffing"
              ? "Connect with top industry professionals and find the right talent for your business needs with our comprehensive staffing and recruiting solutions."
              : "Our digital platforms are designed to solve real problems for Nigerian businesses and individuals, focusing on innovation and accessibility."}
          </p>

          {/* Main Content */}
          <div className="grid md:grid-cols-2 gap-12 mb-16">
            {/* Left Column - Features */}
            <div>
              <h2 className="text-2xl font-semibold mb-6">Key Features</h2>
              <ul className="space-y-4 mb-8">
                {currentService.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <div className="p-2 rounded-lg bg-primary/10 text-primary mt-1 flex-shrink-0">
                      <RiCheckLine className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="font-medium">{feature}</span>
                    </div>
                  </li>
                ))}
              </ul>

              {currentService.id === "staffing" && (
                <div className="bg-card p-6 rounded-xl shadow-md mt-8">
                  <h3 className="text-xl font-semibold mb-4">For Businesses</h3>
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">✓</span>
                      <span>Access to vetted industry professionals</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">✓</span>
                      <span>Flexible engagement models</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">✓</span>
                      <span>Reduced operational overhead</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">✓</span>
                      <span>Focus on core business objectives</span>
                    </li>
                  </ul>
                  <Button asChild className="w-full">
                    <Link href="/contact">Hire Talent</Link>
                  </Button>
                </div>
              )}
            </div>

            {/* Right Column - Additional Info */}
            <div>
              {currentService.id === "staffing" ? (
                <div className="bg-card p-6 rounded-xl shadow-md">
                  <h3 className="text-xl font-semibold mb-4">For Professionals</h3>
                  <p className="text-muted-foreground mb-6">
                    Join our network of skilled professionals and connect with businesses looking for your expertise. We provide opportunities across various industries.
                  </p>
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-start gap-2">
                      <span className="text-secondary mt-1">✓</span>
                      <span>Access to quality projects and clients</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-secondary mt-1">✓</span>
                      <span>Professional development opportunities</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-secondary mt-1">✓</span>
                      <span>Competitive compensation</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-secondary mt-1">✓</span>
                      <span>Flexible work arrangements</span>
                    </li>
                  </ul>
                  <Button asChild variant="outline" className="w-full">
                    <Link href="/contact">Join Our Talent Network</Link>
                  </Button>
                </div>
              ) : (
                <div className="bg-card p-6 rounded-xl shadow-md">
                  <h3 className="text-xl font-semibold mb-4">Why Choose Our Platform</h3>
                  <p className="text-muted-foreground mb-6">
                    Our {currentService.title} is designed with Nigerian users in mind, addressing specific challenges and providing innovative solutions.
                  </p>
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-lg bg-secondary/10">
                        <RiLightbulbLine className="w-5 h-5 text-secondary" />
                      </div>
                      <h4 className="font-medium">Innovative Approach</h4>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-lg bg-secondary/10">
                        <RiTimeLine className="w-5 h-5 text-secondary" />
                      </div>
                      <h4 className="font-medium">Time-Saving Solutions</h4>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-lg bg-secondary/10">
                        <RiTeamLine className="w-5 h-5 text-secondary" />
                      </div>
                      <h4 className="font-medium">Community-Focused</h4>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Call to Action */}
          <div className="mt-16 pt-12 border-t">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-2xl font-semibold mb-4">Ready to Get Started?</h2>
                <p className="text-muted-foreground mb-6">
                  Whether you're interested in our digital platforms or our staffing/recruiting services, we're here to help you achieve your goals.
                </p>
                <Button asChild>
                  <Link href="/contact">Contact Us Today</Link>
                </Button>
              </div>
              <div className="bg-gradient-to-r from-primary/10 to-secondary/10 p-6 rounded-xl">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 rounded-full bg-primary/20 text-primary">
                    <RiLightbulbLine className="w-5 h-5" />
                  </div>
                  <h3 className="text-lg font-semibold">Innovation at the Core</h3>
                </div>
                <p className="text-muted-foreground">
                  At Randisoft, we're committed to building innovative solutions that address real challenges in Nigeria. Our approach combines technology expertise with deep understanding of local needs.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </motion.div>
  )
}
