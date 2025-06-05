"use client"

import Link from "next/link"
import { useState } from "react"
import Container from "@/components/layout/container"
import { Button } from "@/components/ui/button"
import { Menu, Sun, Moon } from "lucide-react"
import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetTrigger
} from "@/components/ui/sheet"
import { useTheme } from "next-themes"

const routes = [
  {
    href: "/",
    label: "Home",
  },
  {
    href: "/about",
    label: "About",
  },
  {
    href: "/products",
    label: "Products",
  },
  {
    href: "/services",
    label: "Services",
  },
  {
    href: "/contact",
    label: "Contact",
  },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const { theme, setTheme } = useTheme()

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark")
  }

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
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="icon" onClick={toggleTheme} className="hidden md:flex">
              {theme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </Button>
            <div className="hidden md:flex md:items-center md:space-x-4">
              <Button asChild>
                <Link href="/products#beta">Join Our Beta</Link>
              </Button>
            </div>
            <Sheet open={open} onOpenChange={setOpen}>
              <SheetTrigger className="md:hidden">
                <Menu className="h-6 w-6" />
              </SheetTrigger>
              <SheetTitle className="sr-only hidden"></SheetTitle>
              <SheetContent side="right" className="w-[300px] sm:w-[400px] p-0">
                <div className="flex flex-col h-full">
                  <div className="p-6 border-b">
                    <h2 className="text-xl font-bold">Randisoft</h2>
                    <p className="text-sm text-muted-foreground mt-1">Building Software Products That Matter</p>
                  </div>
                  <nav className="flex-1 overflow-auto py-6 px-4">
                    <div className="space-y-2 mb-6">
                      {routes.map((route, i) => (
                        <Button
                          asChild
                          variant="ghost"
                          key={i}
                          className="w-full justify-start text-lg h-12"
                        >
                          <Link href={route.href}>
                            {route.label}
                          </Link>
                        </Button>
                      ))}
                    </div>

                    <div className="pt-4 border-t mt-4">
                      <Button
                        variant="ghost"
                        onClick={toggleTheme}
                        className="justify-start w-full mb-2"
                      >
                        {theme === "dark" ? (
                          <>
                            <Sun className="h-5 w-5 mr-2" />
                            Light Mode
                          </>
                        ) : (
                          <>
                            <Moon className="h-5 w-5 mr-2" />
                            Dark Mode
                          </>
                        )}
                      </Button>
                    </div>
                  </nav>
                  <div className="p-4 border-t mt-auto">
                    <Button asChild className="w-full">
                      <Link href="/products#beta">Join Our Beta</Link>
                    </Button>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </Container>
    </header>
  )
}
