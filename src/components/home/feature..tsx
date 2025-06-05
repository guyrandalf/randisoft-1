"use client"

import Container from "@/components/layout/container"
import { motion } from "framer-motion"
import {
  RiCodeBoxLine,
  RiCloudLine,
  RiBrainLine,
  RiDatabase2Line,
  RiShieldLine,
  RiTeamLine,
} from "react-icons/ri"

const services = [
  {
    title: "Custom Software Development",
    description:
      "Tailored solutions designed to address your unique business challenges and requirements.",
    icon: RiCodeBoxLine,
    features: [
      "Web Applications",
      "Mobile Solutions",
      "Enterprise Software",
      "API Development",
    ],
  },
  {
    title: "Technical Consulting",
    description:
      "Expert guidance on technology strategy, architecture, and implementation.",
    icon: RiBrainLine,
    features: [
      "Architecture Design",
      "Tech Stack Selection",
      "Performance Optimization",
      "Security Assessment",
    ],
  },
  {
    title: "Cloud Solutions",
    description:
      "Scalable and secure cloud infrastructure design and implementation.",
    icon: RiCloudLine,
    features: [
      "Cloud Migration",
      "DevOps Integration",
      "Infrastructure as Code",
      "24/7 Monitoring",
    ],
  },
  {
    title: "Data Engineering",
    description:
      "Build robust data pipelines and analytics solutions for actionable insights.",
    icon: RiDatabase2Line,
    features: [
      "Data Architecture",
      "ETL Pipelines",
      "Data Warehousing",
      "Business Intelligence",
    ],
  },
  {
    title: "Security Solutions",
    description:
      "Implement comprehensive security measures to protect your digital assets.",
    icon: RiShieldLine,
    features: [
      "Security Audits",
      "Compliance Implementation",
      "Penetration Testing",
      "Security Training",
    ],
  },
  {
    title: "Team Augmentation",
    description:
      "Extend your team with our skilled developers and technical experts.",
    icon: RiTeamLine,
    features: [
      "Skilled Developers",
      "Project Managers",
      "DevOps Engineers",
      "Quality Assurance",
    ],
  },
]

export default function Features() {
  return (
    <section className="py-24">
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

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative p-6 bg-card rounded-xl shadow-md"
            >
              <div className="flex items-center gap-4 mb-4">
                <service.icon className="w-8 h-8 text-primary" />
                <h3 className="text-xl font-semibold">{service.title}</h3>
              </div>

              <p className="text-muted-foreground mb-6">
                {service.description}
              </p>

              <ul className="space-y-2">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2 text-sm">
                    <span className="text-primary">✓</span>
                    {feature}
                  </li>
                ))}
              </ul>

              <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-primary/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity -z-10" />
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  )
}
