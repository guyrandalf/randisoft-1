"use client"

import Container from "@/components/layout/container"
import { motion } from "framer-motion"
import {
  RiMapPinLine,
  RiCodeLine,
  RiMoneyDollarCircleLine,
  RiTimeLine,
  RiCustomerService2Line,
  RiAwardLine,
} from "react-icons/ri"

const reasons = [
  {
    title: "Local Expertise",
    description:
      "Deep understanding of the Nigerian market and business environment.",
    icon: RiMapPinLine,
  },
  {
    title: "Modern Technology",
    description:
      "Latest web and mobile frameworks for cutting-edge applications.",
    icon: RiCodeLine,
  },
  {
    title: "Competitive Pricing",
    description:
      "High quality software development at local rates that make sense for Nigerian businesses.",
    icon: RiMoneyDollarCircleLine,
  },
  {
    title: "Fast Delivery",
    description:
      "Agile development process that gets your solutions to market quickly.",
    icon: RiTimeLine,
  },
  {
    title: "Ongoing Support",
    description:
      "Comprehensive maintenance and updates included with all our solutions.",
    icon: RiCustomerService2Line,
  },
  {
    title: "Proven Results",
    description:
      "Track record of successful projects and satisfied clients across Nigeria.",
    icon: RiAwardLine,
  },
]

export default function WhyChooseUs() {
  return (
    <section className="py-24 bg-muted/50">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold mb-4">Why Choose Us</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We combine technical excellence with business acumen to deliver
            exceptional results for our clients.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <motion.div
              key={reason.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative p-6 bg-card rounded-xl shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="mb-4 w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                <reason.icon className="w-6 h-6 text-primary" />
              </div>

              <h3 className="text-xl font-semibold mb-2">{reason.title}</h3>
              <p className="text-muted-foreground">{reason.description}</p>

              <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-primary/5 via-secondary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity -z-10" />
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  )
}
