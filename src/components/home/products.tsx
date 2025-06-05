"use client"

import Container from "@/components/layout/container"
import { motion } from "framer-motion"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import {
  RiTeamLine,
  RiMapPinLine,
  RiCustomerService2Line,
  RiCodeLine,
} from "react-icons/ri"

const products = [
  {
    title: "Skills Marketplace",
    description:
      "Connecting Nigerians with verified service providers",
    icon: RiTeamLine,
    status: "Coming 2025",
    features: ["Verified Providers", "Secure Payments", "Rating System"],
    href: "/products#skills",
  },
  {
    title: "Information Platform",
    description:
      "Simplifying access to government services and citizen rights",
    icon: RiMapPinLine,
    status: "Coming 2026",
    features: ["Document Access", "Process Guides", "Official Updates"],
    href: "/products#information",
  },
  {
    title: "Healthcare Solutions",
    description:
      "Improving healthcare access and information",
    icon: RiCustomerService2Line,
    status: "Coming 2027",
    features: ["Patient Records", "Appointment Booking", "Medication Tracking"],
    href: "/products#healthcare",
  },
  {
    title: "Development Services",
    description:
      "Supporting our product development journey with select client work",
    icon: RiCodeLine,
    status: "Available Now",
    features: ["Web & Mobile", "Limited Availability", "Product-First Focus"],
    href: "/services",
  },
]

export default function Products() {
  return (
    <section className="py-24 bg-muted/30">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold mb-4">Our Product Pipeline</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Innovative software solutions designed to solve real problems for Nigerian businesses and individuals
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {products.map((product, index) => (
            <motion.div
              key={product.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative p-8 bg-background rounded-xl shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="flex flex-col h-full">
                <div className="mb-6">
                  <div className="inline-block p-3 rounded-lg bg-primary/10 mb-4">
                    <product.icon className="w-8 h-8 text-primary" />
                  </div>
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-2xl font-semibold">{product.title}</h3>
                    <span className="text-xs px-2 py-1 rounded-full bg-secondary/10 text-secondary">
                      {product.status}
                    </span>
                  </div>
                  <p className="text-muted-foreground">
                    {product.description}
                  </p>
                </div>

                <div className="mt-auto">
                  <div className="flex flex-wrap gap-2 mb-6">
                    {product.features.map((feature) => (
                      <span
                        key={feature}
                        className="inline-block px-3 py-1 text-xs rounded-full bg-primary/10 text-primary"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>

                  <Button asChild variant="ghost" className="group-hover:text-primary transition-colors">
                    <Link href={product.href}>
                      {product.title === "Development Services" ? "Learn More" : "Join Beta"}
                      <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
                    </Link>
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  )
}
