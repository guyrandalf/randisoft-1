"use client";

import Hero from "@/components/home/hero";
import { motion } from "framer-motion";

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
      </motion.div>
    </div>
  );
}
