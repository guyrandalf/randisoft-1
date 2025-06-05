"use client"

import SolutionLayout from "@/components/solutions/solution-layout"
import {
  RiCloudLine,
  RiServerLine,
  RiShieldCheckLine,
  RiTimeLine,
  RiSettings3Line,
  RiRestartLine,
} from "react-icons/ri"

const features = [
  {
    title: "Cloud Migration",
    description:
      "Seamless migration of your infrastructure to the cloud with zero downtime",
    icon: RiCloudLine,
  },
  {
    title: "Infrastructure Automation",
    description: "Automated provisioning and management of cloud resources",
    icon: RiServerLine,
  },
  {
    title: "Security & Compliance",
    description:
      "Enterprise-grade security with continuous compliance monitoring",
    icon: RiShieldCheckLine,
  },
  {
    title: "24/7 Monitoring",
    description: "Real-time monitoring and proactive issue resolution",
    icon: RiTimeLine,
  },
  {
    title: "DevOps Integration",
    description: "Streamlined CI/CD pipelines and infrastructure as code",
    icon: RiSettings3Line,
  },
  {
    title: "Disaster Recovery",
    description: "Robust backup and disaster recovery solutions",
    icon: RiRestartLine,
  },
]

const benefits = [
  "Reduce infrastructure costs with optimized cloud resources",
  "Improve scalability and flexibility of IT operations",
  "Enhance security and compliance posture",
  "Minimize downtime with robust disaster recovery",
  "Accelerate deployment with infrastructure automation",
  "24/7 expert support and monitoring",
  "Hybrid cloud solutions for maximum flexibility",
]

export default function CloudPage() {
  return (
    <SolutionLayout
      title="Cloud Infrastructure"
      subtitle="Enterprise Cloud Solutions"
      description="Transform your IT infrastructure with secure, scalable, and efficient cloud solutions designed for enterprise needs."
      features={features}
      image="/solutions/cloud.jpg"
      benefits={benefits}
    />
  )
}
