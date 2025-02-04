"use client";

import Container from "@/components/layout/container";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import Link from "next/link";

export default function CTA() {
  return (
    <section className="py-20 bg-muted/50">
      <Container>
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-3xl font-bold tracking-tight sm:text-4xl mb-6"
          >
            Ready to Transform Your Hiring Process?
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-lg text-muted-foreground mb-8"
          >
            Join thousands of companies and job seekers using Randisoft to
            connect, hire, and grow with AI-powered solutions.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Button size="lg" asChild>
              <Link href="/recruit/company">For Recruiters</Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="/recruit/candidate">For Job Seekers</Link>
            </Button>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
