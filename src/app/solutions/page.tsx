"use client"

import Container from "@/components/layout/container"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import {
  RiRobot2Line,
  RiBarChart2Line,
  RiCloudLine,
  RiCodeLine,
} from "react-icons/ri"

const solutions = [
  {
    title: "Process Automation",
    description:
      "Transform your business operations with AI-powered process automation",
    icon: RiRobot2Line,
    href: "/solutions/automation",
    color: "from-blue-500 to-purple-500",
  },
  {
    title: "Data Analytics & BI",
    description:
      "Turn your data into actionable insights with advanced analytics",
    icon: RiBarChart2Line,
    href: "/solutions/analytics",
    color: "from-purple-500 to-pink-500",
  },
  {
    title: "Cloud Infrastructure",
    description:
      "Scale your business with secure and efficient cloud solutions",
    icon: RiCloudLine,
    href: "/solutions/cloud",
    color: "from-cyan-500 to-blue-500",
  },
  {
    title: "Talent Outsourcing",
    description:
      "Access top industry talent to scale your business efficiently",
    icon: RiCodeLine,
    href: "/solutions/development",
    color: "from-green-500 to-cyan-500",
  },
]

export default function SolutionsPage() {
  return (
    <main className="py-20">
      <Container>
        <div className="max-w-4xl mx-auto text-center mb-16">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl font-bold tracking-tight sm:text-6xl mb-6"
          >
            Enterprise Solutions
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-xl text-muted-foreground"
          >
            Comprehensive technology solutions to drive your business forward
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {solutions.map((solution, index) => (
            <motion.div
              key={solution.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative p-8 bg-card rounded-lg border shadow-sm overflow-hidden hover:shadow-md transition-all"
            >
              <div className="relative z-10">
                <solution.icon className="w-12 h-12 text-primary mb-4" />
                <h2 className="text-2xl font-bold mb-2">{solution.title}</h2>
                <p className="text-muted-foreground mb-6">
                  {solution.description}
                </p>
                <Button asChild>
                  <Link href={solution.href}>Learn More</Link>
                </Button>
              </div>
              <div
                className={`absolute inset-0 bg-gradient-to-r ${solution.color} opacity-0 group-hover:opacity-5 transition-opacity`}
              />
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center"
        >
          <Button size="lg" asChild>
            <Link href="/contact">Schedule a Consultation</Link>
          </Button>
        </motion.div>
      </Container>
    </main>
  )
}
