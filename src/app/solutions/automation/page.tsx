"use client"

import SolutionLayout from "@/components/solutions/solution-layout"
import {
  RiRobot2Line,
  RiFlowChart,
  RiFileTextLine,
  RiDashboardLine,
  RiTeamLine,
  RiShieldCheckLine,
} from "react-icons/ri"

const features = [
  {
    title: "Intelligent Workflow Automation",
    description:
      "Transform complex business processes into streamlined automated workflows",
    icon: RiFlowChart,
  },
  {
    title: "Document Processing",
    description:
      "Automate document processing with AI-powered OCR and analysis",
    icon: RiFileTextLine,
  },
  {
    title: "Process Analytics",
    description: "Real-time insights into process performance and bottlenecks",
    icon: RiDashboardLine,
  },
  {
    title: "AI Decision Making",
    description: "Intelligent automation with AI-powered decision support",
    icon: RiRobot2Line,
  },
  {
    title: "Team Collaboration",
    description: "Built-in tools for team coordination and task management",
    icon: RiTeamLine,
  },
  {
    title: "Security & Compliance",
    description: "Enterprise-grade security with compliance monitoring",
    icon: RiShieldCheckLine,
  },
]

const benefits = [
  "Reduce operational costs by up to 40% through intelligent automation",
  "Eliminate manual errors and improve process accuracy",
  "Scale operations without increasing headcount",
  "Real-time visibility into process performance",
  "Faster processing times and improved customer satisfaction",
  "Easy integration with existing systems and workflows",
  "Ensure compliance with automated audit trails",
]

export default function AutomationPage() {
  return (
    <SolutionLayout
      title="Process Automation"
      subtitle="AI-Powered Business Process Automation"
      description="Transform your business operations with intelligent automation solutions that streamline workflows, reduce costs, and improve efficiency."
      features={features}
      image="/solutions/automation.jpg"
      benefits={benefits}
    />
  )
}
