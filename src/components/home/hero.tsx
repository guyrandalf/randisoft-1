"use client"

import Container from "@/components/layout/container"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import Link from "next/link"
import {
  RiCodeLine,
  RiStackLine,
  RiTeamLine,
  RiRocketLine,
} from "react-icons/ri"

const companyStats = [
  {
    value: "4",
    label: "Core Digital Platforms",
    icon: RiCodeLine,
  },
  {
    value: "2",
    label: "Support Services",
    icon: RiStackLine,
  },
  {
    value: "10+",
    label: "Problem Areas Addressed",
    icon: RiTeamLine,
  },
  {
    value: "100%",
    label: "Commitment to Nigeria",
    icon: RiRocketLine,
  },
]

export default function Hero() {
  return (
    <div className="relative overflow-hidden bg-background min-h-screen flex items-center pt-16 pb-24">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative">
          {/* Mobile glassy container - visible only on mobile */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="absolute -top-12 -left-8 -right-8 -bottom-12 lg:hidden z-0"
          >
            <div className="relative w-full h-full rounded-2xl overflow-hidden bg-gradient-to-br from-primary/20 via-secondary/20 to-accent/20 shadow-xl">
              <div className="absolute inset-0 bg-grid-subtle opacity-30" />
              <div className="relative w-full h-full rounded-xl overflow-hidden flex items-center justify-center bg-background/50 backdrop-blur-sm">
                {/* Animation elements for mobile */}
                <div className="relative w-4/5 h-4/5">
                  <motion.div
                    animate={{
                      rotate: [0, 5, 0, -5, 0],
                      y: [0, -15, 0, 15, 0]
                    }}
                    transition={{
                      duration: 10,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                    className="absolute top-1/4 left-1/4 w-40 h-40 bg-gradient-to-br from-primary/40 to-secondary/40 rounded-2xl blur-md"
                  />
                  <motion.div
                    animate={{
                      rotate: [0, -5, 0, 5, 0],
                      y: [0, 15, 0, -15, 0]
                    }}
                    transition={{
                      duration: 8,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: 1
                    }}
                    className="absolute bottom-1/4 right-1/4 w-44 h-44 bg-gradient-to-tr from-secondary/40 to-accent/40 rounded-full blur-md"
                  />
                  <motion.div
                    animate={{
                      rotate: [0, 10, 0, -10, 0],
                      scale: [1, 1.1, 1, 0.9, 1]
                    }}
                    transition={{
                      duration: 12,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: 2
                    }}
                    className="absolute top-1/3 right-1/3 w-32 h-32 bg-gradient-to-bl from-accent/40 to-primary/40 rounded-lg blur-sm"
                  />
                </div>
              </div>
            </div>
          </motion.div>

          <div className="flex flex-col items-start text-left relative z-10">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="inline-block px-4 py-1.5 rounded-full bg-gradient-to-r from-primary/20 to-secondary/20 text-primary font-medium text-sm mb-6"
            >
              Building the Future of Nigeria's Digital Ecosystem
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, type: "spring", stiffness: 50 }}
              className="text-4xl sm:text-5xl md:text-6xl font-bold bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent animate-gradient"
            >
              Building Digital Platforms That Solve Real Problems
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mt-6 text-xl text-muted-foreground max-w-2xl"
            >
              Randisoft builds scalable digital platforms that solve critical problems in Nigeria,
              focusing on skills, agriculture, government information, and healthcare.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="mt-8 flex flex-wrap gap-4"
            >
              <Button
                asChild
                size="lg"
                className="rounded-full bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 transition-all duration-300"
              >
                <Link href="/products">
                  Explore Our Products
                  <motion.span
                    className="ml-2 inline-block"
                    initial={{ x: 0 }}
                    whileHover={{ x: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    →
                  </motion.span>
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="rounded-full border-primary/20 hover:bg-primary/5 transition-all duration-300"
              >
                <Link href="/products#beta">Join Our Beta</Link>
              </Button>
            </motion.div>
          </div>

          {/* Desktop glassy container - visible only on desktop */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="relative hidden lg:block"
          >
            <div className="relative w-full h-[500px] rounded-2xl overflow-hidden bg-gradient-to-br from-primary/20 via-secondary/20 to-accent/20 p-1.5 shadow-xl">
              <div className="absolute inset-0 bg-grid-subtle opacity-30" />
              <div className="relative w-full h-full rounded-xl overflow-hidden flex items-center justify-center bg-background/50 backdrop-blur-sm">
                {/* Abstract animation elements */}
                <div className="relative w-4/5 h-4/5">
                  <motion.div
                    animate={{
                      rotate: [0, 5, 0, -5, 0],
                      y: [0, -15, 0, 15, 0]
                    }}
                    transition={{
                      duration: 10,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                    className="absolute top-1/4 left-1/4 w-40 h-40 bg-gradient-to-br from-primary/40 to-secondary/40 rounded-2xl blur-md"
                  />
                  <motion.div
                    animate={{
                      rotate: [0, -5, 0, 5, 0],
                      y: [0, 15, 0, -15, 0]
                    }}
                    transition={{
                      duration: 8,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: 1
                    }}
                    className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-gradient-to-tr from-secondary/40 to-accent/40 rounded-full blur-md"
                  />
                  <motion.div
                    animate={{
                      rotate: [0, 10, 0, -10, 0],
                      scale: [1, 1.1, 1, 0.9, 1]
                    }}
                    transition={{
                      duration: 12,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: 2
                    }}
                    className="absolute top-1/3 right-1/3 w-32 h-32 bg-gradient-to-bl from-accent/40 to-primary/40 rounded-lg blur-sm"
                  />

                  {/* Code/Window mockup */}
                  <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.8, duration: 0.8 }}
                    className="absolute inset-0 flex items-center justify-center"
                  >
                    <motion.div
                      whileHover={{ y: -5, boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" }}
                      transition={{ type: "spring", stiffness: 300 }}
                      className="w-full max-w-md bg-background/95 backdrop-blur-sm rounded-lg shadow-2xl overflow-hidden border border-muted"
                    >
                      <div className="flex items-center px-4 py-2 bg-muted/50 border-b border-muted">
                        <div className="flex space-x-2">
                          <div className="w-3 h-3 rounded-full bg-destructive/70" />
                          <div className="w-3 h-3 rounded-full bg-yellow-500/70" />
                          <div className="w-3 h-3 rounded-full bg-green-500/70" />
                        </div>
                        <div className="mx-auto text-xs font-medium text-muted-foreground">
                          app.randisoft.com
                        </div>
                      </div>
                      <div className="p-5 text-xs font-mono">
                        <motion.div
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ delay: 1.2, duration: 0.5 }}
                          className="text-primary"
                        >
                          const <span className="text-accent">randisoft</span> = {`{`}
                        </motion.div>
                        <motion.div
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 1.4, duration: 0.5 }}
                          className="pl-4"
                        >
                          coreProducts: <span className="text-secondary">['SkillsMarketplace', 'AgrotechPlatform', 'GovernmentInfoHub', 'HealthTechPlatform']</span>,
                        </motion.div>
                        <motion.div
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 1.6, duration: 0.5 }}
                          className="pl-4"
                        >
                          focus: <span className="text-secondary">'solving critical problems'</span>,
                        </motion.div>
                        <motion.div
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 1.8, duration: 0.5 }}
                          className="pl-4"
                        >
                          location: <span className="text-secondary">'Nigeria'</span>,
                        </motion.div>
                        <motion.div
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 2.0, duration: 0.5 }}
                          className="pl-4"
                        >
                          mission: <span className="text-secondary">'Building digital platforms that matter'</span>
                        </motion.div>
                        <motion.div
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ delay: 2.2, duration: 0.5 }}
                        >
                          {`}`};
                        </motion.div>
                      </div>
                    </motion.div>
                  </motion.div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Company Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16"
        >
          {companyStats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 + (index * 0.1) }}
              viewport={{ once: true }}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
              className="bg-card p-6 rounded-xl shadow-md border border-muted/50 flex flex-col items-center text-center"
            >
              <div className="p-3 rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 mb-4">
                <stat.icon className="w-6 h-6 text-primary" />
              </div>
              <motion.div
                initial={{ scale: 0.9 }}
                whileInView={{ scale: 1 }}
                transition={{ type: "spring", stiffness: 300, delay: 0.3 + (index * 0.1) }}
                viewport={{ once: true }}
                className="text-3xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent"
              >
                {stat.value}
              </motion.div>
              <div className="text-sm text-muted-foreground mt-1">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </Container>

      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-10" />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 0.3, 0] }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute -top-1/2 right-0 w-[600px] h-[600px] bg-gradient-to-br from-primary/30 to-secondary/30 rounded-full blur-3xl"
        />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 0.3, 0] }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
          className="absolute -bottom-1/2 left-0 w-[600px] h-[600px] bg-gradient-to-tr from-secondary/30 to-accent/30 rounded-full blur-3xl"
        />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 0.25, 0] }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
          className="absolute top-1/3 left-1/4 w-[400px] h-[400px] bg-gradient-to-bl from-accent/30 to-primary/30 rounded-full blur-3xl"
        />
      </div>
    </div>
  )
}
