"use client"

import { motion } from "framer-motion"
import Container from "@/components/layout/container"
import Breadcrumb from "@/components/layout/breadcrumb"

export default function CookiePolicyPage() {
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
          <h1 className="text-4xl font-bold mb-6">Cookie Policy</h1>

          <div className="prose prose-lg max-w-none">
            <p className="text-muted-foreground">
              Last updated: {new Date().toLocaleDateString()}
            </p>

            <h2 className="text-2xl font-semibold mt-12 mb-4">What Are Cookies</h2>
            <p>
              Cookies are small pieces of text sent to your web browser by a website you visit. A cookie file is stored in your
              web browser and allows the website or a third-party to recognize you and make your next visit easier and the website
              more useful to you.
            </p>
            <p>
              Cookies can be "persistent" or "session" cookies. Persistent cookies remain on your personal computer or mobile
              device when you go offline, while session cookies are deleted as soon as you close your web browser.
            </p>

            <h2 className="text-2xl font-semibold mt-12 mb-4">How We Use Cookies</h2>
            <p>
              When you use and access our website, we may place a number of cookie files in your web browser. We use cookies for the following purposes:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong>Essential cookies:</strong> These are cookies that are required for the operation of our website. They include,
                for example, cookies that enable you to log into secure areas of our website.
              </li>
              <li>
                <strong>Analytical/performance cookies:</strong> They allow us to recognize and count the number of visitors and to see
                how visitors move around our website when they are using it. This helps us to improve the way our website works, for example,
                by ensuring that users are finding what they are looking for easily.
              </li>
              <li>
                <strong>Functionality cookies:</strong> These are used to recognize you when you return to our website. This enables us
                to personalize our content for you and remember your preferences.
              </li>
              <li>
                <strong>Targeting cookies:</strong> These cookies record your visit to our website, the pages you have visited and the
                links you have followed. We will use this information to make our website and the advertising displayed on it more
                relevant to your interests.
              </li>
            </ul>

            <h2 className="text-2xl font-semibold mt-12 mb-4">Third-Party Cookies</h2>
            <p>
              In addition to our own cookies, we may also use various third-party cookies to report usage statistics of the website,
              deliver advertisements on and through the website, and so on. These may include:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Google Analytics</li>
              <li>Google Ads</li>
              <li>Facebook Pixel</li>
              <li>LinkedIn Insights</li>
            </ul>

            <h2 className="text-2xl font-semibold mt-12 mb-4">What Are Your Choices Regarding Cookies</h2>
            <p>
              If you'd like to delete cookies or instruct your web browser to delete or refuse cookies, please visit the help pages of your web browser.
            </p>
            <p>
              Please note, however, that if you delete cookies or refuse to accept them, you might not be able to use all of the features we offer,
              you may not be able to store your preferences, and some of our pages might not display properly.
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>For the Chrome web browser, please visit this page from Google: <a href="https://support.google.com/accounts/answer/32050" className="text-primary hover:underline">https://support.google.com/accounts/answer/32050</a></li>
              <li>For the Internet Explorer web browser, please visit this page from Microsoft: <a href="http://support.microsoft.com/kb/278835" className="text-primary hover:underline">http://support.microsoft.com/kb/278835</a></li>
              <li>For the Firefox web browser, please visit this page from Mozilla: <a href="https://support.mozilla.org/en-US/kb/delete-cookies-remove-info-websites-stored" className="text-primary hover:underline">https://support.mozilla.org/en-US/kb/delete-cookies-remove-info-websites-stored</a></li>
              <li>For the Safari web browser, please visit this page from Apple: <a href="https://support.apple.com/guide/safari/manage-cookies-and-website-data-sfri11471/mac" className="text-primary hover:underline">https://support.apple.com/guide/safari/manage-cookies-and-website-data-sfri11471/mac</a></li>
            </ul>
            <p>
              For any other web browser, please visit your web browser's official web pages.
            </p>

            <h2 className="text-2xl font-semibold mt-12 mb-4">More Information About Cookies</h2>
            <p>
              You can learn more about cookies at the following third-party websites:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Network Advertising Initiative: <a href="http://www.networkadvertising.org/" className="text-primary hover:underline">http://www.networkadvertising.org/</a></li>
              <li>AllAboutCookies: <a href="http://www.allaboutcookies.org/" className="text-primary hover:underline">http://www.allaboutcookies.org/</a></li>
            </ul>

            <h2 className="text-2xl font-semibold mt-12 mb-4">Changes to Our Cookie Policy</h2>
            <p>
              We may update our Cookie Policy from time to time. We will notify you of any changes by posting the new Cookie Policy on this page.
            </p>
            <p>
              You are advised to review this Cookie Policy periodically for any changes. Changes to this Cookie Policy are effective when they are posted on this page.
            </p>

            <h2 className="text-2xl font-semibold mt-12 mb-4">Contact Us</h2>
            <p>
              If you have any questions about our Cookie Policy, please contact us at:
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
