"use client"

import { useLanguage } from "@/contexts/language-context"
import { Button } from "@/components/ui/button"
import { ArrowRight, Brain, Zap } from "lucide-react"

export function Hero() {
  const { t } = useLanguage()

  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section className="relative min-h-screen snap-start flex items-center justify-center bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent"></div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 animate-pulse">
        <Brain className="w-8 h-8 text-purple-400 opacity-60" />
      </div>
      <div className="absolute bottom-20 right-10 animate-pulse delay-1000">
        <Zap className="w-6 h-6 text-blue-400 opacity-60" />
      </div>

      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <h1 className="unbounded-brand text-6xl md:text-8xl font-bold mb-4 bg-gradient-to-r from-white via-purple-200 to-blue-200 bg-clip-text text-transparent text-center">
              aiapaec tech
            </h1>
          </div>

          <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed max-w-3xl mx-auto">{t.hero.subtitle}</p>

          <Button
            onClick={scrollToContact}
            size="lg"
            className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-8 py-4 text-lg font-semibold rounded-full shadow-2xl hover:shadow-purple-500/25 transition-all duration-300 transform hover:scale-105"
          >
            {t.hero.cta}
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </div>
      </div>
    </section>
  )
}
