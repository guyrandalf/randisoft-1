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
    title: "Skilled Professionals",
    description:
      "Access to vetted professionals across various industry positions",
    icon: RiCodeLine,
  },
  {
    title: "Project-Based Outsourcing",
    description: "Complete project delivery by specialized teams",
    icon: RiAppsLine,
  },
  {
    title: "Staff Augmentation",
    description: "Seamlessly integrate talent with your existing teams",
    icon: RiDatabase2Line,
  },
  {
    title: "Dedicated Teams",
    description: "Full teams of specialists aligned with your business goals",
    icon: RiTeamLine,
  },
  {
    title: "Quality Management",
    description: "Comprehensive quality control and performance monitoring",
    icon: RiTestTubeLine,
  },
  {
    title: "Flexible Engagement",
    description: "Adaptable models to suit your specific business needs",
    icon: RiShieldUserLine,
  },
]

const benefits = [
  "Access to top talent across every hot and needed industry position",
  "Reduced operational costs and overhead",
  "Scalable workforce that adapts to your business needs",
  "Focus on your core business objectives",
  "Faster project completion and time-to-market",
  "Specialized expertise without long-term commitments",
  "Improved business efficiency and productivity",
]

export default function DevelopmentPage() {
  return (
    <SolutionLayout
      title="Talent Outsourcing"
      subtitle="Industry Professionals On Demand"
      description="Access top industry talent across various sectors to scale your business efficiently and focus on your core objectives."
      features={features}
      image="/solutions/development.jpg"
      benefits={benefits}
    />
  )
}
