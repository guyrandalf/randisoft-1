"use client"

import Container from "@/components/layout/container"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"

const caseStudies = [
  {
    title: "Global Financial Institution",
    description: "40% reduction in processing time through AI automation",
    image: "/case-studies/finance.jpg",
    industry: "Financial Services",
    results: [
      "Automated document processing",
      "Reduced manual errors by 95%",
      "Improved customer satisfaction",
      "ROI achieved in 6 months",
    ],
    link: "/case-studies/finance",
  },
  {
    title: "Manufacturing Giant",
    description: "Smart factory transformation with IoT and AI",
    image: "/case-studies/manufacturing.jpg",
    industry: "Manufacturing",
    results: [
      "Real-time production monitoring",
      "Predictive maintenance",
      "30% reduction in downtime",
      "20% increase in efficiency",
    ],
    link: "/case-studies/manufacturing",
  },
  {
    title: "Healthcare Provider",
    description: "Cloud migration and analytics implementation",
    image: "/case-studies/healthcare.jpg",
    industry: "Healthcare",
    results: [
      "HIPAA-compliant cloud infrastructure",
      "Advanced patient analytics",
      "50% faster data access",
      "Improved patient care",
    ],
    link: "/case-studies/healthcare",
  },
]

export default function CaseStudies() {
  return (
    <section className="py-20 bg-muted/50">
      <Container>
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Client Success Stories
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            See how we've helped enterprises transform their businesses
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {caseStudies.map((study, index) => (
            <motion.div
              key={study.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-card rounded-lg shadow-md overflow-hidden"
            >
              <div className="relative h-48">
                <Image
                  src={study.image}
                  alt={study.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <div className="text-sm text-primary mb-2">
                  {study.industry}
                </div>
                <h3 className="text-xl font-semibold mb-2">{study.title}</h3>
                <p className="text-muted-foreground mb-4">
                  {study.description}
                </p>
                <ul className="space-y-2 mb-6">
                  {study.results.map((result) => (
                    <li key={result} className="flex items-center gap-2">
                      <span className="text-primary">✓</span>
                      <span className="text-sm">{result}</span>
                    </li>
                  ))}
                </ul>
                <Button variant="secondary" className="w-full" asChild>
                  <Link href={study.link}>Read Full Case Study</Link>
                </Button>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button size="lg" asChild>
            <Link href="/resources/case-studies">View All Case Studies</Link>
          </Button>
        </div>
      </Container>
    </section>
  )
}
