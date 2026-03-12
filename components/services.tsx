"use client"

import { useLanguage } from "@/contexts/language-context"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Blocks, Bot, CheckCircle2, Network, Workflow } from "lucide-react"

export function Services() {
  const { t } = useLanguage()
  const icons = [Workflow, Bot, Network, Blocks]

  return (
    <section id="services" className="section-shell flex min-h-screen snap-start items-center py-24 text-white">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-7xl">
          <p className="font-mono-accent text-center text-sm uppercase tracking-[0.28em] text-sky-200/80">
            {t.services.eyebrow}
          </p>
          <h2 className="font-display mx-auto mt-5 max-w-5xl text-center text-4xl font-bold leading-tight tracking-[-0.04em] md:text-6xl">
            {t.services.title}
          </h2>
          <p className="mx-auto mt-6 max-w-3xl text-center text-lg leading-8 text-slate-300">{t.services.subtitle}</p>

          <div className="mt-14 grid gap-6 md:grid-cols-2">
            {t.services.categories.map((category, index) => {
              const Icon = icons[index]

              return (
                <Card
                  key={category.title}
                  className="overflow-hidden border-white/10 bg-[linear-gradient(180deg,rgba(19,25,39,0.9),rgba(16,22,36,0.76))] shadow-[0_24px_80px_rgba(2,6,23,0.4)]"
                >
                  <CardHeader className="pb-5">
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-purple-500/25 to-sky-500/20 text-sky-100">
                      <Icon className="h-6 w-6" />
                    </div>
                    <CardTitle className="font-display mt-6 text-2xl leading-tight text-white">{category.title}</CardTitle>
                    <p className="pt-4 text-base leading-7 text-slate-300">{category.description}</p>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      {category.features.map((feature) => (
                        <li key={feature} className="flex items-start gap-3 text-sm leading-6 text-slate-200">
                          <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-sky-300" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
