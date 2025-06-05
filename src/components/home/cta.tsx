"use client"

import Container from "@/components/layout/container"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import Link from "next/link"
import { RiArrowRightLine, RiMailLine, RiPhoneLine, RiCalendarLine } from "react-icons/ri"

export default function CTA() {
  return (
    <section className="py-24 relative overflow-hidden bg-muted/30">
      <Container>
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <h2 className="text-4xl font-bold tracking-tight">
              Ready to Start Your Project?
            </h2>

            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Let's discuss your requirements and provide a custom quote tailored to your business needs.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="group" asChild>
                <Link href="/contact">
                  Get Free Quote
                  <RiArrowRightLine className="ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="group" asChild>
                <Link href="/contact#schedule">
                  <RiCalendarLine className="mr-2" />
                  Schedule Consultation
                </Link>
              </Button>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-4">
              <div className="flex items-center gap-2 text-muted-foreground">
                <RiMailLine className="text-primary" />
                <a href="mailto:info@randisoft.com" className="hover:text-primary transition-colors">
                  info@randisoft.com
                </a>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <RiPhoneLine className="text-primary" />
                <a href="tel:+2341234567890" className="hover:text-primary transition-colors">
                  +234 123 456 7890
                </a>
              </div>
            </div>

            <p className="text-sm text-muted-foreground">
              We typically respond within 24 hours. Your project details are kept confidential.
            </p>
          </motion.div>
        </div>
      </Container>

      {/* Background decoration */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-10" />
        <div className="absolute -top-1/2 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-1/2 left-0 w-96 h-96 bg-secondary/10 rounded-full blur-3xl" />
      </div>
    </section>
  )
}
