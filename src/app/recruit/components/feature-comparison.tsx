"use client";

import Container from "@/components/layout/container";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import {
  RiTeamLine,
  RiUserSearchLine,
  RiRobot2Line,
  RiBarChartLine,
  RiFileTextLine,
  RiCalendarLine,
} from "react-icons/ri";

const features = {
  recruiters: [
    {
      title: "AI Resume Screening",
      description: "Automatically screen and rank candidates",
      icon: RiRobot2Line,
    },
    {
      title: "Analytics Dashboard",
      description: "Track hiring metrics and performance",
      icon: RiBarChartLine,
    },
    {
      title: "Team Collaboration",
      description: "Collaborate with your hiring team",
      icon: RiTeamLine,
    },
  ],
  jobSeekers: [
    {
      title: "Smart Job Matching",
      description: "Get matched with relevant opportunities",
      icon: RiUserSearchLine,
    },
    {
      title: "Resume Enhancement",
      description: "AI-powered resume optimization",
      icon: RiFileTextLine,
    },
    {
      title: "Interview Scheduling",
      description: "Easy interview coordination",
      icon: RiCalendarLine,
    },
  ],
};

export default function FeatureComparison() {
  return (
    <section className="py-20">
      <Container>
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Solutions for Everyone</h2>
          <p className="text-lg text-muted-foreground">
            Powerful features tailored for both recruiters and job seekers
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Recruiters Section */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-8"
          >
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold mb-4">For Recruiters</h3>
              <p className="text-muted-foreground">
                Streamline your hiring process with AI
              </p>
            </div>

            {features.recruiters.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex gap-4 p-4 bg-card rounded-lg border"
              >
                <feature.icon className="w-6 h-6 text-primary flex-shrink-0" />
                <div>
                  <h4 className="font-semibold">{feature.title}</h4>
                  <p className="text-sm text-muted-foreground">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            ))}

            <Button className="w-full" asChild>
              <Link href="/recruit/company">Get Started as Recruiter</Link>
            </Button>
          </motion.div>

          {/* Job Seekers Section */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-8"
          >
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold mb-4">For Job Seekers</h3>
              <p className="text-muted-foreground">
                Find your dream job with AI assistance
              </p>
            </div>

            {features.jobSeekers.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex gap-4 p-4 bg-card rounded-lg border"
              >
                <feature.icon className="w-6 h-6 text-primary flex-shrink-0" />
                <div>
                  <h4 className="font-semibold">{feature.title}</h4>
                  <p className="text-sm text-muted-foreground">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            ))}

            <Button className="w-full" asChild>
              <Link href="/recruit/candidate">Get Started as Job Seeker</Link>
            </Button>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
