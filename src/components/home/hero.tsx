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
    value: "5+",
    label: "Years Combined Experience",
    icon: RiCodeLine,
  },
  {
    value: "20+",
    label: "Successful Projects",
    icon: RiStackLine,
  },
  {
    value: "10+",
    label: "Tech Stack Proficiency",
    icon: RiTeamLine,
  },
  {
    value: "100%",
    label: "Client Satisfaction",
    icon: RiRocketLine,
  },
]

export default function Hero() {
  return (
    <div className="relative overflow-hidden bg-background min-h-screen flex items-center">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="flex flex-col items-start text-left">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-4xl sm:text-5xl md:text-6xl font-bold bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent animate-gradient"
            >
              Building Software Products That Matter
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mt-6 text-xl text-muted-foreground max-w-2xl"
            >
              Randisoft creates innovative software solutions for Nigerian businesses and individuals
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="mt-8 flex flex-wrap gap-4"
            >
              <Button asChild size="lg" className="rounded-full">
                <Link href="/products">Explore Our Products</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="rounded-full">
                <Link href="/products#beta">Join Our Beta</Link>
              </Button>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="relative hidden lg:block"
          >
            <div className="relative w-full h-[500px] rounded-2xl overflow-hidden bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10 p-1">
              <div className="absolute inset-0 bg-grid-subtle opacity-30" />
              <div className="relative w-full h-full rounded-xl overflow-hidden flex items-center justify-center">
                {/* Replace with actual illustration or keep abstract animation */}
                <div className="relative w-4/5 h-4/5">
                  <motion.div
                    animate={{
                      rotate: [0, 5, 0, -5, 0],
                      y: [0, -10, 0, 10, 0]
                    }}
                    transition={{
                      duration: 10,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                    className="absolute top-1/4 left-1/4 w-32 h-32 bg-primary/30 rounded-2xl blur-md"
                  />
                  <motion.div
                    animate={{
                      rotate: [0, -5, 0, 5, 0],
                      y: [0, 10, 0, -10, 0]
                    }}
                    transition={{
                      duration: 8,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: 1
                    }}
                    className="absolute bottom-1/4 right-1/4 w-40 h-40 bg-secondary/30 rounded-full blur-md"
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
                    className="absolute top-1/3 right-1/3 w-24 h-24 bg-accent/30 rounded-lg blur-sm"
                  />

                  {/* Code/Window mockup */}
                  <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.8, duration: 0.8 }}
                    className="absolute inset-0 flex items-center justify-center"
                  >
                    <div className="w-full max-w-md bg-background/90 backdrop-blur-sm rounded-lg shadow-2xl overflow-hidden border border-muted">
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
                      <div className="p-4 text-xs font-mono">
                        <div className="text-primary">const <span className="text-accent">randisoft</span> = {`{`}</div>
                        <div className="pl-4">products: <span className="text-secondary">['SkillsMarketplace', 'InfoPlatform', 'HealthcareSolutions']</span>,</div>
                        <div className="pl-4">focus: <span className="text-secondary">'innovation'</span>,</div>
                        <div className="pl-4">location: <span className="text-secondary">'Nigeria'</span>,</div>
                        <div className="pl-4">mission: <span className="text-secondary">'Building software that matters'</span></div>
                        <div>{`}`};</div>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </Container>

      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-10" />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 0.2, 0] }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute -top-1/2 right-0 w-[500px] h-[500px] bg-primary/20 rounded-full blur-3xl"
        />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 0.2, 0] }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
          className="absolute -bottom-1/2 left-0 w-[500px] h-[500px] bg-secondary/20 rounded-full blur-3xl"
        />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 0.15, 0] }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
          className="absolute top-1/3 left-1/4 w-[300px] h-[300px] bg-accent/20 rounded-full blur-3xl"
        />
      </div>
    </div>
  )
}
