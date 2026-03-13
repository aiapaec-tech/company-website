"use client"

import { useLanguage } from "@/contexts/language-context"
import { Button } from "@/components/ui/button"
import { ArrowRight, Orbit, Sparkles, Workflow } from "lucide-react"

const primaryLogoUrl = "https://cdn.cloud.aiapaec.xyz/aiapaec/horizontal-light.png"

export function Hero() {
  const { t } = useLanguage()

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section className="section-shell relative flex min-h-screen snap-start items-center overflow-hidden pt-28 text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(124,58,237,0.2),transparent_30%),linear-gradient(135deg,rgba(13,17,23,0.92),rgba(19,25,39,0.88)_45%,rgba(10,14,22,1))]" />
      <div className="absolute left-[10%] top-24 h-40 w-40 rounded-full bg-purple-500/10 blur-3xl" />
      <div className="absolute bottom-20 right-[12%] h-56 w-56 rounded-full bg-sky-500/10 blur-3xl" />

      <div className="container mx-auto px-4">
        <div className="grid items-end gap-16 lg:grid-cols-[minmax(0,1.2fr)_minmax(280px,0.8fr)]">
          <div className="relative z-10 max-w-4xl">
            <p className="font-mono-accent mb-6 text-sm uppercase tracking-[0.28em] text-sky-200/80">
              {t.hero.eyebrow}
            </p>
            <img
              src={primaryLogoUrl}
              alt="AIAPAEC"
              className="h-auto w-[220px] max-w-full md:w-[300px]"
            />
            <h1 className="font-display mt-8 max-w-4xl text-3xl font-semibold leading-tight text-slate-100 md:text-5xl md:leading-[1.05]">
              {t.hero.title}
            </h1>
            <p className="mt-7 max-w-3xl text-lg leading-8 text-slate-300 md:text-xl">{t.hero.subtitle}</p>
            <p className="mt-5 max-w-2xl text-base leading-7 text-slate-400 md:text-lg">{t.hero.description}</p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Button
                onClick={() => scrollToSection("contact")}
                size="lg"
                className="h-12 rounded-full bg-gradient-to-r from-purple-600 via-blue-600 to-sky-500 px-7 text-sm font-semibold uppercase tracking-[0.18em] text-white shadow-[0_0_40px_rgba(37,99,235,0.3)] transition-transform duration-300 hover:scale-[1.02] hover:from-purple-500 hover:to-sky-400"
              >
                {t.hero.cta}
                <ArrowRight className="h-4 w-4" />
              </Button>
              <Button
                onClick={() => scrollToSection("services")}
                size="lg"
                variant="outline"
                className="h-12 rounded-full border-white/15 bg-white/5 px-7 text-sm font-semibold uppercase tracking-[0.18em] text-slate-100 backdrop-blur hover:bg-white/10 hover:text-white"
              >
                {t.hero.secondaryCta}
              </Button>
            </div>
          </div>

          <div className="relative z-10 grid gap-4">
            {[
              { icon: Workflow, text: t.hero.highlights[0] },
              { icon: Orbit, text: t.hero.highlights[1] },
              { icon: Sparkles, text: t.hero.highlights[2] },
            ].map(({ icon: Icon, text }) => (
              <div
                key={text}
                className="rounded-[1.5rem] border border-white/10 bg-white/5 p-5 backdrop-blur-md shadow-[0_20px_60px_rgba(0,0,0,0.2)]"
              >
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-purple-500/30 to-sky-500/20 text-sky-100">
                    <Icon className="h-5 w-5" />
                  </div>
                  <p className="text-sm font-medium uppercase tracking-[0.12em] text-slate-200">{text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
