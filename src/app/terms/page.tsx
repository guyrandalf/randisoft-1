"use client"

import { motion } from "framer-motion"
import Container from "@/components/layout/container"
import Breadcrumb from "@/components/layout/breadcrumb"

export default function TermsOfServicePage() {
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
          <h1 className="text-4xl font-bold mb-6">Terms of Service</h1>

          <div className="prose prose-lg max-w-none">
            <p className="text-muted-foreground">
              Last updated: {new Date().toLocaleDateString()}
            </p>

            <h2 className="text-2xl font-semibold mt-12 mb-4">1. Introduction</h2>
            <p>
              Welcome to Randisoft. These Terms of Service ("Terms") govern your use of our website and services.
              By accessing our website or using our services, you agree to be bound by these Terms. If you disagree
              with any part of the terms, you may not access the website or use our services.
            </p>

            <h2 className="text-2xl font-semibold mt-12 mb-4">2. Services</h2>
            <p>
              Randisoft provides talent outsourcing services, connecting businesses with skilled professionals across various
              industries. Our services include but are not limited to talent sourcing, project-based outsourcing, staff augmentation,
              and dedicated team arrangements. The specific details, deliverables, timelines, and costs of services will be outlined
              in a separate agreement or statement of work.
            </p>

            <h2 className="text-2xl font-semibold mt-12 mb-4">3. Use of Website</h2>
            <p>
              You may use our website for lawful purposes only. You agree not to:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Use the website in any way that violates any applicable local, national, or international law or regulation.</li>
              <li>Attempt to gain unauthorized access to any portion of the website or any systems or networks connected to the website.</li>
              <li>Collect or harvest any personally identifiable information from the website.</li>
              <li>Impersonate or attempt to impersonate Randisoft, a Randisoft employee, or any other person or entity.</li>
              <li>Engage in any conduct that restricts or inhibits anyone's use or enjoyment of the website.</li>
            </ul>

            <h2 className="text-2xl font-semibold mt-12 mb-4">4. Intellectual Property</h2>
            <p>
              The website and its original content, features, and functionality are owned by Randisoft and are protected
              by international copyright, trademark, patent, trade secret, and other intellectual property or proprietary rights laws.
            </p>
            <p>
              Unless otherwise specified in a separate agreement, Randisoft retains all intellectual property rights to
              the software, code, designs, and other materials created during the provision of services, with the exception
              of any client-provided materials or content.
            </p>

            <h2 className="text-2xl font-semibold mt-12 mb-4">5. Payment Terms</h2>
            <p>
              Payment terms for our services will be outlined in a separate agreement or statement of work. Unless otherwise
              specified, invoices are due upon receipt. Late payments may be subject to late fees or service interruption.
            </p>

            <h2 className="text-2xl font-semibold mt-12 mb-4">6. Limitation of Liability</h2>
            <p>
              In no event shall Randisoft, nor its directors, employees, partners, agents, suppliers, or affiliates, be
              liable for any indirect, incidental, special, consequential, or punitive damages, including without limitation,
              loss of profits, data, use, goodwill, or other intangible losses, resulting from:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Your access to or use of or inability to access or use the website or services.</li>
              <li>Any conduct or content of any third party on the website.</li>
              <li>Any content obtained from the website.</li>
              <li>Unauthorized access, use, or alteration of your transmissions or content.</li>
            </ul>

            <h2 className="text-2xl font-semibold mt-12 mb-4">7. Indemnification</h2>
            <p>
              You agree to defend, indemnify, and hold harmless Randisoft, its directors, employees, partners, agents,
              suppliers, and affiliates, from and against any claims, liabilities, damages, judgments, awards, losses,
              costs, expenses, or fees (including reasonable attorneys' fees) arising out of or relating to your violation
              of these Terms or your use of the website or services.
            </p>

            <h2 className="text-2xl font-semibold mt-12 mb-4">8. Governing Law</h2>
            <p>
              These Terms shall be governed and construed in accordance with the laws of Nigeria, without regard to its
              conflict of law provisions. Our failure to enforce any right or provision of these Terms will not be considered
              a waiver of those rights.
            </p>

            <h2 className="text-2xl font-semibold mt-12 mb-4">9. Changes to Terms</h2>
            <p>
              We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a revision is
              material, we will provide at least 30 days' notice prior to any new terms taking effect. What constitutes a
              material change will be determined at our sole discretion.
            </p>

            <h2 className="text-2xl font-semibold mt-12 mb-4">10. Contact Us</h2>
            <p>
              If you have any questions about these Terms, please contact us at:
            </p>
            <p>
              Randisoft<br />
              Email: legal@randisoft.com<br />
              Phone: +234 123 456 7890
            </p>
          </div>
        </div>
      </Container>
    </motion.div>
  )
}
