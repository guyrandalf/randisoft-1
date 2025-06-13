"use client"

import { motion } from "framer-motion"
import { useState } from "react"
import Container from "@/components/layout/container"
import Breadcrumb from "@/components/layout/breadcrumb"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import Link from "next/link"
import Image from "next/image"
import {
  RiTeamLine,
  RiMapPinLine,
  RiCustomerService2Line,
  RiCodeLine,
  RiTimeLine,
  RiCheckLine,
  RiUserLine,
} from "react-icons/ri"

const products = [
  {
    id: "skills",
    title: "Skills Marketplace",
    tagline: "Connecting skilled individuals to opportunities and services",
    description: "A platform that bridges the gap between skilled professionals and those who need their services. Our marketplace ensures quality through verification, secure payments, and a robust rating system.",
    status: "Beta Testing",
    timeline: "Launching Q3 2024",
    icon: RiTeamLine,
    image: "/products/skills.jpg",
    features: [
      "Verified service provider profiles",
      "Secure payment processing",
      "Rating and review system",
      "Service quality guarantee",
      "Mobile-friendly interface",
      "Real-time messaging",
    ],
    targetUsers: [
      "Freelancers and service providers",
      "Small businesses",
      "Individuals seeking services",
      "Companies looking to outsource",
    ],
  },
  {
    id: "agrotech",
    title: "Agrotech Platform",
    tagline: "Solving farming challenges in Nigeria",
    description: "A solution focused on solving farming challenges in Nigeria including market access, productivity improvements, and supply chain optimization.",
    status: "In Development",
    timeline: "Expected Q1 2025",
    icon: RiMapPinLine,
    image: "/products/agrotech.jpg",
    features: [
      "Market access for farmers",
      "Supply chain optimization",
      "Productivity tools and resources",
      "Weather and climate information",
      "Agricultural best practices",
      "Financing options and connections",
    ],
    targetUsers: [
      "Farmers and agricultural workers",
      "Agribusinesses",
      "Food processors and distributors",
      "Agricultural input suppliers",
    ],
  },
  {
    id: "government",
    title: "Government Information Hub",
    tagline: "Centralized hub for verified public information",
    description: "A centralized, accessible hub for verified public and government information to combat misinformation and improve citizen access to important resources.",
    status: "Planning Phase",
    timeline: "Expected 2026",
    icon: RiCodeLine,
    image: "/products/information.jpg",
    features: [
      "Verified government information",
      "Simplified government process guides",
      "Document templates and generators",
      "Service locator for government offices",
      "Updates on policy changes",
      "Community forum for shared experiences",
    ],
    targetUsers: [
      "Nigerian citizens",
      "Businesses navigating regulations",
      "Legal professionals",
      "Civil society organizations",
    ],
  },
  {
    id: "healthcare",
    title: "Health Tech Platform",
    tagline: "Digital ecosystem for accessible healthcare",
    description: "A digital ecosystem for accessible and affordable healthcare in Nigeria, connecting patients with providers and improving health information access.",
    status: "Research Phase",
    timeline: "Target 2027",
    icon: RiCustomerService2Line,
    image: "/products/healthcare.jpg",
    features: [
      "Electronic health records",
      "Appointment scheduling system",
      "Medication tracking and reminders",
      "Telemedicine capabilities",
      "Health information resources",
      "Provider directory and reviews",
    ],
    targetUsers: [
      "Patients",
      "Healthcare providers",
      "Hospitals and clinics",
      "Pharmacies",
    ],
  },
]

