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
  RiSmartphoneLine,
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
    image: "/products/agrotech.png",
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
  const [name, setName] = useState("")
  const [interest, setInterest] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [errorMessage, setErrorMessage] = useState("")

  const selectedProduct = products.find(product => product.id === activeProduct) || products[0]

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setErrorMessage("")

    try {
      // Simulate API call with a timeout
      await new Promise(resolve => setTimeout(resolve, 1000))

      // In a real application, this would be an API call to your backend
      // const response = await fetch('/api/beta-signup', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify({ name, email, interest, product: selectedProduct.id }),
      // })

      // if (!response.ok) throw new Error('Failed to submit')

      setIsSuccess(true)
      setName("")
      setEmail("")
      setInterest("")

      // Reset success message after 5 seconds
      setTimeout(() => {
        setIsSuccess(false)
      }, 5000)
    } catch (error) {
      setErrorMessage("There was an error submitting your request. Please try again.")
      console.error("Form submission error:", error)
    } finally {
      setIsSubmitting(false)
    }
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

              {selectedProduct.id === "skills" && (
                <div className="mb-6">
                  <Button asChild className="bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90">
                    <Link href="/products/skills" className="flex items-center">
                      <RiSmartphoneLine className="mr-2 h-4 w-4" />
                      View Mobile App Details
                    </Link>
                  </Button>
                </div>
              )}

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
                {isSuccess && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="p-4 rounded-lg bg-green-100 dark:bg-green-900/20 text-green-800 dark:text-green-300 mb-4 flex items-center"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <p>Thank you for joining the beta list for {selectedProduct.title}! We'll contact you soon.</p>
                  </motion.div>
                )}

                {errorMessage && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="p-4 rounded-lg bg-red-100 dark:bg-red-900/20 text-red-800 dark:text-red-300 mb-4 flex items-center"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                    </svg>
                    <p>{errorMessage}</p>
                  </motion.div>
                )}

                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    Your Name
                  </label>
                  <Input
                    id="name"
                    type="text"
                    placeholder="John Doe"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                    className="border-secondary/20 focus:border-secondary focus:ring-secondary/30"
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
                    className="border-secondary/20 focus:border-secondary focus:ring-secondary/30"
                  />
                </div>

                <div>
                  <label htmlFor="interest" className="block text-sm font-medium mb-2">
                    Why are you interested in this product?
                  </label>
                  <textarea
                    id="interest"
                    rows={3}
                    value={interest}
                    onChange={(e) => setInterest(e.target.value)}
                    className="w-full rounded-md border border-secondary/20 bg-background px-3 py-2 text-sm focus:border-secondary focus:ring-secondary/30 focus:outline-none focus:ring-2"
                    placeholder="Tell us how you plan to use this product..."
                    required
                  ></textarea>
                </div>

                <Button
                  type="submit"
                  className="w-full bg-gradient-to-r from-secondary to-primary hover:from-secondary/90 hover:to-primary/90 transition-all duration-300"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <span className="flex items-center justify-center">
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Processing...
                    </span>
                  ) : "Join Beta List"}
                </Button>

                <p className="text-xs text-muted-foreground text-center">
                  By signing up, you agree to our <Link href="/terms" className="underline hover:text-secondary transition-colors">Terms of Service</Link> and <Link href="/privacy" className="underline hover:text-secondary transition-colors">Privacy Policy</Link>.
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
                  While our primary focus is on building our core digital platforms, we also offer staffing and recruiting services to help businesses find the right talent for their needs.
                </p>
                <p className="text-muted-foreground mb-6">
                  Our staffing and recruiting services help connect businesses with skilled professionals across various industries, not limited to tech.
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
                    <span>Staffing/Recruiting - connecting businesses with skilled professionals</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <RiCheckLine className="text-primary mt-1 flex-shrink-0" />
                    <span>Talent Development - training and professional development programs</span>
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
