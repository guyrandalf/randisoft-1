"use client";

import Container from "@/components/layout/container";
import { motion } from "framer-motion";
import {
  RiFileSearchLine,
  RiUserSearchLine,
  RiChatSmile2Line,
} from "react-icons/ri";

const steps = [
  {
    title: "AI Screening",
    description:
      "Our AI analyzes resumes and job descriptions for perfect matches",
    icon: RiFileSearchLine,
  },
  {
    title: "Smart Matching",
    description:
      "Connect with ideal candidates or jobs based on AI recommendations",
    icon: RiUserSearchLine,
  },
  {
    title: "Direct Communication",
    description:
      "Chat, schedule interviews, and make hiring decisions seamlessly",
    icon: RiChatSmile2Line,
  },
];

export default function HowItWorks() {
  return (
    <section className="py-20 bg-muted/50">
      <Container>
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">
            How Randisoft Recruit Works
          </h2>
          <p className="text-lg text-muted-foreground">
            Simple, efficient, and intelligent hiring process
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative p-6 bg-background rounded-lg border text-center"
            >
              <step.icon className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
              <p className="text-muted-foreground">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
