"use client";

import Container from "@/components/layout/container";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import Link from "next/link";
import { Check } from "lucide-react";
import { useState } from "react";

const tiers = [
  {
    name: "Free",
    price: { monthly: 0, annual: 0 },
    description: "Perfect for job seekers and small businesses",
    features: [
      "AI Resume Analysis",
      "Basic Job Matching",
      "Limited Job Postings",
      "Email Support",
    ],
    cta: "Get Started",
    href: "/signup",
  },
  {
    name: "Pro",
    price: { monthly: 49, annual: 470 },
    description: "Ideal for growing companies and active recruiters",
    features: [
      "Everything in Free",
      "Advanced AI Matching",
      "Unlimited Job Postings",
      "Interview Scheduling",
      "Analytics Dashboard",
      "Priority Support",
    ],
    cta: "Start Free Trial",
    href: "/signup/pro",
  },
  {
    name: "Enterprise",
    price: { monthly: "Custom", annual: "Custom" },
    description: "Custom solutions for large organizations",
    features: [
      "Everything in Pro",
      "Custom AI Models",
      "API Access",
      "Dedicated Support",
      "Custom Integrations",
      "SLA Agreement",
    ],
    cta: "Contact Sales",
    href: "/contact/sales",
  },
];

export default function Pricing() {
  const [annual, setAnnual] = useState(false);

  return (
    <section className="py-20">
      <Container>
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Simple, Transparent Pricing
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Choose the perfect plan for your needs
          </p>

          <div className="mt-6 flex items-center justify-center gap-4">
            <span
              className={!annual ? "text-foreground" : "text-muted-foreground"}
            >
              Monthly
            </span>
            <button
              onClick={() => setAnnual(!annual)}
              className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background ${
                annual ? "bg-primary" : "bg-muted"
              }`}
            >
              <span
                className={`inline-block h-5 w-5 transform rounded-full bg-background transition-transform ${
                  annual ? "translate-x-6" : "translate-x-1"
                }`}
              />
            </button>
            <span
              className={annual ? "text-foreground" : "text-muted-foreground"}
            >
              Annual <span className="text-primary">(Save 20%)</span>
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {tiers.map((tier, index) => (
            <motion.div
              key={tier.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative p-8 bg-card rounded-lg border shadow-sm flex flex-col h-full"
            >
              <div className="flex-1">
                <h3 className="text-2xl font-bold">{tier.name}</h3>
                <p className="mt-2 text-muted-foreground">{tier.description}</p>
                <div className="mt-4 mb-8">
                  <span className="text-4xl font-bold">
                    {typeof tier.price[annual ? "annual" : "monthly"] ===
                    "number"
                      ? `$${tier.price[annual ? "annual" : "monthly"]}`
                      : tier.price[annual ? "annual" : "monthly"]}
                  </span>
                  {typeof tier.price[annual ? "annual" : "monthly"] ===
                    "number" && (
                    <span className="text-muted-foreground">
                      /{annual ? "year" : "month"}
                    </span>
                  )}
                </div>
                <ul className="space-y-3 mb-8">
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-primary" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <Button className="w-full mt-auto" asChild>
                <Link href={tier.href}>{tier.cta}</Link>
              </Button>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
