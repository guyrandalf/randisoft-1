"use client";

import Link from "next/link";
import { useState } from "react";
import Container from "@/components/layout/container";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import ModeToggle from "./mode-toggle";

const routes = [
  {
    href: "/",
    label: "Home",
  },
  {
    href: "/recruit",
    label: "Recruit AI",
  },
  {
    href: "/automate",
    label: "Automate AI",
  },
  {
    href: "/pricing",
    label: "Pricing",
  },
  {
    href: "/about",
    label: "About",
  },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sm:flex sm:justify-between border-b fixed top-0 left-0 right-0 z-50 bg-background">
      <Container>
        <div className="relative px-4 sm:px-6 lg:px-8 flex h-16 items-center justify-between w-full">
          <div className="flex items-center">
            <Link href="/" className="ml-4 lg:ml-0">
              <h1 className="text-xl font-bold">Randisoft</h1>
            </Link>
          </div>
          <nav className="mx-6 flex items-center space-x-4 lg:space-x-6 hidden md:block">
            {routes.map((route, i) => (
              <Button asChild variant="ghost" key={i}>
                <Link
                  href={route.href}
                  className="text-sm font-medium transition-colors"
                >
                  {route.label}
                </Link>
              </Button>
            ))}
          </nav>
          <div className="flex items-center">
            <div className="hidden md:flex md:items-center md:space-x-4">
              <Button asChild variant="ghost">
                <Link href="/sign-in">Sign in</Link>
              </Button>
              <Button asChild>
                <Link href="/sign-up">Get Started</Link>
              </Button>
            </div>
            <Sheet open={open} onOpenChange={setOpen}>
              <SheetTrigger className="md:hidden">
                <Menu className="h-6 w-6" />
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                <nav className="flex flex-col gap-4">
                  {routes.map((route, i) => (
                    <Button asChild variant="ghost" key={i}>
                      <Link
                        href={route.href}
                        className="block px-2 py-1 text-lg"
                      >
                        {route.label}
                      </Link>
                    </Button>
                  ))}
                </nav>
              </SheetContent>
            </Sheet>
            <ModeToggle />
          </div>
        </div>
      </Container>
    </header>
  );
}
