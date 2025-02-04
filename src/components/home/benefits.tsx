"use client";

import Container from "@/components/layout/container";
import { motion } from "framer-motion";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";

const benefits = [
  {
    title: "For Recruiters & Job Seekers",
    subtitle: "Randisoft Recruit",
    description:
      "AI-powered hiring platform connecting talent with opportunities",
    points: [
      "60% faster hiring process",
      "Smart candidate matching",
      "Automated resume screening",
      "Direct communication",
      "Interview scheduling",
      "Analytics dashboard",
    ],
    image: "/placeholder.jpg",
    status: "Available",
  },
  {
    title: "For Business Operations",
    subtitle: "Randisoft Automate",
    description:
      "Streamline your business processes with intelligent automation",
    points: [
      "Process automation",
      "Document handling",
      "Task management",
      "Workflow optimization",
      "Integration ready",
      "Performance analytics",
    ],
    image: "/placeholder.jpg",
    status: "Coming Soon",
  },
];

export default function Benefits() {
  return (
    <section className="py-24">
      <Container>
        {benefits.map((benefit, index) => (
          <motion.div
            key={benefit.subtitle}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className={`flex flex-col gap-8 md:flex-row md:items-center ${
              index !== 0 ? "mt-24" : ""
            } ${index % 2 === 1 ? "md:flex-row-reverse" : ""}`}
          >
            <div className="flex-1 space-y-4">
              <Badge
                variant={
                  benefit.status === "Available" ? "default" : "secondary"
                }
              >
                {benefit.status}
              </Badge>
              <h2 className="text-3xl font-bold">{benefit.title}</h2>
              <h3 className="text-xl text-primary">{benefit.subtitle}</h3>
              <p className="text-muted-foreground">{benefit.description}</p>
              <ul className="space-y-3 mt-6">
                {benefit.points.map((point) => (
                  <li key={point} className="flex items-center gap-2">
                    <span className="text-primary">✓</span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex-1 relative h-[400px] rounded-lg overflow-hidden">
              <Image
                src={benefit.image}
                alt={benefit.subtitle}
                fill
                className="object-cover"
              />
            </div>
          </motion.div>
        ))}
      </Container>
    </section>
  );
}
