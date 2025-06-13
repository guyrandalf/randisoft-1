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
    title: "Talent Sourcing",
    description:
      "Access to vetted professionals across various industries to meet your specific needs.",
    icon: RiCodeBoxLine,
    features: [
      "Rigorous Vetting Process",
      "Industry Specialists",
      "Skill-Based Matching",
      "Rapid Placement",
    ],
  },
  {
    title: "Project Outsourcing",
    description:
      "Complete project management and execution by our network of skilled professionals.",
    icon: RiBrainLine,
    features: [
      "End-to-End Delivery",
      "Milestone Tracking",
      "Quality Assurance",
      "Regular Reporting",
    ],
  },
  {
    title: "Staff Augmentation",
    description:
      "Seamlessly integrate additional talent with your existing teams for specific projects.",
    icon: RiCloudLine,
    features: [
      "Flexible Engagement",
      "Skill Gap Filling",
      "Scalable Resources",
      "Knowledge Transfer",
    ],
  },
  {
    title: "Dedicated Teams",
    description:
      "Full teams of specialists working exclusively on your projects and business objectives.",
    icon: RiDatabase2Line,
    features: [
      "Team Composition",
      "Collaborative Workflow",
      "Consistent Communication",
      "Performance Monitoring",
    ],
  },
  {
    title: "Executive Talent",
    description:
      "Access to experienced C-level and senior management professionals for strategic roles.",
    icon: RiShieldLine,
    features: [
      "Leadership Expertise",
      "Strategic Planning",
      "Interim Management",
      "Advisory Services",
    ],
  },
  {
    title: "Industry Solutions",
    description:
      "Specialized outsourcing solutions tailored to specific industry requirements and challenges.",
    icon: RiTeamLine,
    features: [
      "Healthcare Specialists",
      "Finance Experts",
      "IT Professionals",
      "Marketing Talent",
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
          <h2 className="text-3xl font-bold mb-4">Outsourcing Services</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Connecting businesses with top industry talent to scale efficiently
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
