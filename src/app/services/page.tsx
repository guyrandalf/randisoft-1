"use client"

import { motion } from "framer-motion"
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
} from "react-icons/ri"

const services = [
  {
    id: "staffing",
    title: "Staffing Agency Services",
    description: "We recruit, train, and deploy skilled professionals (not limited to tech) to work with companies and organizations.",
    icon: RiTeamLine,
    features: [
      "Talent recruitment and vetting",
      "Professional training and development",
      "Skilled workforce deployment",
      "Ongoing performance management",
    ],
  },
  {
    id: "outsourcing",
    title: "Outsourcing Services",
    description: "We take on entire business functions or roles (across industries, not just tech) and deliver results via our vetted workforce and internal tools.",
    icon: RiSmartphoneLine,
    features: [
      "End-to-end business function management",
      "Cross-industry expertise",
      "Results-driven approach",
      "Scalable workforce solutions",
    ],
  },
]

export default function ServicesPage() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="pt-24"
    >
      <Container>
        <Breadcrumb />

        <div className="py-12">
          <div className="bg-muted/30 p-8 rounded-xl mb-12">
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-lg bg-primary/10 text-primary">
                <RiLightbulbLine className="w-6 h-6" />
              </div>
              <div>
                <h2 className="text-2xl font-semibold mb-2">Supporting Your Business Growth</h2>
                <p className="text-muted-foreground mb-4">
                  We connect you with top industry talent through our comprehensive outsourcing services.
                  Our network of professionals helps your business scale efficiently while focusing on your core objectives.
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

          <h1 className="text-4xl font-bold mb-6">Support Services</h1>

          <p className="text-xl text-muted-foreground mb-12 max-w-3xl">
            While Randisoft is primarily a product-based company, we offer these support services to generate revenue and extend our reach. These services help businesses scale efficiently while focusing on their core objectives.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                id={service.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="p-8 rounded-xl shadow-md bg-card"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 rounded-lg bg-primary/10">
                    <service.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h2 className="text-2xl font-semibold">{service.title}</h2>
                </div>

                <p className="text-muted-foreground mb-6">{service.description}</p>

                <h3 className="font-medium mb-3">What We Offer:</h3>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2">
                      <span className="text-primary mt-1">✓</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

              </motion.div>
            ))}
          </div>

          <div className="mt-16 pt-12 border-t">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-2xl font-semibold mb-4">Our Support Services Approach</h2>
                <p className="text-muted-foreground mb-6">
                  While our primary focus is on building innovative products, our support services help us generate revenue and extend our reach. We provide high-quality staffing and outsourcing solutions that deliver exceptional value to businesses.
                </p>
                <Button asChild>
                  <Link href="/contact">Discuss Your Needs</Link>
                </Button>
              </div>
              <div className="bg-card p-6 rounded-xl shadow-md">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 rounded-lg bg-primary/10">
                    <RiTimeLine className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold">Cross-Industry Expertise</h3>
                </div>
                <p className="text-muted-foreground mb-6">
                  Our network includes professionals from various industries, not limited to tech. We carefully match talent with your specific requirements to ensure the perfect fit for your business needs.
                </p>

                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 rounded-lg bg-primary/10">
                    <RiTeamLine className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold">Results-Driven Solutions</h3>
                </div>
                <p className="text-muted-foreground">
                  Whether you need skilled professionals or complete business function management, our support services are designed to deliver measurable results while allowing you to focus on your core business objectives.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </motion.div>
  )
}
