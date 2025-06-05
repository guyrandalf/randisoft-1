"use client"

import { motion } from "framer-motion"
import { useState } from "react"
import Container from "@/components/layout/container"
import Breadcrumb from "@/components/layout/breadcrumb"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"

const categories = [
  { id: "all", name: "All Projects" },
  { id: "web", name: "Web Applications" },
  { id: "mobile", name: "Mobile Apps" },
  { id: "ecommerce", name: "E-commerce" },
  { id: "custom", name: "Custom Solutions" },
]

const projects = [
  {
    id: "ecommerce-platform",
    title: "E-commerce Platform",
    client: "Retail Company",
    category: "ecommerce",
    description: "A modern e-commerce platform with seamless payment integration and inventory management.",
    image: "/portfolio/ecommerce.jpg",
    technologies: ["Next.js", "Node.js", "Paystack", "MongoDB"],
    link: "/portfolio/ecommerce-platform",
  },
  {
    id: "mobile-banking",
    title: "Mobile Banking App",
    client: "Financial Institution",
    category: "mobile",
    description: "Secure and user-friendly mobile banking application with biometric authentication.",
    image: "/portfolio/banking.jpg",
    technologies: ["React Native", "Express", "PostgreSQL", "Cloud Storage"],
    link: "/portfolio/mobile-banking",
  },
  {
    id: "school-management",
    title: "School Management System",
    client: "Educational Institution",
    category: "web",
    description: "Comprehensive system for managing students, staff, courses, and academic records.",
    image: "/portfolio/education.jpg",
    technologies: ["React", "Firebase", "Node.js", "Tailwind CSS"],
    link: "/portfolio/school-management",
  },
  {
    id: "logistics-tracking",
    title: "Logistics Tracking Platform",
    client: "Transportation Company",
    category: "web",
    description: "Real-time tracking and management system for delivery fleet and packages.",
    image: "/portfolio/logistics.jpg",
    technologies: ["Next.js", "GraphQL", "MongoDB", "Google Maps API"],
    link: "/portfolio/logistics-tracking",
  },
  {
    id: "healthcare-portal",
    title: "Healthcare Patient Portal",
    client: "Healthcare Provider",
    category: "web",
    description: "Secure patient portal for appointment scheduling, medical records, and doctor communication.",
    image: "/portfolio/healthcare.jpg",
    technologies: ["React", "Node.js", "PostgreSQL", "Socket.io"],
    link: "/portfolio/healthcare-portal",
  },
  {
    id: "inventory-system",
    title: "Inventory Management System",
    client: "Manufacturing Company",
    category: "custom",
    description: "Custom inventory tracking and management system with barcode scanning and reporting.",
    image: "/portfolio/inventory.jpg",
    technologies: ["Next.js", "Express", "MongoDB", "Chart.js"],
    link: "/portfolio/inventory-system",
  },
  {
    id: "food-delivery",
    title: "Food Delivery App",
    client: "Restaurant Chain",
    category: "mobile",
    description: "Mobile application for food ordering, delivery tracking, and loyalty program.",
    image: "/portfolio/food.jpg",
    technologies: ["React Native", "Firebase", "Node.js", "Google Maps API"],
    link: "/portfolio/food-delivery",
  },
  {
    id: "real-estate",
    title: "Real Estate Marketplace",
    client: "Property Management Company",
    category: "ecommerce",
    description: "Property listing and management platform with virtual tours and agent matching.",
    image: "/portfolio/realestate.jpg",
    technologies: ["Next.js", "Node.js", "PostgreSQL", "Three.js"],
    link: "/portfolio/real-estate",
  },
]

export default function PortfolioPage() {
  const [activeCategory, setActiveCategory] = useState("all")

  const filteredProjects = activeCategory === "all"
    ? projects
    : projects.filter(project => project.category === activeCategory)

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
          <h1 className="text-4xl font-bold mb-6">Our Portfolio</h1>

          <p className="text-xl text-muted-foreground mb-12 max-w-3xl">
            Explore our recent projects and see how we've helped businesses solve real-world problems with innovative software solutions.
          </p>

          <div className="flex flex-wrap gap-2 mb-12">
            {categories.map((category) => (
              <Button
                key={category.id}
                variant={activeCategory === category.id ? "default" : "outline"}
                onClick={() => setActiveCategory(category.id)}
                className="mb-2"
              >
                {category.name}
              </Button>
            ))}
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative rounded-xl overflow-hidden shadow-md bg-card"
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

          {filteredProjects.length === 0 && (
            <div className="text-center py-12">
              <p className="text-lg text-muted-foreground">No projects found in this category.</p>
            </div>
          )}
        </div>
      </Container>
    </motion.div>
  )
}
