"use client"

import { useEffect, useState } from "react"
import { cn } from "@/lib/utils"
import Particles from "@/components/ui/particles"
import Footer from "@/components/layout/footer"
import Navbar from "@/components/layout/navbar"
import Loading from "@/components/loading"
import { Suspense } from "react"
import { ThemeProvider } from "next-themes"

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const [isClient, setIsClient] = useState(false)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [cursorDotPosition, setCursorDotPosition] = useState({ x: 0, y: 0 })
  const [isHovering, setIsHovering] = useState(false)

  useEffect(() => {
    setIsClient(true)

    const updateCursor = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
      setCursorDotPosition({ x: e.clientX - 2, y: e.clientY - 2 })
    }

    const handleMouseOver = (e: MouseEvent) => {
      if (
        (e.target as HTMLElement).tagName === "A" ||
        (e.target as HTMLElement).tagName === "BUTTON"
      ) {
        setIsHovering(true)
      }
    }

    const handleMouseOut = () => {
      setIsHovering(false)
    }

    window.addEventListener("mousemove", updateCursor)
    document.addEventListener("mouseover", handleMouseOver)
    document.addEventListener("mouseout", handleMouseOut)

    return () => {
      window.removeEventListener("mousemove", updateCursor)
      document.removeEventListener("mouseover", handleMouseOver)
      document.removeEventListener("mouseout", handleMouseOut)
    }
  }, [])

  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <div className="bg-background text-foreground">
        {isClient && (
          <>
            <div
              className={`cursor ${isHovering ? "scale-150" : ""}`}
              style={{
                transform: `translate(${mousePosition.x - 10}px, ${
                  mousePosition.y - 10
                }px)`,
                transition: "transform 0.1s ease-out, scale 0.3s ease-out",
              }}
            />
            <div
              className={`cursor-dot ${isHovering ? "opacity-0" : ""}`}
              style={{
                transform: `translate(${cursorDotPosition.x}px, ${cursorDotPosition.y}px)`,
              }}
            />
          </>
        )}

        <div className="relative flex min-h-screen flex-col antialiased">
          {/* Animated background elements */}
          <div className="fixed inset-0 -z-10 overflow-hidden">
            <div className="absolute inset-0 bg-grid" />
            <div className="absolute inset-0 gradient-flow opacity-20" />
            <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-glow opacity-30 animate-pulse" />
            <div className="absolute bottom-0 left-0 w-[800px] h-[800px] bg-glow opacity-30 animate-pulse [animation-delay:2s]" />
            <div className="absolute inset-0 bg-grid opacity-10" />
            {isClient && <Particles />}
          </div>

          <Navbar />
          <Suspense fallback={<Loading />}>
            <main className="flex-1 relative z-10">{children}</main>
          </Suspense>
          <Footer />
        </div>
      </div>
    </ThemeProvider>
  )
}
