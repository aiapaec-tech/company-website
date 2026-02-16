"use client"

import { useLanguage } from "@/contexts/language-context"
import { Card, CardContent } from "@/components/ui/card"
import { Globe, Target, Lightbulb } from "lucide-react"

export function About() {
  const { t } = useLanguage()

  return (
    <section className="min-h-screen snap-start flex items-center py-16 md:py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-gray-900">{t.about.title}</h2>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">{t.about.description}</p>
              <p className="text-lg text-gray-700 leading-relaxed">{t.about.mission}</p>
            </div>

            <div className="grid gap-6">
              <Card className="border-l-4 border-l-purple-600 shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <Target className="w-8 h-8 text-purple-600 mr-3" />
                    <h3 className="text-xl font-semibold text-gray-900">Visión</h3>
                  </div>
                  <p className="text-gray-700">
                    Convertirnos en catalizadores de la transformación digital en América Latina.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-l-blue-600 shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <Lightbulb className="w-8 h-8 text-blue-600 mr-3" />
                    <h3 className="text-xl font-semibold text-gray-900">Misión</h3>
                  </div>
                  <p className="text-gray-700">Crear soluciones que generen resultados medibles y sostenibles.</p>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-l-green-600 shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <Globe className="w-8 h-8 text-green-600 mr-3" />
                    <h3 className="text-xl font-semibold text-gray-900">Impacto</h3>
                  </div>
                  <p className="text-gray-700">Contribuir al desarrollo económico de América Latina.</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
