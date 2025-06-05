"use client"

import Container from "@/components/layout/container"
import { motion } from "framer-motion"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import {
  RiComputerLine,
  RiSmartphoneLine,
  RiShoppingCart2Line,
  RiSettings4Line,
} from "react-icons/ri"

const services = [
  {
    title: "Web Applications",
    description:
      "Custom web apps built with React and Next.js",
    icon: RiComputerLine,
    technologies: ["React", "Next.js", "Node.js"],
    href: "/services#web",
  },
  {
    title: "Mobile Apps",
    description:
      "Cross-platform mobile solutions for iOS and Android",
    icon: RiSmartphoneLine,
    technologies: ["React Native", "Expo"],
    href: "/services#mobile",
  },
  {
    title: "E-commerce Platforms",
    description:
      "Online stores and payment integration",
    icon: RiShoppingCart2Line,
    technologies: ["Shopify", "WooCommerce", "Custom"],
    href: "/services#ecommerce",
  },
  {
    title: "Process Automation",
    description:
      "Streamline business operations with custom tools",
    icon: RiSettings4Line,
    technologies: ["APIs", "Databases", "Integrations"],
    href: "/services#automation",
  },
]

export default function Services() {
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
          <h2 className="text-3xl font-bold mb-4">Our Services</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive software solutions to drive your business forward
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative p-8 bg-background rounded-xl shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="flex flex-col h-full">
                <div className="mb-6">
                  <div className="inline-block p-3 rounded-lg bg-primary/10 mb-4">
                    <service.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-2xl font-semibold mb-2">{service.title}</h3>
                  <p className="text-muted-foreground">
                    {service.description}
                  </p>
                </div>

                <div className="mt-auto">
                  <div className="flex flex-wrap gap-2 mb-6">
                    {service.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="inline-block px-3 py-1 text-xs rounded-full bg-secondary/10 text-secondary"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <Button asChild variant="ghost" className="group-hover:text-primary transition-colors">
                    <Link href={service.href}>
                      Learn More
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
