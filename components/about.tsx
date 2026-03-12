"use client"

import { useLanguage } from "@/contexts/language-context"
import { Card, CardContent } from "@/components/ui/card"
import { Binary, Route, ShieldCheck } from "lucide-react"

export function About() {
  const { t } = useLanguage()
  const icons = [Route, Binary, ShieldCheck]

  return (
    <section id="about" className="section-shell flex min-h-screen snap-start items-center py-24 text-white">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-6xl">
          <p className="font-mono-accent text-sm uppercase tracking-[0.28em] text-sky-200/80">{t.about.eyebrow}</p>
          <div className="mt-6 grid gap-12 lg:grid-cols-[minmax(0,1.05fr)_minmax(320px,0.95fr)] lg:items-start">
            <div>
              <h2 className="font-display max-w-4xl text-4xl font-bold leading-tight tracking-[-0.04em] text-white md:text-6xl">
                {t.about.title}
              </h2>
              <p className="mt-8 max-w-3xl text-lg leading-8 text-slate-300">{t.about.description}</p>
              <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-400">{t.about.mission}</p>
            </div>

            <div className="grid gap-5">
              {t.about.cards.map((card, index) => {
                const Icon = icons[index]

                return (
                  <Card
                    key={card.title}
                    className="border-white/10 bg-[linear-gradient(180deg,rgba(26,34,51,0.86),rgba(19,25,39,0.76))] shadow-[0_24px_80px_rgba(2,6,23,0.34)]"
                  >
                    <CardContent className="p-7">
                      <div className="flex items-start gap-4">
                        <div className="mt-1 flex h-12 w-12 items-center justify-center rounded-2xl bg-white/5 text-sky-200">
                          <Icon className="h-5 w-5" />
                        </div>
                        <div>
                          <h3 className="font-display text-xl text-white">{card.title}</h3>
                          <p className="mt-3 text-base leading-7 text-slate-300">{card.description}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
