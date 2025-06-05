"use client"

import SolutionLayout from "@/components/solutions/solution-layout"
import {
  RiCodeLine,
  RiTeamLine,
  RiAppsLine,
  RiDatabase2Line,
  RiTestTubeLine,
  RiShieldUserLine,
} from "react-icons/ri"

const features = [
  {
    title: "Custom Software Development",
    description:
      "Tailor-made software solutions designed for your specific business needs",
    icon: RiCodeLine,
  },
  {
    title: "Enterprise Applications",
    description: "Scalable enterprise applications with modern architecture",
    icon: RiAppsLine,
  },
  {
    title: "Database Solutions",
    description: "Custom database design and optimization services",
    icon: RiDatabase2Line,
  },
  {
    title: "Dedicated Teams",
    description: "Expert development teams aligned with your business goals",
    icon: RiTeamLine,
  },
  {
    title: "Quality Assurance",
    description: "Comprehensive testing and quality assurance processes",
    icon: RiTestTubeLine,
  },
  {
    title: "Security First",
    description: "Built-in security with regular security assessments",
    icon: RiShieldUserLine,
  },
]

const benefits = [
  "Solutions tailored to your exact business requirements",
  "Modern and scalable architecture for future growth",
  "Integration with existing systems and workflows",
  "Reduced time-to-market with agile development",
  "Ongoing support and maintenance",
  "Regular updates and enhancements",
  "Knowledge transfer and documentation",
]

export default function DevelopmentPage() {
  return (
    <SolutionLayout
      title="Custom Development"
      subtitle="Enterprise Software Solutions"
      description="Build powerful, scalable, and secure enterprise applications tailored to your unique business requirements."
      features={features}
      image="/solutions/development.jpg"
      benefits={benefits}
    />
  )
}
