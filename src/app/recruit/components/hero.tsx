"use client";

import Container from "@/components/layout/container";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import Link from "next/link";

export default function RecruitHero() {
  return (
    <section className="relative py-20">
      <Container>
        <div className="flex flex-col items-center text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-bold mb-6"
          >
            AI-Powered Recruitment Platform
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-muted-foreground mb-8 max-w-2xl"
          >
            Join thousands of companies and job seekers using our AI technology
            to make better hiring decisions.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="flex gap-4"
          >
            <Button size="lg" asChild>
              <Link href="/recruit/company">For Companies</Link>
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
