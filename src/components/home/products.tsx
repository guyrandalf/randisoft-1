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
    title: "Agrotech Platform",
    description:
      "Solving farming challenges in Nigeria",
    icon: RiMapPinLine,
    status: "Coming 2025",
    features: ["Market Access", "Supply Chain", "Agricultural Tools"],
    href: "/products#agrotech",
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
]

export default function Products() {
  return (
    <section className="py-24 bg-gradient-to-b from-background to-muted/30 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        <div className="absolute top-1/3 -right-24 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 -left-24 w-80 h-80 bg-secondary/5 rounded-full blur-3xl"></div>
      </div>

      <Container className="relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="inline-block px-6 py-2 rounded-full bg-secondary/10 text-secondary font-medium mb-4"
          >
            Innovation Pipeline
          </motion.div>
          <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-secondary to-primary bg-clip-text text-transparent">Our Product Pipeline</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Innovative software solutions designed to solve real problems for Nigerian businesses and individuals
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-10">
          {products.map((product, index) => (
            <motion.div
              key={product.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="group relative p-8 bg-card rounded-xl shadow-md hover:shadow-xl transition-all duration-300"
            >
              {/* Gradient border effect */}
              <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-secondary/20 to-primary/20 opacity-0 group-hover:opacity-100 transition-opacity -z-10"></div>

              <div className="flex flex-col h-full">
                <div className="mb-8">
                  <motion.div
                    whileHover={{ scale: 1.1, transition: { duration: 0.3 } }}
                    className="inline-block p-4 rounded-lg bg-gradient-to-br from-secondary/20 to-primary/20 mb-5"
                  >
                    <product.icon className="w-10 h-10 text-secondary" />
                  </motion.div>
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="text-2xl font-semibold">{product.title}</h3>
                    <motion.span
                      whileHover={{ scale: 1.05 }}
                      className="text-xs px-3 py-1 rounded-full bg-gradient-to-r from-secondary/20 to-primary/20 text-secondary font-medium"
                    >
                      {product.status}
                    </motion.span>
                  </div>
                  <p className="text-muted-foreground">
                    {product.description}
                  </p>
                </div>

                <div className="mt-auto">
                  <div className="flex flex-wrap gap-2 mb-6">
                    {product.features.map((feature, featureIndex) => (
                      <motion.span
                        key={feature}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3, delay: 0.3 + (featureIndex * 0.1) }}
                        viewport={{ once: true }}
                        className="inline-block px-3 py-1 text-xs font-medium rounded-full bg-gradient-to-r from-secondary/10 to-primary/10 text-secondary"
                      >
                        {feature}
                      </motion.span>
                    ))}
                  </div>

                  <Button
                    asChild
                    variant={product.title === "Outsourcing Services" ? "outline" : "default"}
                    className={`group-hover:${product.title === "Outsourcing Services" ? "bg-secondary/10" : "bg-secondary"} transition-colors duration-300`}
                  >
                    <Link href={product.href}>
                      {product.title === "Outsourcing Services" ? "Learn More" : "Join Beta"}
                      <motion.span
                        className="ml-2 inline-block"
                        initial={{ x: 0 }}
                        whileHover={{ x: 5 }}
                        transition={{ type: "spring", stiffness: 300 }}
                      >
                        →
                      </motion.span>
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
