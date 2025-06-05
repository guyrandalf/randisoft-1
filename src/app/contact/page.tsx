"use client"

import { motion } from "framer-motion"
import Container from "@/components/layout/container"
import Breadcrumb from "@/components/layout/breadcrumb"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  RiMapPin2Line,
  RiPhoneLine,
  RiMailLine,
  RiTimeLine,
  RiCalendarLine
} from "react-icons/ri"

export default function ContactPage() {
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
          <h1 className="text-4xl font-bold mb-6">Contact Us</h1>

          <p className="text-xl text-muted-foreground mb-12 max-w-3xl">
            Have a project in mind? Get in touch with our team to discuss how we can help bring your ideas to life.
          </p>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-2xl font-semibold mb-6">Send Us a Message</h2>

              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
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
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="company" className="block text-sm font-medium mb-2">
                      Company Name
                    </label>
                    <Input
                      id="company"
                      type="text"
                      placeholder="Your Company Ltd."
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium mb-2">
                      Phone Number
                    </label>
                    <Input
                      id="phone"
                      type="tel"
                      placeholder="+234 123 456 7890"
                    />
                  </div>

                  <div>
                    <label htmlFor="project" className="block text-sm font-medium mb-2">
                      Project Type
                    </label>
                    <select
                      id="project"
                      className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
                      defaultValue=""
                    >
                      <option value="" disabled>Select project type</option>
                      <option value="web">Web Application</option>
                      <option value="mobile">Mobile Application</option>
                      <option value="ecommerce">E-commerce Solution</option>
                      <option value="automation">Business Automation</option>
                      <option value="custom">Custom Development</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-2">
                      Project Details
                    </label>
                    <textarea
                      id="message"
                      rows={5}
                      className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
                      placeholder="Tell us about your project requirements..."
                      required
                    ></textarea>
                  </div>
                </div>

                <Button type="submit" className="w-full">
                  Send Message
                </Button>

                <p className="text-sm text-muted-foreground text-center">
                  We'll get back to you within 24 hours.
                </p>
              </form>
            </div>

            {/* Contact Information */}
            <div>
              <h2 className="text-2xl font-semibold mb-6">Contact Information</h2>

              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-primary/10 text-primary">
                    <RiMapPin2Line className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-medium mb-1">Our Location</h3>
                    <p className="text-muted-foreground">
                      123 Tech Hub Street<br />
                      Victoria Island, Lagos<br />
                      Nigeria
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-primary/10 text-primary">
                    <RiPhoneLine className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-medium mb-1">Phone</h3>
                    <p className="text-muted-foreground">
                      <a href="tel:+2341234567890" className="hover:text-primary transition-colors">
                        +234 123 456 7890
                      </a>
                    </p>
                    <p className="text-muted-foreground">
                      <a href="tel:+2349876543210" className="hover:text-primary transition-colors">
                        +234 987 654 3210
                      </a>
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-primary/10 text-primary">
                    <RiMailLine className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-medium mb-1">Email</h3>
                    <p className="text-muted-foreground">
                      <a href="mailto:info@randisoft.com" className="hover:text-primary transition-colors">
                        info@randisoft.com
                      </a>
                    </p>
                    <p className="text-muted-foreground">
                      <a href="mailto:support@randisoft.com" className="hover:text-primary transition-colors">
                        support@randisoft.com
                      </a>
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-primary/10 text-primary">
                    <RiTimeLine className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-medium mb-1">Business Hours</h3>
                    <p className="text-muted-foreground">
                      Monday - Friday: 9:00 AM - 6:00 PM<br />
                      Saturday: 10:00 AM - 2:00 PM<br />
                      Sunday: Closed
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-12 p-6 rounded-xl bg-card shadow-md" id="schedule">
                <h3 className="text-xl font-semibold mb-4">Schedule a Consultation</h3>
                <p className="text-muted-foreground mb-6">
                  Prefer to talk directly? Schedule a free 30-minute consultation with our team.
                </p>
                <Button className="w-full" variant="outline">
                  <RiCalendarLine className="mr-2" />
                  Book a Meeting
                </Button>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </motion.div>
  )
}
