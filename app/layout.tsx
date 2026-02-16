import type React from "react"
import type { Metadata } from "next"
import { Kufam, Unbounded } from "next/font/google"
import "./globals.css"
import { LanguageProvider } from "@/contexts/language-context"

const kufam = Kufam({
  subsets: ["latin"],
  variable: "--font-kufam",
})

const unbounded = Unbounded({
  subsets: ["latin"],
  variable: "--font-unbounded",
})

export const metadata: Metadata = {
  title: "aiapaec tech - Soluciones de Inteligencia Artificial",
  description: "Transformamos el potencial de tu negocio a través de tecnología inteligente",
  generator: "v0.dev",
  manifest: "/manifest.webmanifest",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon-192.png", type: "image/png", sizes: "192x192" },
      { url: "/icon-512.png", type: "image/png", sizes: "512x512" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180" }],
    other: [
      { rel: "icon", url: "/icon-192-maskable.png", type: "image/png", sizes: "192x192" },
      { rel: "icon", url: "/icon-512-maskable.png", type: "image/png", sizes: "512x512" },
    ],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body className={`${kufam.variable} ${unbounded.variable}`}>
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  )
}
