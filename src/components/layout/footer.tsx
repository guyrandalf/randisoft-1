"use client";

import Link from "next/link";
import Container from "@/components/layout/container";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";

const navigation = {
  quickLinks: [
    { name: "Products", href: "/products" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Contact", href: "/contact" },
  ],
  products: [
    { name: "Skills Marketplace", href: "/products#skills" },
    { name: "Information Platform", href: "/products#information" },
    { name: "Healthcare Solutions", href: "/products#healthcare" },
    { name: "Outsourcing Services", href: "/services" },
  ],
  legal: [
    { name: "Privacy Policy", href: "/privacy" },
    { name: "Terms of Service", href: "/terms" },
    { name: "Cookie Policy", href: "/cookies" },
  ],
};

const socialLinks = [
  { name: "Facebook", icon: FaFacebook, href: "https://facebook.com" },
  { name: "Twitter", icon: FaTwitter, href: "https://twitter.com" },
  { name: "Instagram", icon: FaInstagram, href: "https://instagram.com" },
  { name: "LinkedIn", icon: FaLinkedin, href: "https://linkedin.com" },
  { name: "GitHub", icon: FaGithub, href: "https://github.com" },
];

export default function Footer() {
  return (
    <footer className="border-t border-t-muted bg-muted/30 shadow-sm shadow-layout">
      <Container>
        <div className="py-12">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            {/* Company Info */}
            <div className="md:col-span-2">
              <div className="flex items-center">
                <div className="h-8 w-8 mr-2">
                  <img src="/logo-icon.svg" alt="Randisoft Logo" className="h-full w-full" />
                </div>
                <h3 className="text-xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Randisoft</h3>
              </div>
              <p className="mt-4 text-sm text-muted-foreground">
                A software product company creating innovative solutions for Nigerian businesses and individuals.
                We're building the next generation of African software products.
              </p>
              <div className="mt-6">
                <h4 className="text-sm font-semibold mb-2">Contact Us</h4>
                <div className="space-y-2 text-sm text-muted-foreground">
                  <p>Email: info@randisoft.com</p>
                  <p>Phone: +234 123 456 7890</p>
                  <p>Address: Lagos, Nigeria</p>
                </div>
              </div>
              <div className="mt-6 flex space-x-4">
                {socialLinks.map((social) => (
                  <Link
                    key={social.name}
                    href={social.href}
                    className="text-muted-foreground hover:text-primary transition-colors"
                    aria-label={social.name}
                  >
                    <social.icon className="h-5 w-5" />
                  </Link>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-sm font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-3">
                {navigation.quickLinks.map((item) => (
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

            {/* Products */}
            <div>
              <h3 className="text-sm font-semibold mb-4">Our Products</h3>
              <ul className="space-y-3">
                {navigation.products.map((item) => (
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

            {/* Newsletter */}
            <div>
              <h3 className="text-sm font-semibold mb-4">Stay Updated</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Subscribe to get early access to our products, beta releases, and development updates.
              </p>
              <form className="space-y-2">
                <Input
                  type="email"
                  placeholder="Your email address"
                  className="bg-background"
                  required
                />
                <Button type="submit" className="w-full">
                  Join Beta List
                </Button>
              </form>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="border-t mt-8 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-sm text-muted-foreground">
                © {new Date().getFullYear()} Randisoft. All rights reserved.
              </p>
              <div className="flex gap-4">
                {navigation.legal.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="text-sm text-muted-foreground hover:text-foreground"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
}
