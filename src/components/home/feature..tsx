"use client";

import Container from "@/components/layout/container";
import { motion } from "framer-motion";
import {
  RiBriefcase2Line,
  RiUserSearchLine,
  RiRobot2Line,
  RiTeamLine,
  RiBarChart2Line,
  RiFlowChart,
} from "react-icons/ri";

const features = [
  {
    title: "Smart Resume Analysis",
    description:
      "Intelligent candidate evaluation using advanced AI algorithms",
    icon: RiBriefcase2Line,
    category: "recruit",
  },
  {
    title: "Intelligent Job Matching",
    description: "Connect the right talent with the right opportunities",
    icon: RiUserSearchLine,
    category: "recruit",
  },
  {
    title: "Workflow Automation",
    description: "Streamline business processes automatically",
    icon: RiFlowChart,
    category: "automate",
  },
  {
    title: "Team Collaboration",
    description: "Enhanced communication between recruiters and candidates",
    icon: RiTeamLine,
    category: "recruit",
  },
  {
    title: "Analytics Dashboard",
    description: "Data-driven insights for better decision making",
    icon: RiBarChart2Line,
    category: "both",
  },
  {
    title: "Process Optimization",
    description: "Automated business operations for maximum efficiency",
    icon: RiRobot2Line,
    category: "automate",
  },
];

export default function Features() {
  return (
    <section className="py-20 bg-muted/50">
      <Container>
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Powerful Features for Modern Businesses
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Leverage AI technology to transform your recruitment and business
            processes
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative p-6 bg-background rounded-lg border shadow-sm hover:shadow-md transition-all"
            >
              <div className="flex items-center gap-4">
                <feature.icon className="h-8 w-8 text-primary" />
                <h3 className="text-lg font-semibold">{feature.title}</h3>
              </div>
              <p className="mt-4 text-muted-foreground">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
