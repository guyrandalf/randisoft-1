"use client"

import Container from "@/components/layout/container"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"

const projects = [
  {
    title: "E-commerce Platform",
    client: "Retail Company",
    description: "A modern e-commerce platform with seamless payment integration and inventory management.",
    image: "/portfolio/ecommerce.jpg",
    technologies: ["Next.js", "Node.js", "Paystack", "MongoDB"],
    link: "/portfolio/ecommerce-platform",
  },
  {
    title: "Mobile Banking App",
    client: "Financial Institution",
    description: "Secure and user-friendly mobile banking application with biometric authentication.",
    image: "/portfolio/banking.jpg",
    technologies: ["React Native", "Express", "PostgreSQL", "Cloud Storage"],
    link: "/portfolio/mobile-banking",
  },
  {
    title: "School Management System",
    client: "Educational Institution",
    description: "Comprehensive system for managing students, staff, courses, and academic records.",
    image: "/portfolio/education.jpg",
    technologies: ["React", "Firebase", "Node.js", "Tailwind CSS"],
    link: "/portfolio/school-management",
  },
  {
    title: "Logistics Tracking Platform",
    client: "Transportation Company",
    description: "Real-time tracking and management system for delivery fleet and packages.",
    image: "/portfolio/logistics.jpg",
    technologies: ["Next.js", "GraphQL", "MongoDB", "Google Maps API"],
    link: "/portfolio/logistics-tracking",
  },
]

export default function PortfolioHighlights() {
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
          <h2 className="text-3xl font-bold mb-4">Recent Work</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore our latest projects and see how we've helped businesses solve real-world problems
          </p>
        </motion.div>

        <div className="flex overflow-x-auto pb-8 md:grid md:grid-cols-2 lg:grid-cols-4 gap-6 -mx-4 px-4 md:mx-0 md:px-0 md:overflow-x-visible">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative flex-shrink-0 w-[280px] md:w-full rounded-xl overflow-hidden shadow-md bg-card"
            >
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <div className="text-white">
                    <h3 className="font-semibold">{project.title}</h3>
                    <p className="text-sm text-white/80">{project.client}</p>
                  </div>
                </div>
              </div>

              <div className="p-5">
                <h3 className="text-lg font-semibold mb-2">{project.title}</h3>
                <p className="text-sm text-primary mb-2">{project.client}</p>
                <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="inline-block px-2 py-1 text-xs rounded-full bg-secondary/10 text-secondary"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <Button variant="ghost" size="sm" className="w-full group-hover:bg-primary group-hover:text-white transition-colors" asChild>
                  <Link href={project.link}>
                    View Case Study
                    <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
                  </Link>
                </Button>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-8">
          <Button size="lg" variant="outline" asChild>
            <Link href="/portfolio">View All Projects</Link>
          </Button>
        </div>
      </Container>
    </section>
  )
}
