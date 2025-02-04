"use client";

import Container from "@/components/layout/container";
import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "HR Director",
    company: "Tech Corp",
    image: "/testimonials/sarah.jpg",
    content:
      "Randisoft has revolutionized our hiring process. The AI-powered matching system saved us countless hours in recruitment.",
    rating: 5,
  },
  {
    name: "Michael Chen",
    role: "Job Seeker",
    company: "Software Engineer",
    image: "/testimonials/michael.jpg",
    content:
      "Found my dream job through Randisoft. The AI recommendations were spot-on and the process was seamless.",
    rating: 5,
  },
  {
    name: "Emma Davis",
    role: "Recruitment Manager",
    company: "Global Solutions",
    image: "/testimonials/emma.jpg",
    content:
      "The automated screening has improved our candidate quality significantly. A game-changer for modern recruitment.",
    rating: 5,
  },
];

export default function Testimonials() {
  return (
    <section className="py-20">
      <Container>
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Trusted by Companies and Job Seekers
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            See what our users say about their experience with Randisoft
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-card p-6 rounded-lg border shadow-sm"
            >
              <div className="flex items-center gap-2 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                ))}
              </div>
              <p className="text-muted-foreground mb-4">
                {testimonial.content}
              </p>
              <div className="flex items-center gap-4">
                <div className="flex-1">
                  <p className="font-semibold">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">
                    {testimonial.role}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {testimonial.company}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
