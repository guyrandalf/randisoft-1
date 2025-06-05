"use client"

import Container from "@/components/layout/container"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { RiAtLine, RiCloudLine, RiCodeLine, RiShieldLine } from "react-icons/ri"
import Link from "next/link"

const innovations = [
  {
    category: "Artificial Intelligence",
    icon: RiAtLine,
    items: [
      "Machine Learning Solutions",
      "Natural Language Processing",
      "Computer Vision Applications",
    ],
  },
  {
    category: "Cloud Native",
    icon: RiCloudLine,
    items: [
      "Microservices Architecture",
      "Serverless Computing",
      "Container Orchestration",
    ],
  },
  {
    category: "Modern Development",
    icon: RiCodeLine,
    items: ["Progressive Web Apps", "Edge Computing", "Real-time Applications"],
  },
  {
    category: "Cybersecurity",
    icon: RiShieldLine,
    items: [
      "Zero Trust Architecture",
      "Blockchain Solutions",
      "Secure Development",
    ],
  },
]

export default function InnovationHub() {
  return (
    <section className="py-24">
      <Container>
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h2 className="text-3xl font-bold">
              Innovation Hub
              <span className="block text-primary">Research & Development</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              We're constantly exploring emerging technologies and innovative
              approaches to solve complex business challenges. Stay updated with
              our latest research and development initiatives.
            </p>

            <div className="space-y-8 mt-8">
              {innovations.map((category, index) => (
                <motion.div
                  key={category.category}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex gap-4"
                >
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                    <category.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">
                      {category.category}
                    </h3>
                    <ul className="space-y-2">
                      {category.items.map((item) => (
                        <li
                          key={item}
                          className="text-muted-foreground flex items-center gap-2"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-primary/60" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="lg:pl-12"
          >
            <div className="bg-card rounded-xl shadow-md p-8 space-y-6">
              <h3 className="text-2xl font-bold">Stay Updated</h3>
              <p className="text-muted-foreground">
                Subscribe to our newsletter for the latest insights on emerging
                technologies and innovation in software development.
              </p>

              <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full px-4 py-2 rounded-lg border bg-background"
                />
                <Button className="w-full">Subscribe to Newsletter</Button>
              </form>

              <div className="pt-6 border-t">
                <h4 className="font-semibold mb-4">Join Our Community</h4>
                <div className="flex gap-4">
                  <Button variant="outline" size="sm" asChild>
                    <Link href="https://github.com/randisoft">GitHub</Link>
                  </Button>
                  <Button variant="outline" size="sm" asChild>
                    <Link href="https://twitter.com/randisoft">Twitter</Link>
                  </Button>
                  <Button variant="outline" size="sm" asChild>
                    <Link href="https://linkedin.com/company/randisoft">
                      LinkedIn
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  )
}
