"use client";

import Container from "@/components/layout/container";
import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "How does the AI-powered matching system work?",
    answer:
      "Our AI analyzes job requirements and candidate profiles using advanced algorithms to create precise matches based on skills, experience, and preferences.",
  },
  {
    question: "Is Randisoft suitable for both recruiters and job seekers?",
    answer:
      "Yes, Randisoft serves both recruiters and job seekers with tailored features for each user type, enabling efficient connections and hiring processes.",
  },
  {
    question: "What makes Randisoft different from traditional job platforms?",
    answer:
      "Randisoft uses AI to automate screening, provide smart matches, and offer data-driven insights, making hiring more efficient and accurate.",
  },
  {
    question: "How secure is my data on Randisoft?",
    answer:
      "We implement enterprise-grade security measures and comply with data protection regulations to ensure your information remains safe and confidential.",
  },
  {
    question: "Can I integrate Randisoft with other HR tools?",
    answer:
      "Yes, Randisoft offers API access and integrations with popular HR tools and ATS systems in our Pro and Enterprise plans.",
  },
];

export default function FAQ() {
  return (
    <section className="py-20 bg-muted/50">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto"
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Frequently Asked Questions
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Find answers to common questions about Randisoft
            </p>
          </div>

          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger>{faq.question}</AccordionTrigger>
                <AccordionContent>{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </Container>
    </section>
  );
}
