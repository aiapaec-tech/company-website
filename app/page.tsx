import type { Metadata } from "next"
import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { Services } from "@/components/services"
import { WhyChooseUs } from "@/components/why-choose-us"
import { Contact } from "@/components/contact"
import { LanguageSwitcher } from "@/components/language-switcher"
import { LogoParallaxBackground } from "@/components/logo-parallax-background"

export const metadata: Metadata = {
  title: "aiapaec tech - Soluciones de Inteligencia Artificial | AI Solutions",
  description:
    "Transformamos el potencial de tu negocio a través de tecnología inteligente. Especialistas en IA, machine learning y desarrollo de software en Lima, Perú.",
  keywords: "inteligencia artificial, AI, machine learning, desarrollo software, Lima, Perú, consultoría IA",
  authors: [{ name: "aiapaec tech" }],
  openGraph: {
    title: "aiapaec tech - Soluciones de Inteligencia Artificial",
    description: "Transformamos el potencial de tu negocio a través de tecnología inteligente.",
    url: "https://www.aiapaec.xyz",
    siteName: "aiapaec tech",
    locale: "es_PE",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "aiapaec tech - Soluciones de Inteligencia Artificial",
    description: "Transformamos el potencial de tu negocio a través de tecnología inteligente.",
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function Home() {
  return (
    <main className="site-content relative min-h-screen overflow-x-clip snap-y snap-mandatory">
      <LogoParallaxBackground />
      <LanguageSwitcher />
      <Hero />
      <About />
      <Services />
      <WhyChooseUs />
      <Contact />
    </main>
  )
}
