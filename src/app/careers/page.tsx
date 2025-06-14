"use client"

import { motion } from "framer-motion"
import Container from "@/components/layout/container"
import Breadcrumb from "@/components/layout/breadcrumb"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { RiCheckLine, RiTeamLine, RiTimeLine, RiUserLine } from "react-icons/ri"

export default function CareersPage() {
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
          <h1 className="text-4xl font-bold mb-6">Careers at Randisoft</h1>

          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-muted-foreground mb-8">
              Join our team of passionate professionals building the future of Nigeria's digital ecosystem.
            </p>

            <div className="bg-muted/30 p-8 rounded-xl mb-12">
              <h2 className="text-2xl font-semibold mb-4">Why Work With Us</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <RiCheckLine className="text-primary mt-1 flex-shrink-0" />
                      <span>Work on innovative products that solve real problems</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <RiCheckLine className="text-primary mt-1 flex-shrink-0" />
                      <span>Collaborative and supportive work environment</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <RiCheckLine className="text-primary mt-1 flex-shrink-0" />
                      <span>Opportunities for professional growth and development</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <RiCheckLine className="text-primary mt-1 flex-shrink-0" />
                      <span>Competitive compensation and benefits</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <RiCheckLine className="text-primary mt-1 flex-shrink-0" />
                      <span>Work with cutting-edge technologies</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <RiCheckLine className="text-primary mt-1 flex-shrink-0" />
                      <span>Make a positive impact on Nigeria's digital landscape</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <h2 className="text-2xl font-semibold mt-12 mb-4">Current Openings</h2>
            <div className="grid md:grid-cols-2 gap-6 mb-12">
              <div className="bg-card p-6 rounded-xl shadow-md">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 rounded-lg bg-primary/10 text-primary">
                    <RiTeamLine className="w-5 h-5" />
                  </div>
                  <h3 className="text-xl font-semibold">Software Engineer</h3>
                </div>
                <div className="flex items-center gap-2 mb-4">
                  <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-sm flex items-center">
                    <RiTimeLine className="mr-1" /> Full-time
                  </span>
                  <span className="px-3 py-1 rounded-full bg-secondary/10 text-secondary text-sm">
                    Lagos, Nigeria
                  </span>
                </div>
                <p className="text-muted-foreground mb-6">
                  We're looking for talented software engineers to join our team and help build our core digital platforms.
                </p>
                <Button asChild>
                  <Link href="/contact">Apply Now</Link>
                </Button>
              </div>

              <div className="bg-card p-6 rounded-xl shadow-md">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 rounded-lg bg-primary/10 text-primary">
                    <RiUserLine className="w-5 h-5" />
                  </div>
                  <h3 className="text-xl font-semibold">Talent Recruiter</h3>
                </div>
                <div className="flex items-center gap-2 mb-4">
                  <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-sm flex items-center">
                    <RiTimeLine className="mr-1" /> Full-time
                  </span>
                  <span className="px-3 py-1 rounded-full bg-secondary/10 text-secondary text-sm">
                    Lagos, Nigeria
                  </span>
                </div>
                <p className="text-muted-foreground mb-6">
                  Join our staffing and recruiting team to help connect businesses with skilled professionals across various industries.
                </p>
                <Button asChild>
                  <Link href="/contact">Apply Now</Link>
                </Button>
              </div>
            </div>

            <div className="bg-gradient-to-r from-primary/10 to-secondary/10 p-8 rounded-xl mb-12">
              <h2 className="text-2xl font-semibold mb-4">Don't See a Suitable Role?</h2>
              <p className="mb-6">
                We're always looking for talented individuals to join our team. If you don't see a role that matches your skills but believe you can contribute to our mission, we'd still love to hear from you.
              </p>
              <Button asChild>
                <Link href="/contact">Contact Us</Link>
              </Button>
            </div>

            <h2 className="text-2xl font-semibold mt-12 mb-4">Our Hiring Process</h2>
            <ol className="space-y-4 list-decimal pl-6">
              <li>
                <strong>Application Review:</strong> We review your application to assess your qualifications and experience.
              </li>
              <li>
                <strong>Initial Interview:</strong> A conversation to learn more about you, your skills, and your career goals.
              </li>
              <li>
                <strong>Technical Assessment:</strong> For technical roles, we'll assess your skills through a practical assignment.
              </li>
              <li>
                <strong>Team Interview:</strong> Meet with potential team members to ensure a good cultural fit.
              </li>
              <li>
                <strong>Final Decision:</strong> We'll make a decision and extend an offer to successful candidates.
              </li>
            </ol>
          </div>
        </div>
      </Container>
    </motion.div>
  )
}
