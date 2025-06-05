"use client"

import { motion } from "framer-motion"
import Container from "@/components/layout/container"
import Breadcrumb from "@/components/layout/breadcrumb"

export default function PrivacyPolicyPage() {
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
          <h1 className="text-4xl font-bold mb-6">Privacy Policy</h1>

          <div className="prose prose-lg max-w-none">
            <p className="text-muted-foreground">
              Last updated: {new Date().toLocaleDateString()}
            </p>

            <h2 className="text-2xl font-semibold mt-12 mb-4">Introduction</h2>
            <p>
              Randisoft ("we", "our", or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect,
              use, disclose, and safeguard your information when you visit our website or use our services.
            </p>
            <p>
              Please read this Privacy Policy carefully. If you do not agree with the terms of this Privacy Policy, please do not access the site.
            </p>

            <h2 className="text-2xl font-semibold mt-12 mb-4">Information We Collect</h2>
            <p>
              We may collect information about you in a variety of ways. The information we may collect includes:
            </p>
            <h3 className="text-xl font-semibold mt-6 mb-2">Personal Data</h3>
            <p>
              Personally identifiable information, such as your name, email address, telephone number, and company name,
              that you voluntarily give to us when you register with our site or when you choose to participate in various
              activities related to our site, such as online contact forms or requesting a quote.
            </p>

            <h3 className="text-xl font-semibold mt-6 mb-2">Derivative Data</h3>
            <p>
              Information our servers automatically collect when you access our site, such as your IP address, browser type,
              operating system, access times, and the pages you have viewed directly before and after accessing the site.
            </p>

            <h2 className="text-2xl font-semibold mt-12 mb-4">Use of Your Information</h2>
            <p>
              Having accurate information about you permits us to provide you with a smooth, efficient, and customized experience.
              Specifically, we may use information collected about you via the site to:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Create and manage your account.</li>
              <li>Process your requests and transactions.</li>
              <li>Send you technical notices, updates, security alerts, and support messages.</li>
              <li>Respond to your comments, questions, and requests.</li>
              <li>Provide customer service and support.</li>
              <li>Monitor and analyze usage and trends to improve your experience with the site.</li>
              <li>Notify you of updates to our products and services.</li>
              <li>Offer new products, services, and/or recommendations to you.</li>
            </ul>

            <h2 className="text-2xl font-semibold mt-12 mb-4">Disclosure of Your Information</h2>
            <p>
              We may share information we have collected about you in certain situations. Your information may be disclosed as follows:
            </p>

            <h3 className="text-xl font-semibold mt-6 mb-2">By Law or to Protect Rights</h3>
            <p>
              If we believe the release of information about you is necessary to respond to legal process, to investigate or remedy
              potential violations of our policies, or to protect the rights, property, and safety of others, we may share your
              information as permitted or required by any applicable law, rule, or regulation.
            </p>

            <h3 className="text-xl font-semibold mt-6 mb-2">Third-Party Service Providers</h3>
            <p>
              We may share your information with third parties that perform services for us or on our behalf, including payment
              processing, data analysis, email delivery, hosting services, customer service, and marketing assistance.
            </p>

            <h2 className="text-2xl font-semibold mt-12 mb-4">Security of Your Information</h2>
            <p>
              We use administrative, technical, and physical security measures to help protect your personal information.
              While we have taken reasonable steps to secure the personal information you provide to us, please be aware
              that despite our efforts, no security measures are perfect or impenetrable, and no method of data transmission
              can be guaranteed against any interception or other type of misuse.
            </p>

            <h2 className="text-2xl font-semibold mt-12 mb-4">Contact Us</h2>
            <p>
              If you have questions or comments about this Privacy Policy, please contact us at:
            </p>
            <p>
              Randisoft<br />
              Email: privacy@randisoft.com<br />
              Phone: +234 123 456 7890
            </p>
          </div>
        </div>
      </Container>
    </motion.div>
  )
}
