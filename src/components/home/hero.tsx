"use client";

import Container from "@/components/layout/container";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Hero() {
  return (
    <div className="relative">
      <Container>
        <div className="flex flex-col items-center justify-center max-w-4xl mx-auto pt-20 pb-16 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl"
          >
            Transform Your Business with{" "}
            <span className="text-primary">AI-Powered</span> Solutions
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mt-6 text-lg leading-8 text-muted-foreground"
          >
            Streamline recruitment processes and automate business operations
            with our advanced AI technology. Built for modern businesses seeking
            efficiency and growth.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-10 flex items-center justify-center gap-x-6"
          >
            <Button asChild size="lg">
              <Link href="/recruit">Try Recruit AI</Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/automate">Explore Automate AI</Link>
            </Button>
          </motion.div>
        </div>
      </Container>
    </div>
  );
}
