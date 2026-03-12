import type { Metadata } from "next"
import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { Services } from "@/components/services"
import { WhyChooseUs } from "@/components/why-choose-us"
import { Contact } from "@/components/contact"
import { LanguageSwitcher } from "@/components/language-switcher"
import { LogoParallaxBackground } from "@/components/logo-parallax-background"

export const metadata: Metadata = {
  title: "AIAPAEC | Tecnologia que transforma",
  description:
    "AIAPAEC diseña automatizacion avanzada, sistemas inteligentes a medida y arquitectura digital para empresas que necesitan evolucion operativa.",
  keywords:
    "automatizacion avanzada, sistemas inteligentes, arquitectura digital, inteligencia aplicada, Lima, Peru, evolucion operativa",
  authors: [{ name: "AIAPAEC" }],
  openGraph: {
    title: "AIAPAEC | Arquitectura para la evolucion",
    description:
      "Partner tecnologico de evolucion para empresas que necesitan simplificar procesos y construir sistemas a medida.",
    url: "https://www.aiapaec.xyz",
    siteName: "AIAPAEC",
    locale: "es_PE",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "AIAPAEC | Arquitectura para la evolucion",
    description: "Tecnologia que transforma procesos en sistemas capaces de evolucionar.",
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