export default function ProductsPage() {
  const [activeProduct, setActiveProduct] = useState("skills")
  const [email, setEmail] = useState("")

  const selectedProduct = products.find(product => product.id === activeProduct) || products[0]

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // In a real application, this would submit to a backend
    alert(`Thank you for joining the beta list for ${selectedProduct.title}! We'll contact you at ${email}`)
    setEmail("")
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="pt-24"
    >
      <Container>
        <Breadcrumb />

        <div className="py-12">
          <h1 className="text-4xl font-bold mb-6">Our Core Digital Platforms</h1>

          <p className="text-xl text-muted-foreground mb-12 max-w-3xl">
            At Randisoft, we're focused on building scalable digital platforms that solve critical problems in Nigeria. Our products are at various stages of development, from beta testing to research phase.
          </p>

          {/* Product Navigation */}
          <div className="flex flex-wrap gap-2 mb-12 border-b pb-4">
            {products.map((product) => (
              <Button
                key={product.id}
                variant={activeProduct === product.id ? "default" : "outline"}
                onClick={() => setActiveProduct(product.id)}
                className="mb-2"
              >
                <product.icon className="mr-2 h-4 w-4" />
                {product.title}
              </Button>
            ))}
          </div>

          {/* Product Details */}
          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <div>
              <div className="relative h-64 md:h-80 rounded-xl overflow-hidden mb-6 shadow-md">
                <Image
                  src={selectedProduct.image}
                  alt={selectedProduct.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-6">
                  <div className="text-white">
                    <h2 className="text-2xl font-bold">{selectedProduct.title}</h2>
                    <p className="text-white/80">{selectedProduct.tagline}</p>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-2 mb-4">
                <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-sm flex items-center">
                  <RiTimeLine className="mr-1" /> {selectedProduct.status}
                </span>
                <span className="px-3 py-1 rounded-full bg-secondary/10 text-secondary text-sm">
                  {selectedProduct.timeline}
                </span>
              </div>

              <p className="text-muted-foreground mb-6">
                {selectedProduct.description}
              </p>

              <h3 className="text-lg font-semibold mb-3">Key Features</h3>
              <ul className="space-y-2 mb-6">
                {selectedProduct.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2">
                    <RiCheckLine className="text-primary mt-1 flex-shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <h3 className="text-lg font-semibold mb-3">Target Users</h3>
              <ul className="space-y-2 mb-6">
                {selectedProduct.targetUsers.map((user) => (
                  <li key={user} className="flex items-start gap-2">
                    <RiUserLine className="text-secondary mt-1 flex-shrink-0" />
                    <span>{user}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Beta Signup Form */}
            <div id="beta" className="bg-card rounded-xl shadow-md p-8">
              <h3 className="text-2xl font-semibold mb-4">Join Our Beta List</h3>
              <p className="text-muted-foreground mb-6">
                Be among the first to experience {selectedProduct.title} when it launches. Sign up for our beta program to get early access and help shape the future of this product.
              </p>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    Your Name
                  </label>
                  <Input
                    id="name"
                    type="text"
                    placeholder="John Doe"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Email Address
                  </label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="john@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>

                <div>
                  <label htmlFor="interest" className="block text-sm font-medium mb-2">
                    Why are you interested in this product?
                  </label>
                  <textarea
                    id="interest"
                    rows={3}
                    className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
                    placeholder="Tell us how you plan to use this product..."
                  ></textarea>
                </div>

                <Button type="submit" className="w-full">
                  Join Beta List
                </Button>

                <p className="text-xs text-muted-foreground text-center">
                  By signing up, you agree to our <Link href="/terms" className="underline hover:text-primary">Terms of Service</Link> and <Link href="/privacy" className="underline hover:text-primary">Privacy Policy</Link>.
                </p>
              </form>

              <div className="mt-8 pt-6 border-t">
                <h4 className="font-medium mb-4">Want to know more?</h4>
                <Button variant="outline" asChild className="w-full">
                  <Link href="/contact">
                    Contact Our Product Team
                  </Link>
                </Button>
              </div>
            </div>
          </div>

          {/* Support Services Section */}
          <div className="mt-24 pt-12 border-t">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-2xl font-semibold mb-4">Support Services</h2>
                <p className="text-muted-foreground mb-6">
                  While our primary focus is on building our core digital platforms, we offer support services to generate revenue and extend our reach. These services help businesses access skilled professionals and manage business functions effectively.
                </p>
                <p className="text-muted-foreground mb-6">
                  Our support services include Staffing Agency Services and Outsourcing Services across various industries, not limited to tech.
                </p>
                <Button asChild>
                  <Link href="/services">Learn About Our Services</Link>
                </Button>
              </div>
              <div className="bg-muted/30 p-6 rounded-xl">
                <h3 className="text-lg font-semibold mb-4">Our support services include:</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <RiCheckLine className="text-primary mt-1 flex-shrink-0" />
                    <span>Staffing Agency Services - recruiting, training, and deploying skilled professionals</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <RiCheckLine className="text-primary mt-1 flex-shrink-0" />
                    <span>Outsourcing Services - managing entire business functions or roles</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <RiCheckLine className="text-primary mt-1 flex-shrink-0" />
                    <span>Cross-industry expertise (not limited to tech)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <RiCheckLine className="text-primary mt-1 flex-shrink-0" />
                    <span>Results-driven approach focused on business objectives</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </motion.div>
  )
}
