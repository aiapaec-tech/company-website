import type { Metadata } from "next"
import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { Services } from "@/components/services"
import { WhyChooseUs } from "@/components/why-choose-us"
import { Contact } from "@/components/contact"
import { LanguageSwitcher } from "@/components/language-switcher"
import { LogoParallaxBackground } from "@/components/logo-parallax-background"

export const metadata: Metadata = {
  title: "AIAPAEC | Tecnología que transforma",
  description:
    "AIAPAEC diseña sistemas inteligentes a medida para negocios y organizaciones que necesitan simplificar su operación, automatizar procesos y adaptarse mejor a un entorno en constante evolución.",
  keywords:
    "tecnologia que transforma, sistemas inteligentes, automatizacion avanzada, inteligencia aplicada, Lima, Peru, evolucion operativa",
  authors: [{ name: "AIAPAEC" }],
  openGraph: {
    title: "AIAPAEC | Tecnología que transforma",
    description:
      "Diseñamos sistemas inteligentes para un mundo en constante evolución.",
    url: "https://www.aiapaec.xyz",
    siteName: "AIAPAEC",
    locale: "es_PE",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "AIAPAEC | Tecnología que transforma",
    description: "Diseñamos sistemas inteligentes para un mundo en constante evolución.",
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
