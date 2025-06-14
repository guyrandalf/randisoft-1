"use client"

import { motion } from "framer-motion"
import Container from "@/components/layout/container"
import Breadcrumb from "@/components/layout/breadcrumb"

export default function AboutPage() {
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
          <h1 className="text-4xl font-bold mb-6">About Randisoft</h1>

          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-muted-foreground mb-8">
              We are a software development company dedicated to creating innovative solutions for businesses across Nigeria and beyond.
            </p>

            <h2 className="text-2xl font-semibold mt-12 mb-4">Our Story</h2>
            <p>
              Founded in 2020, Randisoft emerged from a vision to revolutionize how businesses operate in the digital world.
              Our founders recognized the need for high-quality, locally developed software solutions that address the unique
              challenges faced by Nigerian businesses.
            </p>

            <h2 className="text-2xl font-semibold mt-12 mb-4">Our Mission</h2>
            <p>
              Our mission is to empower businesses through technology, creating software solutions that drive growth,
              efficiency, and innovation. We believe that every business, regardless of size, deserves access to
              cutting-edge technology that can transform their operations.
            </p>

            <h2 className="text-2xl font-semibold mt-12 mb-4">Our Values</h2>
            <ul className="space-y-4 mt-4">
              <li>
                <strong>Innovation:</strong> We constantly explore new technologies and approaches to solve complex problems.
              </li>
              <li>
                <strong>Quality:</strong> We maintain the highest standards in our code, design, and client interactions.
              </li>
              <li>
                <strong>Collaboration:</strong> We work closely with our clients, treating their challenges as our own.
              </li>
              <li>
                <strong>Integrity:</strong> We operate with transparency and honesty in all our dealings.
              </li>
              <li>
                <strong>Impact:</strong> We measure our success by the positive difference we make for our clients.
              </li>
            </ul>

            <h2 className="text-2xl font-semibold mt-12 mb-4">Our Approach</h2>
            <p>
              At Randisoft, we follow a collaborative, client-centered approach to software development. We begin by
              deeply understanding your business needs, then craft custom solutions that address those specific challenges.
              Our agile development process ensures that you're involved every step of the way, resulting in software
              that truly serves your business goals.
            </p>

            <h2 className="text-2xl font-semibold mt-12 mb-4">Our Staffing & Recruiting Services</h2>
            <p>
              While our primary focus is on building innovative digital platforms, we also offer comprehensive staffing and recruiting services.
              We connect businesses with skilled professionals across various industries, helping them find the right talent for their specific needs.
              Our staffing and recruiting services are designed to help businesses scale efficiently while focusing on their core objectives.
            </p>
            <p className="mt-4">
              Whether you're looking for skilled professionals or seeking career opportunities, our staffing and recruiting team is here to help.
              We take pride in matching the right talent with the right opportunities, creating successful partnerships that drive business growth.
            </p>
          </div>
        </div>
      </Container>
    </motion.div>
  )
}
