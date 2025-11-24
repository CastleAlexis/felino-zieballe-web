import type React from "react"
import type { Metadata } from "next"
import { Montserrat, Bebas_Neue } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

// <CHANGE> Added Bebas Neue for display titles and Montserrat for body text
const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-sans",
})

const bebasNeue = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-display",
})

export const metadata: Metadata = {
  title: "Paulo Zieballe | Artista · Compositor · Showman",
  description:
    "Sitio oficial de Paulo Zieballe. Artista, compositor y showman con participaciones en Gran Rojo y The Voice. Disponible para shows en formato solista, acústico y full banda.",
  generator: "v0.app",
  keywords: ["Paulo Zieballe", "artista", "músico", "compositor", "shows en vivo", "Gran Rojo", "The Voice"],
  icons: {
    icon: [
      {
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" className="scroll-smooth">
      <body className={`${montserrat.variable} ${bebasNeue.variable} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
