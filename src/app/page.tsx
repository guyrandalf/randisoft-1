"use client"

import { motion } from "framer-motion"
import Hero from "@/components/home/hero"
import About from "@/components/home/about"
import Team from "@/components/home/team"
import Products from "@/components/home/products"
import WhyChooseUs from "@/components/home/why-choose-us"
import Flagships from "@/components/home/flagships"
import CTA from "@/components/home/cta"

export default function Home() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="space-y-0"
    >
      <Hero />
      <About />
      <Products />
      <Team />
      <WhyChooseUs />
      <Flagships />
      <CTA />
    </motion.div>
  )
}
