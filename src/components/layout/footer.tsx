"use client";

import Link from "next/link";
import Container from "@/components/layout/container";

const navigation = {
  products: [
    { name: "Randisoft Recruit", href: "/recruit" },
    { name: "Randisoft Automate", href: "/automate", status: "coming-soon" },
  ],
  resources: [
    { name: "Documentation", href: "/docs" },
    { name: "Blog", href: "/blog" },
    { name: "Pricing", href: "/pricing" },
  ],
  company: [
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
    { name: "Careers", href: "/careers" },
  ],
};

export default function Footer() {
  return (
    <footer className="border-t">
      <Container>
        <div className="py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Company Info */}
            <div>
              <h3 className="text-xl font-bold">Randisoft</h3>
              <p className="mt-4 text-sm text-muted-foreground">
                AI-powered platform bridging talent with opportunities and
                streamlining business operations.
              </p>
            </div>

            {/* Products */}
            <div>
              <h3 className="text-sm font-semibold mb-4">Products</h3>
              <ul className="space-y-3">
                {navigation.products.map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {item.name}
                      {item.status && (
                        <span className="ml-2 text-xs text-muted-foreground">
                          (Coming Soon)
                        </span>
                      )}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Resources */}
            <div>
              <h3 className="text-sm font-semibold mb-4">Resources</h3>
              <ul className="space-y-3">
                {navigation.resources.map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company */}
            <div>
              <h3 className="text-sm font-semibold mb-4">Company</h3>
              <ul className="space-y-3">
                {navigation.company.map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="border-t mt-8 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-sm text-muted-foreground">
                © {new Date().getFullYear()} Randisoft. All rights reserved.
              </p>
              <div className="flex gap-4">
                <Link
                  href="/privacy"
                  className="text-sm text-muted-foreground hover:text-foreground"
                >
                  Privacy Policy
                </Link>
                <Link
                  href="/terms"
                  className="text-sm text-muted-foreground hover:text-foreground"
                >
                  Terms of Service
                </Link>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
}
