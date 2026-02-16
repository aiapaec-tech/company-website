"use client"

import { useLanguage } from "@/contexts/language-context"
import { Card, CardContent } from "@/components/ui/card"
import { Award, Zap, Users, Heart } from "lucide-react"

export function WhyChooseUs() {
  const { t } = useLanguage()

  const icons = [Award, Zap, Users, Heart]

  return (
    <section className="min-h-screen snap-start flex items-center py-16 md:py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-8 text-gray-900">{t.whyChooseUs.title}</h2>

          <p className="text-xl text-gray-700 text-center mb-16 max-w-4xl mx-auto leading-relaxed">
            {t.whyChooseUs.description}
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {t.whyChooseUs.features.map((feature, index) => {
              const Icon = icons[index]
              return (
                <Card
                  key={index}
                  className="text-center shadow-lg hover:shadow-xl transition-shadow duration-300 border-0 bg-gradient-to-b from-gray-50 to-white"
                >
                  <CardContent className="p-8">
                    <div className="mb-6">
                      <Icon className="w-16 h-16 text-purple-600 mx-auto" />
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-4">{feature.title}</h3>
                    <p className="text-gray-700 leading-relaxed">{feature.description}</p>
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
