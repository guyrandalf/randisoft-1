"use client"

import SolutionLayout from "@/components/solutions/solution-layout"
import {
  RiBarChart2Line,
  RiBrainLine,
  RiDashboardLine,
  RiDatabase2Line,
  RiPieChartLine,
  RiLineChartLine,
} from "react-icons/ri"

const features = [
  {
    title: "Advanced Analytics Dashboard",
    description:
      "Customizable dashboards with real-time data visualization and insights",
    icon: RiDashboardLine,
  },
  {
    title: "Predictive Analytics",
    description:
      "AI-powered forecasting and trend analysis for better decisions",
    icon: RiBrainLine,
  },
  {
    title: "Big Data Processing",
    description: "Handle and analyze large-scale enterprise data efficiently",
    icon: RiDatabase2Line,
  },
  {
    title: "Business Intelligence",
    description: "Transform raw data into actionable business insights",
    icon: RiBarChart2Line,
  },
  {
    title: "Custom Reports",
    description: "Generate detailed reports with automated insights",
    icon: RiPieChartLine,
  },
  {
    title: "Performance Metrics",
    description: "Track KPIs and business metrics in real-time",
    icon: RiLineChartLine,
  },
]

const benefits = [
  "Make data-driven decisions with real-time insights",
  "Identify trends and patterns in your business data",
  "Improve forecasting accuracy with predictive analytics",
  "Automate report generation and data analysis",
  "Integrate data from multiple sources for comprehensive insights",
  "Custom dashboards for different stakeholders",
  "Advanced data visualization capabilities",
]

export default function AnalyticsPage() {
  return (
    <SolutionLayout
      title="Data Analytics & BI"
      subtitle="Advanced Analytics and Business Intelligence"
      description="Transform your data into actionable insights with our advanced analytics and business intelligence solutions."
      features={features}
      image="/solutions/analytics.jpg"
      benefits={benefits}
    />
  )
}
