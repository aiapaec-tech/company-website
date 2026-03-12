"use client"

import { useLanguage } from "@/contexts/language-context"
import { Card, CardContent } from "@/components/ui/card"
import { Compass, Layers3, Scale, ScanSearch } from "lucide-react"

export function WhyChooseUs() {
  const { t } = useLanguage()
  const icons = [ScanSearch, Layers3, Compass, Scale]

  return (
    <section className="section-shell flex min-h-screen snap-start items-center py-24 text-white">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-6xl">
          <p className="font-mono-accent text-sm uppercase tracking-[0.28em] text-sky-200/80">{t.whyChooseUs.eyebrow}</p>
          <h2 className="font-display mt-5 max-w-4xl text-4xl font-bold leading-tight tracking-[-0.04em] md:text-6xl">
            {t.whyChooseUs.title}
          </h2>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">{t.whyChooseUs.description}</p>

          <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {t.whyChooseUs.features.map((feature, index) => {
              const Icon = icons[index]

              return (
                <Card
                  key={feature.title}
                  className="border-white/10 bg-[linear-gradient(180deg,rgba(19,25,39,0.88),rgba(16,22,36,0.68))] shadow-[0_18px_60px_rgba(2,6,23,0.32)]"
                >
                  <CardContent className="p-7">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/5 text-sky-200">
                      <Icon className="h-5 w-5" />
                    </div>
                    <h3 className="font-display mt-6 text-xl leading-tight text-white">{feature.title}</h3>
                    <p className="mt-4 text-base leading-7 text-slate-300">{feature.description}</p>
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
