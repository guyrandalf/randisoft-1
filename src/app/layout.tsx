import { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import "./globals.css"
import { metadata as defaultMetadata } from "./layout.metadata"
import ClientLayout from "@/components/layout/client-layout"

export const metadata: Metadata = defaultMetadata

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
})

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning className="custom-cursor">
      <head />
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <ClientLayout>
          {children}
        </ClientLayout>
      </body>
    </html>
  )
}
