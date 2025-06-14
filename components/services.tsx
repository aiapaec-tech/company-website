"use client"

import { useLanguage } from "@/contexts/language-context"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Brain, Globe, Smartphone, Settings, CheckCircle } from "lucide-react"

export function Services() {
  const { t } = useLanguage()

  const icons = [Brain, Globe, Smartphone, Settings]

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">{t.services.title}</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">{t.services.subtitle}</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {t.services.categories.map((category, index) => {
              const Icon = icons[index]
              const gradientClasses = [
                "bg-gradient-to-br from-purple-50 to-blue-50",
                "bg-gradient-to-br from-blue-50 to-indigo-50",
                "bg-gradient-to-br from-indigo-50 to-purple-50",
                "bg-gradient-to-br from-green-50 to-blue-50",
              ]
              const iconColors = ["text-purple-600", "text-blue-600", "text-indigo-600", "text-green-600"]

              return (
                <Card
                  key={index}
                  className={`shadow-xl hover:shadow-2xl transition-shadow duration-300 border-0 ${gradientClasses[index]}`}
                >
                  <CardHeader className="pb-4">
                    <div className="flex items-center mb-4">
                      <Icon className={`w-12 h-12 ${iconColors[index]} mr-4`} />
                      <CardTitle className="text-xl text-gray-900">{category.title}</CardTitle>
                    </div>
                    <p className="text-gray-700 text-base">{category.description}</p>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      {category.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start">
                          <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-700 text-sm">{feature}</span>
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
