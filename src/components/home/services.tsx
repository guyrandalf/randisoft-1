"use client"

import Container from "@/components/layout/container"
import { motion } from "framer-motion"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import {
  RiTeamLine,
  RiSettings4Line,
} from "react-icons/ri"

const services = [
  {
    title: "Staffing Agency Services",
    description:
      "We recruit, train, and deploy skilled professionals across various industries to work with companies and organizations.",
    icon: RiTeamLine,
    technologies: ["Talent Recruitment", "Professional Training", "Workforce Deployment"],
    href: "/services#staffing",
  },
  {
    title: "Outsourcing Services",
    description:
      "We take on entire business functions or roles and deliver results via our vetted workforce and internal tools.",
    icon: RiSettings4Line,
    technologies: ["Business Function Management", "Cross-industry Expertise", "Results-driven Approach"],
    href: "/services#outsourcing",
  },
]

export default function Services() {
  return (
    <section className="py-24 bg-gradient-to-b from-muted/30 to-background relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 -right-24 w-80 h-80 bg-secondary/5 rounded-full blur-3xl"></div>
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
            className="inline-block px-6 py-2 rounded-full bg-primary/10 text-primary font-medium mb-4"
          >
            Support Services
          </motion.div>
          <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Our Services</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive business solutions to drive your organization forward and help you focus on your core objectives
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-10">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="group relative p-8 bg-card rounded-xl shadow-md hover:shadow-xl transition-all duration-300"
            >
              {/* Gradient border effect */}
              <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-primary/20 to-secondary/20 opacity-0 group-hover:opacity-100 transition-opacity -z-10"></div>

              <div className="flex flex-col h-full">
                <div className="mb-8">
                  <motion.div
                    whileHover={{ rotate: [0, -10, 10, -5, 5, 0], transition: { duration: 0.5 } }}
                    className="inline-block p-4 rounded-lg bg-gradient-to-br from-primary/20 to-secondary/20 mb-5"
                  >
                    <service.icon className="w-10 h-10 text-primary" />
                  </motion.div>
                  <h3 className="text-2xl font-semibold mb-3">{service.title}</h3>
                  <p className="text-muted-foreground">
                    {service.description}
                  </p>
                </div>

                <div className="mt-auto">
                  <div className="flex flex-wrap gap-2 mb-6">
                    {service.technologies.map((tech, techIndex) => (
                      <motion.span
                        key={tech}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3, delay: 0.3 + (techIndex * 0.1) }}
                        viewport={{ once: true }}
                        className="inline-block px-3 py-1 text-xs font-medium rounded-full bg-gradient-to-r from-primary/10 to-secondary/10 text-primary"
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>

                  <Button
                    asChild
                    variant="default"
                    className="group-hover:bg-primary transition-colors duration-300"
                  >
                    <Link href={service.href}>
                      Learn More
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
