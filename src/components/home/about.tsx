"use client"

import Container from "@/components/layout/container"
import { motion } from "framer-motion"
import {
  SiReact,
  SiTypescript,
  SiPython,
  SiDocker,
  SiNextdotjs,
  SiExpress,
  SiNodedotjs,
  SiPostgresql,
} from "react-icons/si"

const techStack = [
  { icon: SiReact, name: "React" },
  { icon: SiTypescript, name: "TypeScript" },
  { icon: SiPython, name: "Python" },
  { icon: SiNodedotjs, name: "Node.js" },
  { icon: SiDocker, name: "Docker" },
  { icon: SiNextdotjs, name: "Next.js" },
  { icon: SiExpress, name: "Express" },
  { icon: SiPostgresql, name: "PostgreSQL" },
]

export default function About() {
  return (
    <section className="py-24 bg-muted/50">
      <Container>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h2 className="text-3xl font-bold">
              Building Tomorrow's
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent block">
                Digital Solutions
              </span>
            </h2>
            <p className="text-lg text-muted-foreground">
              Founded by passionate tech entrepreneurs, Randisoft emerged from a
              vision to revolutionize how businesses operate in the digital
              world. We combine cutting-edge technology with practical business
              solutions.
            </p>
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                  01
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-1">Our Vision</h3>
                  <p className="text-muted-foreground">
                    To be the catalyst for digital innovation, empowering
                    businesses to thrive in an ever-evolving technological
                    landscape.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-lg bg-secondary/10 flex items-center justify-center text-secondary">
                  02
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-1">Our Mission</h3>
                  <p className="text-muted-foreground">
                    Delivering exceptional software solutions that drive
                    business growth, efficiency, and innovation through modern
                    technology and expertise.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="p-8 rounded-xl shadow-md bg-card">
              <h3 className="text-xl font-semibold mb-6">Our Tech Stack</h3>
              <div className="grid grid-cols-4 gap-6">
                {techStack.map((tech, index) => (
                  <motion.div
                    key={tech.name}
                    initial={{ opacity: 0, scale: 0.5 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex flex-col items-center gap-2 group"
                  >
                    <tech.icon className="w-10 h-10 text-muted-foreground group-hover:text-primary transition-colors" />
                    <span className="text-xs text-muted-foreground">
                      {tech.name}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  )
}
