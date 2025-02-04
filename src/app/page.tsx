"use client";

import Hero from "@/components/home/hero";
import { motion } from "framer-motion";
import Features from "../components/home/feature.";
import Benefits from "../components/home/benefits";
import CTA from "../components/home/cta";
import Testimonials from "../components/home/testimonials";
import Pricing from "../components/home/pricing";
import FAQ from "../components/home/faq";

export default function Home() {
  return (
    <div className="space-y-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <Hero />
        <Features />
        <Benefits />
        <CTA />
        <Testimonials />
        <Pricing />
        <FAQ />
      </motion.div>
    </div>
  );
}
