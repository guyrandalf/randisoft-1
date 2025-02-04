"use client";

import Container from "@/components/layout/container";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import Link from "next/link";
import {
  RiRobot2Line,
  RiTeamLine,
  RiFlowChart,
  RiSpeedLine,
} from "react-icons/ri";

const products = [
  {
    title: "Randisoft Recruit",
    description:
      "AI-powered recruitment platform connecting talent with opportunities. Perfect for both recruiters and job seekers.",
    icon: RiTeamLine,
    status: "Available",
    link: "/recruit",
    features: [
      "AI Resume Screening",
      "Smart Job Matching",
      "Automated Shortlisting",
      "Direct Communication",
    ],
  },
  {
    title: "Randisoft Automate",
    description:
      "Business process automation platform. Streamline operations and enhance productivity.",
    icon: RiRobot2Line,
    status: "Coming Soon",
    link: "/automate",
    features: [
      "Workflow Automation",
      "Document Processing",
      "Task Management",
      "Process Analytics",
    ],
  },
];

export default function Hero() {
  return (
    <div className="relative overflow-hidden bg-background">
      <Container>
        <div className="flex flex-col items-center justify-center max-w-6xl mx-auto pt-24 pb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-foreground mb-6">
              Transform Your Business with{" "}
              <span className="text-primary">AI-Powered Solutions</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Experience the future of business operations with our AI-driven
              platforms. From intelligent recruitment to seamless automation,
              we're revolutionizing how businesses work.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 w-full">
            {products.map((product, index) => (
              <motion.div
                key={product.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="relative p-8 bg-card rounded-xl border shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center space-x-4">
                    <product.icon className="h-8 w-8 text-primary" />
                    <h2 className="text-2xl font-semibold">{product.title}</h2>
                  </div>
                  <Badge
                    variant={
                      product.status === "Available" ? "default" : "secondary"
                    }
                  >
                    {product.status}
                  </Badge>
                </div>

                <p className="text-muted-foreground mb-6">
                  {product.description}
                </p>

                <ul className="space-y-3 mb-8">
                  {product.features.map((feature) => (
                    <li key={feature} className="flex items-center text-sm">
                      <span className="mr-2">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>

                <Button
                  className="w-full"
                  variant={
                    product.status === "Available" ? "default" : "secondary"
                  }
                  disabled={product.status !== "Available"}
                >
                  <Link href={product.link}>
                    {product.status === "Available"
                      ? "Get Started"
                      : "Coming Soon"}
                  </Link>
                </Button>
              </motion.div>
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
}
