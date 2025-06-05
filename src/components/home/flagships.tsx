"use client"

import Container from "@/components/layout/container"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"

const flagships = [
  {
    title: "Skills Marketplace",
    description: "Connecting Nigerians with verified service providers and professionals across various industries.",
    image: "/flagships/recruit.jpg",
    technologies: ["Next.js", "AI/ML", "Node.js", "Cloud Storage"],
    link: "/products#skills",
  },
  {
    title: "Information Platform",
    description: "Simplifying access to government services and citizen rights through a unified digital platform.",
    image: "/flagships/automate.jpg",
    technologies: ["React", "Express", "PostgreSQL", "Workflow Engine"],
    link: "/products#information",
  },
  {
    title: "Healthcare Solutions",
    description: "Improving healthcare access and information management for patients and providers.",
    image: "/flagships/learn.jpg",
    technologies: ["React", "Firebase", "Node.js", "Video Streaming"],
    link: "/products#healthcare",
  },
  {
    title: "Development Services",
    description: "Supporting our product development journey with select client work and technical expertise.",
    image: "/flagships/analytics.jpg",
    technologies: ["Next.js", "React Native", "Node.js", "Cloud Infrastructure"],
    link: "/services",
  },
]

export default function Flagships() {
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
          <h2 className="text-3xl font-bold mb-4">Our Product Vision</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Building the next generation of African software products that solve real problems
          </p>
        </motion.div>

        <div className="flex overflow-x-auto pb-8 md:grid md:grid-cols-2 lg:grid-cols-4 gap-6 -mx-4 px-4 md:mx-0 md:px-0 md:overflow-x-visible">
          {flagships.map((product, index) => (
            <motion.div
              key={product.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative flex-shrink-0 w-[280px] md:w-full rounded-xl overflow-hidden shadow-md bg-card"
            >
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={product.image}
                  alt={product.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <div className="text-white">
                    <h3 className="font-semibold">{product.title}</h3>
                  </div>
                </div>
              </div>

              <div className="p-5">
                <h3 className="text-lg font-semibold mb-2">{product.title}</h3>
                <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                  {product.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {product.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="inline-block px-2 py-1 text-xs rounded-full bg-secondary/10 text-secondary"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <Button variant="ghost" size="sm" className="w-full group-hover:bg-primary group-hover:text-white transition-colors" asChild>
                  <Link href={product.link}>
                    {product.title === "Development Services" ? "Learn More" : "Join Beta"}
                    <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
                  </Link>
                </Button>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-8">
          <Button size="lg" variant="outline" asChild>
            <Link href="/products">View All Products</Link>
          </Button>
        </div>
      </Container>
    </section>
  )
}
