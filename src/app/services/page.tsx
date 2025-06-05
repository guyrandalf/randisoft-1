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
    id: "web",
    title: "Web Applications",
    description: "Custom web applications built with modern frameworks to solve specific business challenges.",
    icon: RiComputerLine,
    features: [
      "Responsive design for all devices",
      "Progressive Web Apps (PWAs)",
      "Admin dashboards and portals",
      "Content management systems",
    ],
    technologies: ["React", "Next.js", "Node.js", "Express"],
  },
  {
    id: "mobile",
    title: "Mobile Applications",
    description: "Cross-platform mobile solutions that work seamlessly on iOS and Android devices.",
    icon: RiSmartphoneLine,
    features: [
      "Native-like performance",
      "Offline functionality",
      "Push notifications",
      "App store deployment",
    ],
    technologies: ["React Native", "Expo", "Firebase"],
  },
  {
    id: "custom",
    title: "Custom Development",
    description: "Bespoke software solutions tailored to your unique business requirements.",
    icon: RiCodeBoxLine,
    features: [
      "Requirements analysis",
      "System architecture design",
      "Full-stack development",
      "Quality assurance and testing",
    ],
    technologies: ["Various frameworks", "Cloud platforms", "DevOps tools"],
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
                <h2 className="text-2xl font-semibold mb-2">Supporting Our Product Development</h2>
                <p className="text-muted-foreground mb-4">
                  While our primary focus is building our flagship products, we offer limited development services to select clients.
                  This helps us fund our product development journey while delivering exceptional value to businesses.
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

          <h1 className="text-4xl font-bold mb-6">Development Services</h1>

          <p className="text-xl text-muted-foreground mb-12 max-w-3xl">
            We offer a select range of development services with limited availability. Our team brings the same expertise and quality to client projects that we apply to our own products.
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

                <h3 className="font-medium mb-3">Technologies:</h3>
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
              </motion.div>
            ))}
          </div>

          <div className="mt-16 pt-12 border-t">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-2xl font-semibold mb-4">Our Approach to Client Work</h2>
                <p className="text-muted-foreground mb-6">
                  We take on a limited number of client projects to ensure we can deliver exceptional quality while maintaining focus on our product development. Our approach is collaborative, transparent, and focused on delivering real business value.
                </p>
                <Button asChild>
                  <Link href="/contact">Discuss Your Project</Link>
                </Button>
              </div>
              <div className="bg-card p-6 rounded-xl shadow-md">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 rounded-lg bg-primary/10">
                    <RiTimeLine className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold">Limited Availability</h3>
                </div>
                <p className="text-muted-foreground mb-6">
                  Due to our focus on product development, we only take on a select number of client projects each quarter. This ensures we can deliver the highest quality work without compromising our product roadmap.
                </p>

                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 rounded-lg bg-primary/10">
                    <RiTeamLine className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold">Product-First Team</h3>
                </div>
                <p className="text-muted-foreground">
                  Our team brings product thinking to every client project. We approach your challenges with the same mindset we use for our own products: focusing on user needs, business value, and long-term sustainability.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </motion.div>
  )
}
