"use client"

import { motion } from "framer-motion"
import Container from "@/components/layout/container"
import Breadcrumb from "@/components/layout/breadcrumb"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"
import {
  RiTeamLine,
  RiCheckLine,
  RiAppleFill,
  RiAndroidFill,
  RiSmartphoneLine,
  RiShieldCheckLine,
  RiStarFill,
  RiTimeLine,
} from "react-icons/ri"

export default function SkillsMarketplacePage() {
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
          <div className="flex flex-col md:flex-row gap-8 items-center mb-16">
            <div className="flex-1">
              <div className="inline-block px-4 py-1.5 rounded-full bg-gradient-to-r from-primary/20 to-secondary/20 text-primary font-medium text-sm mb-6">
                Mobile Application
              </div>
              <h1 className="text-4xl font-bold mb-6">Skills Marketplace</h1>
              <p className="text-xl text-muted-foreground mb-8">
                Connecting skilled individuals to opportunities and services through our dedicated mobile application.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button asChild size="lg" className="bg-black hover:bg-black/90 text-white">
                  <Link href="#" className="flex items-center">
                    <RiAppleFill className="mr-2 h-5 w-5" />
                    App Store
                  </Link>
                </Button>
                <Button asChild size="lg" className="bg-[#3DDC84] hover:bg-[#3DDC84]/90 text-black">
                  <Link href="#" className="flex items-center">
                    <RiAndroidFill className="mr-2 h-5 w-5" />
                    Google Play
                  </Link>
                </Button>
              </div>
            </div>
            <div className="flex-1 relative h-[400px] w-full rounded-xl overflow-hidden shadow-xl">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-secondary/20 to-accent/20 p-1.5">
                <div className="relative w-full h-full rounded-xl overflow-hidden flex items-center justify-center bg-background/50 backdrop-blur-sm">
                  <div className="text-center p-8">
                    <RiSmartphoneLine className="w-24 h-24 mx-auto text-primary mb-6" />
                    <h3 className="text-2xl font-bold mb-2">Coming Soon</h3>
                    <p className="text-muted-foreground">
                      Our mobile app is currently in development and will be available for download soon.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <div>
              <h2 className="text-2xl font-bold mb-6">About Skills Marketplace</h2>
              <p className="text-muted-foreground mb-6">
                Skills Marketplace is a mobile-first platform that bridges the gap between skilled professionals and those who need their services. Our marketplace ensures quality through verification, secure payments, and a robust rating system.
              </p>
              <p className="text-muted-foreground mb-6">
                Unlike traditional web platforms, we've designed Skills Marketplace as a dedicated mobile application to provide the best user experience for on-the-go service booking and management.
              </p>

              <div className="flex items-center gap-2 mb-4 mt-8">
                <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-sm flex items-center">
                  <RiTimeLine className="mr-1" /> Beta Testing
                </span>
                <span className="px-3 py-1 rounded-full bg-secondary/10 text-secondary text-sm">
                  Launching Q3 2024
                </span>
              </div>
            </div>

            <div className="bg-card rounded-xl shadow-md p-8">
              <h3 className="text-xl font-semibold mb-4 flex items-center">
                <RiTeamLine className="mr-2 text-primary" /> Key Features
              </h3>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-2">
                  <RiCheckLine className="text-primary mt-1 flex-shrink-0" />
                  <span>Verified service provider profiles</span>
                </li>
                <li className="flex items-start gap-2">
                  <RiCheckLine className="text-primary mt-1 flex-shrink-0" />
                  <span>Secure payment processing</span>
                </li>
                <li className="flex items-start gap-2">
                  <RiCheckLine className="text-primary mt-1 flex-shrink-0" />
                  <span>Rating and review system</span>
                </li>
                <li className="flex items-start gap-2">
                  <RiCheckLine className="text-primary mt-1 flex-shrink-0" />
                  <span>Service quality guarantee</span>
                </li>
                <li className="flex items-start gap-2">
                  <RiCheckLine className="text-primary mt-1 flex-shrink-0" />
                  <span>Mobile-friendly interface</span>
                </li>
                <li className="flex items-start gap-2">
                  <RiCheckLine className="text-primary mt-1 flex-shrink-0" />
                  <span>Real-time messaging</span>
                </li>
              </ul>

              <h3 className="text-xl font-semibold mb-4 flex items-center">
                <RiShieldCheckLine className="mr-2 text-secondary" /> Why Mobile App?
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <RiStarFill className="text-secondary mt-1 flex-shrink-0" />
                  <span>Better user experience for on-the-go service booking</span>
                </li>
                <li className="flex items-start gap-2">
                  <RiStarFill className="text-secondary mt-1 flex-shrink-0" />
                  <span>Push notifications for real-time updates</span>
                </li>
                <li className="flex items-start gap-2">
                  <RiStarFill className="text-secondary mt-1 flex-shrink-0" />
                  <span>Access to device features like camera and location</span>
                </li>
                <li className="flex items-start gap-2">
                  <RiStarFill className="text-secondary mt-1 flex-shrink-0" />
                  <span>Offline capabilities for certain features</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-muted/30 p-8 rounded-xl mb-12">
            <h2 className="text-2xl font-bold mb-4">Join Our Beta Program</h2>
            <p className="text-muted-foreground mb-6">
              We're currently in the beta testing phase and looking for users to help us improve the app before our official launch. Sign up to be among the first to experience Skills Marketplace.
            </p>
            <Button asChild size="lg" className="bg-gradient-to-r from-secondary to-primary hover:from-secondary/90 hover:to-primary/90">
              <Link href="/products#beta">Join Beta List</Link>
            </Button>
          </div>
        </div>
      </Container>
    </motion.div>
  )
}
