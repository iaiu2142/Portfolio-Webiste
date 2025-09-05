import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Ilsa Afzaal - AI Enthusiast & Software Engineer",
  description:
    "Portfolio of Ilsa Afzaal - AI Enthusiast, Software Engineer, Microsoft Gold Student Ambassador, and Stanford Code in Place Section Leader. Showcasing innovative AI projects, hackathon wins, and technical expertise.",
  keywords:
    "Ilsa Afzaal, AI Engineer, Software Engineer, Machine Learning, Python Developer, Microsoft Student Ambassador, Stanford Code in Place, Hackathon Winner",
  authors: [{ name: "Ilsa Afzaal" }],
  creator: "Ilsa Afzaal",
  openGraph: {
    title: "Ilsa Afzaal - AI Enthusiast & Software Engineer",
    description: "Innovative AI projects, hackathon wins, and technical expertise",
    url: "https://iaiu2142.github.io/Portfolio-Webiste/",
    siteName: "Ilsa Afzaal Portfolio",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ilsa Afzaal - AI Enthusiast & Software Engineer",
    description: "Innovative AI projects, hackathon wins, and technical expertise",
  },
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
