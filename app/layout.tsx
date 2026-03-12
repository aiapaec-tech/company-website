import type React from "react"
import type { Metadata } from "next"
import { Inter, JetBrains_Mono, Sora } from "next/font/google"
import "./globals.css"
import { LanguageProvider } from "@/contexts/language-context"

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
})

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
})

export const metadata: Metadata = {
  title: "AIAPAEC | Arquitectura para la evolucion",
  description:
    "Partner tecnologico de evolucion. Diseñamos automatizacion avanzada y sistemas inteligentes a medida para operaciones reales.",
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
      <head>
        <meta name="google-adsense-account" content="ca-pub-1231955294397267" />
      </head>
      <body className={`${sora.variable} ${inter.variable} ${jetbrainsMono.variable}`}>
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  )
}
