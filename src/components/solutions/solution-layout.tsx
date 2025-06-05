"use client"

import Container from "@/components/layout/container"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import Link from "next/link"

interface Feature {
  title: string
  description: string
  icon: any
}

interface SolutionLayoutProps {
  title: string
  subtitle: string
  description: string
  features: Feature[]
  image: string
  benefits: string[]
}

export default function SolutionLayout({
  title,
  subtitle,
  description,
  features,
  image,
  benefits,
}: SolutionLayoutProps) {
  return (
    <main>
      <section className="py-20">
        <Container>
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="text-4xl font-bold tracking-tight sm:text-6xl mb-6">
                {title}
              </h1>
              <p className="text-xl text-primary mb-4">{subtitle}</p>
              <p className="text-lg text-muted-foreground mb-8">
                {description}
              </p>
              <div className="flex justify-center gap-4">
                <Button size="lg" asChild>
                  <Link href="/contact">Schedule a Demo</Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link href="/case-studies">View Case Studies</Link>
                </Button>
              </div>
            </motion.div>
          </div>
        </Container>
      </section>

      <section className="py-20 bg-muted/50">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-card p-6 rounded-lg border shadow-sm"
              >
                <feature.icon className="w-8 h-8 text-primary mb-4" />
                <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-20">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="space-y-6"
            >
              <h2 className="text-3xl font-bold">Key Benefits</h2>
              <ul className="space-y-4">
                {benefits.map((benefit, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="flex items-start gap-2"
                  >
                    <span className="text-primary mt-1">✓</span>
                    <span>{benefit}</span>
                  </motion.li>
                ))}
              </ul>
              <div className="pt-4">
                <Button size="lg" asChild>
                  <Link href="/contact">Get Started</Link>
                </Button>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="relative h-[400px] rounded-lg overflow-hidden"
            >
              <img
                src={image}
                alt={title}
                className="object-cover w-full h-full"
              />
            </motion.div>
          </div>
        </Container>
      </section>
    </main>
  )
}
